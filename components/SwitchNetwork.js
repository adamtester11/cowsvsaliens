import ethIcon from "../assets/img/eth.png";
import { Web3UserContext } from "../context";
import { switchNetwork } from "../context/utils";
import { acceptedChainId } from "../utils/chainConfigs";

export default function SwitchNetwork() {
  const {
    contextState: { provider },
  } = Web3UserContext();

  const onSwitchNetwork = async () => {
    try {
      await switchNetwork(provider, acceptedChainId);
    } catch (err) {}
  };
  return (
    <button className="btn btn-secondary btn-rounded" onClick={onSwitchNetwork}>
      Switch Network&nbsp;
      <picture>
        <img src={ethIcon.src} className="eth_icon" alt="ethereum network" />
      </picture>
    </button>
  );
}
