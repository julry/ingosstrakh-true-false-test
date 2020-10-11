import React from "react";
import { question6 } from "../../../constants/images";
import { getQuestionById } from "../../../utils/getQuestionbyId";
import QuestionWrapper from "../../QuestionWrapper";

const Question6 = () => {
  const question = getQuestionById("6");
  return <QuestionWrapper question={question} image={question6} />;
};

export default Question6;
