// // Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// import LatestItem from '../LatestItem'

class LatestMatch extends Component {
  state = {teamBannerUrl: {}, latestMatchDetails: {}, isLoading: true}

  componentDidMount() {
    this.getLatestData()
  }

  getLatestData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/:id')
    const data = await response.json()
    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      isLoading: false,
    })
  }

  renderLatestMatch = () => {
    const {teamBannerUrl, latestMatchDetails} = this.state
    return (
      <div>
        <img src={teamBannerUrl} alt="Team Banner" />
        <h2>Latest Match Details:</h2>
        <p>{latestMatchDetails.result}</p>
        <p>Man of the Match: {latestMatchDetails.man_of_the_match}</p>
        <p>Date: {latestMatchDetails.date}</p>
        <p>Venue: {latestMatchDetails.venue}</p>
        <p>Umpires: {latestMatchDetails.umpires}</p>
        <h2>Recent Matches:</h2>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderLatestMatch()
        )}
      </div>
    )
  }
}
export default LatestMatch
