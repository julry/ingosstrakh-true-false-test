import Intro from "./components/Intro";
import Question1 from "./components/questions/Question1/Question1";
import Question2 from "./components/questions/Question2/Question2";
import Question3 from "./components/questions/Question3/Question3";
import Question4 from "./components/questions/Question4/Question4";
import Question5 from "./components/questions/Question5/Question5";
import Question6 from "./components/questions/Question6/Question6";
import Question7 from "./components/questions/Question7/Question7";
import Question8 from "./components/questions/Question8/Question8";
import Question9 from "./components/questions/Question9/Question9";
import Question10 from "./components/questions/Question10/Question10";
import Question11 from "./components/questions/Question11/Question11";
import Final from "./components/Final";

import {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  introImage,
} from "./constants/images";
import QuestionExplanation1 from "./components/questions/Question1/QuestionExplanation1";
import QuestionExplanation2 from "./components/questions/Question2/QuestionExplanation2";
import QuestionExplanation3 from "./components/questions/Question3/QuestionExplanation3";
import QuestionExplanation4 from "./components/questions/Question4/QuestionExplanation4";
import QuestionExplanation5 from "./components/questions/Question5/QuestionExplanation5";
import QuestionExplanation6 from "./components/questions/Question6/QuestionExplanation6";
import QuestionExplanation7 from "./components/questions/Question7/QuestionExplanation7";
import QuestionExplanation8 from "./components/questions/Question8/QuestionExplanation8";
import QuestionExplanation9 from "./components/questions/Question9/QuestionExplanation9";
import QuestionExplanation10 from "./components/questions/Question10/QuestionExplanation10";
import QuestionExplanation11 from "./components/questions/Question11/QuestionExplanation11";

export const ScreenType = {
  Intro: "intro",
  Question: "question",
  Final: "final",
};

export const screens = [
  {
    name: "intro",
    component: Intro,
    type: ScreenType.Intro,
    preloadImages: [question1],
    image: introImage,
  },
  {
    name: "question-1",
    component: Question1,
    explanation: QuestionExplanation1,
    type: ScreenType.Question,
    preloadImages: [question2],
    image: question1,
  },
  {
    name: "question-2",
    component: Question2,
    explanation: QuestionExplanation2,
    type: ScreenType.Question,
    preloadImages: [question3],
    image: question2,
  },
  {
    name: "question-3",
    component: Question3,
    explanation: QuestionExplanation3,
    type: ScreenType.Question,
    preloadImages: [question4],
    image: question3,
  },
  {
    name: "question-4",
    component: Question4,
    explanation: QuestionExplanation4,
    type: ScreenType.Question,
    preloadImages: [question5],
    image: question4,
  },
  {
    name: "question-5",
    component: Question5,
    explanation: QuestionExplanation5,
    type: ScreenType.Question,
    preloadImages: [question6],
    image: question5,
  },
  {
    name: "question-6",
    component: Question6,
    explanation: QuestionExplanation6,
    type: ScreenType.Question,
    preloadImages: [question7],
    image: question6,
  },
  {
    name: "question-7",
    component: Question7,
    explanation: QuestionExplanation7,
    type: ScreenType.Question,
    preloadImages: [question8],
    image: question7,
  },
  {
    name: "question-8",
    component: Question8,
    explanation: QuestionExplanation8,
    type: ScreenType.Question,
    preloadImages: [question9],
    image: question8,
  },
  {
    name: "question-9",
    component: Question9,
    explanation: QuestionExplanation9,
    type: ScreenType.Question,
    preloadImages: [question10],
    image: question9,
  },
  {
    name: "question-10",
    component: Question10,
    explanation: QuestionExplanation10,
    type: ScreenType.Question,
    preloadImages: [question11],
    image: question10,
  },
  {
    name: "question-11",
    component: Question11,
    explanation: QuestionExplanation11,
    type: ScreenType.Question,
    image: question11,
  },
  {
    name: "final",
    component: Final,
    type: ScreenType.Final,
  },
];
