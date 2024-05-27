import classNames from "classnames";
import styles from "../../Results.module.css";
import ResultCategory from "../ResultCategory";
import { Result } from "hooks/useResults";
import { Helmet } from "react-helmet-async";

const ValidResults = ({ results }: { results: Result[] }) => (
  <div className={styles.container}>
    <Helmet>
      <title>屬靈恩賜評估結果</title>
    </Helmet>
    <h2>Results</h2>
    <p className={styles.linkDescription}>
      如果您想重新訪問或分享您的結果，請在此頁面上添加書籤。
    </p>
    <a className={styles.resultsLink} href={window.location.href}>
      {window.location.href}
    </a>
    <div className={styles.resultsContainer}>
      <p className={classNames(styles.header, styles.name)}>NAME 項目</p>
      <p className={classNames(styles.header, styles.score)}>SCORE 分數</p>
      <p className={classNames(styles.header, styles.rank)}>RANK 排名</p>
      {results.map((result) => (
        <ResultCategory key={result.name} result={result} />
      ))}
    </div>
  </div>
);

export default ValidResults;
