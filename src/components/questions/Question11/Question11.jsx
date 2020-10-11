import React from "react";
import { question11 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question11 = () => {
  const question = getQuestionById("11");
  return <QuestionWrapper question={question} image={question11} />;
};

export default Question11;
