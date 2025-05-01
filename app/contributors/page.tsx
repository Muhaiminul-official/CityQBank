"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AwardIcon, SearchIcon } from "@/components/icons"

// Mock data for contributors
const TOP_CONTRIBUTORS = [
  {
    id: 1,
    name: "John Doe",
    username: "john_doe",
    contributions: 42,
    joinedDate: "Jan 2022",
    department: "Computer Science & Engineering",
    semester: "8th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: ["Top Contributor", "Verified", "CSE Expert"],
    bio: "Computer Science student passionate about helping others prepare for exams.",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "jane_smith",
    contributions: 38,
    joinedDate: "Mar 2022",
    department: "Computer Science & Engineering",
    semester: "7th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: ["Top Contributor", "Verified"],
    bio: "Helping fellow students ace their exams one PDF at a time.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    username: "alex_johnson",
    contributions: 31,
    joinedDate: "Feb 2022",
    department: "Electrical & Electronic Engineering",
    semester: "6th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: ["Top Contributor", "EEE Expert"],
    bio: "Electrical Engineering enthusiast. I believe in knowledge sharing.",
  },
]

const ALL_CONTRIBUTORS = [
  ...TOP_CONTRIBUTORS,
  {
    id: 4,
    name: "Sarah Williams",
    username: "sarah_williams",
    contributions: 27,
    joinedDate: "Apr 2022",
    department: "Computer Science & Engineering",
    semester: "5th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: ["Verified"],
    bio: "Helping make exam preparation easier for everyone.",
  },
  {
    id: 5,
    name: "Michael Brown",
    username: "michael_brown",
    contributions: 24,
    joinedDate: "May 2022",
    department: "Business Administration",
    semester: "7th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: ["BBA Expert"],
    bio: "Business student with a passion for helping others succeed.",
  },
  {
    id: 6,
    name: "Emily Davis",
    username: "emily_davis",
    contributions: 19,
    joinedDate: "Jun 2022",
    department: "Computer Science & Engineering",
    semester: "6th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: [],
    bio: "Sharing is caring. Happy to help fellow students.",
  },
  {
    id: 7,
    name: "David Wilson",
    username: "david_wilson",
    contributions: 17,
    joinedDate: "Jul 2022",
    department: "Electrical & Electronic Engineering",
    semester: "8th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: ["Verified"],
    bio: "EEE student passionate about circuit design and exam preparation.",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    username: "olivia_martinez",
    contributions: 15,
    joinedDate: "Aug 2022",
    department: "Civil Engineering",
    semester: "5th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: [],
    bio: "Civil Engineering student. I believe in helping others succeed.",
  },
  {
    id: 9,
    name: "James Taylor",
    username: "james_taylor",
    contributions: 14,
    joinedDate: "Sep 2022",
    department: "Computer Science & Engineering",
    semester: "4th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: [],
    bio: "Passionate about algorithms and data structures.",
  },
  {
    id: 10,
    name: "Sophia Anderson",
    username: "sophia_anderson",
    contributions: 12,
    joinedDate: "Oct 2022",
    department: "Business Administration",
    semester: "6th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: [],
    bio: "Marketing enthusiast helping fellow BBA students.",
  },
  {
    id: 11,
    name: "Daniel Thomas",
    username: "daniel_thomas",
    contributions: 11,
    joinedDate: "Nov 2022",
    department: "Computer Science & Engineering",
    semester: "7th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: [],
    bio: "Software developer and exam question collector.",
  },
  {
    id: 12,
    name: "Ava Jackson",
    username: "ava_jackson",
    contributions: 10,
    joinedDate: "Dec 2022",
    department: "Electrical & Electronic Engineering",
    semester: "5th",
    avatar: "/placeholder.svg?height=100&width=100",
    badges: [],
    bio: "EEE student with a passion for circuit design.",
  },
]

// Mock data for departments
const DEPARTMENTS = [
  "All Departments",
  "Computer Science & Engineering",
  "Electrical & Electronic Engineering",
  "Business Administration",
  "Civil Engineering",
]

