import { useEffect,memo } from 'react';
import {CLASS_LIST} from '../consts';


export const ClassesKeeper = ({rol,hidd,pass}) => {
// console.dir(CLASS_LIST);

  useEffect(() => {
  }, [])

const handlerClass=(character:string)=>{
  hidd(true);
  pass(character.character)
}
const handlerButton=(character:string)=>{
  hidd(character);
}

  return (
    <div>
      <h2>CLASSES</h2>
      {Object.entries(CLASS_LIST).map(([character, stats]) => (
        <ul key={character} >
          <a href="#" onClick={()=>handlerClass({character})}>{character}</a>
        </ul>
      ))}
      <button onClick={()=>{handlerButton(false)}}> Deactivate</button>
    </div>

  )
}

