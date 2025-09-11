"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, CheckCircle, Clock, Smartphone, Users } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const challengeDays = [
  {
    day: 1,
    title: "Awareness Day",
    tasks: [
      "Track your phone usage for 24 hours",
      "Identify your top 3 time-wasting apps",
      "Set phone to grayscale mode",
      "Read 10 pages of beneficial knowledge"
    ],
    reflection: "Which moments did you reach for your phone without thinking? What emotions were you trying to avoid?"
  },
  {
    day: 2,
    title: "Boundary Setting",
    tasks: [
      "Remove 1 social media app from your phone",
      "Set screen time limits for remaining apps",
      "Designate phone-free zones in your home",
      "Perform 2 extra voluntary prayers today"
    ],
    reflection: "How did removing that app affect your day? What did you do with the time you would have spent on it?"
  },
  {
    day: 3,
    title: "Mindful Usage",
    tasks: [
      "Before opening any app, ask: 'Why am I doing this?'",
      "Take 5 minutes to organize your phone's home screen",
      "Spend 30 minutes on a beneficial Islamic app",
      "Write down 3 things you're grateful for today"
    ],
    reflection: "How did asking 'why' change your phone usage? What new insights did you gain about your habits?"
  }
];

export default function Challenge() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-lg py-2 px-4">
            7-Day Challenge
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Detox Challenge</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Break free from digital addiction and reclaim your time for what truly matters
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-green-100 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-green-600" />
                Challenge Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                This 7-day challenge is designed to help you develop healthier digital habits while strengthening your connection with Allah. Each day builds upon the previous, gradually reducing digital distractions and replacing them with meaningful activities.
              </CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-green-600" />
                  <span>7 Days</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5 text-green-600" />
                  <span>Daily Tasks</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-green-600" />
                  <span>Community Support</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {challengeDays.map((day) => (
              <Card key={day.day} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-600 text-white text-lg py-2 px-4">
                      Day {day.day}
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                      {day.title}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4">Today's Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {day.tasks.map((task, index) => (
                      <li key={index} className="flex items-start">
                        <Checkbox className="mt-1 mr-3 h-5 w-5" />
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                      Reflection Question
                    </h3>
                    <p className="text-gray-700 italic bg-green-50 p-4 rounded-lg">
                      "{day.reflection}"
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Mark Day {day.day} as Complete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Habits?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of Muslim youth who are reclaiming their time and focus for what truly matters.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              Join the Full 7-Day Challenge
            </Button>
          </div>
        </div>
      </div>
      
      <MadeWithDyad />
    </div>
  );
}