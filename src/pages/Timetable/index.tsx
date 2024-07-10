import { Helmet } from "react-helmet-async";
import { Download } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

export default function Timetable() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營 Timetable</title>
      </Helmet>
      <Alert className="hover:bg-zinc-100">
        <Download className="h-4 w-4" />
        <AlertTitle>Not Out Yet</AlertTitle>
        <AlertDescription>
          Timetable for the 2024 NLEC Camp is not out yet. Please check back
          later.
        </AlertDescription>
      </Alert>
    </main>
  );
}
