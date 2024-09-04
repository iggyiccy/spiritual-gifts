import ResultCategory from "../ResultCategory";
import { Result } from "hooks/useResults";
import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

localStorage.setItem("savedHref", window.location.href);

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

const CustomPieChart = ({ results }: { results: Result[] }) => {
  const data = results.map((result) => ({
    name: result.name,
    value: result.score,
  }));

  return (
    <ResponsiveContainer width="100%" height={650}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          fill="#8884d8"
          label
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

const ValidResults = ({ results }: { results: Result[] }) => (
  <div className="flex flex-col space-y-4 text-center p-4 overflow-scroll text-primary">
    <Helmet>
      <title>屬靈恩賜評估結果</title>
    </Helmet>
    <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
      屬靈恩賜評估結果
    </h2>
    <div className="pb-8">
      <CustomPieChart results={results} />
    </div>
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
  </div>
);

export default ValidResults;
