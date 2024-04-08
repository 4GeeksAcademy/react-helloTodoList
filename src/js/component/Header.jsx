import React from "react";

const Header = () =>{

    return(
<nav className="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">React-jateHotels</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Empleados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ofertas</a>
        </li>
            
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Header;