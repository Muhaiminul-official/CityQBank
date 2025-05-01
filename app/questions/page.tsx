"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchIcon, DownloadIcon, DocumentIcon } from "@/components/icons"

// Mock data for questions
const MOCK_QUESTIONS = [
  {
    id: 1,
    title: "CSE 3101 - Database Management Systems Final Exam 2023",
    subject: "Database Management Systems",
    course: "CSE 3101",
    semester: "Spring 2023",
    department: "Computer Science & Engineering",
    examType: "Final",
    uploadedBy: "john_doe",
    uploadDate: "2023-12-15",
    downloads: 342,
    fileSize: "2.4 MB",
    tags: ["database", "sql", "normalization"],
    verified: true,
  },
  {
    id: 2,
    title: "CSE 2201 - Algorithms Midterm Exam 2023",
    subject: "Algorithms",
    course: "CSE 2201",
    semester: "Fall 2023",
    department: "Computer Science & Engineering",
    examType: "Midterm",
    uploadedBy: "jane_smith",
    uploadDate: "2023-10-20",
    downloads: 215,
    fileSize: "1.8 MB",
    tags: ["algorithms", "data structures", "complexity"],
    verified: true,
  },
  {
    id: 3,
    title: "CSE 4303 - Software Engineering Final Exam 2023",
    subject: "Software Engineering",
    course: "CSE 4303",
    semester: "Spring 2023",
    department: "Computer Science & Engineering",
    examType: "Final",
    uploadedBy: "alex_johnson",
    uploadDate: "2023-12-10",
    downloads: 178,
    fileSize: "3.1 MB",
    tags: ["software engineering", "agile", "uml"],
    verified: false,
  },
  {
    id: 4,
    title: "CSE 3205 - Computer Networks Midterm Exam 2023",
    subject: "Computer Networks",
    course: "CSE 3205",
    semester: "Fall 2023",
    department: "Computer Science & Engineering",
    examType: "Midterm",
    uploadedBy: "sarah_williams",
    uploadDate: "2023-10-15",
    downloads: 203,
    fileSize: "2.2 MB",
    tags: ["networking", "protocols", "tcp/ip"],
    verified: true,
  },
  {
    id: 5,
    title: "CSE 2105 - Digital Logic Design Final Exam 2022",
    subject: "Digital Logic Design",
    course: "CSE 2105",
    semester: "Fall 2022",
    department: "Computer Science & Engineering",
    examType: "Final",
    uploadedBy: "michael_brown",
    uploadDate: "2022-12-20",
    downloads: 412,
    fileSize: "1.5 MB",
    tags: ["digital logic", "boolean algebra", "circuits"],
    verified: true,
  },
  {
    id: 6,
    title: "EEE 3207 - Electrical Circuits Final Exam 2023",
    subject: "Electrical Circuits",
    course: "EEE 3207",
    semester: "Spring 2023",
    department: "Electrical & Electronic Engineering",
    examType: "Final",
    uploadedBy: "david_wilson",
    uploadDate: "2023-12-18",
    downloads: 156,
    fileSize: "2.7 MB",
    tags: ["circuits", "electronics", "ohm's law"],
    verified: true,
  },
  {
    id: 7,
    title: "BBA 2103 - Principles of Marketing Midterm Exam 2023",
    subject: "Principles of Marketing",
    course: "BBA 2103",
    semester: "Fall 2023",
    department: "Business Administration",
    examType: "Midterm",
    uploadedBy: "emily_davis",
    uploadDate: "2023-10-25",
    downloads: 189,
    fileSize: "1.9 MB",
    tags: ["marketing", "business", "strategy"],
    verified: false,
  },
  {
    id: 8,
    title: "CSE 3103 - Operating Systems Final Exam 2023",
    subject: "Operating Systems",
    course: "CSE 3103",
    semester: "Spring 2023",
    department: "Computer Science & Engineering",
    examType: "Final",
    uploadedBy: "robert_johnson",
    uploadDate: "2023-12-12",
    downloads: 267,
    fileSize: "2.1 MB",
    tags: ["os", "process management", "memory management"],
    verified: true,
  },
]

