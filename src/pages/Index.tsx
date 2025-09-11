"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Trophy, Users, ArrowRight, Mail, Smartphone, Shield } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { showError, showSuccess } from "@/utils/toast";
import InfiniteHero from "@/components/ui/infinite-hero";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple email validation
    if (!email || !email.includes("@")) {
      showError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      showSuccess("Welcome to the community! Check your email for next steps.");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with InfiniteHero component */}
      <InfiniteHero />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Transform Your Digital Habits
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Practical tools designed specifically for Muslim youth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">7-Day Digital Detox</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Break free from compulsive scrolling with our structured challenge. Daily tasks designed to help you reclaim your time.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto text-green-600">
                  View Challenge <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Islamic Habit Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn practical methods to build sunnah habits and strengthen your deen while navigating the digital world.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto text-green-600">
                  Read Articles <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Supportive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with like-minded peers on the same journey. Share struggles, celebrate wins, and grow together.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 h-auto text-green-600">
                  Join Discord <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7-Day Challenge Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                Free Challenge
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                7-Day Digital Detox Challenge
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Break free from digital addiction in just one week
              </p>
            </div>

            <Card className="border-2 border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl">What You'll Get</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <span className="text-green-800 text-sm font-bold">1</span>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold">Daily digital detox tasks</span> - Simple actions to reset your habits
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <span className="text-green-800 text-sm font-bold">2</span>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold">Islamic reflection prompts</span> - Connect your digital habits to your deen
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <span className="text-green-800 text-sm font-bold">3</span>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold">Community support</span> - Share progress and get encouragement
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <span className="text-green-800 text-sm font-bold">4</span>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold">Halal content recommendations</span> - Discover enriching alternatives
                    </p>
                  </li>
                </ul>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex-1 py-6">
                    Start Challenge Now
                  </Button>
                  <Button variant="outline" className="flex-1 py-6">
                    View Sample Day
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Get weekly tips, exclusive challenges, and join our private community of Muslim youth.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white text-gray-900 py-6 px-4"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 py-6 px-8"
                  disabled={isLoading}
                >
                  {isLoading ? "Joining..." : "Join Now"}
                </Button>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Growing Together in Community
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Connect with thousands of Muslim youth on the same journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Discord Community</h3>
                      <p className="text-gray-600">Daily discussions and support</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6">
                    Join Discord Server
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Telegram Group</h3>
                      <p className="text-gray-600">Daily reminders and inspiration</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6">
                    Join Telegram Group
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Stories of Transformation
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join thousands who've reclaimed their time and focus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    <div className="ml-4">
                      <h4 className="font-bold">Ahmad M.</h4>
                      <p className="text-sm text-gray-600">Age 19</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "This challenge completely changed my relationship with my phone. I'm now praying all my prayers on time and spending quality time with my Quran."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
}