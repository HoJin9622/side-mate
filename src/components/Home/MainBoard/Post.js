import React from 'react';
import styled from 'styled-components';
const Image = styled.div`
    height: 65%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 20px;
    background-image: url(${(props) => props.bg});
`;
const Container = styled.div`
    width: 100%;
    height: 24.5rem;
    background: #ffffff;
    border-radius: 15px;
    padding: 3% 3% 3% 3%;
`;
function Post({ test }) {
    return (
        <Container>
            <Image bg="https://placeimg.com/300/300/anys" />
            <div
                style={{
                    padding: '15px 0 10px 10px',
                    height: '35%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <p>{test.title}</p>
                <p>{test.content}</p>
                <p>{test.date}</p>
            </div>
        </Container>
    );
}

export default Post;
