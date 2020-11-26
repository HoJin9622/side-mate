import React, { useState } from "react";
import styled from "styled-components";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useHistory } from "react-router-dom";
import api from "../../../settings/api";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 345px;
  height: 18rem;
  background: #ffffff;
  border-radius: 15px;
  padding: 3% 3% 5%;
  cursor: pointer;
`;

function Post({ item }) {
    const history = useHistory();
    const [post, setPost] = useState(item);
    const { isAuthenticated } = useSelector((state) => state.auth);

    const onChangeFavorite = (hasFavorite) => {
        api.get(
            `posts/${post.id}/${hasFavorite ? 'unfavorite' : 'favorite'}/`
        ).then((res) => {
            console.log(res)
            if (res.statusText!=='OK') {
                alert('찜목록 업데이트에 실패하였습니다.');
                return;
            }
            if (hasFavorite) {
                setPost(Object.assign({}, post, { has_favorite: false }));
            } else {
                setPost(Object.assign({}, post, { has_favorite: true }));
            }
            alert('찜목록이 업데이트되었습니다.');
        });
    };

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
                            src="https://placeimg.com/60/60/animals"
                            style={{
                                borderRadius: "50%",
                                marginRight: 10,
                            }}
                        />
                        <div>
                            <p
                                style={{
                                    fontSize: 20,
                                    lineHeight: 26,
                                    fontWeight: "bold",
                                }}
                            >
                                {post.user?.nickname}
                            </p>
                        </div>
                    </div>
                    <div>
                        {isAuthenticated &&
                        <button
                            style={{border: 'none', backgroundColor: '#fff', zIndex: 100}}
                            onClick={()=>onChangeFavorite(post.has_favorite)}
                        >
                            {post.has_favorite ?
                                <BookmarkIcon />
                                :
                                <BookmarkBorderIcon/>
                            }
                        </button>}

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
                </div>

                <div style={{ color: "#706d6d", paddingTop: 4 }}>
                    {post.start_time} ~ {post.end_time}
                </div>
            </div>
        </Container>
    );
}

export default Post;
