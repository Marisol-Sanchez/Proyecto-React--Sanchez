import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({productos}) => {
  
  const { id } = useParams();
  const filtrarProductos = productos.filter((producto) => producto.id == id);

  return (
    
    <div>
      
      {filtrarProductos.map((p) => {
        
        return (
          <div key={p.id} className="mx-auto p-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <h2 className="text-center text-lg font-semibold">{p.nombre}</h2>
                
                <div className="mt-4">
                  <img
                    className="mx-auto"
                    src="https://img.freepik.com/vector-gratis/pila-libros-diseno-plano-dibujado-mano_23-2149334862.jpg"
                    alt=""
                  />
                </div>
                
                <p className="mt-2 text-black">Precio: ${p.precio}</p>
                <p className="mt-2 text-black">Descripcion: {p.descripcion}</p>
                <p className="mt-2 text-black">Categoria: {p.categoria}</p>
                
                <div className="mt-4 flex justify-center">
                  <button className="bg-black hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded">Agregar al carrito</button>
                </div>
              
              </div>
            
            </div>
          
          </div>
        
        );
      })}
    </div>
  
  );

};

export default ItemDetail;
