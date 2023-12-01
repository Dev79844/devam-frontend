import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {product.images.length > 0 ? (
        <img
        src={product?.images[0]?.url}
        alt="Product"
        className="w-full h-48 object-cover"
      />
      ):(null)}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{product.model}</h3>
        <p className="text-gray-700 mb-4 font-semibold">Warranty:{product.warranty}</p>
        <p className="text-gray-700 mb-4 font-semibold">Accessories:{product.accessories}</p>
        <p className="text-gray-700 mb-4 font-semibold">Condition:{product.condition}</p>
        <p className="text-gray-700 mb-4 font-semibold">IMEI:{product.imei}</p>
        <div className="flex justify-between items-center">
          {/* <span className="text-gray-900 font-bold">$99.99</span> */}
          <Link to={`/admin/product/${product._id}`}><button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded">
            View more
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard