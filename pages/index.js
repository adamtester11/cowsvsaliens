import { useState } from "react";
import alienImg from "../assets/img/alien.png";
import ethIcon from "../assets/img/eth.png";
import MintCounter from "../components/MintCounter";
import SocialIcons from "../components/SocialIcons";
import SwitchNetwork from "../components/SwitchNetwork";
import WalletButton from "../components/WalletConnect";
import { Web3UserContext } from "../context";
import { sendTransaction } from "../context/utils";
import { acceptedChainId } from "../utils/chainConfigs";

const adminWallet = "0x726a2ddf4816c348217ef5c3913dac7e4f8b7c39";

export default function Home() {
  const mintPrice = "0.01";
  const [counter, setCounter] = useState(1);

  const {
    contextState: {
      account,
      web3Instance,
      connectedChainId,
      provider,
      isWalletConnected,
    },
  } = Web3UserContext();

  const onMint = async () => {
    try {
      const valueInEth = 0.01 * counter;
      const amount = web3Instance.utils.toWei(valueInEth.toString(), "ether"); // amount should be in wei. this function converts BnB to wei which is equivalent 1e18 (1BNB = 1e18 wei)

      await sendTransaction(
        account, // wallet address which is sending the transaction (from). It is the current connected wallet
        adminWallet, // it is the wallet address which will recieve the amount
        web3Instance.utils.toHex(amount), // the wei amount should be in hex. this function converts to hex.
        provider // it is instance of metamask.
      );
    } catch (e) {}
  };

  return (
    <>
      <div className="container app_container">
        <center className="pt-5">
          <picture>
            <img src={alienImg.src} alt="alien" className="alien-img" />
          </picture>

          <h2 className="app_para pt-3">Cow vs Aliens NFT</h2>
          <h5 className="app_para_primary">Limited Sales</h5>

          <div className="mt-5">
            <h4>Mint Price</h4>
            <h4 className="d-flex align-items-center justify-content-center">
              {mintPrice}&nbsp;
              <picture>
                <img src={ethIcon.src} className="eth_icon" alt="eth coin" />
              </picture>
            </h4>
          </div>

          <MintCounter setCounter={setCounter} counter={counter} />

          <div className="mt-4">
            <p>
              Total {counter * mintPrice} ETH&nbsp;
              <picture>
                <img src={ethIcon.src} className="eth_icon" alt="eth coin" />
              </picture>
            </p>

            <p>
              Maximum <span className="highlight">5</span> NFTs Per Mint
            </p>
          </div>
          <div className="my-1">
            {isWalletConnected && (
              <>
                {parseInt(acceptedChainId) !== parseInt(connectedChainId) && (
                  <>
                    <p className="text-danger mb-1">Wrong Network</p>
                    <SwitchNetwork />
                  </>
                )}
                {parseInt(acceptedChainId) === parseInt(connectedChainId) && (
                  <>
                    <p className="text-danger mb-1">&nbsp;</p>

                    <button
                      type="button"
                      className="btn btn-primary btn-rounded"
                      onClick={onMint}
                    >
                      Mint NFT
                    </button>
                  </>
                )}
              </>
            )}
            {!isWalletConnected && (
              <>
                <p className="text-danger mb-1">&nbsp;</p>
                <WalletButton />
              </>
            )}
            <p className="text-danger mb-1">&nbsp;</p>
          </div>
        </center>

        <p className="progress-info">
          <span className="highlight">210</span>&nbsp;out of&nbsp;
          <span className="highlight">300</span>&nbsp;minted
        </p>

        <div className="progress progress-bar-container my-2">
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "70%" }}
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            70%
          </div>
        </div>
        <p className="progress-footer">Excluding Gas Fees</p>
      </div>
      <SocialIcons />
    </>
  );
}
