import React from "react";
import { useState, useEffect } from "react";

const Modal = ({ initialData, onClose, handleModalSubmit }) => {
    const [formData, setFormData] = useState({
      title: "",
      price: 0,
      category: "",
    });
  
    useEffect(() => {
      if (initialData && Object.keys(initialData).length) {
        setFormData(initialData);
      }
    }, [initialData]);

    console.log(initialData, formData);
    
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

  
    const handleSubmit = (e) => {

     e.preventDefault();
     handleModalSubmit(formData)
    };
  
    return (
      <>
        <div className="text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {initialData && Object.keys(initialData).length ? "Edit Product" : "Add Product"}
                </h3>
              </div>
              <div className="relative p-6 flex-auto">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title:
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title }
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Price:
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price }
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category:
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      value={formData.category }
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  };
  
  export default Modal;
  