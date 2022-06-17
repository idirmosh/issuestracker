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
import TextArea from "../atoms/TextArea";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

interface ModalState {
  title?: string;
  description?: string;
  source: string;
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
  const [form, setForm] = useState<ModalState>({} as any);
  const [value, setValue] = useState("");
  const router = useRouter();
  const [submitIssue, { data, loading, error }] = useMutation(CREATE_ISSUE);

  const cleanHTML = DOMPurify.sanitize(value);
  const handleChange = (e: any) =>
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
      title="New issue"
      actionName="Submit new issue"
      actionClose={() => handler(false)}
      handleSubmit={handleSubmit}
    >
      <InputField
        name="title"
        label="Issue"
        value={form.title}
        handler={handleChange}
        holder="Issue title"
      />
      <InputOptions
        name="severity"
        label="Severity"
        options={["Low", "Medium", "High", "Critical"]}
      />
      <div className="block col-span-6 mb-4 sm:col-span-3">
        <InputLabel label="Issue description" />
        <textarea
          value={form.description}
          onChange={setForm}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md resize-y focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          cols={100}
          rows={3}
          placeholder="Describe the issue"
        />
      </div>
      <InputField
        name="source"
        label="Issue source"
        value={form.source}
        handler={handleChange}
        holder="Enter a URL"
      />
      {/* <div>
        <TextArea input={""} />
        <InputLabel label="Description" />
        <ReactQuill theme="snow" value={value} onChange={setValue} /> 
      </div> */}
    </Modal>
  );
}

export default CreateIssueModal;
