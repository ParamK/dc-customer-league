const LeaderboardTable = () => {
    // Sample leaderboard data
    const leaderboardData = [
        { rank: 1, team: 'Red Dragons', played: 12, won: 9, drawn: 2, lost: 1, gf: 28, ga: 12, points: 29 },
        { rank: 2, team: 'Blue Eagles', played: 12, won: 8, drawn: 3, lost: 1, gf: 24, ga: 10, points: 27 },
        { rank: 3, team: 'Green Lions', played: 12, won: 8, drawn: 2, lost: 2, gf: 22, ga: 14, points: 26 },
        { rank: 4, team: 'Yellow Tigers', played: 12, won: 7, drawn: 3, lost: 2, gf: 20, ga: 15, points: 24 },
        { rank: 5, team: 'Purple Hawks', played: 12, won: 6, drawn: 3, lost: 3, gf: 18, ga: 16, points: 21 },
        { rank: 6, team: 'White Bears', played: 12, won: 5, drawn: 4, lost: 3, gf: 16, ga: 15, points: 19 },
        { rank: 7, team: 'Black Panthers', played: 12, won: 5, drawn: 2, lost: 5, gf: 15, ga: 18, points: 17 },
        { rank: 8, team: 'Silver Wolves', played: 12, won: 4, drawn: 3, lost: 5, gf: 14, ga: 19, points: 15 }
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-blue-700">
                <h2 className="text-xl sm:text-2xl font-bold text-white">League Standings</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                    <thead className="bg-gray-50">
                        <tr className="text-gray-600">
                            <th className="py-3 px-4 text-left font-semibold">#</th>
                            <th className="py-3 px-4 text-left font-semibold">Team</th>
                            <th className="py-3 px-4 text-center font-semibold">P</th>
                            <th className="py-3 px-4 text-center font-semibold">W</th>
                            <th className="py-3 px-4 text-center font-semibold">D</th>
                            <th className="py-3 px-4 text-center font-semibold">L</th>
                            <th className="py-3 px-4 text-center font-semibold">GF</th>
                            <th className="py-3 px-4 text-center font-semibold">GA</th>
                            <th className="py-3 px-4 text-center font-semibold">Pts</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {leaderboardData.map((team) => (
                            <tr
                                key={team.rank}
                                className={`
                                    hover:bg-gray-50 transition-colors
                                    ${team.rank <= 3 ? 'bg-blue-50/50' : ''}
                                `}
                            >
                                <td className="py-3 px-4">
                                    <span className={`
                                        inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-semibold text-white
                                        ${team.rank === 1 ? 'bg-yellow-500' :
                                            team.rank === 2 ? 'bg-gray-400' :
                                                team.rank === 3 ? 'bg-amber-600' : 'bg-gray-200 text-gray-600'}
                                    `}>
                                        {team.rank}
                                    </span>
                                </td>
                                <td className="py-3 px-4 font-medium">{team.team}</td>
                                <td className="py-3 px-4 text-center">{team.played}</td>
                                <td className="py-3 px-4 text-center">{team.won}</td>
                                <td className="py-3 px-4 text-center">{team.drawn}</td>
                                <td className="py-3 px-4 text-center">{team.lost}</td>
                                <td className="py-3 px-4 text-center">{team.gf}</td>
                                <td className="py-3 px-4 text-center">{team.ga}</td>
                                <td className="py-3 px-4 text-center font-bold">{team.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderboardTable; 