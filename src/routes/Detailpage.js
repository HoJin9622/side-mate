import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Content } from "../components/Home/MainBoard/MainBoard";
import api from "../settings/api";
import FaceIcon from "@material-ui/icons/Face";
import Review from "../components/Detail/Review";
import { useSelector } from "react-redux";
function Detailpage(props) {
    const id = props.match.params.id; ///URL 에서 가져옴
    const [post, setPost] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [content, setContent] = useState("");
    const { isAuthenticated } = useSelector((state) => state.auth);
    const user = useSelector((state) => state.auth.user);
    let params = {
        content: content,
        user: user.id,
    };
    useEffect(() => {
        // fetchPost();
        // fetchReviews();
    }, []);
    const array = [
        {
            name: "방구대장 김재훈",
        },
        {
            name: "방구 김재훈",
        },
        {
            name: "대장 김재훈",
        },
        {
            name: "방구훈",
        },
        {
            name: "전설에 52연타 김재훈",
        },
        {
            name: "방구 김재훈",
        },
        {
            name: "방구김재훈",
        },
    ];
    const reviews1 = [
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
        {
            createAt: "2020-02-02",
            content: "Qweqwe",
            user: [{ nickname: "123" }],
        },
    ];
    return (
        <Container>
            {console.log(user)}
            <Content>
                <PostBox>
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Title>{post.title}</Title>
                            <p>좋아요 수 : {post.favorite_count}</p>
                        </div>
                        <PostNameImage
                            src={
                                post?.user?.image
                                    ? post?.user?.image
                                    : "https://placeimg.com/40/50/anys"
                            }
                            alt="avatar"
                        />

                        <Postfont>
                            작성자 이름 : {post?.user?.nickname}
                        </Postfont>
                        <Postfont>
                            게시날짜 &nbsp;&nbsp;{" "}
                            {String(post.created_at).substr(0, 10)}
                        </Postfont>
                        <hr
                            style={{
                                border: "1px solid black",
                                marginBottom: "1rem",
                            }}
                        />
                    </div>
                    <div>
                        <Subtitle>모집 안내</Subtitle>
                        <Information>{post.content}</Information>
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <Subtitle>상세정보</Subtitle>
                        <Information>지역 : {post.city}</Information>
                        <Information> 시작일: {post.start_time}</Information>
                        <Information>예상 종료일 : {post.end_time}</Information>
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <Subtitle>작성자 정보</Subtitle>
                        <Information>
                            연락처 :
                            {post.user?.phone_number.replace(
                                /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
                                "$1-$2-$3"
                            )}
                        </Information>
                        <Information>
                            position: {post.user?.position}
                        </Information>
                    </div>

                    <Subtitle style={{ marginTop: "1rem" }}>
                        현재 신청인 : {array.length} 명
                    </Subtitle>
                    <GridContainer>
                        {array.map((array) => (
                            <div>
                                <FaceIcon
                                    style={{
                                        marginRight: "1rem",
                                        fontSize: 30,
                                    }}
                                />
                                <p>{array.name}</p>
                            </div>
                        ))}
                    </GridContainer>
                    <ReviewContent>
                        {reviews1.map((reviews, index) => (
                            <Review reviews={reviews} key={index} />
                        ))}
                    </ReviewContent>
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            margin: "auto",
                            marginTop: "2.5rem",
                        }}
                    >
                        <TextArea
                            onChange={(e) => {
                                setContent(e.target.value);
                            }}
                            value={content}
                            placeholder="댓글을 작성해주세요"
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <ReviewSubmitBtn>작 성</ReviewSubmitBtn>
                        </div>
                    </div>
                </PostBox>
            </Content>
        </Container>
    );
}

export default Detailpage;
const ReviewContent = styled.div`
    width: 100%;
    max-height: 500px;
    overflow: scroll;
    padding-left: 2%;
    padding-right: 1%;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const PostBox = styled.div`
    min-height: 60vh;
    padding: 1% 5% 1% 5%;
    border-radius: 10px;
    border: 3px solid #030303;
    box-sizing: border-box;
    align-items: center;
`;
const Postfont = styled.p`
    font-weight: bold;
    text-align: Left;
    font-size: 15px;
    margin-top: 0.7%;
    margin-bottom: 0.5%;
`;
const Title = styled.p`
    font-weight: bold;
    text-align: Left;
    font-size: 30px;
    margin-top: 1.9%;
    margin-bottom: 0.4%;
`;
const Subtitle = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 126.5%;
    letter-spacing: 0.06em;
    color: #000000;
    margin-bottom: 0.5rem;
`;
const Information = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 27px;
    color: #5f5f6e;
`;
const PostNameImage = styled.img`
     {
        width: 60px;
        height: 60px;
        margin-top: 0;
        border: 2px solid #000000;
        border-radius: 100%;
    }
`;
const TextArea = styled.textarea`
    width: 95%;
    resize: none;
    height: 150px;
    padding: 1% 1%;
    overflow: hidden;
    border: 2px solid #adadad;
    background-color: #fafafa;
    font-size: 1.2rem;
    ::placeholder {
        color: #adadad;
        font-style: normal;
        line-height: 157.5%;
        color: #bebebe;
    }
`;
const ReviewSubmitBtn = styled.button`
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    margin-right: 1.5%;
    background-image: linear-gradient(
        to right,
        #314755 0%,
        #26a0da 51%,
        #314755 100%
    );
    border: none;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    margin-top: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 116%;
    display: block;
    :hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
`;
const GridContainer = styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
    grid-gap: 1rem;
    margin-bottom: 1rem;
`;
