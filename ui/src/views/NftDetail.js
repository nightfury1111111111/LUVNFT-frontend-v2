import React, { useState, useEffect, useSelector } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import {
  Units,
  Unit,
  numberToString,
  add0xToString,
  fromWei,
  toWei,
  numToStr,
} from "@harmony-js/utils";
import { compareAsc, format } from "date-fns";
import styled from "styled-components";
import { extractJSONFromURI } from "../utils/extractJSONFromURI";
import { Iconly } from "react-iconly";

import * as common from "../utils/common";
import homePic from "../assets/img/home-m-2022.02.10-21_27_53.png";
import storePic from "../assets/img/home.png";
import hotelPic from "../assets/img/luv-hotel.png";
import landPic from "../assets/img/status.png";
import stadiumPic from "../assets/img/stadium.png";

import Store from "../stores/store";
const store = Store.store;
const emitter = Store.emitter;
const dispatcher = Store.dispatcher;

const MainIntroWrapper = styled.div`
  height: 100%;
  font-family: "Poppins";
  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    margin-right: 20px;
  }
`;

const NftInfoWrapper = styled.div`
color:black;
  width: 60%;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
`;

const NftDetailWrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    flex-direction: column;
  }
`;

// const NftPicWrapper = styled.div`
//   width: 40%;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   background: radial-gradient(
//     77.96% 81.64% at 50% 50%,
//     #ffffff 0%,
//     #ffca0e 100%
//   );
//   height: 100%;
//   ${({ theme }) => theme.mediaQueries.sm} {
//     width: 100%;
//     margin-bottom: 10px;
//   }
// `;
const NftPicWrapper = styled.div`
  width: 40%;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const DescriptionWrapper = styled.div`
  width: 55%;
  font-family: "Poppins";
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
`;

const BidLogWrapper = styled.div`
  width: 45%;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
`;

const Divider = styled.span`
  border: 1px solid #000000;
  width: 2px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 0;
    display: none;
  }
  height: 80%;
  opacity: 0.2;
`;

const AuctionWrapper = styled.div`
  height: 26%;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
  }
`;

const NFTCardWrapper = styled.div`
  width: 370px;
  height: 370px;
  color: white;
  background-image: url(${(props) => {
      switch (props.type) {
        case "apartment":
          return homePic;
        case "land":
          return landPic;
        default:
          return;
      }
    }}),
    url(${(props) => props.bgPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%, 100% 100%;
  text-align:center;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 350px;
    height: 350px;
  }
`;

const AnimatedDiv = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: red;
  animation-name: exam;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  @keyframes exam {
    0% {
      color: red;
      // background-color: red;
    }
    50% {
      color: green;
      // background-color: blue;
    }
    100% {
      color: red;
      // background-color: red;
    }
  }
`;

const DetailInfoWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    margin-top:0;
  }
`;

const InfoWrapper = styled.div`
  width: 50%;
  ${({ theme }) => theme.mediaQueries.sm}{
    width:100%;
    margin-top:15px;
  }
