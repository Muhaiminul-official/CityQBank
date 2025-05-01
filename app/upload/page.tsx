"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UploadIcon } from "@/components/icons"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) return

    // Simulate upload process
    setIsUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Share Question PDF</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Upload your exam question papers to help fellow students and get recognized for your contributions.
          </p>

          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 shadow-sm mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., CSE 3101 - Database Management Systems Final Exam 2023"
                  className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="course">Course Code</Label>
                  <Input
                    id="course"
                    placeholder="e.g., CSE 3101"
                    className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Database Management Systems"
                    className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select>
                    <SelectTrigger className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectItem value="spring2023">Spring 2023</SelectItem>
                      <SelectItem value="fall2023">Fall 2023</SelectItem>
                      <SelectItem value="spring2022">Spring 2022</SelectItem>
                      <SelectItem value="fall2022">Fall 2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="examType">Exam Type</Label>
                  <Select>
                    <SelectTrigger className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectItem value="final">Final Exam</SelectItem>
                      <SelectItem value="midterm">Midterm Exam</SelectItem>
                      <SelectItem value="quiz">Quiz</SelectItem>
                      <SelectItem value="assignment">Assignment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Add any additional information about this exam paper"
                  className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Upload PDF File</Label>
                <div className="border-2 border-dashed border-red-200 dark:border-red-800 rounded-lg p-8 text-center">
                  {file ? (
                    <div className="space-y-2">
                      <p className="text-red-600 dark:text-red-400">{file.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-red-200 dark:border-red-800 text-gray-600 dark:text-gray-400"
                        onClick={() => setFile(null)}
                      >
                        Change File
                      </Button>
                    </div>
                  ) : (
                    <>
                      <UploadIcon className="w-12 h-12 mx-auto text-gray-500 mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Drag and drop your PDF file here, or click to browse
                      </p>
                      <p className="text-sm text-gray-500">Maximum file size: 10MB</p>
                      <Input
                        id="file"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={handleFileChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4 border-red-200 dark:border-red-800 text-gray-600 dark:text-gray-400"
                        onClick={() => document.getElementById("file")?.click()}
                      >
                        Browse Files
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {isUploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  disabled={!file || isUploading}
                >
                  {isUploading ? "Uploading..." : "Upload Question PDF"}
                </Button>
              </div>
            </form>
          </div>

          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Upload Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Only upload PDF files with a maximum size of 10MB</li>
              <li>Ensure the exam paper is complete and readable</li>
              <li>Provide accurate information about the course and exam</li>
              <li>Your name will be watermarked on the PDF as the contributor</li>
              <li>Respect copyright and institutional policies when sharing content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
