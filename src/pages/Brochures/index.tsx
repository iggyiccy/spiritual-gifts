import { Helmet } from "react-helmet-async";

export default function Brochures() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營 Brochures</title>
      </Helmet>
      <iframe src="/2024brochures.pdf#view=Fit" className="w-full h-screen" />
    </main>
  );
}
