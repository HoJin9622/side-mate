import React, { useState } from "react";
import { login } from "../modules/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container,
  Form,
  InputContainer,
  Input,
  Button,
  LoginLabel,
  TextLabel,
} from "../components/Auth/Auth";

function Login() {
  const history = useHistory();
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
        <Button onClick={() => history.push("/register")}>
          <LoginLabel>회원가입</LoginLabel>
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
