import { Outlet } from "react-router-dom"
import Header from "../pages/header/Header"
import "../style.css"

function Layout() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
