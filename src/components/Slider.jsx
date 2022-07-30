import React from 'react'

export default function Slider() {
  return (
    <div>
        <section class="productos" id="products">
            <section  class="container_slide" >
                <h2>NUESTROS PRODUCTOS</h2>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./media/promo1.jpg" class="d-block " alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="./media/promo2.jpg" class="d-block " alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="./media/promo3.png" class="d-block " alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden"></span>
                        </button>
                </div>
            </section>    
        </section>
    </div>
  )
}
