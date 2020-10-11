import React from "react";
import { question10 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question10 = () => {
  const question = getQuestionById("10");
  return <QuestionWrapper question={question} image={question10} />;
};

export default Question10;
