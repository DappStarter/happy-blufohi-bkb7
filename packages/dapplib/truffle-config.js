require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stomach curtain stereo social half end army gasp'; 
let testAccounts = [
"0x468e85a4b1a6d3da216fdb3a5fd7069c3a05a767b9bf19e333f6ac44415ce97b",
"0x83957d7f2b02affc8165c5475f8a192bd36f584fa7286e37766fbed505b8df51",
"0x08fd386cd354093daa26960073e3a2713ab5af8c4022e980e04bad82b8ce93fa",
"0x64948e2cfc3ac72a7c81c31a9b6c1c4312f9c9b2c6470d54cf8c5b2f2cdbfe24",
"0x88cea599f13380d8a4d395f6a1a21f1175bb1d165430b76898cffe2b28bc4ff9",
"0x82ddb674aae1c7e36b0ae068488d5620c6d07dc0f422ec89f83e3d02376c4434",
"0xe6f615f5eb8379f0aea8bbe675e4a93523bdac8002f2fd510794a2fc070b4c91",
"0x0d00c717f4bca3782f6be0ab734eac27dd08f969924c88403a046b74c1f94fe7",
"0xcf3631d7dd578679ffdd0625748aeb0c63f7e8ca37f154d7d226fa5251b1d0b0",
"0xccab2e6aaa2415917f2b5d5e9c671934d776076229006773c9ba7b2405b16566"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

