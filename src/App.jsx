
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
 const coffeData = useLoaderData();
 const [coffees, setCoffees] = useState(coffeData);
  return (
    <div className="m-20">
      <h1 className="text-3xl text-center font-extrabold my-18">
        Coffee Store: {coffeData.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        {coffeData.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
}

export default App
