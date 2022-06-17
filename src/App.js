import Header from './components/Header'
import Products from './components/Products'
import Orders from './components/Orders'

const App = () => {
  return (
    <div className='flex flex-col bg-gray-200 h-full lg:h-screen px-[10px] py-[10px]'>
      <div><Header/></div>
      <div className='grid grid-cols-12 gap-4 mt-4'>
        <div className='col-span-12 lg:col-span-4 mb-4'><Orders /></div>
        <div className='col-span-12 lg:col-span-8 mb-4'><Products /></div>
      </div>
    </div>
  );
}

export default App;
