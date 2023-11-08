import { NUMBER } from "../utils/Constant.js";

const ERROR = {
  LIMIT_LOTTO_NUMBERS: `[ERROR] 로또 번호는 ${NUMBER.TOTAL_LOTTO_NUMBER}개여야 합니다.`,
  STRING_IN_LOTTO_NUMBERS: "[ERROR] 로또 번호에 문자가 있습니다.",
  AREA_OVER_LOTTO_NUMBERS: `[ERROR] 로또 번호는 ${NUMBER.MIN_LOTTO_NUMBER}부터 ${NUMBER.MAX_LOTTO_NUMBER}사이의 숫자여야 합니다.`,
  SAME_NUMBER_IN_LOTTO_NUMBERS: `[ERROR] 로또 번호에 중복된 숫자가 있습니다.`,
};
