import React from "react";
import { question3 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question3 = () => {
  const question = getQuestionById("3");
  return <QuestionWrapper question={question} image={question3} />;
};

export default Question3;
