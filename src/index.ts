import { Block, Blockchain } from "./blockchain";

let scribbleCoin = new Blockchain;

scribbleCoin.addNewBlock(new Block(1, "01/12/2021", {sender: "Dave", recipient: "Sam", quantity: 20}));
scribbleCoin.addNewBlock(new Block(1, "01/12/2021", {sender: "Will", recipient: "Shawn", quantity: 75}));
scribbleCoin.addNewBlock(new Block(1, "01/12/2021", {sender: "Simon", recipient: "Rob", quantity: 534}));

console.log(JSON.stringify(scribbleCoin, null, 4));