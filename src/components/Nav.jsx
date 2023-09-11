import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

export const Nav = () => {
  return (
    <>
        <div className='flex gap-5'>
          <div className='text-slate-800 hidden md:flex h-full gap-5'>
              <Link className='transition-colors cursor-pointer duration-150 hover:text-cyan-600'
              to="header"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-110}>Inicio</Link>
              <Link className='transition-colors cursor-pointer duration-150 hover:text-cyan-600'
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}>Imagenes</Link>
              <Link className='transition-colors cursor-pointer duration-150 hover:text-cyan-600'
              to="contactme"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-10}>Contáctame</Link>
          </div>
          <div className='text-slate-800 hidden md:flex h-full gap-5'>
            <NavLink to="/chamba">
              Compañeros
            </NavLink>
          </div>
        </div>
    </>
  )
}
