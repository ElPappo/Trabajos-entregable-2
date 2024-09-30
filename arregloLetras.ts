import * as rs from "readline-sync"

/*1) Crear un arreglo de letras e imprimirlo*/


/*let letra: string[] = ['A', 'B', 'C', 'D'];

// Función para imprimir el arreglo

/*console.log("Arreglos de letras")
console.log(letra);

/*2) Dado un array con nombres de tamaño 5, pedir 
al usuario que ingrese un nombre y verificar si está 
en el arreglo. Imprimir el arreglo y si está o no en 
él.*/
              //uso la libreria de Readline-Sync
             //se crea el arreglo

let nombres: string[] = [`matias`, `cristian`, `angelo`];
            //Pido al usuario que ingrese un nombre, el resultado puede ser string o null
let nombreIngresado: string | null = rs.question("Ingrese el nombre: "); 

             //Verifico si el nombre está en el arreglo
if (nombreIngresado) {

    let ubicado: boolean = nombres.includes(nombreIngresado);

 console.log("Arreglo de nombres: ");

  console.log(nombres);

             //impresion del desultado  
  if (ubicado) { 
    console.log(`El nombre ${nombreIngresado} esta en arreglo: `);
  } else {
    console.log(`El nombre ${nombreIngresado} NO esta en el arreglo: `);
  }
}