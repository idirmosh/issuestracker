// @ts-nocheck

import CustomFormError from "../molecules/CustomFormError";
import FormWrapper from "../molecules/FormWrapper";
import { ISrvProps, signIn } from "shared/libs/authService";
import { useRouter } from "next/router";
import React, { useState } from "react";
import InputField from "../molecules/InputField";

function LoginForm() {
  const [form, setForm] = useState<ISrvProps>({} as any);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, status, ok } = await signIn({ ...form });

    if (error) {
      setError(error);
      setTimeout(() => setError(""), 5000);
    }

    if (ok) router.push("/dashboard");
  };
  return (
    <FormWrapper
      handler={handleSubmit}
      btnText="Sign in"
      footer={{
        msg: "Don't have an account yet?",
        text: "Create an account.",
        href: "/signup",
      }}
    >
      {error && <CustomFormError error={error} />}
      <InputField
        label="Username"
        name="username"
        value={form.username}
        handler={handleChange}
      />
      <InputField
        label="Password"
        name="password"
        value={form.password}
        handler={handleChange}
      />
    </FormWrapper>
  );
}

export default LoginForm;
