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
  const severityOptions: Array<string> = ["Low", "Medium", "High", "Critical"];

  const [form, setForm] = useState<ModalState>({
    severity: severityOptions[0],
  } as any);

  const [value, setValue] = useState("");
  const router = useRouter();
  const [submitIssue, { data, loading, error }] = useMutation(CREATE_ISSUE);

  const cleanHTML = DOMPurify.sanitize(value);

  const handleOptionChange = (value: string) => {
    setForm({ ...form, severity: value });
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<{ value: string }>): void => {
    console.log(form);
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
        value={form.severity}
        handleOptionChange={handleOptionChange}
        severityOptions={severityOptions}
        name="severity"
        label="Severity"
      />
      <div className="block col-span-6 mb-4 sm:col-span-3">
        <InputLabel label="Issue description" />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
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
