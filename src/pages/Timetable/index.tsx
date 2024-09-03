import { Helmet } from "react-helmet-async";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export default function Timetable() {
  const day1schedule = [
    { time: "3:30pm-5:00pm", activity: "Check-in & Registration ℹ️" },
    { time: "5:00pm-6:30pm", activity: "Camp Opening Ceremony 🎊" },
    { time: "6:30pm-7:30pm", activity: "Dinner 🍕" },
    { time: "7:30pm-9:00pm", activity: "Drama Performance🕺" },
    { time: "9:00pm-10:00pm", activity: "Campfire 🔥" },
  ];

  const day2schedule = [
    { time: "8:00am-9:00am", activity: "Breakfast 🍳" },
    { time: "9:00am-11:00am", activity: "Theme Talk: 信仰GOD 💬" },
    { time: "11:00am-12:00pm", activity: "Station Games 🎯" },
    { time: "12:00pm-1:30pm", activity: "Lunch 🥗" },
    { time: "1:30pm-2:30pm", activity: "Games 🎮" },
    { time: "2:30pm-3:00pm", activity: "Break 🥱" },
    { time: "3:00pm-3:30pm", activity: "Group Photo 📸" },
    { time: "3:30pm-4:30pm", activity: "Q&A Session 🙋" },
    {
      time: "4:30pm-5:00pm",
      activity: "Theme Talk: 信仰與恩賜 🎁",
    },
    { time: "5:00pm-6:00pm", activity: "Small Talk 💛 to 💛" },
    {
      time: "6:00pm-7:00pm",
      activity: "Dinner 🍔",
    },
    { time: "7:00pm-10:00pm", activity: "Theme Movie 🍿 & Discussion 💬" },
  ];

  const day3schedule = [
    { time: "8:00am-9:00am", activity: "Breakfast 🥐" },
    { time: "9:00am-11:00am", activity: "Theme Talk: 突破信仰的阻礙 🏃‍➡️" },
    { time: "11:00pm-12:00pm", activity: "Packing Up 🎒" },
    {
      time: "12:00pm-1:30pm",
      activity: "Lunch 🧆",
    },
    { time: "1:30pm-3:00pm", activity: "Closing Ceremony 🎉" },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營 Timetable</title>
      </Helmet>
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="day1">Day 1</TabsTrigger>
          <TabsTrigger value="day2">Day 2</TabsTrigger>
          <TabsTrigger value="day3">Day 3</TabsTrigger>
        </TabsList>
        <TabsContent value="day1">
          <Card>
            <CardHeader>
              <CardTitle>Day 1</CardTitle>
              <CardDescription>Barnabas camp day 1 timetable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {day1schedule.map((item, index) => (
                <div key={index} className="grid grid-cols-4">
                  <span>{item.time}</span>
                  <span className="break-words whitespace-normal text-right col-start-2 col-end-5">
                    {item.activity}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="day2">
          <Card>
            <CardHeader>
              <CardTitle>Day 2</CardTitle>
              <CardDescription>Barnabas camp day 2 timetable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {day2schedule.map((item, index) => (
                <div key={index} className="grid grid-cols-4">
                  <span>{item.time}</span>
                  <span className="break-words whitespace-normal text-right col-start-2 col-end-5">
                    {item.activity}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="day3">
          <Card>
            <CardHeader>
              <CardTitle>Day 3</CardTitle>
              <CardDescription>Barnabas camp day 3 timetable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {day3schedule.map((item, index) => (
                <div key={index} className="grid grid-cols-4">
                  <span>{item.time}</span>
                  <span className="break-words whitespace-normal text-right col-start-2 col-end-5">
                    {item.activity}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
