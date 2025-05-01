"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { PDFViewer } from "@/components/pdf-viewer"
import { ArrowLeft, Download, Calendar, Share2, Bookmark, Flag, Star, StarHalf } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
    views: 890,
    fileSize: "2.4 MB",
    tags: ["database", "sql", "normalization"],
    verified: true,
    pdfUrl: "/sample-pdf.pdf", // In a real app, this would be a URL to the actual PDF
    rating: 4.5,
    ratingCount: 28,
    description:
      "This exam covers database design principles, SQL queries, normalization, and transaction management. It includes both theoretical questions and practical problems.",
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
    views: 560,
    fileSize: "1.8 MB",
    tags: ["algorithms", "data structures", "complexity"],
    verified: true,
    pdfUrl: "/sample-pdf.pdf",
    rating: 4.2,
    ratingCount: 15,
    description:
      "This midterm exam focuses on algorithm analysis, sorting algorithms, searching algorithms, and basic data structures.",
  },
  // Other questions...
]

export default function QuestionDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [question, setQuestion] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    // In a real app, you would fetch the question data from an API
    const questionData = MOCK_QUESTIONS.find((q) => q.id.toString() === id)

    // Simulate loading
    setTimeout(() => {
      setQuestion(questionData)
      setLoading(false)
    }, 500)
  }, [id])

  const handleDownload = () => {
    // In a real app, you would implement proper download functionality
    // This could involve creating a download link and triggering a click on it
    // For now, we'll just show an alert
    alert(`Downloading ${question?.title}...`)

    // In a real implementation, you would do something like:
    // const link = document.createElement('a');
    // link.href = question.pdfUrl;
    // link.download = `${question.title}.pdf`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  }

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // In a real app, you would save this to the user's profile
  }

  const handleShare = () => {
    // In a real app, you would implement proper sharing functionality
    if (navigator.share) {
      navigator.share({
        title: question?.title,
        text: `Check out this exam paper: ${question?.title}`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const handleReport = () => {
    // In a real app, you would implement a report modal/form
    alert("Report functionality would open here")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (!question) {
    return (
      <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Question Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The question you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/questions">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Questions
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/questions">
            <Button
              variant="ghost"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 pl-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Questions
            </Button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* PDF Viewer */}
          <div className="lg:w-2/3">
            <div className="bg-red-50 dark:bg-red-900/50 rounded-lg border border-red-200 dark:border-red-800 overflow-hidden shadow-sm">
              <PDFViewer pdfUrl={question.pdfUrl} title={question.title} />
            </div>
          </div>

          {/* Sidebar with Question Details */}
          <div className="lg:w-1/3">
            <div className="bg-red-50 dark:bg-red-900/50 rounded-lg border border-red-200 dark:border-red-800 p-6 shadow-sm">
              <h1 className="text-2xl font-bold mb-2">{question.title}</h1>

              {question.verified && (
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/40 mb-4">
                  Verified
                </Badge>
              )}

              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{question.uploadDate}</span>
              </div>

              {question.description && (
                <div className="mb-6 text-gray-700 dark:text-gray-300 text-sm">
                  <p>{question.description}</p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Department</h2>
                  <div className="bg-white dark:bg-red-900/30 rounded-md p-3 border border-red-100 dark:border-red-800">
                    <p>{question.department}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">Semester</h2>
                  <div className="bg-white dark:bg-red-900/30 rounded-md p-3 border border-red-100 dark:border-red-800">
                    <p>{question.semester}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">Course</h2>
                  <div className="bg-white dark:bg-red-900/30 rounded-md p-3 border border-red-100 dark:border-red-800">
                    <p>{question.subject}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">Exam Type</h2>
                  <div className="bg-white dark:bg-red-900/30 rounded-md p-3 border border-red-100 dark:border-red-800">
                    <p>{question.examType}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">Uploaded by</h2>
                  <Link href={`/contributors/${question.uploadedBy}`}>
                    <div className="bg-white dark:bg-red-900/30 rounded-md p-3 border border-red-100 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700 transition-colors">
                      <p>@{question.uploadedBy}</p>
                    </div>
                  </Link>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">Stats</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-red-900/30 rounded-md p-3 border border-red-100 dark:border-red-800">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
                      <p className="text-lg font-semibold">{question.downloads}</p>
                    </div>
                    <div className="bg-white dark:bg-red-900/30 rounded-md p-3 border border-red-100 dark:border-red-800">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Views</p>
                      <p className="text-lg font-semibold">{question.views}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">Rating</h2>
                  <div className="bg-white dark:bg-red-900/30 rounded-md p-3 border border-red-100 dark:border-red-800">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {Array.from({ length: Math.floor(question.rating) }).map((_, i) => (
                          <Star key={i} className="w-4 h-4" />
                        ))}
                        {question.rating % 1 !== 0 && <StarHalf className="w-4 h-4" />}
                      </div>
                      <span className="font-semibold">{question.rating}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">
                        ({question.ratingCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {question.tags.map((tag: string, index: number) => (
                      <Badge
                        key={index}
                        className="bg-red-100 dark:bg-red-800/50 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800/70"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={handleDownload}>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>

                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant="outline"
                      className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/70"
                      onClick={toggleBookmark}
                    >
                      <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-red-600 text-red-600" : ""}`} />
                      {isBookmarked ? "Saved" : "Save"}
                    </Button>

                    <Button
                      variant="outline"
                      className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/70"
                      onClick={handleShare}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>

                    <Button
                      variant="outline"
                      className="border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/70"
                      onClick={handleReport}
                    >
                      <Flag className="w-4 h-4 mr-2" />
                      Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
