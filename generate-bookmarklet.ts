import fs from "fs";

const filePath = "open-whatsapp-number.js";

const main = () => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const urlEncoded = encodeURIComponent(fileContent);
  console.log("\r\n");
  console.log(`javascript:${urlEncoded}`);
};

main();
