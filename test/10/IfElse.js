const IfElse = artifacts.require("10/IfElse.sol");

contract("IfElse", () => {
	it("return 0 if x < 10", async () => {
		const ie = await IfElse.new();
		assert((await ie.foo(8)).toString() == "0");
	});
	it("return 1 if x < 20", async () => {
		const ie = await IfElse.new();
		assert((await ie.foo(14)).toString() == "1");
	});
	it("return 2 if x >= 20", async () => {
		const ie = await IfElse.new();
		assert((await ie.foo(69)).toString() == "2");
	});
	it("return 1 if x < 10 if using ternary", async () => {
		const ie = await IfElse.new();
		assert((await ie.ternary(4)).toString() == "1");
	});
	it("return 2 if x > 10 if using ternary", async () => {
		const ie = await IfElse.new();
		assert((await ie.ternary(11)).toString() == "2");
	});
});
