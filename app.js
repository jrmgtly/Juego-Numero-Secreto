//DECLARACION DE VARIABLES: PUEDEN SER LET, VAR o CONS
let numeroSecreto = Math.floor(Math.random()*10+1);
let numeroUsuario = 0;
//CONTADOR DE INTENTOS
let intentos = 1;
//Sintaxis al momento de ver los intentos
//let palabraVeces = 'vez';
let maximosIntentos = 3;
//BUCLE O LOOP USANDO WHILE: MIENTRAS NO SE CUMPLA LA CONDICION TODO SE REPITE
//EL OPERADOR != SIGNIFICA: SI NO ES IGUAL
while (numeroUsuario != numeroSecreto){
    //CON PROMPT ESTAMOS PIDIENDO AL USUARIO QUE INGRESE INFORMACION
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));
    //CONSOLA DE HERRAMIENTAS DE DESARROLLADOR DE GOOGLE CHROME
    console.log(typeof(numeroUsuario));
    //IF: ES UNA CONDICION QUE SE PUEDE O NO CUMPLIR
    //UN SOLO = ES ATRIBUCION O ASIGNACION A UNA VARIABLE
    //DOBLE == ES COMPARACION
    //LOS CORCHETES ABREN UN BLOQUE DE CODIGO
    if (numeroUsuario == numeroSecreto){
        //LA CONDICION SE CUMPLIÓ
        //TEMPLATE STRINGS O INTERPOLACION O CADENA DE TEXTO: USANDO LA COMILLA INVERTIDA SE COMBINA VALOR LITERAL CON VARIABLES O CODIGO
        //OPERADOR TERNARIO: EL SIGNO DE INTERROGACION ES DECIRLE A JAVA QUE EVALUE LA CONDICION
        //== ES IF Y : ES ELSE
        alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else{
    //CONDICIONAL ANIDADOS: INGRESAR UNA CONDICION DENTRO DE OTRA CONDICION    
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else{
            alert('El número secreto es mayor');
        }
        //INCREMENTAMOS EL CONTADOR CUANDO NO SE ACIERTA
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //Sintaxis al momento de ver los intentos en plural
        palabraVeces = 'veces';
        if (intentos > 3){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //LA CONDICION NO SE CUMPLIÓ
        alert('Lo siento, no acertaste el número');
    }
    //ELSE: EL RESULTADO DE SI LA CONDICION SE CUMPLE O NO SE CUMPLE
//AQUI SE TERMINA EL BUCLE DE WHILE    
}
