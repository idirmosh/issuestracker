import SignUpForm from "ui/src/organisms/SignUpForm";
import React from "react";
// import LogoImage from "../../public/logo-icon.png";

function SignUpTemplate() {
  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col justify-center mb-10">
          <div className="h-16 mx-auto w-14">
            {/* <Image className="block mx-auto" src={LogoImage} alt="Logo" /> */}
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-700">
            Create a new account
          </h2>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpTemplate;
