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

    useEffect(() => {
        fetchPost();
        fetchReviews();
    }, []);

    const onSubmitReview = (e) => {
        let params = {
            content: content,
            // user: props.auth.user.id,
        };
        e.preventDefault();
        if (!isAuthenticated) {
            alert('로그인후 이용 가능합니다');
            return;
        }
        else if (content.length===0) {
            alert('댓글을 작성해주세요(빈칸 금지)');
            return;
        }
        api.post(`posts/${id}/reviews/`, params).then((res) => {
            console.log('a',res)
            if (res.statusText!=='Created') {
                alert('댓글작성에 실패하였습니다.');
                return;
            }
            console.log(res);
            fetchReviews();
            setContent('');
            alert('댓글작성 완료');
        });
    };

    const fetchReviews = () => {
        api.get(`posts/${id}/reviews/`)
            .then((res) => {
                if (res.statusText!=='OK') {
                    alert('리뷰데이터를 불러오는 데 실패하였습니다.');
                    return;
                }
                setReviews(res.data);
            })
            .catch((err) => {
                console.log('리뷰' + err);
            });
    };

    const fetchPost = () => {
        api.get(`posts/${id}/`)
            .then((res) => {
                if (res.statusText!=='OK') {
                    alert('게시물정보를 불러오는 데 실패하였습니다.');
                    return;
                }
                setPost(res.data);
            })
            .catch((err) => {
                console.log('post' + err);
            });
    };

    const onUpdatePost = () => {
        props.history.push({pathname: '/Uploadpage', state: {post}});
    };

    const onDeletePost = () => {
        api.delete(`posts/${id}/`).then((res) => {
            if (res.statusText!=='OK') {
                alert('게시물 삭제에 실패하였습니다.');
                return;
            }
            alert('게시물이 삭제되었습니다.');
            props.history.goBack();
        });
    };


    // const array = [
    //     {
    //         name: "방구대장 김재훈",
    //     },
    //     {
    //         name: "방구 김재훈",
    //     },
    //     {
    //         name: "대장 김재훈",
    //     },
    // ];

    return (
        <Container>
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
                            <div>
                                <p style={{marginTop: 18}}>모집인원 : {post.hire_limit}</p>
                                <Postfont style={{fontWeight: 'normal', marginTop: 4}}>
                                    {/*&nbsp;&nbsp;{" "}*/}
                                    {String(post.created_at).substr(0, 10)}
                                </Postfont>
                            </div>
                        </div>
                        <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center', margin: '8px 0px'}}>
                            <PostNameImage
                                src={
                                    post?.user?.image
                                        ? post?.user?.image
                                        : `https://picsum.photos/id/${Math.floor(Math.random()*(49))+1}/40/50`
                                }
                                alt="avatar"
                            />
                            <Postfont style={{fontSize: 24, fontWeight: '500', marginLeft: 16}}>{post?.user?.nickname}</Postfont>
                        </div>
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
                            메인(관심) 분야: {post.user?.position}
                        </Information>
                    </div>

                    {/*<Subtitle style={{ marginTop: "1rem" }}>*/}
                    {/*    현재 신청인 : {array.length} 명*/}
                    {/*</Subtitle>*/}
                    {/*<GridContainer>*/}
                    {/*    {array?.map((array) => (*/}
                    {/*        <div>*/}
                    {/*            <FaceIcon*/}
                    {/*                style={{*/}
                    {/*                    marginRight: "1rem",*/}
                    {/*                    fontSize: 30,*/}
                    {/*                }}*/}
                    {/*            />*/}
                    {/*            <p>{array.name}</p>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</GridContainer>*/}
                    <ReviewContent>
                        {reviews?.map((review, index) => (
                            <Review review={review} key={index} />
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
                            onClick={onSubmitReview}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginRight: 4
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
