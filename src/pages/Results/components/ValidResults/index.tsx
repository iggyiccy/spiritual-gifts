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
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../components/ui/alert";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { Clock, Meh } from "lucide-react";

localStorage.setItem("savedHref", window.location.href);

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

const CountdownClock = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-28T16:30:00");
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="pt-8 text-md text-primary font-bold">
      {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
      {timeLeft.seconds} seconds
    </div>
  );
};

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

const ValidResults = ({ results }: { results: Result[] }) => {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-09-28T16:30:00");
    const currentDate = new Date();

    if (currentDate >= targetDate) {
      setShowResults(true);
    }
  }, []);

  return (
    <div className="flex flex-col space-y-4 text-center p-4 overflow-scroll text-primary">
      <Helmet>
        <title>屬靈恩賜評估結果</title>
      </Helmet>
      {showResults ? (
        <div>
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
      ) : (
        <div>
          <Alert className="hover:bg-zinc-100 dark:hover:bg-zinc-800 mb-4">
            <Clock className="h-4 w-4" />
            <AlertTitle>
              Result will be revealed during the Barnabas Camp
            </AlertTitle>
            <AlertDescription>
              下載呢個程序到你手機， 入camp嘅時候再返嚟睇個結果 🙏
              <br />
              Download this App to your phone and check the results when you
              come to camp 🙏
            </AlertDescription>
          </Alert>
          <CountdownClock />
        </div>
      )}
    </div>
  );
};

export default ValidResults;
