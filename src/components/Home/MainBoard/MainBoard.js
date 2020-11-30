import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import api from "../../../settings/api";

export const Container = styled.div`
    width: 100%;
    padding-top: 2.5%;
`;

const LastFont = styled.div`
    font-size: 1.625rem;
    line-height: 30px;
    margin-bottom: 25px;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(345px, 1fr));
    grid-gap: 1rem;
`;

export const Content = styled.div`
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

function MainBoard() {
    let params = { page_size: 4 };
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        api.get("/posts/?", { params })
            .then((res) => {
                if (res.statusText!=='OK') {
                    alert('게시물정보를 불러오는 데 실패하였습니다.');
                    return;
                }
                setPosts(res.data.results);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container>
            <Content>
                <LastFont style={{marginTop: 16}}>메이트 모집</LastFont>
                <GridContainer>
                    {posts.map((post) => (
                        <Post item={post} key={post.id} />
                    ))}
                </GridContainer>
            </Content>
        </Container>
    );
}
export default MainBoard;
