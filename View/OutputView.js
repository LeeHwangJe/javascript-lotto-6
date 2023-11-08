import { Console } from "@woowacourse/mission-utils";
import { NUMBER } from "../utils/Constant.js";

const MESSAGE = {
  OUTPUT_LOTTO_MATCH_RESULT_STATISTIC: "\n당첨 통계\n---",
  // OUTPUT_LOTTO
};

const OutputView = {
    async outputPurchaseLottoCount(lottoCount) {
      Console.print(`${lottoCount}개를 구매했습니다.`);
    },
  
    async outputRandomLottoNumbersList(RandomLottoNumbersList) {
      RandomLottoNumbersList.forEach((lottoList) => {
        Console.print(`[${lottoList.join(", ")}]`);
      });
    },
  
