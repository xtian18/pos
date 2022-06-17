import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode, faPlus, faTable, faBasketShopping, faUser,faGear, faCreditCard, faRightFromBracket, faPowerOff } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div>
      {/* left button list */}
      <div className='flex space-x-2 float-left '>
        <div>
          <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center">
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faBarcode} /></span>
            <span className='py-2 px-4 '>Products</span>
          </button>
          <button className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded-r inline-flex items-center">
            <span><FontAwesomeIcon icon={faPlus} /></span>
          </button>
        </div>

        <div>
          <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center">
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faTable} /></span>
            <span className='py-2 px-4 '>Categories</span>
          </button>
          <button className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded-r inline-flex items-center">
            <span><FontAwesomeIcon icon={faPlus} /></span>
          </button>
        </div>

        <div>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-l inline-flex items-center">
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faBasketShopping} /></span>
            <span className='py-2 px-4 '>Products</span>
          </button>
        </div>

        <div>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-l inline-flex items-center">
          <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faUser} /></span>
            <span className='py-2 px-4 '>Customer Orders</span>
          </button>
        </div>
      </div>

      {/* right button list */}
      <div className='flex space-x-2 float-right '>
        <div>
          <button className="bg-teal-400 hover:bg-teal-500 text-white py-2 px-4 rounded inline-flex items-center">
            <span><FontAwesomeIcon icon={faGear} /></span>
          </button>
        </div>

        <div>
          <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center">
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faCreditCard} /></span>
            <span className='py-2 px-4 '>Transactions</span>
          </button>
        </div>

        <div>
          <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center">
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faUser} /></span>
            <span className='py-2 px-4 '>Users</span>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-r inline-flex items-center">
            <span><FontAwesomeIcon icon={faPlus} /></span>
          </button>
        </div>

        <div>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-600 rounded-l inline-flex items-center">
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faUser} /></span>
            <span className='py-2 px-4 '>Administrator</span>
          </button>
        </div>

        <div>
          <button className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded inline-flex items-center">
            <span><FontAwesomeIcon icon={faRightFromBracket} /></span>
          </button>
        </div>

        <div>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded inline-flex items-center">
            <span><FontAwesomeIcon icon={faPowerOff} /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header