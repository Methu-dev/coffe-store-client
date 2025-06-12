
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {
 const coffeData = useLoaderData()
  return (
    <div className='m-20'>
      <h1 className="text-3xl text-center font-extrabold my-18">Coffee Store: {coffeData.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 items-center'>
        {coffeData.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

export default App
