
export const useRule1 = (rol) => {
    if(  rol.rol[0].highAtt.reduce((sum, attr) => sum + attr.value, 0) >70){
        var Mesagge=`Character ${rol.rol[0].id} overeach 70 `
            return(
                alert(Mesagge)
            )
    }

    }
    
    
    