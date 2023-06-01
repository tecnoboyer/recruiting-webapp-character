import { useEffect, useState } from 'react';
import './App.css';
import  {SonComponent } from './components/SonComponent';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import { useAttributeAdd } from './hooks/useAttributeAdd';
import { useAttributeSubs } from './hooks/useAttributeSubs';

function App() {
  useEffect(() => {}, []);
  
  const [count, setCount] = useState(1);
  const inValueAtt =ATTRIBUTE_LIST.map((cat) => ({
    name:cat,
    value:10,
    modif:0
  }
));

const iniSkill = SKILL_LIST.map((skill) => ({
  ...skill,
  value: 0,
  subtotal:0
}));



  const highprop = { id: count , highAtt:inValueAtt};
  var fleched= null; /// Here the get from the GIT repository
  var deplo = fleched || highprop;
  const [rol, setRol] = useState([deplo]);

  const addCharac=()=>{ 
    const newObject = {
        id: rol.length+1, 
        highAtt:inValueAtt}
          setRol((newRol)=>[...newRol,newObject]);
    };

    const IncrementAtt = (chartPart,objTotal) => {
      console.log('hola'); 
      const modi=useAttributeAdd(rol,chartPart,objTotal);
        setRol(att => (modi));
    };
  
    const DecrementAtt = (chartPart,objTotal) => {
      const modi=useAttributeSubs(rol,chartPart,objTotal);
          setRol(att => (modi));
      };
    
    const resettingAll = () =>{ 
      setCount((prevCount) => {
        setRol([{ id: 1, highAtt: inValueAtt }]);
        return 1; 
      });
    };

    const saveToDB = ()=>{
      console.log('Saving down the DB');
    }

  return (
    <>
      <header>
        <a >React Exercise - Leonardo Boyer</a>
      </header>
        <div>
          <button onClick={addCharac}>Add a new Character</button>
          <button onClick={resettingAll}>Reset all Characters</button>
          <button onClick={saveToDB}>Save Characters</button>
        </div>

      <>
      <ul>
      <div >
          < SonComponent rol={rol} incrementAtt={IncrementAtt} decrementAtt={DecrementAtt} iniSkill={iniSkill} />
        </div>
      </ul>
      </>
    </>
  )
}

export default App;
