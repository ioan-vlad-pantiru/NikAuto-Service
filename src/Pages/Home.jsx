import MainLogo from '../Components/MainLogo'
import NavBar from '../Components/NavBar'
import ThreeCardLayout from '../Components/Three-card-layout'

import "../Pages/Home.css"

function Home() {

    return (
      <div>
        <NavBar/>
        <div className="home">
          <MainLogo/>
        </div>
        <h2 className="title">Service Auto Onesti<hr className="line"/></h2>
        <ThreeCardLayout/>
      </div>
    )
}
  
export default Home
  