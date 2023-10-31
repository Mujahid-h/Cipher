const polyalphabeticCipher = (text, key, action) => {
  return text
    .split("")
    .map((char, i) => {
      if (char.match(/[a-zA-Z]/)) {
        const shiftValue = char === char.toLowerCase() ? 97 : 65;
        const keyChar = key[i % key.length];
        const keyShift = keyChar === keyChar.toLowerCase() ? 97 : 65;
        const shift = action === "encrypt" ? 1 : -1;
        const code =
          ((char.charCodeAt(0) -
            shiftValue +
            shift * (keyChar.charCodeAt(0) - keyShift) +
            26) %
            26) +
          shiftValue;
        return String.fromCharCode(code);
      }
      return char;
    })
    .join("");
};

// Example uSage
const text = "HELLO";
const key = "KEY";

const polyalphabeticEncrypted = polyalphabeticCipher(text, key, "encrypt");
const polyalphabeticDecrypted = polyalphabeticCipher(
  polyalphabeticEncrypted,
  key,
  "decrypt"
);

console.log("Text:", text);
console.log("Polyalphabetic Encrypted:", polyalphabeticEncrypted);
console.log("Polyalphabetic Decrypted:", polyalphabeticDecrypted);