`;

export default function NftDetail() {
  let { id } = useParams();
  const [contract, setContract] = useState(null);
  const [nftObj, setNftObj] = useState(null);
  const [auctionObj, setAuctionObj] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bidTime, setBidTime] = useState(60 * 30);
  const [bidPrice, setBidPrice] = useState(0.01);
  const [timerObj, setTimerObj] = useState(null);
  const [timerEnded, setTimerEnded] = useState(false);

  const selectedBidTimes = [
    { name: "30 min", value: 60 * 30 },
    { name: "1 hour", value: 60 * 60 },
    { name: "3 hours", value: 60 * 60 * 3 },
    { name: "1 day", value: 60 * 60 * 24 },
  ];

  const getCompressed = (addr) => {
    const len = addr.length;
    return addr.substring(0, 5) + "..." + addr.substring(len - 3, len);
  };

  useEffect(() => {
    if (!nftObj) return;
    console.log("updated nftObj ", nftObj);
  }, [nftObj]);

  const getNftByTokenId = async (id) => {
    const nft = await contract.methods.getTokenDetails(id).call();
    const owner = await contract.methods.getOwnerOf(id).call();
    let owner_fmt = getCompressed(owner);
    let price = await contract.methods.getPriceOf(id).call();
    //For ETH
    // price = window.web3.utils.fromWei(price);
    //For ONE
    price = fromWei(price, Units.one);
    const svg_image = await contract.methods
      .getSVG(
        id,
        JSON.parse(nft.nft_info).geometry.coordinates[0],
        JSON.parse(nft.nft_info).geometry.coordinates[1],
        JSON.parse(nft.nft_info).properties.title
      )
      .call();

    const isNftOwned = owner == store.getStore().account ? true : false;
    const mintFreshNft =
      owner == "0xfEd7ADe2bf5D99934e0F5a991F1Ea3D89a444885" ? true : false;
    let auctionObj = await contract.methods.getAuctionInfo(id).call();
    let status="For sale!";
    if (
      (isNftOwned && mintFreshNft && auctionObj.isExist && !auctionObj) ||
      (isNftOwned && mintFreshNft && auctionObj.isExist && !auctionObj) ||
      (auctionObj.isExist && auctionObj && auctionObj.auctionEnded) ||
      (isNftOwned && auctionObj.isExist)
    ) {
      status = "Not for sale!";
    }
    let locn_nft = {
      tokenId: id,
      name: JSON.parse(nft.nft_info).properties.title,
      owner: owner,
      svg_image: extractJSONFromURI(svg_image).image,
      owner_fmt: owner_fmt,
      type: JSON.parse(nft.nft_info).properties.type,
      price: price,
      description:JSON.parse(nft.nft_info).properties.description,
      isNftOwned: isNftOwned,
      mintFreshNft: mintFreshNft,
      mintFreshNft: true,
      status,
      excert:JSON.parse(nft.nft_info).properties.excert,
      hasAuctionStarted: auctionObj.isExist,
      longitude: JSON.parse(nft.nft_info).geometry.coordinates[0],
      latitude: JSON.parse(nft.nft_info).geometry.coordinates[1],
    };
    return locn_nft;
  };

  const refreshContractData = async () => {
    let nftObj = await getNftByTokenId(id);
    setNftObj(nftObj);
    if (nftObj.hasAuctionStarted) {
      refreshAuctionPanel(nftObj.tokenId);
    }
  };

  // ~~~~~~~~~~~~~~~~~~~~~ Auction
  useEffect(() => {
    if (!auctionObj) return;
    // console.log("updated auctionObj ", auctionObj);
    if (auctionObj.currBiddingTime == auctionObj.origBiddingTime) {
      //   console.log("Effect: startTimer ", timerObj);
      clearInterval(timerObj);
      setTimerObj(null);
      startTimer();
    } else if (auctionObj.currBiddingTime == 0) {
      resetTimer();
    }
  }, [auctionObj]);

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };
  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    auctionObj.currBiddingTime = auctionObj.currBiddingTime - 1;
    auctionObj.timer = secondsToTime(auctionObj.currBiddingTime);
    // console.log(auctionObj.timer);
    setAuctionObj({ ...auctionObj });
    // Check if we're at zero.
    if (auctionObj.currBiddingTime == 0) {
      console.log("countdown finished");
      resetTimer();
    }
  };
  const startTimer = () => {
    // console.log("startTimer ", auctionObj.origBiddingTime);
    if (!auctionObj.timer) return;
    if (auctionObj.origBiddingTime > 0) {
      let timerObj = setInterval(countDown, 1000);
      setTimerObj(timerObj);
    }
  };
  const resetTimer = () => {
    console.log("reset timer");
    clearInterval(timerObj);
    setTimerObj(null);
  };
  const getTimeRemaining = (endTime) => {
    let auctionEndTime = new Date(endTime * 1000);
    let timeRemaining = (auctionEndTime.getTime() - Date.now()) / 1000;
    timeRemaining = Math.ceil(timeRemaining);
    // console.log("timeRemaining ", timeRemaining);
    return timeRemaining;
  };

  const updateTimeRemaining = (auctionObj) => {
    // console.log("updateTimeRemaining");
    let timeRemaining = getTimeRemaining(auctionObj.auctionEndTime);
    if (timeRemaining <= 0) {
      auctionObj.currBiddingTime = 0;
      auctionObj.timer = secondsToTime(auctionObj.currBiddingTime);
    } else {
      auctionObj.origBiddingTime = timeRemaining;
      auctionObj.currBiddingTime = timeRemaining;
    }
    return auctionObj;
  };
  const getAuctionDetailById = async (id) => {
    let auctionData = await contract.methods.getAuctionInfo(id).call();
    // console.log("auctionData ", auctionData);
    let timer = secondsToTime(auctionData.biddingTime);
    // console.log("timer ", timer);
    // for ETH
    // let highestBid = window.web3.utils.fromWei(auctionData.highestBid, "ether");
    //for ONE
    let highestBid = fromWei(auctionData.highestBid, Units.one);
    let bidPlacedByCurr =
      auctionData.highestBidder == store.getStore().account ? true : false;

    let auctionObj = {
      tokenId: auctionData.tokenId,
      isExist: auctionData.isExist,
      auctionEndTime: auctionData.auctionEndTime,
      auctionEnded: auctionData.auctionEnded,
      origBiddingTime: auctionData.biddingTime,
      currBiddingTime: auctionData.biddingTime,
      highestBid: highestBid,
      highestBidder: auctionData.highestBidder,
      highestBidderFmt: common.getShortAddress(auctionData.highestBidder),
      bidPlacedByCurr: bidPlacedByCurr,
      timer: timer,
      logs: [],
    };
    return auctionObj;
  };
  const refreshAuctionPanel = async (id) => {
    let auctionObj = await getAuctionDetailById(id);
    auctionObj = updateTimeRemaining(auctionObj);
    auctionObj = await updateBidLogs(auctionObj);
    setAuctionObj(auctionObj);
  };

  const updateBidLogs = async (auctionObj) => {
    // console.log("refreshBidLogs ");
    //get bidding logs
    var bidLogsCount = await contract.methods.acceptedBidsIdx().call();
    //   console.log("bidLogsCount ", bidLogsCount);
    let logs = [];
    for (var i = 0; i < bidLogsCount; i++) {
      const bidLog = await contract.methods.getBiddingLog(i).call();
      if (bidLog.tokenId == id) {
        let bidTime = new Date(bidLog.timeBid * 1000);
        bidTime = format(bidTime, "MM-dd, HH:mm");
        logs.push({
          tokenId: bidLog.tokenId,
          bidder: bidLog.bidder,
          //   value: window.web3.utils.fromWei(bidLog.bidValue),
          value: fromWei(bidLog.bidValue, Units.one),
          timestamp: bidLog.timeBid,
          time_fmt: bidTime,
        });
      }
    }
    logs.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    auctionObj.logs = logs;
    return auctionObj;
  };
  // ~~~~~~~~~~~~~~~~~~~~~ Auction
  const listenContractEvents = () => {
    //listen to events
    if (contract.events.AuctionStarted) {
      contract.events.AuctionStarted({}, async (error, event) => {
        // console.log("AuctionStarted ", event);
        setLoading(false);
        refreshContractData();
      });
    }
    if (contract.events.BidIncrease) {
      contract.events.BidIncrease({}, async (err, event) => {
        // console.log("BidIncrease ", event.returnValues);
        setLoading(false);
        refreshContractData();
      });
    }
    if (contract.events.BidRejected) {
      contract.events.BidRejected({}, async (err, event) => {
        // console.log("BidRejected ", event.returnValues);
      });
    }
    if (contract.events.BidWithdrawn) {
      contract.events.BidWithdrawn({}, async (err, event) => {
        // console.log("BidWithdrawn ", event.returnValues);
        setLoading(false);
        refreshContractData();
      });
    }
  };

  useEffect(() => {
    if (contract == null) return;
    console.log("contract loaded! ");
    refreshContractData();
    listenContractEvents();
  }, [contract]);

  const updateContract = () => {
    let contract = store.getStore().dapp_contract;
    if (contract) {
      setContract(contract);
    }
  };

  const init = async () => {
    const storeUpdated = async () => {
      updateContract();
    };
    emitter.on("StoreUpdated", storeUpdated);
    if (!contract) {
      updateContract();
    }
  };

  useEffect(() => {
    init();
  }, []);

  const buyNft = async (nftObj) => {
    // console.log("buyNft ", nftObj);
    // let buyAmount = window.web3.utils.toWei("0.01", "Ether");
    let buyAmount = toWei(nftObj.price, Units.one);
    // console.log("buyAmount ", buyAmount);
    setLoading(true);
    if (contract) {
      contract.methods
        .buy(nftObj.tokenId)
        .send({ from: store.getStore().account, value: buyAmount })
        .on("transactionHash", (hash) => {
          contract.events.NftBought({}, async (error, event) => {
            console.log("NftBought ", event.returnValues);
            setLoading(false);
            refreshContractData();
          });
        })
        .on("error", (error) => {
          window.alert("Error ", error);
          setLoading(false);
        });
    }
  };

  const startAuction = async (nftObj) => {
    console.log("startAuction ", bidTime);
    setLoading(true);
    if (contract) {
      const result = await contract.methods
        .startAuction(nftObj.tokenId, bidTime)
        .send({
          from: store.getStore().account,
          value: 0,
          // gasPrice: 1000000000,
          // gasLimit: 210000,
        })
        .on("error", (error) => {
          window.alert("Error ", error);
          setLoading(false);
        });
      console.log(`Send tx: ${result.transactionHash} result: `, result.status);
      if (result.status) {
        setLoading(false);
      }
    }
  };

  const endAuction = async (nftObj) => {
    console.log("endAuction");
    setLoading(true);
    if (contract) {
      contract.methods
        .endAuction(nftObj.tokenId)
        .send({ from: store.getStore().account, value: 0 })
        .on("transactionHash", (hash) => {
          contract.events.AuctionEnded({}, async (error, event) => {
            console.log("AuctionEnded ", event.returnValues);
            setLoading(false);
            refreshContractData();
          });
        })
        .on("error", (error) => {
          window.alert("Error ", error);
          setLoading(false);
        });
    }
  };

  const placeBid = async (nftObj) => {
    console.log("placeBid");
    setLoading(true);
    if (contract) {
      //   let bidAmount = window.web3.utils.toWei(bidPrice.toString(), "Ether");
      let bidAmount = toWei(bidPrice.toString(), Units.one);
      console.log("bidAmount ", bidAmount);
      contract.methods
        .placeBid(nftObj.tokenId)
        .send({ from: store.getStore().account, value: bidAmount })
        .on("transactionHash", (hash) => {
          console.log("placing bid ", hash);
        })
        .on("error", (error) => {
          window.alert("Error ", error);
          setLoading(false);
        });
    }
  };

  const incBid = async (nftObj) => {
    console.log("incBid");
    setLoading(true);
    if (contract) {
      //   let bidAmount = window.web3.utils.toWei(bidPrice.toString(), "Ether");
      //   console.log("bidAmount ", bidAmount);
      //   contract.methods
      //     .placeBid(nftObj.tokenId)
      //     .send({ from: store.getStore().account, value: bidAmount })
      //     .on("transactionHash", (hash) => {
      //       console.log("placing bid ", hash);
      //       setLoading(false);
      //     })
      //     .on("error", (error) => {
      //       window.alert("Error ", error);
      //       setLoading(false);
      //     });
    }
  };

  const withdrawBid = async (nftObj) => {
    console.log("withdrawBid");
    setLoading(true);
    if (contract) {
      contract.methods
        .withdrawBid(nftObj.tokenId)
        .send({ from: store.getStore().account, value: 0 })
        .on("transactionHash", (hash) => {
          console.log("withdrawing bid ", hash);
          setLoading(false);
        })
        .on("error", (error) => {
          window.alert("Error ", error);
          setLoading(false);
        });
    }
  };

  const EndAuctionBtn = () => (
    <button
      className="font-semibold uppercase bg-black"
      style={{
        height: "40px",
        width: "150px",
        color: "#DC1FFF",
        border: "1px solid #000000",
        borderRadius: "15px 15px 15px 15px",
        fontSize: "15px",
      }}
      disabled={loading}
      onClick={() => endAuction(nftObj)}
    >
      {!loading && <span>End Auction</span>}
      {loading && <span>Ending ...</span>}
    </button>
  );

  const BuyNftBtn = () => (
    <button
      className="bg-black text-white font-semibold hover:shadow-lg rounded p-2 w-full disabled:opacity-50"
      disabled={loading}
      onClick={() => buyNft(nftObj)}
    >
      {!loading && <span>Buy Now</span>}
      {loading && <span>Buying</span>}
    </button>
  );

  const PlacedBid = () => (
    <div className="flex flex-row gap-2">
      {/* <button
        className="font-semibold uppercase bg-green-500"
        style={{
          height: "40px",
          width: "200px",
          color: "#DC1FFF",
          border: "1px solid #000000",
          borderRadius: "10px 10px 10px 10px",
          fontSize: "15px",
        }}
        disabled={loading || auctionObj.currBiddingTime == 0}
        onClick={() => incBid(nftObj)}
      >
        {!loading && <span>Increase Bid</span>}
        {loading && <span>Increasing ...</span>}
      </button> */}
      <button
        className="font-semibold uppercase bg-red-500"
        style={{
          height: "40px",
          width: "200px",
          color: "#DC1FFF",
          border: "1px solid #000000",
          borderRadius: "10px 10px 10px 10px",
          fontSize: "15px",
        }}
        disabled={loading}
        onClick={() => withdrawBid(nftObj)}
      >
        {!loading && <span>Withdraw Bid</span>}
        {loading && <span>Withdrawing ...</span>}
      </button>
    </div>
  );

  const displaySelectedBidTime = () => {
    let res = selectedBidTimes.filter((item) => item.value == bidTime);
    if (res.length > 0) {
      return res[0].name;
    } else {
      return "Select One";
    }
  };

  //Auction time selection
  const DropDownBtn = () => (
    <div className="dropdown inline-block relative">
      <button
        className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        style={{ border: "1px solid #000000" }}
      >
        <span className="mr-1">{displaySelectedBidTime()}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 bg-gray-100">
        {selectedBidTimes.map((bdt, id) => {
          return (
            <li key={id}>
              <a
                className="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                onClick={() => {
                  setBidTime(bdt.value);
                }}
              >
                {bdt.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const BidsLog = () => (
    <ul className="m-2 list-disc list-inside mt-8">
      {auctionObj &&
        auctionObj.logs &&
        auctionObj.logs.map((l, i) => {
          return (
            <li className="mb-4" key={i}>
              <span style={styles.listEntry}>
                Bid by {common.getShortAddress(l.bidder)}
              </span>
              <br />
              <span className="ml-4" style={styles.listFollow}>
                <b>{l.value} ONE</b> on {l.time_fmt}
                {/* 8th May, 1999 14:45 */}
              </span>
            </li>
          );
        })}
    </ul>
  );

  const StartAuctionMenu = () => (
    <div className="ml-4" style={{ width: "100%" }}>
      <DropDownBtn />
      <button
        className="font-semibold uppercase bg-black"
        style={{
          height: "40px",
          width: "150px",
          color: "#DC1FFF",
          border: "1px solid #000000",
          borderRadius: "0px 17.5735px 17.5735px 0px",
          fontSize: "15px",
        }}
        disabled={loading}
        onClick={() => startAuction(nftObj)}
      >
        {!loading && <span>Start Auction</span>}
        {loading && <span>Starting ...</span>}
      </button>
    </div>
  );

  const HighestBidInfo = () => (
    <div className="" style={{ width: "100%" }}>
      <div className="flex flex-col ml-4" style={{}}>
        <span
          style={{
            color: "#000000",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Highest Bid Received
        </span>
        <div>
          <span style={styles.auctionTimeNumber}>
            {auctionObj.highestBid}&nbsp;
          </span>
          <span style={styles.auctionTimeDesc}>ONE</span>
        </div>
      </div>
    </div>
  );

  const PlaceBidBtn = () => (
    <button
      className="font-semibold uppercase bg-black"
      style={{
        height: "40px",
        width: "150px",
        color: "#DC1FFF",
        border: "1px solid #000000",
        borderRadius: "0px 17.5735px 17.5735px 0px",
        fontSize: "18px",
      }}
      disabled={loading}
      onClick={() => placeBid(nftObj)}
    >
      {!loading && <span>Place Bid</span>}
      {loading && <span>Placing ...</span>}
    </button>
  );

  const styles = {
    entryLabel: {
      color: "#000000",
      fontWeight: 600,
      fontSize: "20px",
    },
    entryDesc: {
      color: "#000000",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "20px",
    },
    sectionLabel: {
      color: "#000000",
      fontWeight: 600,
      fontSize: "22px",
      lineHeight: "20px",
    },
    auctionTimeNumber: {
      color: "#00FFA3",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "24px",
    },
    auctionTimeDesc: {
      color: "#000000",
      fontWeight: 600,
      fontSize: "20px",
    },
    listEntry: {
      color: "#000000",
      fontWeight: 600,
      fontSize: "16px",
    },
  };
  return (
    <div className="flex flex-col justify-start" style={{ height: "90vh" }}>
      <div className="m-2 mt-5 ml-4" style={{ height: "3%" }}>
        <Link className="cursor-pointer" to={`/market`}>
          <Iconly
            name="ChevronLeftCircle"
            set="two-tone"
            primaryColor="black"
            size="large"
          />
        </Link>
      </div>
      <div className="ml-8" style={{ height: "97%", fontFamily: "Poppins" }}>
        {nftObj && (
          <>
            <div className="">
              <MainIntroWrapper className="ml-8 mr-8 mt-4 flex flex-row">
                <NftPicWrapper className="flex justify-center items-center cursor-pointer rounded-lg">
                  {nftObj && (
                    <NFTCardWrapper
                      bgPath={nftObj.svg_image}
                      type={nftObj.type}
                    >
                      <div
                        style={{
                          marginTop: "10%",
                          fontSize: "20px",
                          fontFamily: "Archivo Black",
                          fontWeight: "bold",
                          textAlign: "center",
                          width: "100%",
                          color: "white",
                        }}
                      >
                        {nftObj.name}
                      </div>
                      {nftObj.isNftOwned && (
                        <AnimatedDiv>Owned by you.</AnimatedDiv>
                      )}
                      {nftObj.isNftOwned ? (
                        <div style={{ marginTop: "42%" }}>
                          lat: {Number(nftObj.latitude).toFixed(4)} N, long:
                          {Number(nftObj.longitude).toFixed(4)} E
                        </div>
                      ) : (
                        <div style={{ marginTop: "50%" }}>
                          lat: {Number(nftObj.latitude).toFixed(4)} N, long:
                          {Number(nftObj.longitude).toFixed(4)} E
                        </div>
                      )}
                      <div>ID: {nftObj.tokenId}</div>
                      <div>💙NFT ESTATE: {nftObj.type}</div>
                    </NFTCardWrapper>
                  )}
                </NftPicWrapper>
                <NftInfoWrapper className="flex flex-col pl-4">
                  <div className="" style={{ minWidth: "50%", height: "100%" }}>
                    <div
                      className="flex justify-between"
                      style={{ height: "10%", marginBottom: "20px" }}
                    >
                      <div className="ml-2">
                        <span
                          className="uppercase"
                          style={{
                            fontFamily: "Archivo Black",
                            fontWeight: 600,
                            fontSize: "30px",
                          }}
                        >
                          {nftObj.name}
                        </span>
                      </div>
                    </div>
                    <DetailInfoWrapper>
                      <InfoWrapper>🏁 {nftObj.excert}</InfoWrapper>
                      <InfoWrapper>
                        📍 LAT:{Number(nftObj.latitude).toFixed(4)} N, LONG:{" "}
                        {Number(nftObj.longitude).toFixed(4)} E
                      </InfoWrapper>
                    </DetailInfoWrapper>
                    <DetailInfoWrapper>
                      <InfoWrapper>💙 NFT ESTATE: {nftObj.type}</InfoWrapper>
                      <InfoWrapper>🆔 ID:{nftObj.tokenId}</InfoWrapper>
                    </DetailInfoWrapper>
                    <DetailInfoWrapper>
                      <InfoWrapper>💼 STtatus:{nftObj.status}</InfoWrapper>
                      <InfoWrapper>
                        💰 Owned by: {getCompressed(nftObj.owner)}
                      </InfoWrapper>
                    </DetailInfoWrapper>
                    <DetailInfoWrapper>
                      <InfoWrapper>One:{nftObj.price}</InfoWrapper>
                      <InfoWrapper>💵 USD: {nftObj.price * 2.2}</InfoWrapper>
                    </DetailInfoWrapper>
                    <DetailInfoWrapper>
                      <InfoWrapper>
                        ⏰ Auction Ends:
                        <span style={styles.auctionTimeNumber}>0</span>
                        <span style={styles.auctionTimeDesc}>d&nbsp;</span>
                        <span style={styles.auctionTimeNumber}>
                          {auctionObj && auctionObj.timer && auctionObj.timer.h}
                        </span>
                        <span style={styles.auctionTimeDesc}>h&nbsp;</span>
                        <span style={styles.auctionTimeNumber}>
                          {auctionObj && auctionObj.timer && auctionObj.timer.m}
                        </span>
                        <span style={styles.auctionTimeDesc}>m&nbsp;</span>
                        <span style={styles.auctionTimeNumber}>
                          {auctionObj && auctionObj.timer && auctionObj.timer.s}
                        </span>
                        <span style={styles.auctionTimeDesc}>s&nbsp;</span>
                      </InfoWrapper>
                      <InfoWrapper>
                        💸 Highest Bid:{" "}
                        <span style={styles.auctionTimeNumber}>
                          {auctionObj &&
                            auctionObj.highestBid &&
                            auctionObj.highestBid}
                          &nbsp;
                        </span>
                      </InfoWrapper>
                    </DetailInfoWrapper>
                    <div
                      className="flex justify-start items-center"
                      style={{ height: "18%" }}
                    >
                      {!nftObj.isNftOwned && nftObj.mintFreshNft && (
                        <BuyNftBtn />
                      )}
                      {!nftObj.isNftOwned &&
                        nftObj.hasAuctionStarted &&
                        auctionObj &&
                        !auctionObj.bidPlacedByCurr &&
                        auctionObj.currBiddingTime != 0 && (
                          <>
                            <input
                              type="number"
                              placeholder="Bidding Price ($ONE)"
                              className="p-4 font-bold"
                              style={{
                                height: "40px",
                                width: "150px",
                                border: "1px solid #000000",
                                borderRadius: "10px 0px 0px 10px",
                                fontSize: "20px",
                                opacity: "0.4",
                                focusVisible: {
                                  border: "0px solid #000000",
                                },
                              }}
                              step="1"
                              onChange={(e) => setBidPrice(e.target.value)}
                            />
                            <PlaceBidBtn />
                          </>
                        )}
                      {!nftObj.isNftOwned &&
                        nftObj.hasAuctionStarted &&
                        auctionObj &&
                        auctionObj.bidPlacedByCurr && <PlacedBid />}
                      {nftObj.isNftOwned &&
                        !nftObj.hasAuctionStarted &&
                        !auctionObj && (
                          <>
                            <StartAuctionMenu />
                          </>
                        )}
                      {nftObj.isNftOwned && nftObj.hasAuctionStarted && (
                        <>
                          {auctionObj &&
                            auctionObj.currBiddingTime == 0 &&
                            !auctionObj.auctionEnded && <EndAuctionBtn />}
                        </>
                      )}
                      {nftObj.isNftOwned && nftObj.hasAuctionStarted && (
                        <>
                          {auctionObj &&
                            auctionObj.currBiddingTime == 0 &&
                            auctionObj.auctionEnded && <StartAuctionMenu />}
                        </>
                      )}
                    </div>
                  </div>
                </NftInfoWrapper>
              </MainIntroWrapper>
            </div>
            <NftDetailWrapper className="flex flex-row p-4">
              <DescriptionWrapper className="flex flex-col ml-2 mt-4 pr-12">
                <span style={styles.entryLabel}>STORY</span>
                <span style={styles.entryDesc}>{nftObj.description}</span>
                {/* <br />
                <span style={styles.entryLabel}>
                  Token ID: {nftObj.tokenId}{" "}
                </span> */}
                {/* <span style={styles.entryDesc}>{nftObj.tokenId}</span> */}
              </DescriptionWrapper>
              <span
                style={{
                  border: "1px solid #000000",
                  width: "2px",
                  height: "80%",
                  opacity: "0.2",
                }}
              ></span>
              <BidLogWrapper className="mt-4 ml-4 pl-4">
                <span style={styles.sectionLabel}>Bid Logs</span>
                <BidsLog />
              </BidLogWrapper>
            </NftDetailWrapper>
          </>
        )}
      </div>
    </div>
  );
}