export default function ContributorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Contributors</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Meet the students who make CityUQBank possible</p>
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
              Become a Contributor
            </Button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 text-center">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">{ALL_CONTRIBUTORS.length}+</div>
            <p className="text-gray-600 dark:text-gray-400">Active Contributors</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 text-center">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">1,200+</div>
            <p className="text-gray-600 dark:text-gray-400">Question Papers Shared</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 text-center">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">50+</div>
            <p className="text-gray-600 dark:text-gray-400">Courses Covered</p>
          </div>
        </div>

        {/* Top Contributors Section */}
        <h2 className="text-2xl font-bold mb-6">
          Top Contributors
          <div className="w-20 h-1 bg-red-600 mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TOP_CONTRIBUTORS.map((contributor, index) => (
            <Link href={`/contributors/${contributor.username}`} key={contributor.id}>
              <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 text-center relative hover:border-red-500 transition-colors h-full">
                {index === 0 && (
                  <div className="absolute -top-4 -right-4 bg-yellow-500 rounded-full p-2">
                    <AwardIcon className="w-6 h-6 text-white" />
                  </div>
                )}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-500">
                  <img
                    src={contributor.avatar || "/placeholder.svg"}
                    alt={contributor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{contributor.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">@{contributor.username}</p>
                <div className="bg-red-100 dark:bg-red-800/30 rounded-full py-1 px-4 inline-block mb-3">
                  <span className="text-red-600 dark:text-red-400 font-semibold">
                    {contributor.contributions} Contributions
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                  {contributor.department} • {contributor.semester} Semester
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {contributor.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full ${
                        badge === "Verified"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : badge.includes("Expert")
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                            : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">"{contributor.bio}"</p>
                <p className="text-xs text-gray-500 mb-4">Member since {contributor.joinedDate}</p>
                <div className="flex justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Contributors Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            All Contributors
            <div className="w-20 h-1 bg-red-600 mt-2"></div>
          </h2>

          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="bg-red-50 dark:bg-red-900/30 border-b border-red-200 dark:border-red-800 w-full justify-start rounded-none p-0">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
              >
                All Contributors
              </TabsTrigger>
              <TabsTrigger
                value="cse"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
              >
                CSE
              </TabsTrigger>
              <TabsTrigger
                value="eee"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
              >
                EEE
              </TabsTrigger>
              <TabsTrigger
                value="bba"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
              >
                BBA
              </TabsTrigger>
              <TabsTrigger
                value="civil"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-t-lg py-2 px-4"
              >
                Civil
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {/* Search and Filter */}
              <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search contributors by name or username"
                      className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>

                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      {DEPARTMENTS.map((dept) => (
                        <SelectItem key={dept} value={dept.toLowerCase().replace(/\s+/g, "-")}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Sort by: Most Contributions" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white">
                      <SelectItem value="most-contributions">Most Contributions</SelectItem>
                      <SelectItem value="recent-joined">Recently Joined</SelectItem>
                      <SelectItem value="alphabetical">Alphabetical (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contributors Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {ALL_CONTRIBUTORS.map((contributor) => (
                  <Link href={`/contributors/${contributor.username}`} key={contributor.id}>
                    <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border border-red-200 dark:border-red-800 hover:border-red-500 transition-colors h-full">
                      <div className="flex items-start">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 mr-4 flex-shrink-0">
                          <img
                            src={contributor.avatar || "/placeholder.svg"}
                            alt={contributor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{contributor.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">@{contributor.username}</p>
                          <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
                            {contributor.contributions} Contributions
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{contributor.department}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {contributor.badges.slice(0, 2).map((badge, idx) => (
                              <span
                                key={idx}
                                className={`text-xs px-1.5 py-0.5 rounded-full ${
                                  badge === "Verified"
                                    ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                    : badge.includes("Expert")
                                      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                                      : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                                }`}
                              >
                                {badge}
                              </span>
                            ))}
                            {contributor.badges.length > 2 && (
                              <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                                +{contributor.badges.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
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
                  <span className="text-gray-500">...</span>
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
            </TabsContent>

            <TabsContent value="cse" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {ALL_CONTRIBUTORS.filter((c) => c.department === "Computer Science & Engineering").map(
                  (contributor) => (
                    <Link href={`/contributors/${contributor.username}`} key={contributor.id}>
                      <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border border-red-200 dark:border-red-800 hover:border-red-500 transition-colors h-full">
                        <div className="flex items-start">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 mr-4 flex-shrink-0">
                            <img
                              src={contributor.avatar || "/placeholder.svg"}
                              alt={contributor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{contributor.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">@{contributor.username}</p>
                            <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
                              {contributor.contributions} Contributions
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{contributor.semester} Semester</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {contributor.badges.slice(0, 2).map((badge, idx) => (
                                <span
                                  key={idx}
                                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                                    badge === "Verified"
                                      ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                      : badge.includes("Expert")
                                        ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                                  }`}
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </TabsContent>

            <TabsContent value="eee" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {ALL_CONTRIBUTORS.filter((c) => c.department === "Electrical & Electronic Engineering").map(
                  (contributor) => (
                    <Link href={`/contributors/${contributor.username}`} key={contributor.id}>
                      <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border border-red-200 dark:border-red-800 hover:border-red-500 transition-colors h-full">
                        <div className="flex items-start">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 mr-4 flex-shrink-0">
                            <img
                              src={contributor.avatar || "/placeholder.svg"}
                              alt={contributor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{contributor.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">@{contributor.username}</p>
                            <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
                              {contributor.contributions} Contributions
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{contributor.semester} Semester</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {contributor.badges.slice(0, 2).map((badge, idx) => (
                                <span
                                  key={idx}
                                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                                    badge === "Verified"
                                      ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                      : badge.includes("Expert")
                                        ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                                  }`}
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </TabsContent>

            <TabsContent value="bba" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {ALL_CONTRIBUTORS.filter((c) => c.department === "Business Administration").map((contributor) => (
                  <Link href={`/contributors/${contributor.username}`} key={contributor.id}>
                    <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border border-red-200 dark:border-red-800 hover:border-red-500 transition-colors h-full">
                      <div className="flex items-start">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 mr-4 flex-shrink-0">
                          <img
                            src={contributor.avatar || "/placeholder.svg"}
                            alt={contributor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{contributor.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">@{contributor.username}</p>
                          <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
                            {contributor.contributions} Contributions
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{contributor.semester} Semester</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {contributor.badges.slice(0, 2).map((badge, idx) => (
                              <span
                                key={idx}
                                className={`text-xs px-1.5 py-0.5 rounded-full ${
                                  badge === "Verified"
                                    ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                    : badge.includes("Expert")
                                      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                                      : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                                }`}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="civil" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {ALL_CONTRIBUTORS.filter((c) => c.department === "Civil Engineering").map((contributor) => (
                  <Link href={`/contributors/${contributor.username}`} key={contributor.id}>
                    <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border border-red-200 dark:border-red-800 hover:border-red-500 transition-colors h-full">
                      <div className="flex items-start">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 mr-4 flex-shrink-0">
                          <img
                            src={contributor.avatar || "/placeholder.svg"}
                            alt={contributor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{contributor.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">@{contributor.username}</p>
                          <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
                            {contributor.contributions} Contributions
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{contributor.semester} Semester</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {contributor.badges.slice(0, 2).map((badge, idx) => (
                              <span
                                key={idx}
                                className={`text-xs px-1.5 py-0.5 rounded-full ${
                                  badge === "Verified"
                                    ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                    : badge.includes("Expert")
                                      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                                      : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                                }`}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Leaderboard Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Monthly Leaderboard
            <div className="w-20 h-1 bg-red-600 mt-2"></div>
          </h2>

          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg border border-red-200 dark:border-red-800 overflow-hidden">
            <div className="grid grid-cols-12 bg-red-100 dark:bg-red-800/30 p-4 border-b border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 font-medium">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-5 md:col-span-4">Contributor</div>
              <div className="col-span-3 md:col-span-2">Department</div>
              <div className="hidden md:block md:col-span-3">Badges</div>
              <div className="col-span-3 md:col-span-2 text-right">Contributions</div>
            </div>

            {ALL_CONTRIBUTORS.slice(0, 10).map((contributor, index) => (
              <div
                key={contributor.id}
                className="grid grid-cols-12 p-4 border-b border-red-200 dark:border-red-800 items-center hover:bg-red-100/50 dark:hover:bg-red-800/20 transition-colors"
              >
                <div className="col-span-1 text-center font-bold text-gray-500 dark:text-gray-400">{index + 1}</div>
                <div className="col-span-5 md:col-span-4">
                  <Link href={`/contributors/${contributor.username}`}>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-red-300 dark:border-red-700 mr-3">
                        <img
                          src={contributor.avatar || "/placeholder.svg"}
                          alt={contributor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{contributor.name}</div>
                        <div className="text-xs text-gray-500">@{contributor.username}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-span-3 md:col-span-2 text-sm text-gray-600 dark:text-gray-400">
                  {contributor.department.split(" ")[0]}
                </div>
                <div className="hidden md:flex md:col-span-3 gap-1 flex-wrap">
                  {contributor.badges.slice(0, 2).map((badge, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        badge === "Verified"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : badge.includes("Expert")
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                            : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                  {contributor.badges.length > 2 && (
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                      +{contributor.badges.length - 2}
                    </span>
                  )}
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <span className="font-semibold text-red-600 dark:text-red-400">{contributor.contributions}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button
              variant="outline"
              className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30"
            >
              View Full Leaderboard
            </Button>
          </div>
        </div>

        {/* Become a Contributor Section */}
        <div className="bg-gradient-to-r from-red-600/50 to-red-800/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Become a Contributor</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Share your exam question papers with fellow students and get recognized for your contributions. Join our
            community of contributors today and help make education more accessible for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 dark:bg-red-900/80 p-5 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-600/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Upload PDFs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Share your exam question papers in PDF format</p>
            </div>
            <div className="bg-white/80 dark:bg-red-900/80 p-5 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-600/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Earn Badges</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get recognized with special badges and achievements
              </p>
            </div>
            <div className="bg-white/80 dark:bg-red-900/80 p-5 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-600/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Climb the Ranks</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Compete with others and reach the top of the leaderboard
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/upload">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Upload Question PDF</Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 dark:border-red-200 dark:text-red-100 dark:hover:bg-red-800/50"
              >
                Create an Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
