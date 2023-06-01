import {useEffect, useState} from 'react';

import '../index.css';


export const SkillKeeper = (rol) => {
  useEffect(() => {
  }, []);


  const [eachClick, setEachClick] = useState(0);
  const [skillTracker, setSkillTracker] = useState(rol.iniSkill);


  const updateSubtotals = () => {
    const updatedSkills = skillTracker.map((skill) => {
      const matchingAttribute = rol.rol.highAtt.find(
        (att) => att.name === skill.attributeModifier
      );
      const modifR = Number(matchingAttribute.modif);
      return { ...skill, subtotal: skill.value + modifR};
    });
  
    setSkillTracker(updatedSkills);
  };
  
  useEffect(() => {
    updateSubtotals();
  }, [rol])


  const [skill_count, setSkill_count] = useState(10+4*Number(rol.rol.highAtt.filter((item) => item.name === "Intelligence").map((item) => item.modif)));    

  useEffect(() => {
    setSkill_count(10+4*Number(rol.rol.highAtt.filter((item) => item.name === "Intelligence").map((item) => item.modif)));
    }, [rol.rol.highAtt.filter((item) => item.name === "Intelligence")]); 
  

const preSkillTotal = (nameMod,otherName)=>{
  setEachClick(eachClick+1);
    if(eachClick<skill_count){
       const updatedSkills = skillTracker.map((skill) => {

          if (skill.name === nameMod) {

            return { ...skill, 
              value: skill.value + 1,
              subtotal: 1 +skill.value + Number(rol.rol.highAtt.find((crit)=>crit.name==otherName)?.modif)
             };
          }
      return skill;
    });
    setSkillTracker(updatedSkills);
    }
  }
  
  const preSkillTotal2 = (nameMod,otherName)=>{
    setEachClick(eachClick-1);
      if(eachClick<skill_count){
         const updatedSkills = skillTracker.map((skill) => {

          if(skill.value>0){
            if (skill.name === nameMod) {
              return { ...skill,
                value: skill.value - 1,
                subtotal:  skill.value -1+ Number(rol.rol.highAtt.find((crit)=>crit.name==otherName)?.modif)
           };
        }
          }
  

        return skill;
      });
      setSkillTracker(updatedSkills);
      }
    }
  return (
    <>
     <h2>SKILLS</h2>
     <h4> Total skill available : {skill_count}</h4>
     {skillTracker.map((minObj,key)=>(
     <ul key={key}  >
      <li  >
        {minObj.name}:{minObj.value} (Modifier : {minObj.attributeModifier}    )
        {rol.rol.highAtt.find((crit)=>crit.name==minObj.attributeModifier)?.modif} <button key={`${key}+1`} onClick={()=>preSkillTotal(minObj.name,minObj.attributeModifier)} >+</button> <button key={`${key}-1`} onClick={()=>preSkillTotal2(minObj.name,minObj.attributeModifier)} >-</button>
       <a>   {minObj.subtotal}</a> 
      </li>
     </ul>
     ))}
    </>
  )
}

