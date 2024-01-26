export interface ICryptUtil {
    hash: (text: string) => any;
    compareHash: (text: string, hashText: string) => Promise<boolean>;
    encryptAES: (value?: string) => string;
    decryptAES: (value?: string) => string;
    decriptAllObject: (obj: any) => void;
  }