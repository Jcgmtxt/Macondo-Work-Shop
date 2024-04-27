//Caso #1
let avalilableIncome = 2500000
while(true){
    let AirportFood;
    let selectAirportFood = prompt(`Se lecciona que deseas comer en el aeropuerto.\n 
    1. Almohabana con gaseosa por $15.000 \n 
    2. Subway con gaseosa por $23.000. \n
    3. No deseas comprar nada,`)
    if(selectAirportFood === "1"){
        AirportFood = 15000
        avalilableIncome -= AirportFood
        alert(`Has realizado una compra de Almohabana con gaseosa por un valor de $${AirportFood} y te quedan ${avalilableIncome}`)
        break
    } else if (selectAirportFood === "2"){
        AirportFood = 23000
        avalilableIncome -= AirportFood
        alert(`Has realizado una compra de Subway con gaseosa por un valor de $${AirportFood} y te quedan ${avalilableIncome}`)
        break
    } else if (selectAirportFood === "3"){
        alert(`Has decidio no comer nada y no has gastado 0 pesos`)
        break
    } else {
        alert(`Ingresa una opcion valida`)
    }
}

//Caso 2
alert("Ahora estamos resolviendo el tema de la maleta")
//Debemos reducir el tamaño de la maleta y primero debemos hallar el espacio de reduccion
//Alto
const heightAllowed = 55;
const heightReal = 60;
const heightFactor = heightAllowed/heightReal;
//Ancho
const widthAlowed = 40
const widthReal = 40
const widthFactor = widthAlowed/widthReal
//Largo
const longAlowed = 20
const longReal = 20
const longFactor = longAlowed/longReal
//Factor de reducciion
const reductionFactor = Math.min(longFactor,widthFactor,heightFactor)

const newHeight = longReal*reductionFactor;
const newWidth = widthReal*reductionFactor;
const newLong = longReal*reductionFactor;
alert(`Nuestra maleta mide ${heightReal} de alto, ${widthReal} de ancho y ${longReal} de largo.\n
Las medidas reales son de ${heightAllowed} de alto, ${widthAlowed} de ancho y ${longAlowed} de largo.`);
alert(`Para que los tamaños ciocidan debemos multiplicarlos por un factor reductivo de ${reductionFactor} \n
Las nuevas medidas de la son de ${newHeight} de alto, ${newHeight} de ancho y ${newLong} de largo`);

//Caso 3
const wifiPassword = "01110010_01101001_01110111_01101001";
const listWifiPassword = wifiPassword.split("_");
let result = "";
listWifiPassword.forEach(function(binarylNumber){
    const decimal = parseInt(binarylNumber,2)
    const character = String.fromCharCode(decimal)
    result += character
});
alert(`La contraseña que has dados es: ${wifiPassword}`);
alert(`Ahora debemos convertirla en hexagecimal y luego en una letras`)
alert(`...`)
alert(`la contraseña es: '${result}'`);

//Caso 4
alert(`Bienvenido a Macondo. Lugar donde puedes conocer el pabellon de fusilamiento del coronel Aureliano`);
alert(`Aqui hablan difernte y vienes preparado con este traductor`);
const originalText = prompt("Ingrese lo que quiere decir.")
const translateText = originalText.replace(/[aeou]/g, "i");
alert(translateText);

//Caso 5
const opcions = ["piedra", "papel", "tijera"]
let userChoice;
let userChoiceLetter
while(true){
    let userChoice = parseInt(prompt(`Vamos a jugar piredra papel o tiejeras con el taxista\n
    Selecciona la opcion deseada:\n
    1. Para piedra.\n
    2. Para papel.\n
    3. Para tijeras.\n`))
    let confirmForm;
    userChoiceLetter = opcions[userChoice -1]
    if (userChoice === 1 || userChoice === 2 || userChoice === 3) {
        confirmForm = confirm(`Tu eleccion fue ${userChoiceLetter} ¿estas seguro de tu elección?`)
        if(confirmForm){
            break
        }
    } else {
        alert(`Selecciona una opcion valida.`)
    }
}
const randomNumer = Math.floor(Math.random() * 3)
const computerChoice = opcions[randomNumer];
if(computerChoice === userChoiceLetter){
    alert(`El taxista ha elegiodo ${computerChoice} y tu has elegido ${userChoice} y es un EMPATE asi que no pagas nada`)
} else if ((userChoiceLetter === "piedra" && computerChoice == 'tijera') || (userChoiceLetter === "papel" && computerChoice == 'piedra') || (userChoiceLetter === "tijera" && computerChoice == 'papel')){
    alert(`El taxista ha elegiodo ${computerChoice} y tu has elegido ${userChoice} y has GANADO asi que no pagas nada`)
} else {
    alert(`El taxista ha elegiodo ${computerChoice} y tu has elegido ${userChoice} y has Perdido asi que debes pagar 3`)
    avalilableIncome-= 300000
}

// caso #6

days = 0;
isAlive = true;
expenses = avalilableIncome
while (days === 4 || isAlive) {
    selector = prompt(`Hoy es un nuevo dia de tus vacaciones seeleccione la opcion que es    conveniente:\n
    Amarillo: Ir a la piscina.\n
    Verde: Caminatas, y agüita para el camino.\n
    Rojo: Actividades en la playa.\n
    Azul: Actividades en el hotel.\n`).toLowerCase()
    if (selector == "amarillo"){
        alert(`La piscina huele raro.\n
        ¿Lo vas a ignorar?`)
        let option = confirm("¿Deseas meterte en la piscina?")
        if (option){
            days += 1;
            isAlive = false;
        } else {
            alert("Has decido no entrar a la piscina");
            days += 1;}
    } else if (selector == "verde"){
        hike = confirm("Vas en la mitad de la caminata y estas muy canasado ¿deseas continuar?")
        if(hike){
            alert("Continuas y estas exausto sin embargo llegas sano al hotel y fue muy grafificante")
        } else {
            alert("Como estas muy cansado decides devolverte, y te pierdes, es de noche y caes por una sanja que no viste.")
            isAlive = false}
    } else if (selector == "Rojo"){
        alert(`Estas jugando Voleibol y la estas pasando excelente.\n
        Estas montando una moto de agua y estas nadando, todo va excelente.\n
        Comienzas a tomar cocteles...\n
        Todo comienza a ser borroso...\n
        Caes al pieso y cierras los ojos.\n
        Estas Muero.`)
        isAlive = false
    } else if (selector == "azul"){
        binngoPrize = 1000000
        avalilableIncome += binngoPrize
        alert(`Vas al bingo y Ganas ${binngoPrize} y ahora tienes $${avalilableIncome} pesos.\n
        Ahora vas a bailar y yte bailas a la mas linda del hotel fue una noche increible.
        Asi que estas con suerte y decides ir al casino y PIERDES TODO TU DINERO, asi que decides volver a tu casa.`)
        days += 1
        avalilableIncome = 0
    }
}

// Recuento
if (isAlive){
    alert(`Felicitaciones has terminado tus vacaciones.\n
    Viviste los ${days} dias y gastaste $${2500000-expenses} pesos.`);
} else if (isAlive && avalilableIncome==0){
    alert(`Felicitaciones has terminado tus vacaciones.
    viviste los ${days} dias y gastaste $${2500000-expenses} pesos.`);
} else {
    alert(`Lastimosamente MORISTE en tus vacaciones:c.\n
    viviste ${days} de tus vacaciones y gastaste $${2500000-expenses} pesos y tienes una saldo de ${avalilableIncome}.`)
}
