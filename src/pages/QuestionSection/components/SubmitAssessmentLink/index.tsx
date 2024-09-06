import { useMemo } from "react";
import useAnswers from "hooks/useAnswers";
import useCompressedResults from "hooks/useCompressedResults";
import { Link } from "react-router-dom";

const SubmitAssessmentLink = () => {
  const resultsSearchParams = useCompressedResults();
  const { clearAnswers } = useAnswers();
  return useMemo(
    () => (
      <Link
        to={`/result/${resultsSearchParams}`}
        onClick={clearAnswers}
        className="text-primary text-sm"
      >
        結束
      </Link>
    ),
    [clearAnswers, resultsSearchParams]
  );
};

export default SubmitAssessmentLink;
