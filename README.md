# 0811258_bdaf_lab2
* Task：Create a vanity address generator to match the prefix.

Before start, you have to install the package：
```
npm install bip39 ethereumjs-wallet --save
```
Note：BIP39 is a way to express the seed in words that are easy to remember and write. It's generally composed of 12 words, which called mnemonic code (phrase).
## Code explain :
### Import package : 
```javascript=
const bip39 = require('bip39')
const hdkey = require('ethereumjs-wallet/hdkey')
```
'bip39'：randomly generate new mnemonic code.
'ethereumjs-wallet/hdkey'：use it to create a HD wallet.
### Function
```javascript=
function generateAddress(startnum){
    while(true){
        // Generate mnemonic code
        const mnemonic = bip39.generateMnemonic()
        
        // Get seed from mnemonic code
        const seed = bip39.mnemonicToSeedSync(mnemonic)
        
        // Use seed to generate a HD wallet
        const hdWallet = hdkey.default.fromMasterSeed(seed)
        
        // Generate the first set of keypairs for the first account in wallet which 
        // is derived from the Master Key according to the path "m/44'/60'/0'/0/0".
        const keyPair1 = hdWallet.derivePath("m/44'/60'/0'/0/0")
        
        // Get wallet of the first keypair
        const wallet1 = keyPair1.getWallet()
        
        // Get the address of the first wallet
        const address1 = wallet1.getAddressString()
        
        // Check if the prefix match the wallet address, if so, print "Success"
        // and then return the address and mnemonic phrase. Otherwise, print "Fail".
        if (address1.startsWith(startnum, 2)) {
            console.log("Success")
            return {address1, mnemonic};
        } else{
            console.log("Fail")
        }
    }
} 
```
### Main code
```javascript=
console.log("Lab 2, write by 0811258 鄭傳嶧.")
console.log("Task : Create a vanity address generator to match the prefix.")
prefix = '6'    // Change the prefix here !
add_menm = generateAddress(prefix)
console.log("The address that matches the prefix is : ", add_menm.address1)
console.log("The menmonic phrase is : ", add_menm.mnemonic)
```
