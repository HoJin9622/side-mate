import React from 'react';
import styled from 'styled-components';
const Image = styled.div`
    height: 60%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 20px;
    background-image: url(${(props) => props.bg});
`;
const Container = styled.div`
    width: 100%;
    height: 20rem;
    background: #ffffff;
    border-radius: 15px;
    padding: 3% 3% 3% 3%;
`;
function Post(props) {
    return (
        <Container>
            <Image bg="https://placeimg.com/300/300/anys" />
            <div
                style={{
                    padding: '10px 0 10px 0',
                    height: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <p>{props.test.title}</p>
                <p>{props.test.info}</p>
                <p>{props.test.date}</p>
            </div>
        </Container>
    );
}

export default Post;
