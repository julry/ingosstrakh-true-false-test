import { resolve } from "url";
import { introImage } from "../constants/images";

const shareText =
  "Разбираюсь в космической сфере не хуже Илона Маска 😎 Составишь мне конкуренцию?";

export const getShareParams = () => {
  const url = [
    window.location.protocol,
    "//",
    window.location.host,
    window.location.pathname,
  ].join("");

  const shareTitle = "Лидер перемен #какойтылидер #северсталь";
  const shareDescription = "#какойтылидер #северсталь";
  const shareImage = resolve(url, introImage);

  return {
    url,
    title: shareTitle,
    description: shareDescription,
    image: shareImage,
  };
};
