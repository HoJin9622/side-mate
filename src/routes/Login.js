import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../modules/auth";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

const Form = styled.form`
  width: 100%;
  max-width: 426px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 90%;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 30px;
  border: 1px solid #8692a6;
  border-radius: 6px;
  font-size: 0.875rem;
`;

const Button = styled.button`
  width: 90%;
  height: 64px;
  border: none;
  background-color: #1565d8;
  border-radius: 6px;
`;

const LoginLabel = styled.span`
  color: #ffffff;
  font-size: 1rem;
`;

const TextLabel = styled.div`
  color: #696f79;
  font-size: 1rem;
  margin-bottom: 0.875rem;
`;

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(username, password));
  };

  return (
    <Container>
      <Form>
        <InputContainer>
          <TextLabel>아이디</TextLabel>
          <Input
            type="text"
            value={username}
            placeholder="아이디"
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </InputContainer>
        <InputContainer>
          <TextLabel>패스워드</TextLabel>
          <Input
            type="password"
            value={password}
            placeholder="패스워드"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </InputContainer>
        <Button onClick={onSubmit}>
          <LoginLabel>로그인</LoginLabel>
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
