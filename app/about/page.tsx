import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About CityUQBank</h1>

          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 mb-8">
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              CityUQBank was created with a simple mission: to help students access past exam papers easily and
              efficiently. We believe that having access to previous exam questions is one of the most effective ways to
              prepare for upcoming exams.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By creating a platform where students can share and access exam question papers, we aim to foster a
              collaborative learning environment that benefits everyone in the academic community.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 mb-8">
            <h2 className="text-xl font-bold mb-4">How It Started</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              CityUQBank began as a small project by a group of computer science students at City University who were
              frustrated with the difficulty of finding past exam papers. What started as a simple file-sharing system
              has grown into a comprehensive platform used by thousands of students.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Since our launch in 2022, we've expanded to cover multiple departments and courses, with a growing
              community of contributors who help make this resource possible.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 mb-8">
            <h2 className="text-xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-red-900 rounded-lg shadow-sm">
                <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Collaboration</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  We believe in the power of students helping students through knowledge sharing.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-red-900 rounded-lg shadow-sm">
                <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Accessibility</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Educational resources should be easily accessible to all students.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-red-900 rounded-lg shadow-sm">
                <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Recognition</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Contributors deserve recognition for helping their fellow students.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-red-900 rounded-lg shadow-sm">
                <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Quality</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  We strive to maintain high-quality, accurate, and complete resources.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 mb-8">
            <h2 className="text-xl font-bold mb-4">The Team</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              DIUQbank is maintained by a dedicated team of students and alumni who volunteer their time to keep the
              platform running smoothly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-red-500">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Rahul Ahmed</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Founder & Developer</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-red-500">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Priya Sharma</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-red-500">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Kamal Hassan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Content Manager</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              DIUQbank is powered by students like you. Join our community and help make education more accessible for
              everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/auth/signup">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Create an Account</Button>
              </Link>
              <Link href="/upload">
                <Button
                  variant="outline"
                  className="border-red-500 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
                >
                  Contribute a PDF
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
