import LoginForm from "ui/src/organisms/LoginForm";
import React from "react";
//import LogoImage from "../../public/logo-icon.png";

function LoginTemplate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center mb-10">
        <div className="h-16 mx-auto w-14">
          {/* <Image className="block mx-auto" src={LogoImage} alt="Logo" /> */}
        </div>

        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-700">
          Sign in to your account
        </h2>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginTemplate;
