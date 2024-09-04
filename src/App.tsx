import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";
import Loading from "components/Loading";
import styles from "./App.module.css";
import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Sun,
  Users,
  Calendar,
  TentTreeIcon,
  Tent,
  Sparkles,
  MapPinned,
  Music,
  Gift,
  Notebook,
} from "lucide-react";
import { Button } from "components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "components/ui/sheet";
import { eventName } from "configuration";

const ServiceWorker = lazy(() => import("components/ServiceWorker"));

const App = () => {
  const routes = useRoutes();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    // Apply the theme based on the state or localStorage
    const currentTheme = localStorage.getItem("theme") || theme;
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the theme to localStorage when it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Save the new theme preference
      return newTheme;
    });
  };
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        <ServiceWorker />
      </Suspense>
      <Router>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route
              path={path}
              key={path}
              element={
                <Suspense fallback={<Loading />}>
                  <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-background">
                    <div className="hidden border-r bg-muted/40 md:block">
                      <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                          <a
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                          >
                            <Sparkles className="h-6 w-6 text-black dark:text-white" />
                            <span className="text-black dark:text-white">
                              {eventName}
                            </span>
                          </a>
                        </div>
                        <div className="flex-1">
                          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <a
                              href="/"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              <Home className="h-4 w-4" />
                              Home
                            </a>
                            <a
                              href="/timetable"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              <Calendar className="h-4 w-4" />
                              Timetable
                            </a>
                            <a
                              href="/songs"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              <Music className="h-4 w-4" />
                              Songs
                            </a>
                            <a
                              href="/teams"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              <Users className="h-4 w-4" />
                              Teams{" "}
                            </a>
                            <a
                              href="/test"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              <Gift className="h-4 w-4" />
                              Gifts{" "}
                            </a>
                            <a
                              href="/notes"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              <Notebook className="h-4 w-4" />
                              Notes
                            </a>
                            <a
                              href="/maps"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              <MapPinned className="h-4 w-4" />
                              Maps
                            </a>
                          </nav>
                        </div>
                        <div className="mt-auto p-4">
                          <Card x-chunk="dashboard-02-chunk-0">
                            <CardHeader className="p-2 pt-0 md:p-4">
                              <CardTitle>Open Brochure</CardTitle>
                              <CardDescription>
                                Brochure is saved offline. Click to open.
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                              <Button
                                size="sm"
                                className="w-full"
                                onClick={() =>
                                  window.open("/brochures", "_self")
                                }
                              >
                                Open
                              </Button>
                            </CardContent>
                          </Card>
                          <div className="mt-4 text-xs text-primary">
                            <p>
                              此網站為 2024 NLEC 巴拿巴生活營所建 <br /> Open
                              Source via{" "}
                              <a
                                href="https://rchow.dev"
                                className="text-zinc-400"
                              >
                                @iggyiccy
                              </a>{" "}
                              <br />
                              Credit to{" "}
                              <a
                                href="https://github.com/alexjamesmalcolm/spiritual-gifts"
                                className="text-zinc-400"
                              >
                                @alexjamesmalcolm
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="shrink-0 md:hidden"
                            >
                              <Menu className="h-5 w-5 text-black dark:text-white" />
                              <span className="sr-only">
                                Toggle navigation menu
                              </span>
                            </Button>
                          </SheetTrigger>
                          <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                              <a
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                              >
                                <Sparkles className="h-6 w-6 text-black dark:text-white" />
                                <span className="sr-only">{eventName}</span>
                              </a>
                              <a
                                href="/"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                              >
                                <Home className="h-5 w-5" />
                                Home
                              </a>
                              <a
                                href="/timetable"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                              >
                                <Calendar className="h-5 w-5" />
                                Timetable
                              </a>
                              <a
                                href="/songs"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                              >
                                <Music className="h-5 w-5" />
                                Songs
                              </a>
                              <a
                                href="/teams"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                              >
                                <Users className="h-5 w-5" />
                                Teams
                              </a>
                              <a
                                href="/test"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                              >
                                <Gift className="h-5 w-5" />
                                Gifts
                              </a>
                              <a
                                href="/notes"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                              >
                                <Notebook className="h-5 w-5" />
                                Notes
                              </a>
                              <a
                                href="/maps"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                              >
                                <MapPinned className="h-5 w-5" />
                                Maps
                              </a>
                            </nav>
                            <div className="mt-auto">
                              <Card>
                                <CardHeader>
                                  <CardTitle>Open Brochure</CardTitle>
                                  <CardDescription>
                                    Brochure is saved offline. Click to open.
                                  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <Button
                                    size="sm"
                                    className="w-full"
                                    onClick={() =>
                                      window.open("/brochures", "_self")
                                    }
                                  >
                                    Open
                                  </Button>
                                </CardContent>
                              </Card>
                            </div>
                          </SheetContent>
                        </Sheet>
                        <div className="w-full flex-1"></div>
                        <button
                          onClick={toggleTheme}
                          className="rounded-full p-2"
                        >
                          <Sun className="h-5 w-5 text-black dark:text-white" />
                          {theme === "light" ? (
                            <span className="sr-only">Switch to dark mode</span>
                          ) : (
                            <span className="sr-only">
                              Switch to light mode
                            </span>
                          )}
                        </button>
                      </header>
                      <Component />
                    </div>
                  </div>
                </Suspense>
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
