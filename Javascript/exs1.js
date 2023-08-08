//Primer programa como ejercicio de JS

document.write("Hola mundo <br><br>");
document.write("Este es un ejemplo de Javascript<br><br>");
document.write("&nbsp;----Ciclos----<br><br>");

const min = 0;
const max = 10;

for( let i = min; i <= max; i++ ){
    for( let j = min; j <= max; j++ ){
        let result = i * j;
        let sum = i + j;
        
        if( result == 0 ){
            if( sum == 0 ){
                document.write( "&nbsp; X " );
            } else {
                if( sum > 0 && sum < 10 ){
                    document.write( "&nbsp;&nbsp;" + sum + "&nbsp;&nbsp;" );
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
    document.write("<br>");
}

document.write("<br>&nbsp;----Comparadores----<br><br>");

//let names[][] = ["Lucas", "Adamari", "Javier", "Antonio", "Monserrat", "María", "Javier", "Monserrat", "Lucas";
//                "Montiel", "López", "Bautista", "Vázquez", "López", "Jimenez", "Vázquez", "Montiel", "Jimenez"]