import React, { useState } from "react";
import utils from "../utils";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { register } from "../modules/auth";
import { createMessage } from "../modules/messages";

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

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = () => {
    if (username === "" || nickname === "" || password === "") {
      dispatch(createMessage({ notValidForm: "좋은말로할때 다 채워라" }));
      return false;
    }
    if (!utils.isId(username)) {
      dispatch(
        createMessage({
          notValidForm:
            "아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.",
        })
      );
      return false;
    }
    if (!utils.isNickname(nickname)) {
      dispatch(
        createMessage({
          notValidForm: "닉네임은 2 ~ 20 글자로 입력 해 주세요.",
        })
      );
      return false;
    }
    if (!utils.isPassword(password)) {
      dispatch(
        createMessage({
          notValidForm:
            "패스워드는 숫자, 특수문자 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상으로 입력하여야 합니다.",
        })
      );
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(register({ username, nickname, password }));
  };

  return (
    <Container>
      <Form>
        <InputContainer>
          <TextLabel>아이디</TextLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </InputContainer>
        <InputContainer>
          <TextLabel>닉네임</TextLabel>
          <Input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.currentTarget.value)}
          />
        </InputContainer>
        <InputContainer>
          <TextLabel>패스워드</TextLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </InputContainer>
        <Button onClick={onSubmit}>
          <LoginLabel>회원가입</LoginLabel>
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
