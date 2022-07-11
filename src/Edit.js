import React, { useRef, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { Select } from "antd";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./Edit.style";
const { Option } = Select;

function Edit() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const statusRef = useRef({ status: "Active" });
  const genderRef = useRef({ gender: "Male" });

  const genderChange = (value) => {
    console.log(value);
    genderRef.current.gender = value;
  };

  const statusChange = (value) => {
    console.log(value);
    statusRef.current.status = value;
  };

  const updateClick = () => {
    nameRef.current.input && console.log(nameRef.current.input);
    emailRef.current.input && console.log(emailRef.current.input.value);
    statusRef.current && console.log(statusRef.current);
    genderRef.current && console.log(genderRef.current);

    const document = {
      name: nameRef.current.input.value,
      email: emailRef.current.input.value,
      status: statusRef.current.status,
      gender: genderRef.current.gender,
    };

    console.log(document);
  };

  useEffect(() => {});

  return (
    <>
      <Form css={styles.form}>
        <Input ref={nameRef} />
        <Input ref={emailRef} />
        <Select
          defaultValue="Male"
          style={{
            width: 120,
          }}
          onChange={genderChange}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
        <Select
          defaultValue="Active"
          style={{
            width: 120,
          }}
          onChange={statusChange}
        >
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
        <Button type="primary" onClick={updateClick}>
          Update
        </Button>
      </Form>
    </>
  );
}

export default Edit;
