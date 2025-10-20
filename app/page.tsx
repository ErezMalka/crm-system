export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          מערכת CRM
        </h1>
        
        <div className="text-center space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              🚀 ברוכים הבאים!
            </h2>
            <p className="text-blue-800">
              המערכת בשלבי בנייה. בקרוב תוכלו להתחבר ולהתחיל לעבוד.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              גרסה: 0.1.0 | Next.js + Supabase
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
