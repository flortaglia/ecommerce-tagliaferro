let category;
let item;
let mensaje;
let buy;
let reorder; 

//Para más adelante se agregará array, para el listado del pedido y se 
// hará controlor en caso de abandonar y que este vacío enviar otro mensaje
// function bill(num,cat, it){
// // a futuro buscar precio array y dar valor
//     alert(`El precio es de ${num} `*3``)
// }
function nameItem(a,b){
    //luego se espera poder usar un menu con botones y array para los datos ingresados
    
    if (category==1 && item==1){
        buy = "Expresso";
    } else if (category==1 && item==2) {
        buy = "Cappuchino";
    } else if (category==1 && item==3) {
        buy = "Americano";
    }else if (category==1 && item==4){
        buy = "Moca";
    } else if (category==1 && item==5) {
        buy = "Long Black";
    } 
    else if(category==2 && item==1){
        buy = "Green";
    } else if (category==2 && item==2) {
        buy = "Black";
    } else if (category==2 && item==3) {
        buy = "Manzanilla";
    }else if (category==3 && item==1){
        buy = "Lemon Pie";
    } else if (category==3 && item==2) {
        buy = "Chocolate Cake";
    } else if (category==3 && item==3) {
        buy = "Alfajor";
    }else if (category==3 && item==4){
        buy = "Medialuna";
    } else if (category==4 && item==1) {
        buy = "Tostado";
    }else if (category==4 && item==2) {
        buy = "Jamón y Tomate";
    }else if (category==4 && item==3) {
        buy = "Lomito";   
    } else {
        alert("Lo sentimos, no está en nuestro menú");
        neworder();
        return;
    }
    return(buy);
}
// function entregarPedido(mensaje, precio) {
//     alert(`Muchas gracias por elegirnos, 
//     ${mensaje} el total es  ${precio}`);`Su pedido es: ${cantidad} ${buy}`)
//     cobrar(precio);
// }
function neworder(){
    reorder = prompt("desea seguir ordenando:s/n");
    reorder= reorder.toLowerCase();
    if (reorder == "s"){
        takeOrder();
    }   else  {
        alert("Muchas gracias por elegirnos");
        return;
        //no sé array, pero lo usaría en el caso de ser más items..pendiente
        // bill(cantidad,categoria, ite);
    }
}

function list(menu) {
       
    switch (menu) {
        case 1:
            item = Number(prompt(`Seleccione del menú Cafe, lo que desea
            1- Expresso
            2- Cappuchino
            3- Americano
            4- Moca
            5- Long Black`));
            break;
    
        case 2:
            item = Number(prompt(`Seleccione del menú Té, lo que desea
            1- Green
            2- Black
            3- Manzanilla`));
            break;
        case 3:
            item = Number(prompt(`Seleccione del menú Backery, lo que desea
            1- Lemon Pie
            2- Chocolate Cake
            3- Alfajor
            4- Medialuna`));
            break;
        case 4:
            item = Number(prompt(`Seleccione del menú Sandwiches, lo que desea
            1- Tostado
            2- Jamón y Tomate
            3- Lomito`));
            break;
            
        default:
            mensaje = 'Lo sentimos, no está en nuestro menú';
            alert(mensaje);    
            neworder();
            return;
            
    }
    const valid = (category == 1 && item == 1) || (category == 1 && item == 2) || (category == 1 && item == 3)|| 
    (category == 1 && item == 4)||(category == 1 && item == 5)||(category == 2 && item == 1) || (category == 2 && item == 2) ||
    (category == 2 && item == 3)||(category == 3 && item == 1) || (category == 3 && item == 2) || (category == 3 && item == 3)||
    (category == 3 && item == 4)||(category == 4 && item == 1) || (category == 4 && item == 2) || (category == 4 && item == 3);
    if (valid){
        nameItem(category, item);
        let quantity = Number(prompt(`qué cantidad de ${buy} quiere`));
        alert(`Su pedido es: ${quantity} ${buy}`)
    } else{
        alert("Lo sentimos....");
    }
      
    neworder(); //en futuro se podrán hacer nuevas ordenes y ver el listado completo
   
}



function takeOrder() {
    category = Number(prompt(`Seleccione del menú, lo que desea
    1- Coffes
    2- Teas
    3- Backery
    4- Sandwiches`));

    list(category);
}

takeOrder();
