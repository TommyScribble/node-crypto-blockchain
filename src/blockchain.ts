const SHA256 = require('crypto-js/sha256');

export class Block {
	index: number;
	current_time: string;
	info: any;
	nextHash: string;
	hash: string;

	constructor(index: number, current_time: string, info: any, nextHash = " ") {
		this.index = index;
		this.current_time = current_time;
		this.info = info;
		this.nextHash = nextHash;
		this.hash = this.computeHash();
	}
	computeHash() {
		return SHA256(
			this.info +
				this.nextHash +
				this.current_time +
				JSON.stringify(this.info)
		).toString();
	}
}

export class Blockchain {
	blockchain: Block[];
	
	constructor() {
		this.blockchain = [this.initGenisisBlock()];
	}

	initGenisisBlock() {
		return new Block(0, "01/12/2021", "Initial block in the chain", "0");
	}

	latestBlock() {
		return this.blockchain[this.blockchain.length - 1];
	}

	addNewBlock(newBlock: Block) {
		newBlock.nextHash = this.latestBlock().hash;
		newBlock.hash = newBlock.computeHash();
		this.blockchain.push(newBlock);
	}

	checkValid() {

		for (let i = 0; i < this.blockchain.length; i++) {

			// check current block hash is = to  current block hash
			if (this.blockchain[i] !== this.blockchain[i].computeHash()) {
				return false
			}

			// check current block has different hash to previous block
			if (this.blockchain[i].nextHash !== this.blockchain[i-1].hash) {
				return false
			}

			return true
		}
	}
}
