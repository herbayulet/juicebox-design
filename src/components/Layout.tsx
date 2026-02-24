import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="w-full flex items-center justify-center px-7 py-20">
        <Outlet/>
    </div>
  )
}

export default Layout