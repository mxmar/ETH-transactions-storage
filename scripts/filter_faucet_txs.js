const fs = require("fs");
let faucetData = JSON.parse(fs.readFileSync('./files/lukso-2_faucet_txs.json'));

let clean = [];

for (tx of faucetData) {
    if (tx.txto !== '0xe7dF25E049521d42AcBdB642FdEA8996A74D29E1') {
        clean.push(
            {
                to: tx.txto,
                value: tx.value.toString()
            }
        )
    }
}


fs.writeFile('./files/nodriller.json', JSON.stringify(clean)
    , function (err) {
    if (err) return console.log(err);
});