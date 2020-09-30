import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../modules/auth";
import utils from "../utils";
import { createMessage } from "../modules/messages";

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
    <div>
      <div>아이디</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <div>닉네임</div>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.currentTarget.value)}
      />
      <div>패스워드</div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button onClick={onSubmit}>회원가입</button>
    </div>
  );
}

export default Register;
