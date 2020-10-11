import React from "react";
import { question9 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question9 = () => {
  const question = getQuestionById("9");
  return <QuestionWrapper question={question} image={question9} />;
};

export default Question9;
