export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About MyClass</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            MyClass is a modern online learning platform designed to help students and professionals 
            acquire new skills and advance their careers through high-quality, accessible education.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to democratize education by providing expert-led courses that are both 
            comprehensive and practical. Whether you&apos;re looking to learn web development, programming, 
            or design, we have courses that will help you achieve your goals.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Expert instructors with real-world experience</li>
            <li>Hands-on projects and practical assignments</li>
            <li>Self-paced learning with lifetime access</li>
            <li>Community support and mentorship</li>
          </ul>
        </div>
      </div>
    </div>
  );
}