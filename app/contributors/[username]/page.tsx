"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  FileText,
  Download,
  Eye,
  Award,
  Mail,
  School,
  BookOpen,
  ArrowLeft,
  Filter,
  SortDesc,
} from "lucide-react"

// Mock data for contributors
const CONTRIBUTORS = [
  {
    id: 1,
    name: "John Doe",
    username: "john_doe",
    contributions: 42,
    joinedDate: "Jan 2022",
    department: "Computer Science & Engineering",
    semester: "8th",
    avatar: "/placeholder.svg?height=200&width=200",
    badges: ["Top Contributor", "Verified", "CSE Expert"],
    bio: "Computer Science student passionate about helping others prepare for exams.",
    email: "john.doe@example.com",
    totalDownloads: 1250,
    totalViews: 3800,
    socialLinks: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "jane_smith",
    contributions: 38,
    joinedDate: "Mar 2022",
    department: "Computer Science & Engineering",
    semester: "7th",
    avatar: "/placeholder.svg?height=200&width=200",
    badges: ["Top Contributor", "Verified"],
    bio: "Helping fellow students ace their exams one PDF at a time.",
    email: "jane.smith@example.com",
    totalDownloads: 980,
    totalViews: 2700,
    socialLinks: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    id: 3,
    name: "Alex Johnson",
    username: "alex_johnson",
    contributions: 31,
    joinedDate: "Feb 2022",
    department: "Electrical & Electronic Engineering",
    semester: "6th",
    avatar: "/placeholder.svg?height=200&width=200",
    badges: ["Top Contributor", "EEE Expert"],
    bio: "Electrical Engineering enthusiast. I believe in knowledge sharing.",
    email: "alex.johnson@example.com",
    totalDownloads: 820,
    totalViews: 2100,
    socialLinks: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
    },
  },
]

// Mock data for questions uploaded by contributors
const CONTRIBUTOR_QUESTIONS = {
  john_doe: [
    {
      id: 1,
      title: "CSE 3101 - Database Management Systems Final Exam 2023",
      subject: "Database Management Systems",
      course: "CSE 3101",
      semester: "Spring 2023",
      examType: "Final",
      uploadDate: "2023-12-15",
      downloads: 342,
      views: 890,
      fileSize: "2.4 MB",
      verified: true,
    },
    {
      id: 2,
      title: "CSE 2201 - Algorithms Midterm Exam 2023",
      subject: "Algorithms",
      course: "CSE 2201",
      semester: "Fall 2023",
      examType: "Midterm",
      uploadDate: "2023-10-20",
      downloads: 215,
      views: 560,
      fileSize: "1.8 MB",
      verified: true,
    },
    {
      id: 3,
      title: "CSE 4303 - Software Engineering Final Exam 2023",
      subject: "Software Engineering",
      course: "CSE 4303",
      semester: "Spring 2023",
      examType: "Final",
      uploadDate: "2023-12-10",
      downloads: 178,
      views: 420,
      fileSize: "3.1 MB",
      verified: false,
    },
    {
      id: 4,
      title: "CSE 3205 - Computer Networks Midterm Exam 2023",
      subject: "Computer Networks",
      course: "CSE 3205",
      semester: "Fall 2023",
      examType: "Midterm",
      uploadDate: "2023-10-15",
      downloads: 203,
      views: 510,
      fileSize: "2.2 MB",
      verified: true,
    },
  ],
  jane_smith: [
    {
      id: 5,
      title: "CSE 2105 - Digital Logic Design Final Exam 2022",
      subject: "Digital Logic Design",
      course: "CSE 2105",
      semester: "Fall 2022",
      examType: "Final",
      uploadDate: "2022-12-20",
      downloads: 412,
      views: 980,
      fileSize: "1.5 MB",
      verified: true,
    },
    {
      id: 6,
      title: "CSE 3103 - Operating Systems Final Exam 2023",
      subject: "Operating Systems",
      course: "CSE 3103",
      semester: "Spring 2023",
      examType: "Final",
      uploadDate: "2023-12-12",
      downloads: 267,
      views: 620,
      fileSize: "2.1 MB",
      verified: true,
    },
    {
      id: 7,
      title: "CSE 3207 - Computer Architecture Midterm Exam 2023",
      subject: "Computer Architecture",
      course: "CSE 3207",
      semester: "Fall 2023",
      examType: "Midterm",
      uploadDate: "2023-10-18",
      downloads: 189,
      views: 430,
      fileSize: "1.9 MB",
      verified: true,
    },
  ],
  alex_johnson: [
    {
      id: 8,
      title: "EEE 3207 - Electrical Circuits Final Exam 2023",
      subject: "Electrical Circuits",
      course: "EEE 3207",
      semester: "Spring 2023",
      examType: "Final",
      uploadDate: "2023-12-18",
      downloads: 156,
      views: 380,
      fileSize: "2.7 MB",
      verified: true,
    },
    {
      id: 9,
      title: "EEE 2105 - Electronics I Midterm Exam 2023",
      subject: "Electronics",
      course: "EEE 2105",
      semester: "Fall 2023",
      examType: "Midterm",
      uploadDate: "2023-10-22",
      downloads: 143,
      views: 320,
      fileSize: "1.8 MB",
      verified: false,
    },
    {
      id: 10,
      title: "EEE 3103 - Electromagnetic Fields Final Exam 2022",
      subject: "Electromagnetic Fields",
      course: "EEE 3103",
      semester: "Fall 2022",
      examType: "Final",
      uploadDate: "2022-12-15",
      downloads: 178,
      views: 410,
      fileSize: "2.3 MB",
      verified: true,
    },
  ],
}

