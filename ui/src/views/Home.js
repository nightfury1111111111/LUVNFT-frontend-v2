import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import country_icon_svg from "../assets/img/country.svg";
import city_icon_svg from "../assets/img/city.svg";
import landmark_icon_svg from "../assets/img/landmark.svg";
import homePic from "../assets/img/home-m-2022.02.10-21_27_53.png";
import salePic from "../assets/img/home.png";
import stadiumPic from "../assets/img/stadium.png";
import statusPic from "../assets/img/status.png";
import hotelPic from "../assets/img/luv-hotel.png";
import backgroundVideo from "../assets/LUVNFTEstate.mp4";

const BannerWrapper = styled.div`
  width: 100%;
  // height: 340px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    justify-content: flex-start;
    height: 320px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  // height: 100%;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
  }
`;

const IframeWrapper = styled.iframe`
  height: 100%;
  width: 100%;
`;

const TitleWrapper = styled.div`
  position: absolute;
  font-family:"Archivo Black";
  width: 100%;
  top: 150px;
  font-size: 60px;
  color: #dc1fff;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  ${({ theme }) => theme.mediaQueries.sm} {
    top: 50px;
    font-size:30px;
  }
`;

const ExploreWrapper = styled(Link)`
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  z-index: 10;
  color: #ffffff;
  line-height: 96%;
  font-size: 45px;
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 56px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 90%;
    margin: auto;
  }
`;

const CardBoxWrapper = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  justify-content: flex-start;
  padding-bottom: 10px;
  margin: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
`;

const CardLinkWrapper = styled(Link)`
  height: 220px;
  box-shadow: 0px 2px 4px rgba(255, 0, 0, 0.25);
`;
//same as CardLinkWrapper(will be deleted)
const CardDivWrapper = styled.div`
  height: 220px;
  box-shadow: 0px 2px 4px rgba(255, 0, 0, 0.25);
`;

const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  background-color: black;
  height: 80%;
  background-image: url(${(props) => props.bgPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const NftNameWrapper = styled.span`
  color: #000000;
  font-family: Montserrat;
  font-weight: 900;
  font-style: normal;
  line-height: 96%;
  font-size: 18px;
`;

export default function Home() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      {/* <BannerWrapper> */}
      <VideoWrapper>
        <video
          class="DG_video__2_qUl"
          id="my-video"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            // position: "absolute",
            margin: "auto",
            width: "100%",
            height: "100%",
            right: "-100%",
            bottom: "-100%",
            top: "-100%",
            left: "-100%",
            objectFit: "cover",
            zIndex: "-100",
          }}
          // controls
          muted
          // playsinline
          autoPlay
          loop
          // frameBorder="0"
        >
          {/* <source src="https://youtu.be/wTYi2W18REE" type="video/mp4" /> */}
          {/* <source src="https://res.cloudinary.com/dnzambf4m/video/upload/v1641930582/ICE_Landing_Page_rusy2d.webm" /> */}
          <source src="LUVNFTEstate.webm" type="video/mp4" />
        </video>
        <TitleWrapper>
          <div>OWN A PART OF</div>
          <div>THE METAVERSE</div>
        </TitleWrapper>
      </VideoWrapper>
      {/* </BannerWrapper> */}
      <div className="flex flex-col" style={{ marginTop: "15px" }}>
        <div className="flex flex-col justify-start mb-2">
          <ExploreWrapper to={`/market`} className="rounded p-1 mb-2">
            <span className="text-4xl">🗺</span>
          </ExploreWrapper>
        </div>
        <hr />
        <div className="flex flex-col mb-10">
          <div className="px-8 mt-4 flex justify-center mb-4">
            <span className="text-4xl font-semibold">👀 BY</span>
          </div>

          <CardBoxWrapper className="px-8 flex flex-row w-100 justify-center space-x-8">
            <CardDivWrapper className="rounded-lg flex flex-col cursor-pointer">
              <BackgroundWrapper className="m-2 mb-0">
                <img src={salePic} />
              </BackgroundWrapper>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <NftNameWrapper className="text-xl self-center">
                  🏬 NFT STORE
                </NftNameWrapper>
              </div>
            </CardDivWrapper>
            <CardDivWrapper className="rounded-lg flex flex-col cursor-pointer">
              <BackgroundWrapper className="m-2 mb-0">
                <img src={homePic} />
              </BackgroundWrapper>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <NftNameWrapper className="text-xl self-center">
                  🏠 NFT HOME
                </NftNameWrapper>
              </div>
            </CardDivWrapper>
            <CardLinkWrapper
              to={`/market`}
              className="rounded-lg flex flex-col cursor-pointer"
            >
              <BackgroundWrapper className="m-2 mb-0">
                <img src={hotelPic} />
              </BackgroundWrapper>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <NftNameWrapper className="text-xl self-center">
                  🏩 NFT HOTEL
                </NftNameWrapper>
              </div>
            </CardLinkWrapper>
            <CardDivWrapper className="rounded-lg flex flex-col cursor-pointer">
              <BackgroundWrapper
                // bgPath={landmark_icon_svg}
                className="m-2 mb-0"
              >
                <img src={statusPic} />
              </BackgroundWrapper>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <NftNameWrapper className="text-xl self-center">
                  🗽 NFT LANDMARK
                </NftNameWrapper>
              </div>
            </CardDivWrapper>
            <CardDivWrapper className="rounded-lg flex flex-col cursor-pointer">
              <BackgroundWrapper className="m-2 mb-0">
                <img src={stadiumPic} />
              </BackgroundWrapper>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <NftNameWrapper className="text-xl self-center">
                  🏟 NFT STADIUM
                </NftNameWrapper>
              </div>
            </CardDivWrapper>
          </CardBoxWrapper>
        </div>
      </div>
    </div>
  );
}
