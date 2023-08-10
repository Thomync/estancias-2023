// Primer programa como ejercicio de JS

document.write("Hola mundo <br><br>");
document.write("Este es un ejemplo de Javascript<br><br>");
document.write("&nbsp;----Ciclos----<br><br>");

const min = 0; // Se pueden declarar valores constantes
const max = 10;

for( let i = min; i <= max; i++ ){ // Las funciones de repetición son las clásicas
    for( let j = min; j <= max; j++ ){ // Para crear una variable se usa 'let'
        let result = i * j;
        let sum = i + j;
        
        // Aquí se intenta hacer una función que imprima en el documento un
        // formato usando ciclos de repetición y condicionales

        if( result == 0 ){
            if( sum == 0 ){
                document.write( "&nbsp; X " ); // '&nbsp;' se usa para colocar
                                               // un espacio en blanco
            } else {
                if( sum > 0 && sum < 10 ){
                    document.write( "&nbsp;&nbsp;" + sum + "&nbsp;&nbsp;" );
                    // Concatenación
                } else {
                    document.write( "&nbsp;" + sum + "&nbsp;" );
                }
            }
        } else {
            if( result > 0 && result < 10 ){
                document.write( "&nbsp;&nbsp;" + result + "&nbsp;&nbsp;" );
            } else {
                document.write( "&nbsp;" + result + "&nbsp;" );
            }
        }
    }
    document.write("<br>"); // '<br>' se usa para un salto de línea
}

document.write("<br>&nbsp;----Comparadores----<br><br>");

// Intento de manejo de arrays

//let names[][] = ["Lucas", "Adamari", "Javier", "Antonio", "Monserrat", "María", "Javier", "Monserrat", "Lucas";
//                "Montiel", "López", "Bautista", "Vázquez", "López", "Jimenez", "Vázquez", "Montiel", "Jimenez"]