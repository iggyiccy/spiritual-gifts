import useAnswers from "hooks/useAnswers";
import useQuestionSet from "hooks/useQuestionSet";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { questionsPerPage, setsOfQuestions } from "utils/constants";
import SubmitAssessmentLink from "../SubmitAssessmentLink";
import styles from "./PaginationControls.module.css";

const PaginationControls = () => {
  const params = useParams<"questionSetNumber">();
  const questionSetNumber = useMemo(
    () => Number(params.questionSetNumber),
    [params.questionSetNumber]
  );
  const isAbleToGoBack = useMemo(
    () => questionSetNumber !== 1,
    [questionSetNumber]
  );
  const isAbleToGoForwards = useMemo(
    () => questionSetNumber !== setsOfQuestions,
    [questionSetNumber]
  );
  const { unansweredQuestions } = useAnswers();
  const currentPageQuestions = useQuestionSet(questionSetNumber);
  const unansweredQuestionsFromPreviousPages = useMemo(
    () =>
      unansweredQuestions.filter(
        (question) => question.number < currentPageQuestions[0].number
      ),
    [currentPageQuestions, unansweredQuestions]
  );
  const isAbleToFinish = useMemo(
    () => unansweredQuestions.length === 0,
    [unansweredQuestions.length]
  );
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to="/">主頁</Link>
        {isAbleToGoBack && (
          <Link to={`/question-set/${questionSetNumber - 1}`}>上一頁</Link>
        )}
        {isAbleToGoForwards && (
          <Link to={`/question-set/${questionSetNumber + 1}`}>下一頁</Link>
        )}
        {isAbleToFinish && <SubmitAssessmentLink />}
      </div>
      {unansweredQuestionsFromPreviousPages.length > 0 && (
        <div>
          <p>請回去回答以下問題：</p>
          {unansweredQuestionsFromPreviousPages.map((question) => (
            <span key={question.number}>
              <Link
                to={`/question-set/${Math.ceil(
                  question.number / questionsPerPage
                )}`}
              >
                {question.number}
              </Link>
              ,{" "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaginationControls;
