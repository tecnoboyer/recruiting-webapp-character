
import React, { useEffect, useState } from 'react';
import '../App.css';

export const AttributeKeeper: React.FC = ({rol,incrementAtt ,decrementAtt}) => {
    useEffect(() => {
    }, [0])
  const collector = (tobeChanged,tobeChanged2) =>{
    incrementAtt(tobeChanged,tobeChanged2);    
  }

  const collector2 = (tobeChanged,tobeChanged2) =>{
    decrementAtt(tobeChanged,tobeChanged2);    
  }
  return (
    <div>
      
      <h2>ATTRIBUTES</h2>
      <ul key={rol.id}>
        {rol.highAtt.map((attribute) => (
        <li key={attribute.name} >
            {attribute.name}:{attribute.value} ( modifier:{attribute.modif})
            
            <button
             key={attribute.name}
             onClick={() => collector(attribute.name,rol)}>
              +1
            </button>
            <button
            key={`${attribute.name}-${rol.id}`}
            onClick={() => collector2(attribute.name,rol)}>
              -1
            </button>
        </li>
      ))}
      </ul>
    </div>

);
};
