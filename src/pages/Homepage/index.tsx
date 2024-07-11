import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import useAnswers from "hooks/useAnswers";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { questionsPerPage } from "utils/constants";

const Homepage = () => {
  const { unansweredQuestions, questionsWithAnswers, clearAnswers } =
    useAnswers();
  const [savedHref, setSavedHref] = useState("");
  const [firstUnansweredQuestion] = unansweredQuestions;
  const hasStarted = useMemo(
    () =>
      questionsWithAnswers.some((question) => question.answer !== undefined),
    [questionsWithAnswers]
  );
  useEffect(() => {
    const href = localStorage.getItem("savedHref");
    if (href) {
      setSavedHref(href);
    }
  }, []);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 text-primary">
      <Helmet>
        <title>屬靈恩賜評估{hasStarted ? " - 進行中" : ""}</title>
      </Helmet>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        屬靈恩賜評估
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        根據您是誰回復以下評估，而不是誰您想成為或認為您應該成為。
        <br />
        <br />
        考慮：真實這些陳述給您？你有什麼經驗嗎？ <br />
        <br />
        此評估可能需要45分鐘。
      </p>

      <div className="mt-8 flex">
        {hasStarted ? (
          <div className="flex space-x-4 w-full">
            <Link
              to="/question-set/1"
              onClick={clearAnswers}
              className="text-white dark:text-black bg-black dark:bg-white rounded-lg h-10 px-4 py-2 text-center w-full"
            >
              重置
            </Link>
            <Link
              to={`/question-set/${Math.ceil(
                firstUnansweredQuestion.number / questionsPerPage
              )}`}
              className="text-white dark:text-black bg-black dark:bg-white rounded-lg h-10 px-4 py-2 text-center w-full"
            >
              繼續
            </Link>
          </div>
        ) : (
          <Link
            to="/question-set/1"
            className="text-white dark:text-black bg-black dark:bg-white rounded-lg h-10 px-4 py-2 text-center w-full"
          >
            {savedHref ? "重新評估" : "開始評估"}
          </Link>
        )}
      </div>
      {savedHref != "" && (
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>✨ Your Quiz Result Is Now Available!</CardTitle>
            <CardDescription className="leading-relaxed">
              Your quiz result is now available! Click the button below to view
              your result.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => window.open(savedHref, "_self")}>
              View Result
            </Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
};

export default Homepage;
