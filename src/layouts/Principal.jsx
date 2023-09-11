import { SocialNetworks } from "../components/SocialNetworks"

export const Principal = () => {
  return (
    <>
        <div id="header" className="mx-auto px-10 flex flex-col items-center mt-32 text-slate-700">
          <h2>Bienvenidos, a la promoción 2007 de la</h2>
          <h1 className="mt-5 text-5xl font-bold text-black text-center ">I.E.E. CORONEL BOLOGNESI</h1>
          <p className="text-center text-cyan-600 text-3xl font-bold mt-7">Hemos nacido para ganar</p>
          <p className="text-xl md:text-xl lg:text-2xl md:mx-20 mx-10 mt-7 text-center">"Aquí ira el nombre de la promo que aun no sabemos xD."</p>
          <p className="my-7">Tacna - Perú</p>
        </div>
        <div className="px-10 flex justify-center w-1/2 mx-auto text-3xl">
          <SocialNetworks/>
        </div>

    </>
  )
}
