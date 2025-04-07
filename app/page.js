import '../app/globals.css'
import sportsData from '../data/sports.json'
import ShowcaseSwiper from './components/ShowcaseSwiper'
import LeaderboardTable from './components/LeaderboardTable'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 bg-white shadow gap-3 sm:gap-0">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full mr-2"></div>
          <h1 className="text-xl font-bold text-blue-600">CVC</h1>
        </div>
        <nav className="flex space-x-3 sm:space-x-4 overflow-x-auto w-full sm:w-auto justify-center">
          <a href="#" className="text-gray-600 font-semibold whitespace-nowrap">Dashboard</a>
          <a href="#" className="text-gray-600 whitespace-nowrap">Fixtures</a>
          <a href="#" className="text-gray-600 whitespace-nowrap">Teams</a>
          <a href="#" className="text-gray-600 whitespace-nowrap">Results</a>
        </nav>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
          <span className="text-gray-600">User</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {/* Top Section with Padding */}
        <div className="p-3 sm:p-4 md:p-6">
          <ShowcaseSwiper />
          <LeaderboardTable />
        </div>

        {/* Full Width Banner */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 mb-6">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
                alt="Track Background"
                className="w-full h-full object-cover aspect-21/9"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section with Padding */}
        <div className="p-3 sm:p-4 md:p-6">
          {/* Indoor/Outdoor Sports */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Indoor Sports</h3>
              <ul className="space-y-2 sm:space-y-3">
                {sportsData.indoor.map((sport, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full mr-2"></span>
                    <span className="text-sm sm:text-base">{sport}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Outdoor Sports</h3>
              <ul className="space-y-2 sm:space-y-3">
                {sportsData.outdoor.map((sport, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-sm sm:text-base">{sport}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent Results */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Recent Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="text-gray-600 text-sm sm:text-base truncate">Basketball • Mar 10, 2025</p>
                  <p className="font-semibold text-sm sm:text-base truncate">Dragons 86 - 82 Eagles</p>
                </div>
              </div>
              <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="text-gray-600 text-sm sm:text-base truncate">Football • Mar 8, 2025</p>
                  <p className="font-semibold text-sm sm:text-base truncate">United 2 - 1 City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center p-3 sm:p-4 bg-white shadow">
        <p className="text-xs sm:text-sm text-gray-600">© 2025 CVC. All rights reserved.</p>
      </footer>
    </div>
  );
}