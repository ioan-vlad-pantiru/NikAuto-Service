import { Outlet } from "react-router-dom"

function RootLayout() {

    return (
      <div>
        <p>root</p>
        <Outlet/>
      </div>
    )
  }
  
  export default RootLayout
  