export default function HelpPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Help Center</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I enroll in a course?</h3>
                <p className="text-gray-600">
                  Browse our course catalog, select a course you&apos;re interested in, and click the &quot;Enroll Now&quot; button. 
                  You&apos;ll have lifetime access to all course materials.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I learn at my own pace?</h3>
                <p className="text-gray-600">
                  Yes! All our courses are self-paced. You can start and complete lessons whenever it&apos;s convenient for you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I get a certificate?</h3>
                <p className="text-gray-600">
                  Upon completing a course, you&apos;ll receive a certificate of completion that you can share with employers 
                  or add to your professional profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}