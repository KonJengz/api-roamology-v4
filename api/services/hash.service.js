import argon2 from "argon2";
const hashService = {};

hashService.hash = (password) => {
  return argon2.hash(password, {
    // type: argon2.argon2id default
    timeCost: 4, // จำนวนรอบ (default คือ 3)
    // memoryCost: 4096, // หน่วยความจำที่ใช้เป็น KB (default คือ 4096)
    // parallelism: 1, // จำนวน thread ที่ใช้ (default คือ 1)
  });
};

hashService.verify = (planingText, hash) => {
  console.log("planingText", planingText);
  console.log("hash", hash);
  return argon2.verify(hash, planingText);
};

export default hashService;
