import React from "react";
import { question7 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question7 = () => {
  const question = getQuestionById("7");
  return <QuestionWrapper question={question} image={question7} />;
};

export default Question7;
