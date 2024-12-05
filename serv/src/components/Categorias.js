import React from "react";
import './Categorias.css';

const Categorias = () => {
    return (
        <div id="categorias">
              <div class="categ">
                <i class="fas fa-laptop-code"></i>
                <p>Design e tecnologia</p>
              </div>
              <div class="categ">
                <i class="fas fa-palette"></i>
                <p>Arte</p>
              </div>
              <div class="categ">
                <i class="fas fa-user-tie"></i>
                <p>Consultoria</p>
              </div>
              <div class="categ">
                <i class="fas fa-tools"></i>
                <p>Reformas e reparos</p>
              </div>
              <div class="categ">
                <i class="fas fa-heartbeat"></i>
                <p>Saúde</p>
              </div>
              <div class="categ">
                <i class="fas fa-tshirt"></i>
                <p>Moda e beleza</p>
              </div>
            </div>
    )
}

export default Categorias;
