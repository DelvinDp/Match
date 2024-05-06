// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamItem from '../Teamdata'

class TeamCard extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getblogsData()
  }

  getblogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachitem => ({
      name: eachitem.name,
      id: eachitem.id,
      imageUrl: eachitem.team_image_url,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="teamcard">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(item => <TeamItem blogsData={item} key={item.id} />)
        )}
      </div>
    )
  }
}
export default TeamCard
