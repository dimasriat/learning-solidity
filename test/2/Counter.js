const Counter = artifacts.require("2/Counter.sol");

contract("Counter", () => {
	it("Has count variable with the values = 0 as initial value", async () => {
		const counter = await Counter.new();
		const count = await counter.count.call();
		assert(count.toString() === "0");
	});
	it("can increase and decrease count value", async () => {
		const counter = await Counter.new();
		await counter.incrementCount();
		assert((await counter.count.call()).toString() === "1");
		await counter.incrementCount();
		await counter.incrementCount();
		assert((await counter.count.call()).toString() === "3");
		await counter.decrementCount();
		assert((await counter.count.call()).toString() === "2");
	});
});
