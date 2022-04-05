const EtherUnits = artifacts.require("8/EtherUnits.sol");

contract("EtherUnits", () => {
	it("prove 1 wei == 1 && 1 ether == 1e18", async () => {
		const eu = await EtherUnits.new();

		const isOneWei = await eu.isOneWei.call();
		const isOneEther = await eu.isOneEther.call();

		assert(isOneWei.toString() === "true");
		assert(isOneEther.toString() === "true");
	});
});
