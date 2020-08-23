function palindrome() {
    let str = document.getElementById('entre').value;
    // exprecion regular para eliminar caracteres no deseados
    let deleteCharacters = /[\W_]/g;
    // metodo para convertir en minusculas 
    let lowCaseStr = str.replace(deleteCharacters, "").toLowerCase();
    // (split) divide en subarreglos,.(reverse) invierte los elementos de una matriz,
     // (join) uno los elementos en una cadena
    let reverseStr = lowCaseStr.split("").reverse().join("");
    let  result = document.getElementById('resultado');
    if(reverseStr===lowCaseStr){
        result.innerHTML =  "Es un palíndromo ¡Felicitaciones!"
    }
    else {
        result.innerHTML = "No es un palíndromo ¡Sigue intentando!"
     }
}   

