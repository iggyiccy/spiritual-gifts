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
    { time: "8:00 AM", activity: "Breakfast" },
    { time: "9:00 AM", activity: "Morning Worship & Devotional" },
    { time: "10:00 AM", activity: "Group Prayer & Reflection" },
    { time: "11:00 AM", activity: "Break" },
    { time: "11:30 AM", activity: "Workshop: Building a Strong Prayer Life" },
    { time: "1:00 PM", activity: "Lunch" },
    { time: "2:00 PM", activity: "Afternoon Session: Guest Speaker" },
    { time: "4:00 PM", activity: "Break" },
    { time: "4:30 PM", activity: "Group Activities: Scripture Scavenger Hunt" },
    { time: "6:00 PM", activity: "Dinner" },
    { time: "7:00 PM", activity: "Evening Session: Worship & Testimonies" },
    { time: "9:00 PM", activity: "End of Day" },
  ];

  const day2schedule = [
    { time: "8:00 AM", activity: "Breakfast" },
    { time: "9:00 AM", activity: "Morning Devotional" },
    { time: "10:00 AM", activity: "Community Service Project" },
    { time: "11:00 AM", activity: "Break" },
    { time: "11:30 AM", activity: "Workshop: Christian Leadership" },
    { time: "1:00 PM", activity: "Lunch" },
    { time: "2:00 PM", activity: "Afternoon Session: Faith in Action" },
    { time: "4:00 PM", activity: "Break" },
    { time: "4:30 PM", activity: "Group Activities: Small Group Bible Study" },
    { time: "6:00 PM", activity: "Dinner" },
    {
      time: "7:00 PM",
      activity: "Evening Session: Faith-Based Movie & Discussion",
    },
    { time: "9:00 PM", activity: "End of Day" },
  ];

  const day3schedule = [
    { time: "8:00 AM", activity: "Breakfast" },
    { time: "9:00 AM", activity: "Morning Reflection & Worship" },
    { time: "10:00 AM", activity: "Break" },
    { time: "10:30 AM", activity: "Workshop: Staying Connected with God" },
    { time: "12:00 PM", activity: "Lunch" },
    { time: "1:00 PM", activity: "Afternoon Session: Q&A with Camp Leaders" },
    { time: "3:00 PM", activity: "Creative Projects: Prayer Journals" },
    { time: "5:00 PM", activity: "Break" },
    { time: "5:30 PM", activity: "Group Activities: Scripture Art" },
    { time: "7:00 PM", activity: "Dinner" },
    { time: "8:00 PM", activity: "Evening Session: Communion & Commissioning" },
    { time: "9:00 PM", activity: "End of Day" },
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
