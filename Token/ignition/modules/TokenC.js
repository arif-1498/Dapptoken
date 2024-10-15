const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("TokenModul", (m) => {
  

  const TokenContract = m.contract("TokenC");

  return {TokenContract };
});
