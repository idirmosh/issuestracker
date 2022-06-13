import { useMutation } from "@apollo/client";
import InputLabel from "../atoms/InputLabel";
import InputField from "../molecules/InputField";
import InputOptions from "../molecules/InputOptions";
import { CREATE_ISSUE } from "shared/server/graphql/queries";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import Modal from "./Modal";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css";
import ModalNote from "../molecules/ModalNote";
import { ModalIcon } from "./CreateProjectModal";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

interface ModalState {
  title?: string;
  description?: string;
  severity?: string;
}

export interface ModalProps {
  projectId: string;
  projectSlug: string;
  handler: (arg0: boolean) => boolean;
}
function CreateIssueModal({
  projectId,
  projectSlug,
  handler,
}: ModalProps): ReactElement {
  const [form, setForm] = useState<ModalState>({});
  const [value, setValue] = useState("");
  const router = useRouter();
  const [submitIssue, { data, loading, error }] = useMutation(CREATE_ISSUE);

  const cleanHTML = DOMPurify.sanitize(value);
  const handleChange = (e: React.ChangeEvent<Record<string, string>>): void =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e: React.ChangeEvent<{ value: string }>): void => {
    e.preventDefault();
    submitIssue({
      variables: {
        projectId,
        projectSlug,
        title: form.title,
        description: cleanHTML,
        severity: form.severity.toUpperCase(),
      },
      onCompleted() {
        router.reload();
      },
      onError(error) {
        console.log(error);
      },
    });
  };

  return (
    <Modal
      title="Create new Issue"
      Icon={ModalIcon}
      Note={{
        Component: ModalNote,
        props: {
          title: "Create a new Issue",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!",
        },
      }}
      actionName="Submit new issue"
      actionClose={() => handler(false)}
      handleSubmit={handleSubmit}
    >
      <InputField
        name="title"
        label="Title"
        value={form.title}
        handler={handleChange}
        holder="Title"
      />
      <InputOptions
        name="severity"
        label="Severity"
        options={["Low", "Medium", "High", "Critical"]}
      />
      <div>
        <InputLabel label="Description" />
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </Modal>
  );
}

export default CreateIssueModal;
