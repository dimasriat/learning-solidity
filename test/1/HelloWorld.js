const HelloWorld = artifacts.require("HelloWorld.sol");

contract("HelloWorld", () => {
	it('Should say "gm!"', async () => {
		const helloWorld = await HelloWorld.new();
		const message = await helloWorld.message.call();
		assert(message === "gm!");
	});
});
