import React, { useState } from "react";
import api from "../settings/api";
import { history } from "../index";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  padding-top: 2.5%;
  margin-bottom: 40px;
`;
const UploadBtn = styled.button`
  font-size: 1.6rem;
  padding: 0.8rem 1.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;
const Content = styled.div`
  max-width: 1440px;
  margin: auto;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    padding: 0 6.875rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 4.875rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 2.875rem;
  }

  @media only screen and (max-width: 375px) {
    padding: 0 1rem;
  }
`;
const ContentBorder = styled.div`
  border: 1px solid #adadad;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 1% 2%;
`;
const TopContainer = styled.div`
  padding: 2% 0;
  border-bottom: solid 2px black;
  margin-bottom: 10px;
`;
const Maintitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.625rem;
  line-height: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 20px;
  color: #5f5f6e;
  margin-top: 20px;
  text-align: left;
  margin-left: 5%;
  margin-bottom: 15px;
`;
const useStyles = makeStyles({
  Input: {
    boxSizing: "border-box",
    height: "50px",
    width: "100%",
    //underline: false,
    border: "2px solid #FAFAFA",
    maxWidth: "90%",
    marginBottom: 10,
  },
  TextField: {
    marginTop: 15,
    marginBottom: 25,
    width: "100%",
    maxWidth: "90%",
  },
});

function Upload(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [city, setCity] = useState("");
  const [hireNumber, setHireNumber] = useState();
  // const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);

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
    if(!user){alert('업로드는 로그인 후에 가능합니다!'); return}
    const body = JSON.stringify(params);

    api
      .post("posts/", body, config)
      .then((res) => {
        console.log("success", res);
        if (res.statusText === "Created") {
          alert("완료되었습니다.");
          history.replace("/");
        }
      })
      .catch((err) => {
        console.log(err.response);
        alert(err);
      });
  };
  return (
    <Container>
      <Content>
        <ContentBorder>
          <TopContainer>
            <Maintitle>메이트 모집</Maintitle>
          </TopContainer>
          <div style={{ textAlign: "center" }}>
            <Title>제목</Title>
            <Input
              className={classes.Input}
              placeholder="e.g) 리액트 경험자 찾습니다~"
              value={title}
              onChange={(e) => {
                setTitle(e.currentTarget.value);
              }}
            />

            <Title>시작일</Title>
            <Input
              className={classes.Input}
              type="date"
              value={start_time}
              onChange={(e) => {
                setStart_time(e.currentTarget.value);
              }}
            />
            <Title>예상 종료일</Title>
            <Input
              className={classes.Input}
              type="date"
              value={end_time}
              onChange={(e) => {
                setEnd_time(e.currentTarget.value);
              }}
            />
            <Title>도시 </Title>
            <Input
              placeholder="e.g) 부산"
              className={classes.Input}
              value={city}
              onChange={(e) => {
                setCity(e.currentTarget.value);
              }}
            />
            <Title>모집인원</Title>
            <Input
              placeholder=" e.g) 3 / 숫자만 입력해주세요!"
              className={classes.Input}
              value={hireNumber}
              onChange={(e) => {
                setHireNumber(e.currentTarget.value);
              }}
            />
            <Title>상세내용</Title>
            <TextField
              multiline
              rowsMax={10}
              rows={4}
              className={classes.TextField}
              placeholder="e.g) ○○관련 어플 개발할 프론트 개발자 구합니다!"
              variant="outlined"
              value={content}
              onChange={(e) => {
                setContent(e.currentTarget.value);
              }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <UploadBtn onClick={onHandleSubmit}>업로드</UploadBtn>
          </div>
        </ContentBorder>
      </Content>
    </Container>
  );
}

export default Upload;
