import React from 'react'

const Products = () => {
  return (
    <div className='bg-white p-[20px] rounded-[5px] h-[675px] lg:h-full'>
      <div className='w-full flex gap-2'>
        <input type="text" className='w-1/3 border-solid border-2 border-gray-200 rounded p-2 mr-4' placeholder='Select product by name or sku'/>
        <input type="radio" id='1' className='hidden'/>
        <label htmlFor="1" className='bg-white border-solid border-2 border-gray-200 hover:bg-gray-200 text-gray-600 rounded py-2 px-4 text-center'>All</label>
        <input type="radio" id='2' className='hidden'/>
        <label htmlFor="2" className='bg-white border-solid border-2 border-gray-200 hover:bg-gray-200 text-gray-600 rounded py-2 px-4 text-center'>Drinks</label>
        <input type="radio" id='3' className='hidden'/>
        <label htmlFor="3" className='bg-white border-solid border-2 border-gray-200 hover:bg-gray-200 text-gray-600 rounded py-2 px-4 text-center'>Genereal</label>
        <input type="radio" id='4' className='hidden'/>
        <label htmlFor="4" className='bg-white border-solid border-2 border-gray-200 hover:bg-gray-200 text-gray-600 rounded py-2 px-4 text-center'>Stationary</label>
      </div>

      <hr className='my-[20px] border-solid border-1 border-gray-200'/>

      <div className='grid grid-cols-3 md:grid-cols-6 gap-x-1 gap-y-4'>
        <div className='border-solid border-2 border-gray-200 text-center text-gray-500 p-2' >
          <p>500ml Stll Water</p>
          <hr className='my-[10px] border-solid border-1 border-gray-200'/>
          <p>STOCK: <span className='text-lg'>8</span></p>
          <p className='text-lime-500 font-bold'>R10.00</p>
        </div>
        <div className='border-solid border-2 border-gray-200 text-center text-gray-500 p-2' >
          <p>500ml Stll Water</p>
          <hr className='my-[10px] border-solid border-1 border-gray-200'/>
          <p>STOCK: <span className='text-lg'>8</span></p>
          <p className='text-lime-500 font-bold'>R10.00</p>
        </div>
        <div className='border-solid border-2 border-gray-200 text-center text-gray-500 p-2' >
          <p>500ml Stll Water</p>
          <hr className='my-[10px] border-solid border-1 border-gray-200'/>
          <p>STOCK: <span className='text-lg'>8</span></p>
          <p className='text-lime-500 font-bold'>R10.00</p>
        </div>
        <div className='border-solid border-2 border-gray-200 text-center text-gray-500 p-2' >
          <p>500ml Stll Water</p>
          <hr className='my-[10px] border-solid border-1 border-gray-200'/>
          <p>STOCK: <span className='text-lg'>8</span></p>
          <p className='text-lime-500 font-bold'>R10.00</p>
        </div>
        <div className='border-solid border-2 border-gray-200 text-center text-gray-500 p-2' >
          <p>500ml Stll Water</p>
          <hr className='my-[10px] border-solid border-1 border-gray-200'/>
          <p>STOCK: <span className='text-lg'>8</span></p>
          <p className='text-lime-500 font-bold'>R10.00</p>
        </div>
        <div className='border-solid border-2 border-gray-200 text-center text-gray-500 p-2' >
          <p>500ml Stll Water</p>
          <hr className='my-[10px] border-solid border-1 border-gray-200'/>
          <p>STOCK: <span className='text-lg'>8</span></p>
          <p className='text-lime-500 font-bold'>R10.00</p>
        </div>
        <div className='border-solid border-2 border-gray-200 text-center text-gray-500 p-2' >
          <p>500ml Stll Water</p>
          <hr className='my-[10px] border-solid border-1 border-gray-200'/>
          <p>STOCK: <span className='text-lg'>8</span></p>
          <p className='text-lime-500 font-bold'>R10.00</p>
        </div>
        <div className='border-solid border-2 border-gray-200 text-center text-gray-500 p-2' >
          <p>500ml Stll Water</p>
          <hr className='my-[10px] border-solid border-1 border-gray-200'/>
          <p>STOCK: <span className='text-lg'>8</span></p>
          <p className='text-lime-500 font-bold'>R10.00</p>
        </div>
      </div>
    </div>
  )
}

export default Products