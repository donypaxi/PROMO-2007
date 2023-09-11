import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <div className='flex items-center'>
          <img className='w-24' src={logo} alt="promoción 2007" />
          <p className='text-blue-500 font-extrabold text-2xl'>Promoción 2007</p>
        </div>
      </Link>
    </>
  )
}
