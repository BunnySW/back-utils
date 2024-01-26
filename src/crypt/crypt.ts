import * as crypt from 'bcryptjs';
import * as cryptojs from 'crypto-js';
import { ICryptUtil } from './i-crypt';

class CryptUtil implements ICryptUtil {
  private readonly cost: string;
  private readonly key: string;

  constructor(params?: { cost?: string, key?: string }) {
    this.cost = params?.cost || crypt.genSaltSync(Number(process.env.CRYPT_COST));
    this.key = params?.key || process.env.TOKEN_CRYPT_KEY;
  }

  async hash(text: string) {
    return crypt.hash(text, this.cost);
  }

  async compareHash(text: string, hashText: string) {
    return await crypt.compare(text, hashText);
  }

  encryptAES(value?: string): string {
    try {
      if (value) {
        const encrypt = cryptojs.AES.encrypt(value, this.key).toString();
        return encrypt;
      } else {
        return value
      }
    } catch (error) {
      return value;
    }     
  }

  decryptAES(value?: string): string {
    try {
      if (value) {
        const bytes = cryptojs.AES.decrypt(value, this.key);
        const decript = bytes.toString(cryptojs.enc.Utf8);
    
        return decript || value;
      } else {
        return value
      }
    } catch (error) {
      return value;
    }
  }

  decriptAllObject(obj: any) {
    for (let propriedade in obj) {
      if (typeof obj[propriedade] === "object") {        
        this.decriptAllObject(obj[propriedade]);
      } else {
        obj[propriedade] = this.decryptAES(obj[propriedade]);
      }
    }
  }
}

const cryptUtil = new CryptUtil();

export { CryptUtil, cryptUtil };