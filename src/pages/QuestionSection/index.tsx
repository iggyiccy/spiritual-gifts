import { Fragment, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import useAnswers from "hooks/useAnswers";
import classNames from "classnames";
import styles from "./QuestionSection.module.css";
import PaginationControls from "./components/PaginationControls";
import { Helmet } from "react-helmet-async";
import usePercentageDone from "hooks/usePercentageDone";

interface Answer {
  value: 0 | 1 | 2 | 3;
  textContent: string;
}

const QuestionSection = () => {
  const params = useParams<"questionSetNumber">();
  const questionSetNumber = Number(params.questionSetNumber);
  const { answerQuestion, questionsWithAnswers } =
    useAnswers(questionSetNumber);
  const answers = useMemo<Answer[]>(
    () => [
      { value: 0, textContent: "一點都不，從不" },
      { value: 1, textContent: "有時，偶爾" },
      { value: 2, textContent: "大多數時候，通常是真的" },
      { value: 3, textContent: "一貫，絕對是真的" },
    ],
    []
  );
  const percentageDone = usePercentageDone();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  }, [questionSetNumber]);
  return (
    <div ref={containerRef} className={styles.container}>
      <Helmet>
        <title>屬靈恩賜 - {percentageDone}% 完畢</title>
      </Helmet>
      <header>
        <PaginationControls />
      </header>
      <main className="text-primary px-12">
        {questionsWithAnswers.map((question) => {
          const fieldsetId = `${styles.question}-${question.number}`;
          return (
            <fieldset
              key={fieldsetId}
              id={fieldsetId}
              className={styles.fieldSet}
            >
              <legend>
                <span>{question.number}) </span>
                <span>{question.textContent}</span>
              </legend>
              <div className={styles.answersContainer}>
                {answers.map((answer) => {
                  const inputId = `${styles.answer}-${question.number}-${answer.value}`;
                  const answerValueClass = {
                    [styles.zero]: answer.value === 0,
                    [styles.one]: answer.value === 1,
                    [styles.two]: answer.value === 2,
                    [styles.three]: answer.value === 3,
                  };
                  return (
                    <Fragment key={inputId}>
                      <input
                        type="radio"
                        id={inputId}
                        name={fieldsetId}
                        className={classNames(styles.input, answerValueClass)}
                        onChange={() =>
                          answerQuestion({
                            answer: answer.value,
                            questionNumber: question.number,
                          })
                        }
                        checked={question.answer === answer.value}
                      />
                      <label
                        className={classNames(styles.label, answerValueClass)}
                        htmlFor={inputId}
                      >
                        {answer.value}) {answer.textContent}
                      </label>
                    </Fragment>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </main>
      <footer>
        <PaginationControls />
      </footer>
    </div>
  );
};

export default QuestionSection;
