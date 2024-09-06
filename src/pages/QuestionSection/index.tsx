import { Fragment, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import useAnswers from "hooks/useAnswers";
import classNames from "classnames";
import styles from "./QuestionSection.module.css";
import PaginationControls from "./components/PaginationControls";
import { Helmet } from "react-helmet-async";
import usePercentageDone from "hooks/usePercentageDone";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Meh } from "lucide-react";

interface Answer {
  value: 0 | 1 | 2 | 3;
  textContent: string;
  chineseContent?: string;
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
        <Alert className="hover:bg-zinc-100 dark:hover:bg-zinc-800 mb-4">
          <Meh className="h-4 w-4" />
          <AlertTitle>做到一半好攰，想一陣間再繼續?</AlertTitle>
          <AlertDescription>
            你可以先返回主頁，下載這個程序到你手機，後再回來繼續答題。
            <br />
            If you are tired and want to take a break, you can download this
            assessment to your phone and continue later.
          </AlertDescription>
        </Alert>

        {questionsWithAnswers.map((question) => {
          const fieldsetId = `${styles.question}-${question.number}`;
          return (
            <fieldset
              key={fieldsetId}
              id={fieldsetId}
              className={`${styles.fieldSet} outline outline-1 outline-secondary p-4 mb-4 rounded-lg`}
            >
              <Label>
                <div className="flex flex-row space-x-2">
                  <span>{question.number}) </span>
                  <span>{question.textContent}</span>
                </div>
                <span className="text-sm ml-6">{question.chineseContent}</span>
              </Label>
              <div className={` ${styles.answersContainer} pt-4`}>
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
                      <Label
                        // className={classNames(styles.label, answerValueClass)}
                        className="ml-2"
                        htmlFor={inputId}
                      >
                        {answer.value}) {answer.textContent}
                      </Label>
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
