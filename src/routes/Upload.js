import React, { useState } from "react";
import api from "../settings/api";
function Upload(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [city, setCity] = useState("");
  const [hireNumber, setHireNumber] = useState();

  const params = {
    title: title,
    content: content,
    hire_limit: hireNumber,
    start_time: start_time,
    end_time: end_time,
    city: city,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify(params);

    api
      .post("posts/", body, config)
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err);
      });
  };
  return (
    <div>
      <p>타이틀</p>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
      />
      <p>내용</p>
      <input
        value={content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <p>시작시간</p>
      <input
        type="date"
        value={start_time}
        onChange={(e) => {
          setStart_time(e.currentTarget.value);
        }}
      />
      <p>종료시간</p>
      <input
        type="date"
        value={end_time}
        onChange={(e) => {
          setEnd_time(e.currentTarget.value);
        }}
      />
      <p>도시(지금1 또는 2로)</p>
      <input
        value={city}
        onChange={(e) => {
          setCity(e.currentTarget.value);
        }}
      />
      <p>hire_limit</p>
      <input
        value={hireNumber}
        onChange={(e) => {
          setHireNumber(e.currentTarget.value);
        }}
      />
      <button onClick={onHandleSubmit}>업로드</button>
    </div>
  );
}

export default Upload;
