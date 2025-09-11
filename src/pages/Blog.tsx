"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, User } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const blogPosts = [
  {
    id: 1,
    title: "The Digital Detox Journey: A 7-Day Plan",
    excerpt: "Learn how to break free from digital addiction with our structured approach based on Islamic principles.",
    category: "Digital Detox",
    author: "Fatima R.",
    readTime: "8 min read",
    date: "May 15, 2023"
  },
  {
    id: 2,
    title: "Building Sunnah Habits in a Digital Age",
    excerpt: "Practical tips for integrating prophetic traditions into your daily routine despite digital distractions.",
    category: "Habits",
    author: "Omar K.",
    readTime: "6 min read",
    date: "April 28, 2023"
  },
  {
    id: 3,
    title: "Halal Entertainment Alternatives for Youth",
    excerpt: "Discover enriching activities that align with Islamic values and help you grow spiritually and personally.",
    category: "Lifestyle",
    author: "Aisha M.",
    readTime: "10 min read",
    date: "April 12, 2023"
  },
  {
    id: 4,
    title: "The Connection Between Prayer and Digital Discipline",
    excerpt: "Understanding how regular salah can be your anchor in maintaining digital self-control.",
    category: "Spirituality",
    author: "Yusuf A.",
    readTime: "7 min read",
    date: "March 30, 2023"
  },
  {
    id: 5,
    title: "Social Media Fasting: A Spiritual Practice",
    excerpt: "Explore how temporary breaks from social platforms can enhance your relationship with Allah.",
    category: "Digital Detox",
    author: "Khadija S.",
    readTime: "9 min read",
    date: "March 18, 2023"
  },
  {
    id: 6,
    title: "Creating Sacred Spaces in Your Digital Life",
    excerpt: "Simple techniques to make your phone and devices tools for good rather than sources of distraction.",
    category: "Mindfulness",
    author: "Bilal H.",
    readTime: "5 min read",
    date: "March 5, 2023"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Guides & Articles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical advice for building digital discipline and living a purposeful life aligned with Islamic values
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-4">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="mr-1 h-4 w-4" />
                  <span className="mr-3">{post.author}</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="link" className="p-0 h-auto">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="px-8 py-6">
            Load More Articles
          </Button>
        </div>
      </div>
      
      <MadeWithDyad />
    </div>
  );
}