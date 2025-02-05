import React, { useState } from 'react';
import { Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FoodDonationPage() {
  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    



  }


  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link 
        to="/donate"
        className="text-emerald-600 hover:text-emerald-700 inline-flex items-center mb-6"
      >
        ← Back to categories
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Utensils className="w-8 h-8 text-emerald-600" />
          <h1 className="text-2xl font-bold">Donate Food</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="foodType" className="block text-sm font-medium mb-2">Food Type</label>
            <input
              type="text"
              id="foodType"
              value={foodType}
              
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium mb-2">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              value={expiryDate}
              
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-md">Donate</button>
  
        </form>
      </div>
    </div>
  );
}