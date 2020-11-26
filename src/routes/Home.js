import React from "react";
import Banner from "../components/Home/Banner/Banner";
import MainBoard from "../components/Home/MainBoard/MainBoard";
function Home(props) {
  return (
    <div>
      <Banner />
      <MainBoard />
      <p style={{textAlign: 'center', margin: '36px 0px', color: '#323232'}}>
          문의사항은 010-2862-7045로 문의해주시기 바랍니다 :)
      </p>
    </div>
  );
}

export default Home;
