/**
 * 栈应用
 */
import Stack from "./stack";

export default class MulBase {
  /**
   * 数字进制转换
   * 二八
   *  (1) 最高位为 n % b，将此位压入栈。
   *  (2) 使用 n/b 代替 n。
   *  (3) 重复步骤 1 和 2，直到 n 等于 0，且没有余数。
   *  (4) 持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符 串形式。
   * @param num
   * @param base 进制
   */
  mulBase(num: number, base: number) {
    let s = new Stack();
    do {
      s.push(num % base);
      num = Math.floor((num /= base));
    } while (num > 0);
    let converted = "";
    while (s.length() > 0) {
      converted += s.pop();
    }
    return converted;
  }
}
