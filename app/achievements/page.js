// app/achievements/page.js

export default function Achievements() {
    return (
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-white">My Achievements</h2>
        <p className="text-gray-300 mt-4">
          Here are some of my accomplishments throughout my cricketing career.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {/* Achievement 1 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white">Player of the Series</h3>
            <p className="text-gray-300 mt-2">
              Awarded Player of the Series in the 2023 Regional Cricket Championship.
            </p>
          </div>
  
          {/* Achievement 2 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white">Highest Run Scorer</h3>
            <p className="text-gray-300 mt-2">
              Scored 1,200 runs in the 2022-23 domestic season, becoming the highest run-scorer of the league.
            </p>
          </div>
  
          {/* Achievement 3 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white">Hat-Trick in T20 Match</h3>
            <p className="text-gray-300 mt-2">
              Achieved a hat-trick in the final match of the 2021 T20 Championship.
            </p>
          </div>
  
          {/* Achievement 4 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white">National Team Selection</h3>
            <p className="text-gray-300 mt-2">
              Selected for the national cricket team in 2020, representing the country in international tournaments.
            </p>
          </div>
  
          {/* Achievement 5 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white">Fastest Century</h3>
            <p className="text-gray-300 mt-2">
              Scored the fastest century in the history of the Regional T20 League, achieving 100 runs in just 40 balls.
            </p>
          </div>
  
          {/* Achievement 6 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white">Best Bowler Award</h3>
            <p className="text-gray-300 mt-2">
              Received the Best Bowler Award for taking 25 wickets in the 2022 One-Day League.
            </p>
          </div>
        </div>
      </section>
    );
  }
  