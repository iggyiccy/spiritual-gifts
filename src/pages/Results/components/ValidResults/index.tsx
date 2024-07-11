import classNames from "classnames";
import styles from "../../Results.module.css";
import ResultCategory from "../ResultCategory";
import { Result } from "hooks/useResults";
import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

localStorage.setItem("savedHref", window.location.href);

const ValidResults = ({ results }: { results: Result[] }) => (
  <div className="flex flex-col space-y-4 text-center p-4 overflow-scroll text-primary">
    <Helmet>
      <title>屬靈恩賜評估結果</title>
    </Helmet>
    <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
      屬靈恩賜評估結果
    </h2>
    {/* TODO show a chart */}
    <Table>
      <TableCaption>你的屬靈恩賜評估結果</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">項目</TableHead>
          <TableHead className="text-right">分數</TableHead>
          <TableHead className="text-right">排名</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result) => (
          <ResultCategory key={result.name} result={result} />
        ))}
      </TableBody>
    </Table>
    {/* <div className={styles.resultsContainer}>
      <p className={classNames(styles.header, styles.name)}>NAME 項目</p>
      <p className={classNames(styles.header, styles.score)}>SCORE 分數</p>
      <p className={classNames(styles.header, styles.rank)}>RANK 排名</p>
      {results.map((result) => (
        <ResultCategory key={result.name} result={result} />
      ))}
    </div> */}
  </div>
);

export default ValidResults;
