require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth shift pupil hover deposit foster segment'; 
let testAccounts = [
"0x278989a999637e7b3d9d421ce0e00cfe86c88682d5e3dad668212bbb5a3f1508",
"0xfea0d4a800072bd3eb67873132342f06eb753155f919feab178bf802453779d9",
"0x8878b501f2d299831d6c42aa9d396c927e9c1935e0f3435e3e33bceb097ea6ab",
"0xe0d681361501fe2c6730fad5f4cb4896cd293219d14a0d50325935cf585ef6e5",
"0x26bb5b32fb7d9d4186d4fe863d65765fd0bd71f48c3000da823a2e9f7648c8b6",
"0x4ea0318eb95da8e6f936fe022d5aa12a96e10e9958107ff72d24016537a311a5",
"0x3d0690f758ce5d03718d28a23381aa35690c746aef3755e7e96189e4e7f8e261",
"0x5c12f1ef68bad3f92056e2389276957125e0801d9e12e71b7a46170f9e3e11b0",
"0x104e8e9c428561048294fb91ca37e4df370794277f525ad9c3bccb74d20fc7d8",
"0x224e79ab705d4eff1901d62ae57bb4d4f032716dd64621c48336335ad8251220"
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
            version: '^0.5.11'
        }
    }
};
