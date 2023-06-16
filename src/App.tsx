import React from 'react';
import { useEffect, useState } from 'react';
import MonstersCards from './componenet/monsters/monsters'
import Searchbox from './componenet/searchbox';
import { ChangeEvent } from 'react';
import { fetchdata } from './componenet/utils';
export type Monster=
{
  id:'string';
  name:'string';
  email:"string";
}



const App = () => {

  const [searchstring, setsearchstring] = useState("")
  const [monster, setmonsters] = useState<Monster[]>([])
  const [filtermonsters, setfiltermonsters] = useState(monster)

  
console.log(monster)
  useEffect(() => {
  


    const fetchusers=async()=>{
      const usersdata=await fetchdata<Monster[]>('https://jsonplaceholder.typicode.com/users')
       setmonsters(usersdata)
    };
    fetchusers()
console.log(fetchusers)
    
  }, [])
  console.log(monster)





useEffect(() => {

    const newtextFilter = monster.filter((mons) => {
      return mons.name.toLowerCase().includes(searchstring)

    })

    setfiltermonsters(newtextFilter)
  
  }, [searchstring, monster])
  const onchangehandler=(event:ChangeEvent<HTMLInputElement>):void=>{
    const Newsearchstring = event.target.value.toLowerCase();
        setsearchstring(Newsearchstring)
  }

console.log(filtermonsters)

  return (

    <div className="App">
<Searchbox type="search-box" placeholder='search-the-text' onchangehandler={onchangehandler}  />

<MonstersCards  monsters={filtermonsters} />



    </div>
  )

}







export default App;
