/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Buffer, createCipheriv, createDecipheriv } from 'browser-crypto';

export const encrypt2 = async (text) => {
  const cipher = await createCipheriv('aes-256-cbc', 'khdskjhdfjhdkhufdnkjngfdlkndahew', 'ssOuspauNRqifhsD');
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return {
    k: encrypted.toString('hex'),
  };
};
// {"success":"true","message":"login successful","data":"SRM24rijPvd9xg7MhvhT38dKBGcdUx","clearance":"staff"}
// encrypt
export const encrypt = (text, encIv, encryptKey) => {
  const cipher = createCipheriv('aes-256-cbc', encryptKey, encIv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  const encryptedHex = encrypted.toString('hex');

  return { k: encryptedHex };
};

// decrypt
export const decrypt = (text, encIv, encryptKey) => {
  const encryptedText = Buffer.from(text, 'hex');
  const decipher = createDecipheriv('aes-256-cbc', Buffer.from(encryptKey), encIv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
