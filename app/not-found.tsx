export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          הדף לא נמצא
        </h2>
        <p className="text-gray-600 mb-8">
          מצטערים, הדף שחיפשת אינו קיים.
        </p>
        <a 
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          חזרה לדף הבית
        </a>
      </div>
    </div>
  )
}
