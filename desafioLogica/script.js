// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

arrayByValues(3, 'a')    
    function arrayByValues(a, b){
        const array = []
        for(let i = 0; i <= a-1; i++){
            array[i] = b            
        }
        console.log(`1) [${array}].ok`)
    }

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
{
    let array = [1,2,3,4], aux
    inverteArray(array)
    function inverteArray(param){
        for (let i = 0; i < param.length; i++) {
            for (let index = 0; index < param.length; index++) {
              if (param[index] < param[index +1]) {
                    // console.log(`x) ${param}`)
                    aux = param[index]
                    param[index] = param[index+1]
                    // console.log(`z) ${param}`)
                    param[index+1] = aux
                    // console.log(`y) ${array}`)
              }
            } 
        }
       return param
    }console.log(`2) [${inverteArray(array)}].ok`)
}
// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

{
    let array = [1,2,'', undefined, '', "", 0, null,false], newArray = []
    
    limpaArray(array)
    function limpaArray(param){
        for (let index = 0; index < array.length; index++) {
            if (typeof(array[index]) == 'number') {

                if(array[index] != 0){
                newArray[newArray.length] = array[index]
                }
                
            }
            
        }
    }

    console.log(`3) [${newArray}].ok`)
}

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
{
    let array = [["c",2],["d",4]], aux = [], letra, num1, num2
    newObj = {}
    conversorObjeto()
    function conversorObjeto(obj){

        
    } 
    console.log(`4) ${aux}`)
}

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

{
    let array = [5,4,3,2,5]
    let param = [5, 3]
    let newArray = [], aux = [], vetor = []

    removeByParam(param)

    function removeByParam(params){

        // array.forEach(element => {
        //     params.forEach(prm => {
        //         if(element == prm){
        //             newArray[newArray.length] = element
        //         }
        //     });
                
        // })
        
        console.log(`5) ${newArray}`)
    }
    
}

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

    {
        let array = [1,2,3,3,2,4,5,4,7,3], newArray = []
        
            
            console.log(`6) ${[newArray]}`)
        
    }

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

    {
        let array1 = [1,2,3,4]
        let array2 = [1,2,3,4]
        let check = 0

        for (let i = 0; i < array1.length; i++) {            
            if(array1[i] == array2[i]){
                check ++
            }else{
                check ++                   
            }
        }

        if((check == array1.length) && (check == array2.length)){
            console.log(`7) ${true}.ok`)
        }else{
            console.log(`7) ${false}`)
        }
    }

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

    {
        let array = [1, 2, [3], [4, 5]], aux = []
        desaninha()

        function desaninha(){
    
            for (let i = 0; i < array.length; i++) {
                if(typeof(array[i][i]) != 'string'){   
                    aux[aux.length] = array[i]    
                }                
            }
            console.log(`8) [${aux}].ok`)
        } 
        
    }


// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

    {
        let array = [1, 2, 3, 4, 5], newArray = [], divisor = 2,aux = []

        // divisorByParametro(divisor)

        // function divisorByParametro(params) {
            
            
        // }
        console.log(`9) [${newArray}]`)
       
        
    }

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

{
    const array1 = [6, 8]
    const array2 = [8 ,9]
    for(let i = 0; i < array1.length; i++){
        for (let index = 0; index < array2.length; index++) {
            if(array1[i] == array2[index]){
                let match = array2[index]
                // let matchBkp= array1[i]

                console.log(`10) [${match}].ok`)
            }
            
        }
    }
}