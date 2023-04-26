import { useEffect, useState } from 'react'
import Beer from './components/Beer'
import axios from 'axios'


export default function Parent() {
  const [beers, setBeers] = useState ([])


  const url = 'https://api.punkapi.com/v2/beers'
  
  useEffect(() => {
      const getAllBeers = () => {
        axios.get(url)
        .then((response) => {
          const allBeers = response.data
          setBeers(allBeers)
        })
        .catch(error => console.log(`Error: ${error}`))
      }
    getAllBeers();
  }, []);

  return (
    <main>
      <h1 className='title'>Beer App</h1>
        <div className='beer_list'>
          <Beer beers={beers} />
        </div>
    </main>
  )
}