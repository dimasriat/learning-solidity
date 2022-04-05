const Immutable = artifacts.require("6/Immutable.sol");

contract("Immutable", () => {
	it("can set immutable via constructor", async () => {
		const im = await Immutable.new(69);
		const MY_ADDRESS = await im.MY_ADDRESS.call();
		const MY_UINT = await im.MY_UINT.call();
	});
});