const Gas = artifacts.require("9/Gas.sol");

contract("Gas", () => {
	it("must be doing inifinite loops", async () => {
		const gg = await Gas.new();
		// await gg.forever();
	});
});
