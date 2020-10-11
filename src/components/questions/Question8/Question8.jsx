import React from "react";
import { question8 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question8 = () => {
  const question = getQuestionById("8");
  return <QuestionWrapper question={question} image={question8} />;
};

export default Question8;
