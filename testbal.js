const IERC20 = artifacts.require("IERC20");

contract("IERC20", (accounts) => {
  const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const DAI_WHALE = "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503";

  it('get DAI balance' ,async () => {
    const dai = await IERC20.at(DAI);
    const bal = await dai.balanceOf(DAI_WHALE);
    console.log(`bal: ${bal}`);
  });
});