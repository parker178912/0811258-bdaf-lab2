const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/dist/hdkey');
function generateAddress(startnum){
    while(true){
        const mnemonic = bip39.generateMnemonic()
        // console.log(mnemonic)
        const seed = bip39.mnemonicToSeedSync(mnemonic)
        // console.log(seed)
        const hdWallet = hdkey.default.fromMasterSeed(seed)
        // console.log(hdWallet)
        const keyPair1 = hdWallet.derivePath("m/44'/60'/0'/0/0")
        // console.log(keyPair1)
        const wallet1 = keyPair1.getWallet()
        // console.log(wallet1)
        const address1 = wallet1.getAddressString()
        console.log("Try:",address1)
        if (address1.startsWith(startnum, 2)) {
            console.log("Success")
            return {address1, mnemonic};
        } else{
            console.log("Fail")
        }
    }
}
console.log("Lab 2, write by 0811258 鄭傳嶧.")
console.log("Task : Create a vanity address generator to match the prefix.")
prefix = '6'
add_menm = generateAddress(prefix)
console.log("The address that matches the prefix is : ", add_menm.address1)
console.log("The menmonic phrase is : ", add_menm.mnemonic)
