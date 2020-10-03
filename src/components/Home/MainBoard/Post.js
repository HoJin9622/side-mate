import React from "react";
import styled from "styled-components";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const Container = styled.div`
  width: 345px;
  height: 18rem;
  background: #ffffff;
  border-radius: 15px;
  padding: 3%;
`;

function Post({ test }) {
  return (
    <Container>
      <div
        style={{
          height: "100%",
        }}
      >
        <div
          style={{
            height: "20%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              alt=""
              src="https://placeimg.com/60/60/anys"
              style={{
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
            <p
              style={{
                fontSize: 20,
                lineHeight: 26,
                fontWeight: "bold",
              }}
            >
              박현철
            </p>
          </div>
        </div>

        <div
          style={{
            paddingTop: 32,
            height: "70%",
          }}
        >
          <p
            style={{
              fontSize: 25,
              color: "#706d6d",
            }}
          >
            저희는 리액트를 사용하여 웹을 구상하며 만들 계획입니다
          </p>
          <p
            style={{
              fontSize: 23,
              marginTop: 32,
              fontWeight: "500",
              color: "#3881c5",
            }}
          >
            구인중
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#706d6d",
          }}
        >
          <p>모집인원 4명 / 부산</p>
          <BookmarkIcon />
        </div>
      </div>
    </Container>
  );
}

export default Post;
