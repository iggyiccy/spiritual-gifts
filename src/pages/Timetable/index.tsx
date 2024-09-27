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
    {
      time: "3:00pm-4:15pm",
      activity: "Check-in & Registration ℹ️",
      location: "The Barn",
    },
    {
      time: "4:15pm-5:15pm",
      activity: "Camp Opening Ceremony 🎊",
      location: "The Barn",
    },
    { time: "5:15pm-6:30pm", activity: "Dinner 🍕", location: "Canteen" },
    {
      time: "6:30pm-8:00pm",
      activity: "Drama Performance🕺",
      location: "The Barn",
    },
    {
      time: "8:00pm-9:30pm",
      activity: "Candle Night 🕯️& Small Talk 💛",
      location: "The Barn",
    },
  ];

  const day2schedule = [
    { time: "8:00am-9:15am", activity: "Breakfast 🍳", location: "Canteen" },
    {
      time: "9:15am-11:30am",
      activity: "Theme Talk: 信仰GOD 💬",
      location: "The Barn",
    },
    {
      time: "11:30am-12:30pm",
      activity: "Station Games 🎯",
      location: "Sports Stadium",
    },
    { time: "12:30pm-1:00pm", activity: "Group Photo 📸" },
    { time: "1:00pm-2:00pm", activity: "Lunch 🥗", location: "Canteen" },
    { time: "2:00pm-3:00pm", activity: "Q&A Session 🙋", location: "The Barn" },
    {
      time: "3:00pm-4:00pm",
      activity: "Games 🎮 ",
      location: "Sports Stadium",
    },
    { time: "4:00pm-5:00pm", activity: "Break 🥱" },
    {
      time: "5:00pm-5:30pm",
      activity: "Theme Talk: 信仰與恩賜 🎁",
      location: "The Barn",
    },
    { time: "5:30pm-6:30pm", activity: "Dinner 🍔", location: "Canteen" },
    {
      time: "6:30pm-9:30pm",
      activity: " Theme Movie 🍿 & Discussion 💬",
      location: "The Barn",
    },
  ];

  const day3schedule = [
    { time: "8:00am-9:00am", activity: "Breakfast 🥐", location: "Canteen" },
    {
      time: "9:00am-11:00am",
      activity: "Theme Talk: 突破信仰的阻礙 🏃‍➡️",
      location: "The Barn",
    },
    { time: "11:00pm-12:00pm", activity: "Packing Up 🎒" },
    {
      time: "12:00pm-1:00pm",
      activity: "Closing Ceremony 🎉",
      location: "The Barn",
    },
    { time: "1:00pm-2:00pm", activity: "Lunch 🧆 ", location: "Canteen" },
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
                  <span className="font-bold">{item.time}</span>
                  <div className="flex flex-col text-right col-start-2 col-end-5">
                    <span className="break-words whitespace-normal font-bold text-right">
                      {item.activity}
                    </span>
                    <span className="break-words whitespace-normal text-sm text-right">
                      {item.location ? item.location : "TBA"}
                    </span>
                  </div>
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
                  <span className="font-bold">{item.time}</span>
                  <div className="flex flex-col text-right col-start-2 col-end-5">
                    <span className="break-words whitespace-normal font-bold text-right">
                      {item.activity}
                    </span>
                    <span className="break-words whitespace-normal text-sm text-right">
                      {item.location ? item.location : "TBA"}
                    </span>
                  </div>
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
                  <span className="font-bold">{item.time}</span>
                  <div className="flex flex-col text-right col-start-2 col-end-5">
                    <span className="break-words whitespace-normal font-bold text-right">
                      {item.activity}
                    </span>
                    <span className="break-words whitespace-normal text-sm text-right">
                      {item.location ? item.location : "TBA"}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
