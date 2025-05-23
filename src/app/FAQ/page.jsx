'use client'; // Add this if you need client-side interactivity

export default function FAQPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {/* Example FAQ Item - replace with your actual content */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">Question 1?</h2>
          <p className="mt-2 text-gray-600">Answer to question 1</p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">Question 2?</h2>
          <p className="mt-2 text-gray-600">Answer to question 2</p>
        </div>
      </div>

      <footer className="mt-12 pt-4 border-t">
        <p className="text-center text-gray-500">&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
