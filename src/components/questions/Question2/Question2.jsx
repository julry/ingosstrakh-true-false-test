import React from "react";
import { question2 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question2 = () => {
  const question = getQuestionById("2");
  return <QuestionWrapper question={question} image={question2} />;
};

export default Question2;
