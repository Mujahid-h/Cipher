const oneTimePadCipher = (text, key, action) => {
  if (text.length !== key.length) {
    throw new Error("Text and key must have the same length");
  }

  return text
    .split("")
    .map((char, i) => {
      const charCode = char.charCodeAt(0) ^ key.charCodeAt(i);
      return String.fromCharCode(charCode);
    })
    .join("");
};

//Example Usag
const text = "HELLO";
const key = "KEY";
const oneTimePadKey = "SECRET";

const oneTimePadEncrypted = oneTimePadCipher(text, oneTimePadKey, "encrypt");
const oneTimePadDecrypted = oneTimePadCipher(
  oneTimePadEncrypted,
  oneTimePadKey,
  "decrypt"
);

console.log("Rext:", text);
console.log("One-Time Pad Encrypted:", oneTimePadEncrypted);
console.log("One-Time Pad Decrypted:", oneTimePadDecrypted);
