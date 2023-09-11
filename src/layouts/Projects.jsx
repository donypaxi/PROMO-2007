import { Card } from "../components/Card"

export const Projects = () => {
  return (
    <>
        <div className="px-10">
          <div id="projects" className="flex flex-col items-center my-16 text-4xl lg:text-5xl font-bold">
              <h2 className="">Imagenes</h2>
              <h2 className="text-green-400">Destacadas</h2>
          </div>
          <Card/>
        </div>

    </>
  )
}
