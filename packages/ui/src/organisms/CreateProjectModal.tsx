import { useMutation } from "@apollo/client";
import InputField from "../molecules/InputField";
import ModalNote from "../molecules/ModalNote";
import { CREATE_PROJECT, UPLOAD_IMAGE } from "shared/server/graphql/queries";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { ModalProps } from "./CreateIssueModal";
import Modal from "./Modal";

export function ModalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
    >
      <g>
        <circle className="fill-indigo-200" cx="16" cy="16" r="16" />
        <rect className="fill-white" height="16" width="2" x="22" y="2" />
        <polygon
          className="fill-gray-300"
          points="16 16 16 20 11 20 11 24 6 24 6 28 2 28 2 30 6 30 8 30 30 30 30 16 16 16"
        />
        <polygon
          className="fill-indigo-500"
          points="12.61 3 13.95 7 12.61 11 24 11 24 3 12.61 3"
        />
        <path d="M24,16V2H22V3H12.61L14,7l-1.34,4H22v5H16v4H11v4H6v4H2v2H30V16ZM15.39,9l.66-2-.66-2H22V9ZM28,28H8V26h5V22h5V18H28Z" />
      </g>
    </svg>
  );
}

interface ModalState {
  name?: string;
  url?: string;
  email?: string;
  description?: string;
}

function useUploadImage() {
  const [imageURL, setImageURL] = useState("");
  const [blobImage, setBlobImage] = useState("");

  const [uploadImage, data] = useMutation(UPLOAD_IMAGE);

  const presignedUpload = async (url: string, file: any) => {
    const options = { method: "PUT", body: file };
    const response = await fetch(url, options);
    const imageURL = response.url.split("?")[0];
    return imageURL;
  };

  const onImageChange = (e: any) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);

    setBlobImage(blob);

    uploadImage({
      variables: { name: file?.name, type: file?.type },
      async onCompleted({ uploadImage: { url } }) {
        const imageURL = await presignedUpload(url, file);
        setImageURL(imageURL);
      },
      onError(error) {
        console.log(error);
      },
    });
  };

  return { blobImage, imageURL, onImageChange };
}

function CreateProjectModal({ projectId, handler }: ModalProps): ReactElement {
  const router = useRouter();

  const [form, setForm] = useState<ModalState>({});

  const { blobImage, imageURL, onImageChange } = useUploadImage();
  const [submitIssue, { data, loading, error }] = useMutation(CREATE_PROJECT);

  const handleChange = (e: React.ChangeEvent<Record<string, string>>): void =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e: React.ChangeEvent<{ value: string }>): void => {
    e.preventDefault();

    submitIssue({
      variables: {
        name: form.name,
        url: form.url,
        email: form.email,
        description: form.description,
        image: imageURL,
      },
      onCompleted() {
        router.reload();
      },
      onError(error) {
        console.log(error);
      },
    });
  };

  console.log(imageURL);
  // const selectFile = (e: any) => {
  //   useUploadImage(e);
  // };
  //tes
  return (
    <Modal
      title="Create new Project"
      Icon={ModalIcon}
      Note={{
        Component: ModalNote,
        props: {
          title: "Lorem ipsum dolor sit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!",
        },
      }}
      actionName="Create project"
      actionClose={() => handler(false)}
      handleSubmit={handleSubmit}
    >
      <InputField
        name="name"
        label="Project name"
        value={form.name}
        handler={handleChange}
      />

      <div className="my-8">
        <label
          className="mb-3 block text-sm font-medium text-gray-700"
          htmlFor="uploadImage"
        >
          Upload project image
        </label>
        <form className="flex items-center space-x-6" id="uploadImage">
          <div className="shrink-0">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={blobImage}
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose File</span>
            <input
              onChange={onImageChange}
              type="file"
              className="hover:file:indigo-indigo-200 block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-gray-300 file:py-2 file:px-4 file:text-sm file:font-semibold file:hover:bg-gray-400"
            />
          </label>
        </form>
      </div>

      <InputField
        name="url"
        label="URL"
        value={form.url}
        handler={handleChange}
      />
      <InputField
        name="email"
        label="Email"
        value={form.email}
        handler={handleChange}
      />
      <InputField
        name="description"
        label="Description"
        value={form.description}
        handler={handleChange}
      />
    </Modal>
  );
}

export default CreateProjectModal;
