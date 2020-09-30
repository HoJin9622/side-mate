import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../modules/auth";

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
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
