import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
  
const ItemListContainer = () => {

    const {categoria} = useParams()
    const productos = [
        
        {id: 1, nombre: "Libro 1 ", descripcion: "Descripcion Libro 1", precio: "1000", categoria: "A" },
        {id: 2, nombre: "Libro 2 ", descripcion: "Descripcion Libro 2", precio: "1000", categoria: "A" },
        {id: 3, nombre: "Libro 3 ", descripcion: "Descripcion Libro 3", precio: "2000", categoria: "B" },
        {id: 4, nombre: "Libro 4 ", descripcion: "Descripcion Libro 4", precio: "2000", categoria: "B" },
        {id: 5, nombre: "Libro 5 ", descripcion: "Descripcion Libro 5", precio: "2000", categoria: "C" },
        {id: 6, nombre: "Libro 6 ", descripcion: "Descripcion Libro 6", precio: "2000", categoria: "C" },
    ]

    const filtrarProductos = productos.filter((producto) => producto.categoria === categoria)

    return (
      
      <>
        <ItemList productos={filtrarProductos}/>
      </>
    
    )    

}
    



export default ItemListContainer