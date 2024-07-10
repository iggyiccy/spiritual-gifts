import { Helmet } from "react-helmet-async";
import { Download } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

export default function Brochures() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營 Brochures</title>
      </Helmet>
      <Alert
        className="hover:bg-zinc-100"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/2024brochures.pdf";
          link.download = "2024brochures.pdf"; // Optional: Specify a filename for the downloaded file
          document.body.appendChild(link); // Append to body
          link.click(); // Programmatically click the link to trigger download
          document.body.removeChild(link); // Clean up and remove the link
        }}
      >
        <Download className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can download the brochures by clicking HERE
        </AlertDescription>
      </Alert>
      <img src="/1.png" />
      <img src="/2.png" />
      <img src="/3.png" />
      <img src="/4.png" />
      <img src="/5.png" />
      <img src="/6.png" />
    </main>
  );
}
