/* eslint-disable */
import React from "react";
import styled from "styled-components";

const StoreInfo = () => {
  return (
    <div>
      <Wrap>
        <BannerImg src="https://cdn.tpirates.com/files/etc/2021/1119/79e51aa73ae966749dbba4c68cefb137_FThumb.jpg" />
        <ShadowDiv>
          <Coupon>쿠폰</Coupon>
          <App>앱주문</App>
        </ShadowDiv>
      </Wrap>
      <BlockDiv>
        <FlexDiv>
          <TagImgLocation src="	https://www.tpirates.com/static/media/bul_address.e740b352.svg"></TagImgLocation>
          <WhiteText>
            서울특별시 마포구 월드컵로235 마포농수산물시장, 1층 3306호 전남수산
          </WhiteText>
        </FlexDiv>
        <FlexDiv>
          <TagImgTime src="	https://www.tpirates.com/static/media/bul_clock.965c3da4.svg"></TagImgTime>
          <BlockTextDiv>
            <WhiteText>화요일 (오늘): 07:30 ~ 21:00</WhiteText>
            <WhiteText>수요일 (내일): 07:30 ~ 21:00</WhiteText>
            <WhiteText>목요일 (모레): 07:30 ~ 21:00</WhiteText>
          </BlockTextDiv>
        </FlexDiv>
        <FlexDiv>
          <TagImgPhone src="https://www.tpirates.com/static/media/bul_phone.b28105f4.svg"></TagImgPhone>
          <PhoneNumberDiv1>
            <PhoneNumber1>010-8947-0020</PhoneNumber1>
          </PhoneNumberDiv1>
          <PhoneNumberDiv2>
            <PhoneNumber2>02-304-5488</PhoneNumber2>
          </PhoneNumberDiv2>
        </FlexDiv>

        <FlexDiv2>
          <TagImgDelivery src="	https://www.tpirates.com/static/media/bul_delivery.ede951b0.svg"></TagImgDelivery>
          <FlexStringDiv>
            <WhiteText>앱주문</WhiteText>
            <BlockDiv2>
              <MenuButton>
                <MenuButtonString>메뉴보기</MenuButtonString>
              </MenuButton>
              <AppString>퀵 배달, 포장 중 선택</AppString>
            </BlockDiv2>
          </FlexStringDiv>
        </FlexDiv2>

        <FlexDiv3>
          <FlexStringDiv>
            <AppString>고속버스 화물</AppString>

            <EctString1>(사장님께 문의)</EctString1>
          </FlexStringDiv>
        </FlexDiv3>

        <FlexDiv3>
          <FlexStringDiv>
            <AppString>택배</AppString>

            <EctString2>(사장님께 문의)</EctString2>
          </FlexStringDiv>
        </FlexDiv3>
      </BlockDiv>

      <BlockUnderDiv>
        <CouponImg src="https://media.vlpt.us/images/kbs2082/post/54dae5a5-e2a9-4b6b-925a-f510d3de91fa/image.png"></CouponImg>
      </BlockUnderDiv>
    </div>
  );
};

const Wrap = styled.div`
  display: block;
`;

const FilterButtonPrice = styled.p`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 40px;
  line-height: 40px;
  background-color: ${(props) => (props.priceButton ? "white" : "#eeeeee")};
  font-weight: inherit;
  border: 1px #dddddd solid;
  font-size: 13px;
  color: ${(props) => (props.priceButton ? "#1c79bc" : "#777777")};

  cursor: pointer;
`;
const FilterButtonWalk = styled.p`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 40px;
  line-height: 40px;
  background-color: ${(props) => (props.walkButton ? "white" : "#eeeeee")};
  font-weight: inherit;
  border: 1px #dddddd solid;
  font-size: 13px;
  color: ${(props) => (props.walkButton ? "#1c79bc" : "#777777")};

  cursor: pointer;
`;
const FilterButton = styled.p`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 40px;
  line-height: 40px;
  background-color: #eeeeee;
  font-weight: inherit;
  border: 1px #dddddd solid;
  font-size: 13px;
  color: #777777;

  cursor: pointer;
`;
const FilterFlexDiv = styled.div`
  /* margin-top: 10px; */
  display: flex;
  width: 100%;
  height: 50px;
`;
const StoreBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
`;

const CouponImg = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const BlockUnderDiv = styled.div`
  width: 390px;
  height: 80px;
  padding: 15px;
  margin-top: -5px;
  background-color: #1c79bc;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 190px;
  margin-top: 57px;
`;
const ShadowDiv = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  position: relative;

  margin-top: -95px;
  width: 390px;
  height: 61px;
  background-color: black;
  background: linear-gradient(
      0deg,
      rgba(38, 40, 43, 0.5) 0%,
      rgba(38, 40, 43, 0) 100%
    )
    0% 0% no-repeat padding-box padding-box transparent;
`;

const Coupon = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(254, 231, 230) !important;
  width: 40px;
  height: 22px;
  font-size: 11px;
  align-items: center;
  border-radius: 17px;
  margin-top: 50px;
`;
const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  width: 50px;
  height: 22px;
  /* background-color: rgb(221, 51, 51) !important; */
  background-color: rgb(232, 235, 237) !important;
  border-radius: 17px;
  margin-left: 5px;
  margin-top: 50px;
`;

const BlockDiv = styled.div`
  width: 390px;
  height: 351px;
  padding: 15px;
  margin-top: -5px;
  background-color: #1c79bc;
`;

const BlockDiv2 = styled.div`
  margin-left: 50px;
  display: block;
`;
const FlexDiv = styled.div`
  display: flex;
  margin-top: -10px;
`;
const FlexDiv2 = styled.div`
  display: flex;
  margin-top: 10px;
`;
const FlexDiv3 = styled.div`
  display: flex;
  margin-left: 20px;
`;
const TagImgLocation = styled.img`
  margin-top: 15px;
  height: 20px;
`;
const TagImgTime = styled.img`
  margin-top: 15px;
  height: 20px;
`;
const TagImgPhone = styled.img`
  /* margin-top: -20px; */
`;
const TagImgDelivery = styled.img`
  height: 20px;
  margin-top: 13px;
`;

const WhiteText = styled.p`
  margin-left: 13px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.7px;
`;
const BlockTextDiv = styled.div`
  display: block;
`;
const PhoneNumberDiv1 = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  height: 30px;
  border-radius: 3px;
`;
const PhoneNumber1 = styled.p`
  display: inline-block;
  background-color: #fff;
  color: #1c79bc;
  padding: 0px 10px;
  border-radius: 3px;
  font-weight: 500;
`;
const PhoneNumberDiv2 = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  background-color: white;
  height: 30px;
  border-radius: 3px;
`;
const PhoneNumber2 = styled.p`
  display: inline-block;
  background-color: #fff;
  color: #1c79bc;
  padding: 0px 10px;
  border-radius: 3px;
  font-weight: 500;
`;
const FlexStringDiv = styled.div`
  display: flex;
  /* align-items: center; */
`;
const MenuButton = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 30px;
  border-radius: 3px;
  width: 85px;
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;
`;
const MenuButtonString = styled.p`
  display: inline-block;
  background-color: #fff;
  color: #1c79bc;
  padding: 0px 10px;
  border-radius: 3px;
  font-weight: 500;
`;
const AppString = styled.p`
  margin-left: 13px;
  margin-top: -0.05px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.7px;
`;
const EctString1 = styled.p`
  margin-left: 20px;
  margin-top: -1px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.7px;
`;
const EctString2 = styled.p`
  margin-left: 75px;
  margin-top: -1px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.7px;
`;

export default StoreInfo;