export default function ContributorProfilePage() {
  const { username } = useParams()
  const [activeTab, setActiveTab] = useState("uploads")
  const [sortBy, setSortBy] = useState("newest")
  const [filterVerified, setFilterVerified] = useState(false)

  // Find the contributor by username
  const contributor = CONTRIBUTORS.find((c) => c.username === username)

  // Get questions uploaded by this contributor
  const questions = CONTRIBUTOR_QUESTIONS[username as keyof typeof CONTRIBUTOR_QUESTIONS] || []

  // Filter and sort questions
  const filteredQuestions = questions
    .filter((q) => (filterVerified ? q.verified : true))
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
      } else if (sortBy === "downloads") {
        return b.downloads - a.downloads
      } else if (sortBy === "views") {
        return b.views - a.views
      }
      return 0
    })

  if (!contributor) {
    return (
      <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Contributor Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The contributor you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/contributors">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Contributors
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/contributors">
            <Button
              variant="ghost"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 pl-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Contributors
            </Button>
          </Link>
        </div>

        {/* Profile Header */}
        <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500 mb-6 md:mb-0 md:mr-8">
              <img
                src={contributor.avatar || "/placeholder.svg"}
                alt={contributor.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-1">{contributor.name}</h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">@{contributor.username}</p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-2 mb-4 md:mb-0">
                  {contributor.badges.map((badge, idx) => (
                    <Badge
                      key={idx}
                      className={`${
                        badge === "Verified"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50"
                          : badge.includes("Expert")
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50"
                            : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50"
                      }`}
                    >
                      {badge === "Verified" && <Award className="w-3 h-3 mr-1" />}
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{contributor.bio}"</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <School className="w-4 h-4 mr-2" />
                  <span>{contributor.department}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>{contributor.semester} Semester</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Member since {contributor.joinedDate}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-white dark:bg-red-900/30 rounded-lg p-3 text-center border border-red-100 dark:border-red-800">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{contributor.contributions}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Uploads</div>
                </div>
                <div className="bg-white dark:bg-red-900/30 rounded-lg p-3 text-center border border-red-100 dark:border-red-800">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {contributor.totalDownloads.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Downloads</div>
                </div>
                <div className="bg-white dark:bg-red-900/30 rounded-lg p-3 text-center border border-red-100 dark:border-red-800">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {contributor.totalViews.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Views</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/70"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                {contributor.socialLinks?.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/70"
                    onClick={() => window.open(contributor.socialLinks.github, "_blank")}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </Button>
                )}
                {contributor.socialLinks?.linkedin && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/70"
                    onClick={() => window.open(contributor.socialLinks.linkedin, "_blank")}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="uploads" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="bg-red-100 dark:bg-red-900/50 border-b border-red-200 dark:border-red-800 w-full justify-start rounded-none p-0">
            <TabsTrigger
              value="uploads"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
            >
              Uploads ({questions.length})
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
            >
              Activity
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
            >
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="uploads" className="mt-6">
            {/* Filter and Sort Controls */}
            <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border border-red-200 dark:border-red-800 mb-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center">
                  <Filter className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 mr-3">Filter:</span>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="verified"
                      checked={filterVerified}
                      onChange={() => setFilterVerified(!filterVerified)}
                      className="mr-2"
                    />
                    <label htmlFor="verified" className="text-sm text-gray-700 dark:text-gray-300">
                      Verified Only
                    </label>
                  </div>
                </div>

                <div className="flex items-center">
                  <SortDesc className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 mr-3">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded text-sm text-gray-900 dark:text-white px-2 py-1"
                  >
                    <option value="newest">Newest First</option>
                    <option value="downloads">Most Downloads</option>
                    <option value="views">Most Views</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Questions List */}
            {filteredQuestions.length > 0 ? (
              <div className="space-y-4">
                {filteredQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-colors shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-4 md:mb-0 md:mr-4">
                        <div className="flex items-start">
                          <div className="hidden md:block mr-4">
                            <div className="w-12 h-12 bg-white dark:bg-red-900/30 rounded-lg flex items-center justify-center border border-red-100 dark:border-red-800">
                              <FileText className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">{question.title}</h3>
                              {question.verified && (
                                <span className="ml-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-2 py-1 rounded-full">
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <span className="mr-4">Course: {question.course}</span>
                              <span className="mr-4">Semester: {question.semester}</span>
                              <span className="mr-4">Type: {question.examType}</span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                              <span className="mr-4">Date: {question.uploadDate}</span>
                              <span className="mr-4 flex items-center">
                                <Download className="w-3 h-3 mr-1" /> {question.downloads}
                              </span>
                              <span className="mr-4 flex items-center">
                                <Eye className="w-3 h-3 mr-1" /> {question.views}
                              </span>
                              <span>Size: {question.fileSize}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Link href={`/questions/${question.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/70"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => {
                            // In a real app, this would trigger a download
                            alert(`Downloading ${question.title}...`)
                          }}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-red-50 dark:bg-red-900/50 rounded-lg border border-red-200 dark:border-red-800 shadow-sm">
                <FileText className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">No question papers found</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {filterVerified
                    ? "No verified questions available. Try removing the filter."
                    : "This contributor hasn't uploaded any questions yet."}
                </p>
                {filterVerified && (
                  <Button
                    variant="outline"
                    className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/70"
                    onClick={() => setFilterVerified(false)}
                  >
                    Show All Questions
                  </Button>
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="activity" className="mt-6">
            <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 text-center shadow-sm">
              <Calendar className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Activity Timeline</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                View {contributor.name}'s recent activity and contributions.
              </p>
              <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6">
            <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 text-center shadow-sm">
              <Award className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Achievements & Badges</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                View {contributor.name}'s achievements and earned badges.
              </p>
              <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
