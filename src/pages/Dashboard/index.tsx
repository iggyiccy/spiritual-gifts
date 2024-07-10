import { Helmet } from "react-helmet-async";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns an array of DOMString items containing the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to chose between a web version or
   * an Android version.
   */
  readonly platforms: Array<string>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

export default function Dashboard() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the mini-infobar from appearing on mobile
      setInstallPrompt(e); // Save the event for later use
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt(); // Show the installation prompt
      installPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setInstallPrompt(null); // Reset the deferred prompt variable
      });
    }
  };
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營</title>
      </Helmet>
      <Alert className="hover:bg-zinc-100" onClick={handleInstallClick}>
        <Download className="h-4 w-4" />
        <AlertTitle>Download and Save this App Offline</AlertTitle>
        <AlertDescription>
          Click the download button to save this app offline and access it
          anytime, anywhere!
          <br />
          If the download button is not visible, please use the browser's native
          download feature. Click the Share button and select "Add to Home
          Screen" to save this app offline.
        </AlertDescription>
      </Alert>
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
