export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            enroll in courses, or contact us for support.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Provide and maintain our educational services</li>
            <li>Process course enrollments and track progress</li>
            <li>Send important updates about your courses</li>
            <li>Respond to your questions and provide customer support</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information only in specific circumstances outlined in this policy.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at 
            <strong> privacy@myclass.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}