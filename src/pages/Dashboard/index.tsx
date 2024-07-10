import { Helmet } from "react-helmet-async";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營</title>
      </Helmet>
      <Card className="sm:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle>✨ Spiritual Gifts Quiz</CardTitle>
          <CardDescription className="leading-relaxed">
            Discover your spiritual gifts and how you can use them to glorify
            God. Take the quiz now! 🎉
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button onClick={() => window.open("/test", "_self")}>
            Start Now
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
