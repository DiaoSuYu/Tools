const ethers = require('ethers');
const fs = require('fs')

// 生成账号数
let accountNumber = 10;

async function main() {

    let header="PrivateKey, Address, Mnemonic\n";
    fs.appendFile('AccountData.txt', header, (err) => {
        if (err) throw err;
        console.log('写入标题成功');
    });
    for (let index = 1; index < accountNumber + 1; index++) {

        let tmpWallet = ethers.Wallet.createRandom();
        let PrivateKey=tmpWallet.privateKey
        let Address=(await tmpWallet.getAddress()).toString()
        let Mnemonic=tmpWallet.mnemonic.phrase

        console.log(index+1);
        console.log(PrivateKey);
        console.log(Address);
        console.log(Mnemonic);
        console.log('------------------------------------------------------------------------------------\n');
        
        fs.appendFile('AccountData.txt', PrivateKey + ', ' + Address + ', ' + Mnemonic + '\n', (err) => {
            if (err) throw err;
            console.log('写入第' + index +'账户数据');
        });
    }
}
main()
