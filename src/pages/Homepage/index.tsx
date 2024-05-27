import useAnswers from "hooks/useAnswers";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { questionsPerPage } from "utils/constants";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const { unansweredQuestions, questionsWithAnswers, clearAnswers } =
    useAnswers();
  const [firstUnansweredQuestion] = unansweredQuestions;
  const hasStarted = useMemo(
    () =>
      questionsWithAnswers.some((question) => question.answer !== undefined),
    [questionsWithAnswers]
  );
  return (
    <div className={styles.container}>
      <Helmet>
        <title>屬靈恩賜評估{hasStarted ? " - 進行中" : ""}</title>
      </Helmet>
      <h1>屬靈恩賜評估</h1>
      <p>
        根據您是誰回復以下評估，而不是誰 您想成為或認為您應該成為。考慮：真實
        這些陳述給您？你有什麼經驗嗎？
      </p>
      <p>此評估可能需要45分鐘。</p>
      <div className={styles.assessmentLinksContainer}>
        {hasStarted ? (
          <>
            <Link to="/question-set/1" onClick={clearAnswers}>
              重置
            </Link>
            <Link
              to={`/question-set/${Math.ceil(
                firstUnansweredQuestion.number / questionsPerPage
              )}`}
            >
              繼續
            </Link>
          </>
        ) : (
          <Link to="/question-set/1">開始評估</Link>
        )}
      </div>
      <footer className={styles.footer}>
        <small>
          此網站為2024NLEC巴拿巴生活營所建 | GitHub @iggyiccy Open Source |
          Credit to @alexjamesmalcolm
        </small>
      </footer>
    </div>
  );
};

export default Homepage;
