/* eslint-disable */
import React from "react";
import styled from "styled-components";

const StoreWalk = () => {
  return (
    <Wrap>
      <IMG src="https://cdn.tpirates.com/files/etc/2019/0805/5b96d55b9472908b92abd78bae9b1a20_FThumb.jpg" />
      <IMG src="https://cdn.tpirates.com/files/etc/2017/0328/bcf34a2fab561a2e8e21b0b71c5d6e04_FThumb.jpg" />
      <Text>마포농수산물 시장 3306호 전남수산입니다.</Text>
      <Text>이전에는 상호명이 현대수산이었네요.</Text>
      <IMG src="https://cdn.tpirates.com/files/etc/2017/0328/d83715a8d0a34515a246217f95593578_FThumb.jpg" />
      <Text>수조가 정말 깨끗합니다.</Text>
      <Text></Text>
      <Text>전남수산에서는 각종 활어회를 판매하고 있습니다.</Text>
      <Text>활어뿐만 아니라 해삼, 개불, 멍게,</Text>
      <Text>그리고 전복까지 판매 중입니다^^</Text>
      <IMG src="https://cdn.tpirates.com/files/etc/2018/1119/8f3c4331fd3d64ce41e90f5a7672c9cc_FThumb.jpg"></IMG>
      <IMG src="https://cdn.tpirates.com/files/etc/2017/0529/6e6b4a6896c09c23b7c612ebcc1ba056_FThumb.jpg"></IMG>
      <Text>제주 양식 광어입니다.</Text>
      <Text>소~대 사이즈로 다양하며</Text>
      <Text>양식은 자연산과 맛차이가 크게 나지 않아</Text>
      <Text>저렴한 양식광어를 드시는 것도 추천합니다!</Text>
      <IMG src="https://cdn.tpirates.com/files/etc/2017/0328/74215540959006ef70c617a8b85f91b4_FThumb.jpg"></IMG>
      <Text>양식 우럭입니다.</Text>
      <Text>우럭은 어둡고 상처가 없는 것이 좋습니다.</Text>
      <IMG src="https://cdn.tpirates.com/files/etc/2017/0529/9b5c1138ff399ed9bd75d2fe279dc490_FThumb.jpg"></IMG>
      <Text>때깔고운 통통한 국산 양식참돔입니다.</Text>
      <Text>탱탱하고 기름진 식감이 일품입니다.</Text>
      <Text>일본산 양식 참돔도 판매합니다.</Text>
      <Text>일본산이 국산보다 맛이 좋다는 소리가!?</Text>
      <IMG src="	https://cdn.tpirates.com/files/etc/2018/0628/ed1c5cba05f2c672eaaf4fb475f5f6bf_FThumb.jpg" />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: block;
  background-color: #eeeeee;
  padding-bottom: 50px;
`;

const IMG = styled.img`
  width: 100%;
`;
const Text = styled.p`
  color: #555555;
  /* padding: 10px 15px; */
  height: 15px;
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
`;
export default StoreWalk;
