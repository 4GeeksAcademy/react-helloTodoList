import React, { useState } from "react";

const Congelados = () => {

    const [inputValueArticulo, setInputValueArticulo] = useState("");
    const [inputValueCantidad, setInputValueCantidad] = useState("");
    const [congelados, setCongelados] = useState([]);

    const handleInputChangeArticulo = (e) =>{
        setInputValueArticulo(e.target.value);
    };

    const handleInputChangeCantidad = (e) =>{
        setInputValueCantidad(e.target.value);
    };

    const handleKeyDownArticulo = (e) =>{
        if(e.key === "Enter" && inputValueArticulo.trim() !== ""){
            addArticulo();
        }
    };

    const handleKeyDownCantidad = (e) =>{
        if(e.key === "Enter" && inputValueCantidad.trim() !== ""){
            addCantidad();
        }
    };

    const addArticulo = () =>{
        if(inputValueArticulo.trim() !== ""){
            setCongelados([...congelados, { articulo: inputValueArticulo, cantidad: inputValueCantidad }]);
            setInputValueArticulo("");
            setInputValueCantidad("");
        }
    };
   
    const handleDelete = (index) =>{
        swal({
            title: "Cuidado!!!",
            text: "Vas a borrar un articulo de la lista de la compra",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    setCongelados(congelados.filter((_, currentIndex) => index !== currentIndex));

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
            <div className="container d-flex justify-content-center mb-5">
                <div className="wrap-containerCongelados">
                    <h1 className="tituloCongelados">Congelados</h1>
                    <div className="congelados">

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
                            {congelados.map((congelado, index) => (
                                <li className="articulo d-flex justify-content-around" key={index}>                                    
                                    <span  className="text-align-center w-100">{congelado.articulo}  {congelado.cantidad}</span>
                                    <div className="d-flex align-items-center me-1">
                                        <i className="fa fa-trash-can" onClick={() => handleDelete(index)}></i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="cantidadComprada">{congelados.length} En lista</div>
                </div>
            </div>
        </>
    );
}

export default Congelados;
