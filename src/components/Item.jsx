import { Link } from 'react-router-dom';

const Item = ({ id, nombre}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <div className="flex flex-col sm:flex-row">
        <img
          className="object-cover w-full sm:w-48"
          src="https://img.freepik.com/vector-gratis/pila-libros-diseno-plano-dibujado-mano_23-2149334862.jpg"
          alt=""
        />
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold">{nombre}</h2>
          </div>
          <div className="mt-4">
            <Link to={`/item/${id}`} className="bg-black hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded">
              Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
