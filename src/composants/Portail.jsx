import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from '../Menu'
import { MenuLateral } from '../MenuLateral'
import { Footer } from '../Footer'

export default function Portail() {
    return (
        <>
          <div className="wrapper">
            <Menu></Menu>
    
            <MenuLateral></MenuLateral>
    
            <div className="content-wrapper">
              <Outlet />
            </div>
    
            <Footer></Footer>
          </div>
        </>
      )
}
