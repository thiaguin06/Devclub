function sortear(){
 const min =  Math.ceil(document.querySelector('.min').value)
 const max =  Math.floor(document.querySelector('.max').value)

 if(max < min){
    const result = Math.floor(Math.random() * (max - min + 1)) + min
    alert(result);
 }else{
    
    alert('O valor minimo deve ser menor que o valor maximo')
   }
 }


    
    