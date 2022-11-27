import { Web3UserContext } from "../context";

export default function WalletButton() {
  const {
    walletConnect,
    contextState: { account, isWalletConnected },
  } = Web3UserContext();
  return (
    <button className="btn btn-primary btn-rounded" onClick={walletConnect}>
      Connect Wallet&nbsp;<i className="fa fa-wallet"></i>
    </button>
  );
}
