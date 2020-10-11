import React from "react";
import { question5 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question5 = () => {
  const question = getQuestionById("5");
  return <QuestionWrapper question={question} image={question5} />;
};

export default Question5;
