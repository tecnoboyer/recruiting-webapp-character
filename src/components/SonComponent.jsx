import {AttributeKeeper} from './AttributeKeeper';
import  {SkillKeeper } from './SkillKeeper';
import { ClassesKeeper } from './ClassesKeeper';
import '../index.css';
import {  useEffect, useState} from "react";
import { MinReq } from './MinReq';
import { useRule1 } from '../hooks/useRule1';

export const SonComponent = ({rol,incrementAtt,decrementAtt,iniSkill}) => {
  useRule1({rol});
const [hid, setHid] = useState(false);
const [show, setShow] = useState('Barbarian');
const hiddGov = (character) =>{
  setHid(character);
}
const pass = (ability)=>{
  setShow(ability);
}

  return (
    <>
      <ul>
        {rol.map((element) => (
          <li key={element.id}>
            <a>Character : {element.id} </a>
            <div className='wrapper'>
                <div className='one'>
                    < AttributeKeeper  rol={element} incrementAtt={incrementAtt} decrementAtt={decrementAtt} />
                </div> 
                <div className='two'>
                    < ClassesKeeper    rol={element} hidd={hiddGov} pass={pass}  />
                </div>

                {hid ? ( <>
                <div className='three'  >
                  < MinReq  show={show} />
                </div> 
                <div className='four'  >
                  < SkillKeeper rol={element} iniSkill={iniSkill} />
                </div>
                </>
                ) :(<div className='three'  >
                  < SkillKeeper rol={element} iniSkill={iniSkill}/>
                </div> )}

            </div>
          </li>
        ))}
      </ul>


    </>
            
  )
}




