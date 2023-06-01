
export const useAttributeAdd = (initialV,chartPart,objTotal) => {
    const evaluateNumbers = (n) => {
      const numbers = [];
      for (let x = Math.floor((n - 10) / 2); x <= Math.ceil((n - 11) / 2); x++) {
        numbers.push(x);
      }
      return numbers[0];
    };
  
    const pount = objTotal.id;
    let characterist= chartPart;
    const newData = [...initialV]; 
    const objectIndex = newData.findIndex((obj) => obj.id === pount); 
  
    if (objectIndex !== -1) {
      const highAtt = newData[objectIndex].highAtt.map((attr) => {
        if (attr.name === characterist) {
          const fin =attr.value;

          const newObj2 = {
            ...attr,
            value: attr.value + 1,
            modif: evaluateNumbers(fin)
          };

          return newObj2 ;
        }
        return attr;
      });
      newData[objectIndex].highAtt = highAtt;
    }
    return newData
  };
  
  
  
  