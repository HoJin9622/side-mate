import React from "react";
import styled from "styled-components";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 345px;
  height: 18rem;
  background: #ffffff;
  border-radius: 15px;
  padding: 3% 3% 5%;
  cursor: pointer;
`;

function Post({ post }) {
  const history = useHistory();
  return (
    <Container onClick={() => history.push(`/Detailpage/${post.id}`)}>
      <div
        style={{
          height: "100%",
          paddingBottom: 16,
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
              {post.user.nickname}
            </p>
          </div>
        </div>

        <div
          style={{
            paddingTop: 32,
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: 25,
              color: "#706d6d",
            }}
          >
            {post.content.length > 34
              ? post.content?.slice(0, 34) + "..."
              : post.content}
          </p>

          <p
            style={{
              fontSize: 23,
              marginBottom: 30,
              fontWeight: "500",
              color: "#3881c5",
            }}
          >
            {post.status}
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
          <p>
            모집인원 {post.hire_limit} 명 / {post.city}
          </p>
            {post.has_favorite ?
                <button style={{border: 'none'}}>
                    <BookmarkIcon />
                </button> :
                <button><BookmarkBorderIcon/></button>}
        </div>

        <div style={{ color: "#706d6d", paddingTop: 4 }}>
          {post.start_time} ~ {post.end_time}
        </div>
      </div>
    </Container>
  );
}

export default Post;
