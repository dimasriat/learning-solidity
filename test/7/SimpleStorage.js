const SimpleStorage = artifacts.require("7/SimpleStorage.sol");

contract("SimpleStorage", () => {
	it("can read and write data via get and set", async () => {
		const ss = await SimpleStorage.new();

		const val = await ss.get();
		assert(val.toString() === "69");

		await ss.set(420);

		const val2 = await ss.get();
		assert(val2.toString() === "420");
	});
});
