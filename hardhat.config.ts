import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "local",
  networks: {
    local: {
      chainId: 31337,
      url: "http://127.0.0.1:8545/",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk"
      }
    }
  },
};

export default config;
