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

import { country_icon_svg, city_icon_svg, landmark_icon_svg } from "./icons";
import countryPic from "../assets/img/country.png";
import cityPic from "../assets/img/city.png";
import landmarkPic from "../assets/img/landmark.png";

const BannerWrapper = styled.div`
  width: 100%;
  height: 340px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    justify-content: flex-start;
    height:420px;
  }
`;

const VideoWrapper = styled.div`
  border: solid black;
  width: 50%;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
    height: 330px;
  }
`;

const TitleWrapper = styled.div`
  font-size: 30px;
  color: #dc1fff;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 40px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left:0;
    margin-top:0;
  }
`;

const ExploreWrapper = styled(Link)`
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 10;
  color: #ffffff;
  line-height: 96%;
  font-size: 45px;
  width: 100px;
  text-align: center;
  margin-left:56px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width:90%;
    margin:auto;
  }
`;

const CardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  justify-content: flex-start;
  margin:auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
`;

export default function Home() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <BannerWrapper>
        <TitleWrapper>
          <div>OWN A PART OF</div>
          <div>THE METAVERSE</div>
        </TitleWrapper>
        <VideoWrapper></VideoWrapper>
      </BannerWrapper>
      <div className="flex flex-col">
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

          <CardWrapper className="px-8 flex flex-row w-100 justify-center space-x-8">
            <div
              className="rounded-lg flex flex-col cursor-pointer nftitem"
              style={{
                width: "300px",
                height: "250px",
                boxShadow: "0px 2px 4px rgba(255, 0, 0, 0.25)",
              }}
            >
              <div
                className="bg-purple-400 m-2 mb-0"
                style={{
                  height: "80%",
                  backgroundImage: `url(${countryPic})`,
                }}
              >
                {country_icon_svg}
                {/* <img src={countryPic} /> */}
              </div>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <span
                  className="text-xl self-center"
                  style={{
                    color: "#FFCA0E",
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                    fontSize: "30px",
                  }}
                >
                  🏠
                </span>
              </div>
            </div>
            <Link
              to={`/market`}
              className="rounded-lg flex flex-col cursor-pointer nftitems"
            >
              <div className="bg-purple-400 m-2 mb-0" style={{ height: "80%" }}>
                {city_icon_svg}
              </div>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <span
                  className="text-xl self-center"
                  style={{
                    color: "#FFCA0E",
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                    fontSize: "30px",
                  }}
                >
                  🏩
                </span>
              </div>
            </Link>
            <div
              className="rounded-lg flex flex-col cursor-pointer"
              style={{
                width: "300px",
                height: "250px",
                boxShadow: "0px 2px 4px rgba(255, 0, 0, 0.25)",
              }}
            >
              <div className="bg-purple-400 m-2 mb-0" style={{ height: "80%" }}>
                {landmark_icon_svg}
              </div>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <span
                  className="text-xl self-center"
                  style={{
                    color: "#FFCA0E",
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                    fontSize: "30px",
                  }}
                >
                  🗽
                </span>
              </div>
            </div>
            <div
              className="rounded-lg flex flex-col cursor-pointer"
              style={{
                width: "300px",
                height: "250px",
                boxShadow: "0px 2px 4px rgba(255, 0, 0, 0.25)",
              }}
            >
              <div className="bg-purple-400 m-2 mb-0" style={{ height: "80%" }}>
                {landmark_icon_svg}
              </div>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <span
                  className="text-xl self-center"
                  style={{
                    color: "#FFCA0E",
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                    fontSize: "30px",
                  }}
                >
                  🏬
                </span>
              </div>
            </div>
            <div
              className="rounded-lg flex flex-col cursor-pointer"
              style={{
                width: "300px",
                height: "250px",
                boxShadow: "0px 2px 4px rgba(255, 0, 0, 0.25)",
              }}
            >
              <div className="bg-purple-400 m-2 mb-0" style={{ height: "80%" }}>
                {landmark_icon_svg}
              </div>
              <div className="flex justify-center" style={{ height: "20%" }}>
                <span
                  className="text-xl self-center"
                  style={{
                    color: "#FFCA0E",
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                    fontSize: "30px",
                  }}
                >
                  🏟
                </span>
              </div>
            </div>
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}
