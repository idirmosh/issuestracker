import { useMutation } from "@apollo/client";
import InputField from "../molecules/InputField";
import ModalNote from "../molecules/ModalNote";
import { CREATE_PROJECT } from "shared/server/graphql/queries";
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

function CreateProjectModal({ projectId, handler }: ModalProps): ReactElement {
  const [form, setForm] = useState<ModalState>({});

  const router = useRouter();
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
      },
      onCompleted() {
        router.reload();
      },
      onError(error) {
        console.log(error);
      },
    });
  };
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
