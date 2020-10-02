import React from 'react';
import styled from 'styled-components';

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
            <img
                alt="이미지"
                src="https://placeimg.com/700/700/anys"
                style={{
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '65%',
                    borderRadius: '15px',
                }}
            />
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
