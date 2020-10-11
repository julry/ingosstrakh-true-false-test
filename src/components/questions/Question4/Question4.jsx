import React from "react";
import { question4 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question4 = () => {
  const question = getQuestionById("4");
  return <QuestionWrapper question={question} image={question4} />;
};

export default Question4;
