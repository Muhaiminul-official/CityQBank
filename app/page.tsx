"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DocumentIcon } from "@/components/icons"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-50 to-white dark:from-red-900 dark:to-red-950">
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-red-600 rounded-full px-4 py-1 mb-6">
                <span className="text-sm font-medium text-white">
                  CityU Question Bank
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-red-600">Share & Access</span> Exam
                Question PDFs
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                The ultimate platform to find, download, and share exam question
                papers. Upload your PDFs, help fellow students, and get
                recognized for your contributions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/questions">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
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
                    Find Question PDFs
                  </Button>
                </Link>
                <Link href="/upload">
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
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
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    Share Question PDF
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white dark:bg-red-900/30 rounded-lg p-8 shadow-xl">
                  <div className="h-4 bg-red-200 dark:bg-red-800 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-red-200 dark:bg-red-800 rounded mb-4"></div>
                  <div className="h-4 bg-red-200 dark:bg-red-800 rounded mb-4 w-5/6"></div>
                  <div className="h-4 bg-red-200 dark:bg-red-800 rounded mb-8 w-2/3"></div>

                  <div className="flex gap-2 mb-4">
                    <div className="h-8 bg-red-600 rounded w-1/4"></div>
                    <div className="h-8 bg-red-400 rounded w-1/4"></div>
                    <div className="h-8 bg-red-300 rounded w-1/4"></div>
                  </div>

                  <div className="h-12 bg-red-200 dark:bg-red-800 rounded mb-4"></div>
                  <div className="h-12 bg-red-200 dark:bg-red-800 rounded mb-8"></div>

                  <div className="h-12 bg-red-600 rounded"></div>
                </div>
                <div className="absolute -top-4 -right-4 bg-red-600 rounded-full p-4">
                  <DocumentIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-200 dark:bg-red-800 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-200 dark:bg-red-800 rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/2"></div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-center mb-10 md:mb-16">
          How CityUQBank Works
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
              1
            </div>
            <div className="bg-white dark:bg-red-900/30 p-6 md:p-8 rounded-lg text-center h-full shadow-sm border border-red-100 dark:border-red-800">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h3 className="text-xl font-bold mb-4">Upload PDF</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Share your exam questions by uploading the PDF file with
                relevant details.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
              2
            </div>
            <div className="bg-white dark:bg-red-900/30 p-6 md:p-8 rounded-lg text-center h-full shadow-sm border border-red-100 dark:border-red-800">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h3 className="text-xl font-bold mb-4">Get Credit</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your contribution is recognized with your name watermarked on
                the PDF.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
              3
            </div>
            <div className="bg-white dark:bg-red-900/30 p-6 md:p-8 rounded-lg text-center h-full shadow-sm border border-red-100 dark:border-red-800">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
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
              </div>
              <h3 className="text-xl font-bold mb-4">Help Others</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Fellow students can easily find and download the question papers
                they need.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-red-50 dark:bg-red-900/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                1,200+
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Question Papers
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                5,000+
              </div>
              <p className="text-gray-700 dark:text-gray-300">Active Users</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                300+
              </div>
              <p className="text-gray-700 dark:text-gray-300">Contributors</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                50+
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Courses Covered
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Questions Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            Featured Questions
            <div className="w-24 h-1 bg-red-600 mt-4"></div>
          </h2>
          <Link href="/questions">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
            >
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(item => (
            <div
              key={item}
              className="bg-white dark:bg-red-900/30 rounded-lg p-6 border border-red-100 dark:border-red-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-red-600 mb-3">
                CSE {3100 + item} -{' '}
                {
                  ['Database Systems', 'Algorithms', 'Software Engineering'][
                    item - 1
                  ]
                }{' '}
                Final Exam 2023
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                <span className="mr-4">Downloads: {200 + item * 50}</span>
                <span>Uploaded: May {item * 5}, 2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Size: {1.5 + item * 0.5} MB
                </span>
                <div className="flex space-x-2">
                  <Link href={`/questions/${item}`}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
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
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => {
                      alert(`Downloading CSE ${3100 + item} Final Exam...`);
                    }}
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-red-50 dark:bg-red-900/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 md:mb-16">
            What Students Say
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Ahmed',
                role: 'CSE Student',
                quote:
                  'CityUQBank has been a lifesaver during exam preparation. I found all the previous question papers I needed.',
              },
              {
                name: 'Priya Sharma',
                role: 'EEE Student',
                quote:
                  "The platform is so easy to use. I've uploaded several PDFs and love seeing my name as a contributor.",
              },
              {
                name: 'Kamal Hassan',
                role: 'BBA Student',
                quote:
                  'Thanks to CityUQBank, I was able to understand the exam pattern and prepare accordingly. Highly recommended!',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-red-900/50 p-6 rounded-lg relative shadow-sm border border-red-100 dark:border-red-800"
              >
                <div className="absolute -top-5 left-6 text-red-600 text-5xl">
                  "
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 pt-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-600 mr-3 flex items-center justify-center font-bold text-white">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-lg p-8 md:p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Contribute?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join our community of contributors and help fellow students by
            sharing your exam question papers. Get recognized for your
            contributions and make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/upload">
              <Button className="bg-white text-red-600 hover:bg-red-50">
                Upload Question PDF
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Create an Account
              </Button>
            </Link>
          </div>
        </div>
      </div>


     
    </main>
  );
}
