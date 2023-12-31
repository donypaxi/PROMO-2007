import { BtnContact } from "../components/BtnContact"
import { BtnCv } from "../components/BtnCv"
import { Skill } from "../components/Skill"

export const AboutMe = () => {
  return (
    <>
        <div className=" grid md:grid-cols-2 content-center mt-20 px-10">
          <div className="my-auto ">
            <Skill/>
          </div>
          <div className="my-auto text-slate-700 ">
              <h2 className="text-4xl font-bold mb-5 text-center text-black">Sobre Nosotros</h2>
              <p className="px-10 text-center md:text-base lg:text-lg">"La Promoción 2007: un legado de amistad, aprendizaje y momentos inolvidables. Celebrando más de 15 años de recuerdos que nos unen, somos más que compañeros, somos una familia."</p>
              <div className=" flex flex-col lg:flex-row gap-2 mt-5 justify-center items-center">
                  {/* <BtnContact/>
                  <BtnCv/> */}
              </div>
          </div>
        </div>

    </>
  )
}
