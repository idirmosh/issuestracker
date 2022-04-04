import Button from "../atoms/Button";
import React, { ReactElement, ReactNode } from "react";

interface FormWrapperProps {
  children: ReactNode;
  handler: () => void;
  btnText: string;
  footer: { [key: string]: string };
}

function FormWrapper(props: FormWrapperProps): ReactElement {
  const {
    children,
    handler,
    btnText,
    footer = { msg: "", text: "", href: "" },
  } = props;
  return (
    <div className="w-full max-w-md space-y-8 bg-white border rounded-lg shadow-lg p-7 border-gray-50">
      <div className="-space-y-px rounded-md shadow-sm ">
        {children}
        <div className="h-8"></div>
        <Button wide onClick={handler}>
          {btnText}
        </Button>
      </div>

      <div className="p-6 text-sm text-center text-gray-500 border border-gray-200 rounded-md bg-gray-50">
        {footer.msg}
        <span className="mr-1"></span>
        <Button href={footer.href} variant="link">
          {footer.text}
        </Button>
      </div>
    </div>
  );
}

export default FormWrapper;
