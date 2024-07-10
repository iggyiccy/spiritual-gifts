import { RefreshCw } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Maps() {
  const [isLandscape, setIsLandscape] = useState(false);

  return (
    <>
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營 Brochures</title>
      </Helmet>
      <style>
        {`
          .landscape {
            margin: 0px;
            transform: rotate(90deg);
            transform-origin: center;
          }
        `}
      </style>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Button
          // className="mb-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => setIsLandscape(!isLandscape)}
        >
          <RefreshCw className="h-4 w-4 mr-2" /> Landscape
        </Button>
        <img
          src="/Campaspe-Downs-Map-23-1.png"
          className={`overflow-scroll ${isLandscape ? "landscape" : ""}`}
        />
        <img
          src="/Campaspe-Downs-Map-23-2.png"
          className={`overflow-scroll ${isLandscape ? "landscape" : ""}`}
        />
      </main>
    </>
  );
}
