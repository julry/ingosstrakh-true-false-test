import React from "react";
import { question1 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question1 = () => {
  const question = getQuestionById("1");
  return <QuestionWrapper question={question} image={question1} />;
};

export default Question1;
