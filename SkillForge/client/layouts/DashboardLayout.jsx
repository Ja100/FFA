import { Outlet } from "react-router-dom"
import Sidebar from "../src/components/sidebar"


export default function DashboardLayout() {
  return (
    <div className="flex h-screen ">
      <Sidebar/>
      <div className="w-full flex  justify-center ">
        <main className="mt-15">
            <Outlet />
        </main>
      </div>
    </div>
  )
}
