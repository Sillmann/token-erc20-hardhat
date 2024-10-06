// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProtoCoinModule = buildModule("ProtoCoinModule", (m) => {

  const protocoin = m.contract("ProtoCoin");

  return { protocoin };
});

export default ProtoCoinModule;
