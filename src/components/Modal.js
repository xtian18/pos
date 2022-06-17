import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ setOpenModal }) => {
  return (
    <div className='bg-black/25 absolute inset-0 flex justify-center items-center'>
      <div className='bg-white w-3/4 rounded p-[20px]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl text-gray-600'>Products</h1>
          <div className='space-x-7'>
            <button className="bg-white border-solid border-2 border-gray-200 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded">
              Download
            </button>
            <button onClick={() => setOpenModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>

        <hr className='my-[20px] border-solid border-1 border-gray-200'/>

        <div className='max-h-[320px] overflow-auto mt-4'>
          <table class="table-fix w-full">
            <thead className='sticky top-0 bg-white text-gray-600'>
              <tr>
                <th>Barcode</th>
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Modal