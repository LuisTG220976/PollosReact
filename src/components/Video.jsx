import React from 'react'

export default function Video() {
  return (
    <div>
        <div class="cover">
                <div class="text__information-cover">
                    <h1>Somos El Mejor Sabor del Pollo</h1>
                    <p>Motivados con el crecimiento gastronómico que nuestro país viene generando en los últimos
                    años, el reconocimiento de los restaurantes peruanos entre los mejores del mundo y el hecho
                    que Perú sea considerado como el cuarto país emergente del mundo para invertir, ha generado
                    que se desarrolle nuevos productos y servicios cumpliendo con las exigencias del mercado. Con la receta de nuestros antepasados y los ingredientes de nuestras cosechas, resultados esperados para que ud pueda disfrutar del Sabor del Pollo Campesino</p>
                    <div class="buttons__cover">
                        <input type="button" class="btn__register-cover" value="Leer más"/>
                        
                    </div>
                </div>
                <div class="media__cover">
                    <video src="../assets/kikirivideo.webm" autoplay playinline loop muted preload="auto"></video>
                </div>
        </div>        
    </div>
  )
}
