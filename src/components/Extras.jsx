import {Link} from "react-router-dom";

export default function Extras() {
  return (
    <div>
        <section className="categorias" id="catego">                
                <div className="contenedor">
                    <h2>PLATOS EXTRAS</h2>
                <div className="container_card">
                    <div className="card">
                        <img src="./media/pollo con jamon y queso2.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Filete de Pollo con Jamon y Queso</h5>
                            <p className="card-text">Filete de Pollo con Jamon y Queso; con papas crocantes y ensaladas; .</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./media/chicharron pollo.PNG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Chicharron de Pollo</h5>
                            <p className="card-text">Crocantes presas de pollo con su toque picantes con su respectiva papas fritas.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./media/pollo plancha.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Filete de Pollo </h5>
                            <p className="card-text"> Filete de Pollo tipo Dieta con papas fritas y su porcion de ensalada.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card" style="width: 18rem;">
                        <img src="./media/CORDON_BLUE.png" className="card-img-top" alt="..." width="100"/>
                        <div className="card-body">
                            <h5 className="card-title">Cordon Blue</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card" style="width: 18rem;">
                        <img src="./media/salchipapa con huevo frito.png" className="card-img-top" alt="..." width="100"/>
                        <div className="card-body">
                            <h5 className="card-title">Salchichapa Especial</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card" style="width: 18rem;">
                        <img src="./media/lomo a lo pobre.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Lomo a lo Pobre</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card" style="width: 18rem;">
                        <img src="./media/chuleta a lo pobre.png" clclassNameass="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Chuleta a lo Pobre</h5>
                            <p className="card-text">Filete de Pollo con Jamon y Queso; con papas crocantes y ensaladas; .</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    <div className="card" style="width: 18rem;">
                        <img src="./media/ceviche_pescado.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Ceviche de Pescado</h5>
                            <p className="card-text">Filete de Pollo con Jamon y Queso; con papas crocantes y ensaladas; .</p>
                            <Link to="#" clclassName="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}
