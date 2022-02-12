import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Store from "../stores/store";
import logo from "../assets/img/luv-nft-estate_logo_59_06.png";

const store = Store.store;
const emitter = Store.emitter;
const dispatcher = Store.dispatcher;

const HeaderWrapper = styled.nav`
  background: #171717;
  font-family: Poppins;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.25);
  z-index: 100;
  line-height: 1;
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
  }
`;

const NavWrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default function Header() {
  const [accountFmt, setAccountFmt] = useState(null);

  function getCompressed(addr) {
    const len = addr.length;
    return addr.substring(0, 6) + "..." + addr.substring(len - 5, len);
  }

  useEffect(() => {
    const storeUpdated = async () => {
      let accountAddress = store.getStore().account;
      if (accountAddress) {
        setAccountFmt(getCompressed(accountAddress));
        let contract = store.getStore().dapp_contract;
        if (contract) {
          //   var balance = await contract.methods.balanceOf(accountAddress).call();
          //   console.log("bal ", balance);
        }
      }
    };
    emitter.on("StoreUpdated", storeUpdated);
  });

  return (
    <HeaderWrapper
      className={"flex items-center justify-between flex-wrap p-2"}
    >
      <div className="ml-8">
        <img src={logo} />
      </div>
      <NavWrapper className="flex flex-row">
        {accountFmt ? (
          <span className="p-4 font-bold text-white">{accountFmt}</span>
        ) : (
          <span className="p-4 font-bold text-white">No account detected!</span>
        )}
        <Link
          to={`/`}
          className="p-2 lg:px-2 md:mx-0 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          style={{ fontSize: "25px" }}
        >
          🏠
        </Link>
        <Link
          to={`/about`}
          className="p-2 lg:px-2 md:mx-0 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          style={{ fontSize: "25px" }}
        >
          🤔
        </Link>
      </NavWrapper>
    </HeaderWrapper>
  );
}
