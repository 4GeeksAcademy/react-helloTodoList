import React, { useState } from "react";

const FichaTecnica = () => {
    const [ficha, setFicha] = useState({
        Pax: "",
        Evento: "",
        Hora: "",
        Servicio: "",
        Entrante: "",
        Principal: "",
        Postre: "",
        Observaciones: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFicha({ ...ficha, [name]: value });
    };

    const addFicha = () => {
        if (ficha.Evento.trim() !== "") {
            // Aquí puedes hacer lo que quieras con la ficha, como enviarla a una base de datos o realizar alguna operación.
            console.log(ficha);
            setFicha({
                Pax: "",
                Evento: "",
                Hora: "",
                Servicio: "",
                Entrante: "",
                Principal: "",
                Postre: "",
                Observaciones: "",
            });
        }
    };
    console.log(ficha)
    return (
        <div>
            <div className="fichaTecnica">
                <h3>Rellena la orden de servicio</h3>
                <div className="row container">
                    <input
                        className="evento"
                        type="text"
                        name="Evento"
                        placeholder="Nombre del evento"
                        value={ficha.Evento}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="m-3">
                        <input
                            className="pax m-1"
                            type="text"
                            name="Pax"
                            placeholder="Pax"
                            value={ficha.Pax}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="hora m-1"
                            type="time"
                            name="Hora"
                            placeholder="Hora"
                            value={ficha.Hora}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="fecha m-1"
                            type="date"
                            name="Fecha"
                            value={ficha.Fecha}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="servicio" className="servicio m-2 d-flex justify-content-center">
                            <select
                                name="Servicio"
                                value={ficha.Servicio}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Tipo de servicio</option>
                                <option value="Desayuno">Desayuno</option>
                                <option value="Comida">Comida</option>
                                <option value="Cena">Cena</option>
                                <option value="Cocktel">Cocktel</option>
                            </select>
                        </label>
                    </div>
                    <div className="row inputFormulario">
                        <input
                            className="m-1"
                            type="text"
                            name="Entrante"
                            value={ficha.Entrante}
                            onChange={handleInputChange}
                            placeholder="Entrante"
                            required
                        />
                        <input
                            className="m-1"
                            type="text"
                            name="Principal"
                            value={ficha.Principal}
                            onChange={handleInputChange}
                            placeholder="Plato Principal"
                            required
                        />
                        <input
                            className="m-1"
                            type="text"
                            name="Postre"
                            value={ficha.Postre}
                            onChange={handleInputChange}
                            placeholder="Postre"
                            required
                        />
                        <input
                            className="m-1"
                            type="text"
                            name="Observaciones"
                            value={ficha.Observaciones}
                            onChange={handleInputChange}
                            placeholder="Alergias, peticiones especiales..."
                            required
                        />
                    </div>
                </div>
                <button className="boton" onClick={addFicha} disabled>
                    Guardar Orden De Servicio
                </button>
            </div>   
            <div className="resumenOrden">
                <h6>Resumen orden</h6>
                <p>Pax: {ficha.Pax}</p>
                <p>Evento: {ficha.Evento}</p>
                <p>Hora: {ficha.Hora}</p>
                <p>Servicio: {ficha.Servicio}</p>
                <p>Entrante: {ficha.Entrante}</p>
                <p>Principal: {ficha.Principal}</p>
                <p>Postre: {ficha.Postre}</p>
                <p>Observaciones: {ficha.Observaciones}</p>
            </div>  
        </div>
    );
};

export default FichaTecnica;
