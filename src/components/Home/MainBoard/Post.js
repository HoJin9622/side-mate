import React from 'react';
import styled from 'styled-components';
import BookmarkIcon from '@material-ui/icons/Bookmark';
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
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        height: '20%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            alt=""
                            src="https://placeimg.com/60/60/anys"
                            style={{
                                borderRadius: '50%',
                                marginRight: 10,
                                marginBottom: '5%',
                            }}
                        />
                        <p> 박현철</p>
                    </div>

                    {/*<p>동의대</p>*/}
                </div>
                <div
                    style={{
                        float: 'bottom',
                        height: '70%',
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <p>모집인원 4명</p>
                        <BookmarkIcon />
                    </div>
                    <p>
                        저희는 리액트를 사용하여 웹을 구상하며 만들 계획입니다
                    </p>
                    <p style={{ marginTop: -20 }}>
                        부산광역시 해운대구 / 구인중
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default Post;
