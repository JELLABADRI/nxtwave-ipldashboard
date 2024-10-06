import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedMatchDetails

  return (
    <div>
      <div className="row spb">
        <div>
          <p className="teamName">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="stadiumName">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competingTeamLogo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <p>First Innings</p>
      <p>{firstInnings}</p>
      <p>Second Innings</p>
      <p>{secondInnings}</p>
      <p>Man Of The Match</p>
      <p>{manOfTheMatch}</p>
      <p>Umpires</p>
      <p>{umpires}</p>
    </div>
  )
}
export default LatestMatch
