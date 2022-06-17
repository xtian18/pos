import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import Orders from './components/Orders'
import Modal from './components/Modal'

const App = () => {
  const[openModal, setOpenModal] = useState(false)

  return (
    <div className='flex flex-col bg-gray-200 h-full lg:h-screen px-[10px] py-[10px]'>
      <div><Header setOpenModal={setOpenModal} /></div>
      <div className='grid grid-cols-12 gap-4 mt-4'>
        <div className='col-span-12 lg:col-span-4 mb-4'><Orders /></div>
        <div className='col-span-12 lg:col-span-8 mb-4'><Products /></div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal}/>}
    </div>
  );
}

export default App;
