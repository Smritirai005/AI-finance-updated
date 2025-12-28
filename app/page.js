import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import HeroSection from "@/components/ui/heroSection";
import Link from "next/link";


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
      Everything you need to manage your finances
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuresData.map((feature, index) => (
        <Card className="p-6 card-glow" key={index}>
          <CardContent className="space-y-4 pt-4">
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* About Section - How the App Works */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">fealth</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
              Your intelligent finance management platform powered by AI
            </p>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  How fealth Works
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  fealth is an AI-powered personal finance management platform designed to help you take complete control of your financial life. Here's how it works:
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Account Setup & Management</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Start by creating your account and adding your financial accounts (checking, savings, etc.). fealth supports multiple accounts, allowing you to track all your finances in one place. Set an initial balance for each account, and designate a default account for quick transactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transaction Tracking</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Add transactions manually or use our AI-powered receipt scanner to automatically extract transaction details from photos. Each transaction is automatically categorized using AI, helping you understand your spending patterns. Track both income and expenses with detailed descriptions, dates, and categories.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Recurring Transactions</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Set up recurring transactions for bills, subscriptions, or regular income. fealth automatically processes these transactions on schedule, so you never miss tracking a payment. Configure daily, weekly, monthly, or yearly recurring patterns.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Budget Management</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Set monthly budgets and track your spending against them in real-time. fealth monitors your expenses and sends you alerts when you're approaching or exceeding your budget limits. Visual progress indicators help you stay on track.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our advanced AI analyzes your spending patterns, categorizes transactions automatically, and provides personalized insights. The AI helps identify trends, suggest optimizations, and even extracts data from receipt images using Google's Gemini AI.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      6
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dashboard & Analytics</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        View comprehensive dashboards with visual charts showing your account balances, transaction history, spending by category, and budget progress. All your financial data is presented in an easy-to-understand format, helping you make informed financial decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Secure authentication with Clerk</li>
                  <li>AI-powered receipt scanning and transaction categorization</li>
                  <li>Automatic recurring transaction processing</li>
                  <li>Real-time budget tracking and alerts</li>
                  <li>Multi-account support with balance tracking</li>
                  <li>Beautiful, responsive dashboard with charts and analytics</li>
                  <li>Dark mode support for comfortable viewing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
<section className="py-20 bg-blue-50 dark:bg-blue-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Quick Start Guide</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {howItWorksData.map((step, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="glow-effect">{step.icon}</div> {/* Apply glow effect here */}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white dark:text-gray-200 mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 dark:text-blue-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce dark:bg-blue-700 dark:text-white"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