export default function QuestionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedExamType, setSelectedExamType] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [sortBy, setSortBy] = useState("newest")
  const [activeTab, setActiveTab] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Filter questions based on search and filters
  const filteredQuestions = MOCK_QUESTIONS.filter((question) => {
    const matchesSearch =
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.subject.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = selectedDepartment ? question.department === selectedDepartment : true
    const matchesSemester = selectedSemester ? question.semester === selectedSemester : true
    const matchesSubject = selectedSubject ? question.subject === selectedSubject : true
    const matchesExamType = selectedExamType ? question.examType === selectedExamType : true
    const matchesYear = selectedYear ? question.semester.includes(selectedYear) : true
    const matchesVerified = verifiedOnly ? question.verified : true

    // Filter by tab
    const matchesTab =
      activeTab === "all"
        ? true
        : activeTab === "verified"
          ? question.verified
          : activeTab === "popular"
            ? question.downloads > 200
            : true

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesSemester &&
      matchesSubject &&
      matchesExamType &&
      matchesYear &&
      matchesVerified &&
      matchesTab
    )
  })

  // Sort questions
  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
    } else if (sortBy === "oldest") {
      return new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime()
    } else if (sortBy === "downloads") {
      return b.downloads - a.downloads
    } else if (sortBy === "alphabetical") {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  // Get unique values for filters
  const departments = Array.from(new Set(MOCK_QUESTIONS.map((q) => q.department)))
  const semesters = Array.from(new Set(MOCK_QUESTIONS.map((q) => q.semester)))
  const subjects = Array.from(new Set(MOCK_QUESTIONS.map((q) => q.subject)))
  const examTypes = Array.from(new Set(MOCK_QUESTIONS.map((q) => q.examType)))
  const years = Array.from(new Set(MOCK_QUESTIONS.map((q) => q.semester.split(" ")[1])))

  return (
    <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Question PDFs</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Find and download exam question papers</p>
          </div>
          <Link href="/upload">
            <Button className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Upload Question PDF
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-6 md:mb-8" onValueChange={setActiveTab}>
          <div className="overflow-x-auto">
            <TabsList className="bg-red-50 dark:bg-red-900/30 border-b border-red-200 dark:border-red-800 w-full justify-start rounded-none p-0">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
              >
                All Questions
              </TabsTrigger>
              <TabsTrigger
                value="verified"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
              >
                Verified Only
              </TabsTrigger>
              <TabsTrigger
                value="popular"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
              >
                Most Popular
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            {/* Content is shared across tabs, controlled by the activeTab state */}
          </TabsContent>
          <TabsContent value="verified" className="mt-0">
            {/* Content is shared across tabs, controlled by the activeTab state */}
          </TabsContent>
          <TabsContent value="popular" className="mt-0">
            {/* Content is shared across tabs, controlled by the activeTab state */}
          </TabsContent>
        </Tabs>

        {/* Search and Toggle Filters */}
        <div className="bg-white dark:bg-red-900/30 rounded-lg p-4 md:p-6 border border-red-100 dark:border-red-800 mb-6 shadow-sm">
          <div className="mb-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search by title, course code, or subject"
                className="bg-white dark:bg-red-900/50 border-red-200 dark:border-red-800 text-gray-900 dark:text-white pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              className="text-sm border-red-200 dark:border-red-800 text-red-600 dark:text-red-300"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
              <Filter className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-center">
              <Label htmlFor="sortBy" className="text-sm text-gray-600 dark:text-gray-300 mr-2 hidden sm:inline">
                Sort by:
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white dark:bg-red-900/50 border-red-200 dark:border-red-800 text-gray-900 dark:text-white w-[140px] sm:w-[180px]">
                  <SelectValue placeholder="Newest First" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="downloads">Most Downloads</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-red-100 dark:border-red-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                <div>
                  <Label htmlFor="department" className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                    Department
                  </Label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="bg-white dark:bg-red-900/50 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectItem value="all">All Departments</SelectItem>
                      {departments.map((department) => (
                        <SelectItem key={department} value={department}>
                          {department}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                    Subject
                  </Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger className="bg-white dark:bg-red-900/50 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="All Subjects" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectItem value="all">All Subjects</SelectItem>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="semester" className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                    Semester
                  </Label>
                  <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                    <SelectTrigger className="bg-white dark:bg-red-900/50 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="All Semesters" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectItem value="all">All Semesters</SelectItem>
                      {semesters.map((semester) => (
                        <SelectItem key={semester} value={semester}>
                          {semester}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="examType" className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                    Exam Type
                  </Label>
                  <Select value={selectedExamType} onValueChange={setSelectedExamType}>
                    <SelectTrigger className="bg-white dark:bg-red-900/50 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectItem value="all">All Types</SelectItem>
                      {examTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="year" className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                    Year
                  </Label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="bg-white dark:bg-red-900/50 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectItem value="all">All Years</SelectItem>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <Checkbox
                  id="verified"
                  checked={verifiedOnly}
                  onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
                  className="border-red-300 dark:border-red-700 data-[state=checked]:bg-red-600"
                />
                <Label htmlFor="verified" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Show verified questions only
                </Label>
              </div>

              <div className="flex justify-end mt-4">
                <Button
                  variant="outline"
                  className="mr-2 border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedDepartment("")
                    setSelectedSemester("")
                    setSelectedSubject("")
                    setSelectedExamType("")
                    setSelectedYear("")
                    setVerifiedOnly(false)
                    setSortBy("newest")
                    setActiveTab("all")
                  }}
                >
                  Reset Filters
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setShowFilters(false)}>
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing <span className="text-gray-900 dark:text-white font-semibold">{sortedQuestions.length}</span>{" "}
            results
          </p>
          <Button
            variant="outline"
            className="border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export Results
          </Button>
        </div>

        {/* Questions List */}
        {sortedQuestions.length > 0 ? (
          <div className="space-y-4">
            {sortedQuestions.map((question) => (
              <div
                key={question.id}
                className="bg-white dark:bg-red-900/30 rounded-lg p-4 border border-red-100 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0 md:mr-4">
                    <div className="flex items-start">
                      <div className="hidden md:block mr-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center">
                          <DocumentIcon className="w-6 h-6 text-red-600 dark:text-red-300" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold text-red-600 dark:text-red-300">{question.title}</h3>
                          {question.verified && (
                            <span className="ml-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          <span className="mr-4">Course: {question.course}</span>
                          <span className="mr-4">Semester: {question.semester}</span>
                          <span className="mr-4">Type: {question.examType}</span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          <span className="mr-4">Uploaded by: {question.uploadedBy}</span>
                          <span className="mr-4">Date: {question.uploadDate}</span>
                          <span className="mr-4">Downloads: {question.downloads}</span>
                          <span>Size: {question.fileSize}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {question.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-red-100 dark:bg-red-800/50 text-red-700 dark:text-red-300 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/questions/${question.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Preview
                      </Button>
                    </Link>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white"
                      size="sm"
                      onClick={() => {
                        // In a real app, this would trigger a download
                        alert(`Downloading ${question.title}...`)
                      }}
                    >
                      <DownloadIcon className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-red-900/30 rounded-lg border border-red-100 dark:border-red-800 shadow-sm">
            <svg
              className="w-16 h-16 text-red-300 dark:text-red-700 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">No question papers found</p>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Try adjusting your search or filters</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedDepartment("")
                setSelectedSemester("")
                setSelectedSubject("")
                setSelectedExamType("")
                setSelectedYear("")
                setVerifiedOnly(false)
                setSortBy("newest")
                setActiveTab("all")
              }}
              variant="outline"
              className="border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {sortedQuestions.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30"
              >
                Previous
              </Button>
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                1
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30"
              >
                3
              </Button>
              <span className="text-gray-500 dark:text-gray-400">...</span>
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30"
              >
                10
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30"
              >
                Next
              </Button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

function Filter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}
