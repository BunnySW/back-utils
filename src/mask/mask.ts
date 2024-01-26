import { IMaskUtil, InputMasksEnum } from "./i-mask";
import {maskJs} from 'mask-js';

class MaskUtil implements IMaskUtil {

  formatMask = (text: string, maskFormat: InputMasksEnum) => {
    return maskJs(maskFormat, text)
  }

  removeMask = (text?: string): string => {
    if (text) {
      const regularExpression = /[^\d]/g;
      const textWithoutMask = text.replace(regularExpression, '');
      return textWithoutMask;
    } else {
      return text || ''
    }
  }
  
}

const maskUtil = new MaskUtil();

export { MaskUtil, maskUtil };