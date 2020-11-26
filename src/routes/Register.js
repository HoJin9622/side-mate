import React, { useState } from "react";
import utils from "../utils";
import { useDispatch } from "react-redux";
import { register } from "../modules/auth";
import { createMessage } from "../modules/messages";
import {
  Container,
  Form,
  InputContainer,
  Input,
  Button,
  LoginLabel,
  TextLabel,
} from "../components/Auth/Auth";

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");

  const isFormValid = () => {
    if (username === "" || nickname === "" || password === "") {
      dispatch(createMessage({ notValidForm: "양식을 모두 입력해주세요!" }));
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

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    dispatch(register({ username, nickname, password, position }));
  };

  return (
    <Container>
      <Form>
        <InputContainer>
          <TextLabel>아이디</TextLabel>
          <Input
              placeholder={'e.g) 100dongwoo'}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </InputContainer>
        <InputContainer>
          <TextLabel>닉네임</TextLabel>
          <Input
              placeholder={'e.g) 피지컬의백동우'}
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.currentTarget.value)}
          />
        </InputContainer>
        <InputContainer>
          <TextLabel>패스워드</TextLabel>
          <Input
              placeholder={'e.g) king_100dongwoo'}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </InputContainer>
        <InputContainer>
          <TextLabel>(관심)분야</TextLabel>
          <Input
              placeholder={'e.g) 프론트엔드(React) 개발자'}
              type="position"
              value={position}
              onChange={(e) => setPosition(e.currentTarget.value)}
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
