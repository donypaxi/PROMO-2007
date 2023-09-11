import { Route, Routes } from "react-router-dom"
import { HomePage,PortafolioPage,ContactMePage, ChambaPage } from "../pages"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/"  element={<HomePage/>}/>
            <Route path="/portafolio"  element={<PortafolioPage/>}/>
            <Route path="/contactame"  element={<ContactMePage/>}/>
            <Route path="/chamba"  element={<ChambaPage/>}/>
            
        </Routes>
    </>
  )
}
