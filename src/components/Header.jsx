
import React from 'react'
import "./Components.css"
import logo from "../assets/Kikiri.png"


export default function Header() {
  return (
    <header id="main-header">
        <div class="container_header">
            <div class="logo">
                <img src={logo} alt=""/>
            </div>
            <div class="menu">
                <nav>
                    <ul>
                        <li><a href="#products">CARTAS</a></li>
                        <li><a href="#promos">PROMOCIONES</a></li>
                        <li><a href="#catego">EXTRAS</a></li>
                        <li><a href="#">NOSOTROS</a></li>
                        <li><a href="#contacto">CONTACTANOS</a></li>
                    </ul>
                </nav>
            </div>
            <i class="fa-solid fa-bars" id="icon_menu"></i>
            <div class="header__register">
                <button class="btn btn-dark btn-lg" data-bs-toggle="modal" data-bs-target="#modalRegistrarse">Registrarse</button>
            </div>    
        </div>
        </header>
        );
}

