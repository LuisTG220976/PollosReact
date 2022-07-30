import React from 'react'
import "./Components.css"


export default function Footer() {
  return (
    <div>
        <footer id="contacto">
            <div class="footerContenido container">
                <h1>Polleria KikiriBrasa</h1>
                <p>En tu casa o en la nuestra no importa donde estés, siempre vamos a engreirte con el gran sabor que nos caracteriza. ¡Gracias por preferirnos!</p>
            </div>
            <div class="footerSocial container">
                <a href="https://www.facebook.com/kikiriBrasa" target="_blank" class="social-media-icon">
                    <i class='bx bxl-facebook'></i>
                </a>
                <a href="./" class="social-media-icon">
                    <i class='bx bxl-twitter'></i>
                </a>
                <a href="./" class="social-media-icon">
                    <i class='bx bxl-instagram'></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=975464565&text=%20Me%20interesa%20saber%20sobre%20la%20Banda%20Orquesta...%20lo%20vi%20en%20la%20Pagina%20WEB" target="_blank" class="social-media-icon">
                    <i class='bx bxl-whatsapp'></i>
                </a>            
            </div>
        </footer>
    </div>
  )
}
