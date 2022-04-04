const DataTypes = artifacts.require("3/DataTypes.sol");

contract("DataTypes", () => {
	it("have default value for unassigned variable", async () => {
		const dt = await DataTypes.new();
		const defaultBoo = await dt.defaultBoo.call();
		const defaultUint = await dt.defaultUint.call();
		const defaultInt = await dt.defaultInt.call();
		const defaultAddr = await dt.defaultAddr.call();
		assert(defaultBoo.toString() === "false");
		assert(defaultUint.toString() === "0");
		assert(defaultInt.toString() === "0");
		assert(
			defaultAddr.toString() ===
				"0x0000000000000000000000000000000000000000"
		);
	});
});
