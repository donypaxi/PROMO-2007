import { SocialNetworks } from "../components/SocialNetworks"
export const Footer = () => {
  return (
    <>
      <div className="px-10 flex justify-between items-center py-5 text-xl">
          <p className="text-base font-semibold text-black ">2023 - DonyDev</p>
          <SocialNetworks/>
      </div>
    </>
  )
}
