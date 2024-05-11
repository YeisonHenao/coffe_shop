import React from "react"
import Product from "../model/product"

interface CardProps {
  data: Product
}


const CardComponent: React.FC<CardProps> = ({data}) => {
  return(
    <div className="card" id={data.id.toString()}>
      <div className="row g-0">
        {/* Imagen en el lado izquierdo */}
        <div className="col-md-4">
          <img src={data.image_url} className="img-fluid rounded-start" alt="Imagen" />
        </div>
        {/* Información en el lado derecho */}
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent