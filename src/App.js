import { useEffect, useState } from 'react';
import './App.css';
import  {SonComponent } from './components/SonComponent';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import { useAttributeAdd } from './hooks/useAttributeAdd';
import { useAttributeSubs } from './hooks/useAttributeSubs';

import axios from 'axios';


const url = 'https://recruiting.verylongdomaintotestwith.ca/api/{tecnoboyer}/character';
const headers = {
  'Content-Type': 'application/json'
};


const url_get = 'https://recruiting.verylongdomaintotestwith.ca/api/{tecnoboyer}/character';

var fleched = axios.get(url_get)
  .then(response => {
    console.log('GET request successful:', response.data);
  })
  .catch(error => {
    console.error('Error making GET request:', error);
  });

  console.log('printing what cames from git: '+fleched.body);


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
  fleched= null; /// Here the get from the GIT repository
  var deplo = fleched || highprop;
  const [rol, setRol] = useState([deplo]);

  const addCharac=()=>{ 
    const newObject = {
        id: rol.length+1, 
        highAtt:inValueAtt}
          setRol((newRol)=>[...newRol,newObject]);
    };

    const IncrementAtt = (chartPart,objTotal) => {
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

      const abc = (url,rol,headers) =>{
         axios.post(url, rol, { headers })
      .then(response => {
        console.log('POST request successful:', response.data);
      })
      .catch(error => {
        console.error('Error making POST request:', error);
      });
      }

      abc(url,rol,headers);
      return true

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
