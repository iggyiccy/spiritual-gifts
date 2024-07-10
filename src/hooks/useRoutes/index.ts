import { lazy, LazyExoticComponent } from "react";

interface Route {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
}

const Results = lazy(() => import("pages/Results"));
const Homepage = lazy(() => import("pages/Homepage"));
const QuestionSection = lazy(() => import("pages/QuestionSection"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const Brochures = lazy(() => import("pages/Brochures"));

const useRoutes = (): Route[] => [
  { path: "/", Component: Dashboard },
  { path: "/brochures", Component: Brochures },
  { path: "/test", Component: Homepage },
  { path: "/result/:compressedResults", Component: Results },
  { path: "/question-set/:questionSetNumber", Component: QuestionSection },
];

export default useRoutes;
