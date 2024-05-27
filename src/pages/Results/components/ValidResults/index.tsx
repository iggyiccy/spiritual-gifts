import classNames from "classnames";
import styles from "../../Results.module.css";
import ResultCategory from "../ResultCategory";
import { Result } from "hooks/useResults";
import { Helmet } from "react-helmet-async";

const ValidResults = ({ results }: { results: Result[] }) => (
  <div className={styles.container}>
    <Helmet>
      <title>Spiritual Gifts Results</title>
    </Helmet>
    <h2>Results</h2>
    <p className={styles.linkDescription}>
      Bookmark this page if you want to revisit or share your results.
    </p>
    <a className={styles.resultsLink} href={window.location.href}>
      {window.location.href}
    </a>
    <div className={styles.resultsContainer}>
      <p className={classNames(styles.header, styles.name)}>NAME 名字</p>
      <p className={classNames(styles.header, styles.score)}>SCORE 分數</p>
      <p className={classNames(styles.header, styles.rank)}>RANK 排名</p>
      {results.map((result) => (
        <ResultCategory key={result.name} result={result} />
      ))}
    </div>
  </div>
);

export default ValidResults;
