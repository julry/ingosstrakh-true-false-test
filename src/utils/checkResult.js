import ShareButton from "../components/shared/buttons/ShareButton";
import RestartButton from "../components/shared/buttons/RestartButton";

const MINIMUM_SCORE = 5;

export default function checkResult(score) {
  if (score >= MINIMUM_SCORE) {
    return {
      text:
        "Вау! Ты разбираешься в космической сфере. А сколько фактов знают твои друзья? Поделись достижением на своей страничке в соцсети и участвуй в розыгрыше призов.",
      buttonText: "Поделиться \n результатом",
      component: ShareButton,
      success: true,
    };
  } else {
    return {
      text:
        "Неплохая попытка! Попробуй пройти еще раз, чтобы набрать достаточное количество баллов для участия в розыгрыше призов.",
      buttonText: `Попробовать \n еще раз`,
      component: RestartButton,
      success: false,
    };
  }
}
