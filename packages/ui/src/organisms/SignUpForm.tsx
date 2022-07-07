// @ts-nocheck
import CustomFormError from "../molecules/CustomFormError";
import FormWrapper from "../molecules/FormWrapper";
import InputField from "../molecules/InputField";
import { signUp } from "shared/libs/authService";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SignUpForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const router = useRouter();
  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      username: form.username,
      email: form.email,
      password: form.password,
    };
    const { error, status, ok } = await signUp(options);

    if (error) {
      setError(error);
      setTimeout(() => setError(""), 5000);
    }
    if (ok) router.push("/login");
  };
  return (
    <FormWrapper
      handler={handleSubmit}
      btnText="Sign up"
      footer={{
        msg: "Create a new account OR,",
        text: "login to an existing account",
        href: "/login",
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
        label="Email address"
        name="email"
        value={form.email}
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

export default SignUpForm;
