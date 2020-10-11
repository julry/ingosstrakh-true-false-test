import { AnswerTypes } from "./answerTypes.config";

export const questions = [
  {
    id: "1",
    text:
      "На космическом корабле Crew Dragon в мае 2020 года одним из членов экипажа был игрушечный динозавр",
    correct: AnswerTypes.Truth,
    description: [
      "Космонавты часто используют во время полета мягкие игрушки для определения невесомости.",
      "Астронавты NASA выбрали игрушку динозавра, которого назвали Space Dino.",
    ],
  },
  {
    id: "2",
    text: "Человек не может заплакать в космосе",
    correct: AnswerTypes.Falsity,
    description: [
      "Заплакать в космосе может каждый.",
      "В невесомости слезы останутся на глазах и лице.",
    ],
  },
  {
    id: "3",
    text:
      "В комиксах Marvel Тони Старк (Железный человек) планирует первым колонизировать Марс",
    correct: AnswerTypes.Falsity,
    description: [
      "Колонизация Марса не входила в планы Тони Старка",
      "Хотя такой план есть у Илона Маска, по образу которого был создан Железный человек.",
    ],
  },
  {
    id: "4",
    text:
      "По возвращении на Землю космонавты всегда проходят таможенный контроль",
    correct: AnswerTypes.Falsity,
    description: [
      "Только однажды экипаж «Аполлона-11» обязали пройти таможенный контроль.",
      "Паспорт, номер рейса, маршрут (Луна — Гонолулу, Гавайи), — всё было указано подробно, вплоть до содержимого «багажа»: 22 килограмма пыли и лунных камней.",
    ],
  },
  {
    id: "5",
    text:
      "Космический аппарат “Маринет-1” потерпел крушение из-за отсутствия дефиса в коде",
    correct: AnswerTypes.Truth,
    description: [
      "В 1962 году «Маринер-1» потерпел аварию через несколько минут после старта.",
      "После отказа антенны выяснилось, что программа содержит ошибку: над одной буквой не было черточки. Её отсутствие поменяло смысл уравнения и привело к крушению.",
    ],
  },
  {
    id: "6",
    text: "Илон Маск застраховал свою ракету Falcon 9 в Ингосстрахе",
    correct: AnswerTypes.Truth,
    description: [
      "Ингосстрах был одной из компании, которая страховала запуск первой ступени ракеты-носителя Falcon 9, приземлившейся на морскую платформу Of Course I Still Love You в Атлантике.",
      "Это был первый в мире повторный полет ракеты орбитального класса.",
    ],
  },
  {
    id: "7",
    text:
      "Международное космическое право запрещает воздвигать и оставлять произведения искусства в космическом пространстве",
    correct: AnswerTypes.Falsity,
    description: [
      "На Луне есть единственный памятник — алюминиевая скульптура «Павший астронавт».Фигурка установлена 1 августа 1971 года командиром «Аполлона-15» Дэвидом Скоттом.",
    ],
  },
  {
    id: "8",
    text: "В космосе запрещено связывать себя узами брака",
    correct: AnswerTypes.Falsity,
    description: [
      "Космонавт Юрий Маленченко до полета в космос сделал предложение своей девушке. На станции он узнал, что его миссия продлевается",
      "Молодожены решили устроить свадьбу, глядя друг на друга через мониторы.",
    ],
  },
  {
    id: "9",
    text:
      "Фильм “Гагарин. Первый в космосе” длится ровно 108 минут, как и полет самого Гагарина",
    correct: AnswerTypes.Truth,
    description: [
      "Предпремьерный показ состоялся в День космонавтики. ",
      "Фильм, снятый кинокомпанией «Кремлин Филмз» при поддержке СПАО «Ингосстрах», получил положительные отзывы со стороны критиков.",
    ],
  },
  {
    id: "10",
    text:
      "Пока вы проходите этот тест, электромобиль Tesla Roadster бороздит бескрайние космические просторы",
    correct: AnswerTypes.Truth,
    description: [
      "В  2018 году сверхтяжёлая ракета, разработанная Space X, одной из компаний Илона Маска, отправила в космос электромобиль Tesla. ",
      "Поговаривают, что автомобиль может пробыть в космосе миллиарды лет.",
    ],
  },
  {
    id: "11",
    text:
      "Ингосстрах — одна из первых компаний, которая начала страховать сферу космоса",
    correct: AnswerTypes.Truth,
    description: [
      "Ингосстрах был в числе первых страховых компаний, кто разрабатывал правила страхования космической деятельности.",
    ],
  },
];
