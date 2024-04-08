import React, { useState } from "react";
import swal from 'sweetalert';

const Pescados = () => {

    const [inputValueArticulo, setInputValueArticulo] = useState("");
    const [inputValueCantidad, setInputValueCantidad] = useState("");
    const [pescados, setPescados] = useState([]);

    const handleInputChangeArticulo = (e) => {
        setInputValueArticulo(e.target.value);
    };

    const handleInputChangeCantidad = (e) => {
        setInputValueCantidad(e.target.value);
    };

    const handleKeyDownArticulo = (e) => {
        if (e.key === "Enter" && inputValueArticulo.trim() !== "") {
            addArticulo();
        }
    };

    const handleKeyDownCantidad = (e) => {
        if (e.key === "Enter" && inputValueCantidad.trim() !== "") {
            addCantidad();
        }
    };

    const addArticulo = () => {
        if (inputValueArticulo.trim() !== "") {
            setPescados([...pescados, { articulo: inputValueArticulo, cantidad: inputValueCantidad }]);
            setInputValueArticulo("");
            setInputValueCantidad("");
        }
    };

    const handleDelete = (index) => {
     
        swal({
            title: "Cuidado!!!",
            text: "Vas a borrar un articulo de la lista de la compra",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    setPescados(pescados.filter((_, currentIndex) => index !== currentIndex));
                    swal("Tu articulo ha sido borrado!!", {
                        icon: "success",
                    });
                } else {
                    swal("Tu articulo está a salvo!");
                    return
                }
                
            });
    };

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="wrap-containerPescados">
                    <h1 className="tituloPescados">Pescados</h1>
                    <div className="pescados">

                        <input
                            className="articulo"
                            type="text"
                            value={inputValueArticulo}
                            onChange={handleInputChangeArticulo}
                            onKeyDown={handleKeyDownArticulo}
                            placeholder="Articulo a comprar" />
                        <input
                            className="cantidad"
                            type="text"
                            value={inputValueCantidad}
                            onChange={handleInputChangeCantidad}
                            onKeyDown={handleKeyDownCantidad}
                            placeholder="Cantidad a comprar" />

                        <button className="boton" onClick={addArticulo}>Añadir Artículo</button>
                    </div>
                    <div className="listadoCongelados container">
                        <ul className="articuloCaja">
                            {pescados.map((pescado, index) => (
                                <li className="articulo d-flex justify-content-around" key={index}>
                                    <span className="text-align-center w-100">{pescado.articulo}  {pescado.cantidad}</span>
                                    <div className="d-flex align-items-center me-1">
                                        <i className="fa fa-trash-can" onClick={() => handleDelete(index)}></i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="cantidadComprada">{pescados.length} En lista</div>
                </div>
            </div>
        </>
    );
}

export default Pescados;
