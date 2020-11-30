import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
    width: 95%;
    height: auto;
    margin-top: 2rem;
    padding: 1% 1%;
`;
const Avartar = styled.img`
    height: 4rem;
    width: 4rem;
    margin-right: 0.5rem;
    border-radius: 50%;
`;
const ReviewConainer = styled.div`
    border-bottom: 2px solid gray;
    width: 95%;
    height: auto;
`;

function Review({ review }) {
    return (
        <Container>
            {/*이미지, -이름 -시간*/}
            <ReviewConainer>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Avartar
                        src={`https://picsum.photos/id/${Math.floor(Math.random()*(49))+1}/40/50`}
                        alt="avartar"
                    />
                    <div>
                        <p>
                            {review.user.nickname}
                            <br /><br/>
                            {moment(review.createAt).format('YYYY-MM-DD')}
                        </p>
                    </div>
                </div>
                <p style={{margin: '8px 0px', marginLeft: 16}}>{review.content}</p>
            </ReviewConainer>
        </Container>
    );
}

export default Review;
