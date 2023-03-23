import nextBase64 from 'next-base64';
function base64Encode(str){
    console.log('before encoding',str)
    const base64Encoded = nextBase64.encode(str);
    console.log('after encoding',base64Encoded)
    return base64Encoded;
}
function base64Decode(str){
    const base64Decoded = nextBase64.decode(str);
    return base64Decoded;
}
module.exports = {
    base64Encode,
    base64Decode
}