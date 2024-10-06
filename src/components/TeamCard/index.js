import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {each} = props
  const {id, name, teamImageUrl} = each

  return (
    <Link to={`/team-matches/${id}`} className="linkcon" key={id}>
      <li className="eachThumbnailContainer">
        <img src={teamImageUrl} className="thumbnailImage" alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
