import { Logo } from "../components/Logo"
import { Nav } from "../components/Nav"
import { NavBar } from "../components/NavBar"

export const Header = () => {
  return (
    <>
        <div className="fixed top-0 w-full bg-white   text-black py-3 px-5">
          <div className="h-full grid grid-cols-3 my-auto content-center">
              <div>
                <Logo className="bg-red-300"/>
              </div>
              <div className="hidden my-auto md:flex md:col-start-3 justify-self-end">
                <Nav/>
              </div>
              <div className="my-auto col-start-3  justify-self-end">
                <NavBar/>
              </div>
          </div>
        </div>
    </>
  )
}
