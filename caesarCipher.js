const caesarCipher = (text, key, action) => {
  const shift = action === "encrypt" ? key : -key;
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        const shiftValue = char === char.toLowerCase() ? 97 : 65;
        const code =
          ((char.charCodeAt(0) - shiftValue + shift) % 26) + shiftValue;
        return String.fromCharCode(code);
      }
      return char;
    })
    .join("");
};

// Example usage
const text = "HELLO";
const key = 3;

const encryptedText = caesarCipher(text, key, "encrypt");
const decryptedText = caesarCipher(encryptedText, key, "decrypt");

console.log("Text:", text);
console.log("Encrypted Text:", encryptedText);
console.log("Decrypted Text:", decryptedText);
