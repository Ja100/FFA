import { Outlet } from "react-router-dom"
import Navbar from "../src/components/navbar"

export default function AuthLayout() {
  return (
    <div>
        <Navbar/>
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
