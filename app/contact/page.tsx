"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800">
              <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Have questions, suggestions, or feedback? We'd love to hear from you. Fill out the form and we'll get
                back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">support@cityuqbank.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Discord</h3>
                    <p className="text-gray-600 dark:text-gray-400">Join our community server</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+880 1234 567890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    className="mt-6 bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-red-600 dark:text-red-400">How do I upload a PDF?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  You can upload a PDF by clicking on the "Share Question PDF" button on the homepage or navigating to
                  the Upload page.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 dark:text-red-400">Do I need an account to download PDFs?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  Yes, you need to create an account to download PDFs. This helps us track downloads and give credit to
                  contributors.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 dark:text-red-400">How do I get credit for my uploads?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  When you upload a PDF, your username is automatically watermarked on the document, and you'll be
                  listed as a contributor.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 dark:text-red-400">Can I request specific exam papers?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  Yes, you can submit a request through the contact form, and we'll try to find the exam paper you're
                  looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
