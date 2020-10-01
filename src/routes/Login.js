import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../modules/auth";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(username, password));
  };

  return (
    <div>
      <div>아이디</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <div>패스워드</div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button onClick={onSubmit}>로그인</button>
    </div>
  );
}

export default Login;
