import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./BadResultsLink.module.css";

const BadResultsLink = () => (
  <div className={styles.container}>
    <Helmet>
      <title>屬靈恩賜 - 找不到結果</title>
    </Helmet>
    <p>在此鏈接上找不到結果</p>
    <Link to="/">返回主頁</Link>
  </div>
);

export default BadResultsLink;
