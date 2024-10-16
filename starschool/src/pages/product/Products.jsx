import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const Products = () => {
  const { data, loading, error } = useContext(DataContext);
  console.log(data);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white transition-transform transform hover:scale-105">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
