import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/data/courses";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const levelColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/courses">
            <Button variant="outline">← Back to Courses</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${levelColors[course.level]}`}
                >
                  {course.level}
                </span>
                <span className="text-gray-600">{course.duration}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {course.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Instructor: <strong>{course.instructor}</strong></span>
                <span>•</span>
                <span>{course.lessons.length} lessons</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Course Content
              </h2>
              <div className="space-y-4">
                {course.lessons.map((lesson, index) => (
                  <Card key={lesson.id}>
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {index + 1}. {lesson.title}
                          </CardTitle>
                          <CardDescription>{lesson.description}</CardDescription>
                        </div>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Enroll in Course</CardTitle>
                <CardDescription>
                  Start learning today with lifetime access
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full">
                  Preview Course
                </Button>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">What you&apos;ll learn:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {course.lessons.slice(0, 3).map((lesson) => (
                      <li key={lesson.id} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        {lesson.title}
                      </li>
                    ))}
                    {course.lessons.length > 3 && (
                      <li className="text-gray-500">
                        And {course.lessons.length - 3} more lessons...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}