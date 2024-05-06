import {Link} from 'react-router-dom'

const TeamItem = props => {
  const {blogsData} = props
  const {id, name, imageUrl} = blogsData
  return (
    <Link to={`/team-matches/${id}`} className="teamlink">
      <div className="card-container">
        <img className="card-image" src={imageUrl} alt={`item${id}`} />
        <p>{name}</p>
      </div>
    </Link>
  )
}
export default TeamItem
