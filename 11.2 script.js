/* function buttons() {
    let stone = document.querySelector("stone")
    let paper = document.querySelector("paper")
    let scissors = document.querySelector("scissors")
    
}
console.log(buttons)
*/ 

let Result = document.querySelector(".Result")
let PontoHumano = document.querySelector(".HumanPotuation")
let pontoMachine = document.querySelector(".MachinePotuation")
let number1 = 0
let number2 = 0


const Gamer_Options =  {      // Enums
    Pedra: "Pedra",
    Papel: "Papel",
    Tesoura: "Tesoura"
  }






const PlayHuman = (human) => { 
    Playthegamer(human, PlayMachine())                    //1° Funcion
    //console.log('humano = ' + human)
    //console.log('Maquina = ' + PlayMachine())
    
}

const PlayMachine = () => {                                //2° Funcion
      const Alternatives = [Gamer_Options.Pedra, Gamer_Options.Papel,Gamer_Options.Tesoura]
      const resultado1 = Math.floor(Math.random() * 3) 
      return Alternatives [resultado1 ]

}

 const Playthegamer = (humano, machine) => {                //3° Funcion
    console.log('Humano: ' + humano + ' Maquina: ' + machine )


    if (humano===machine) {
        Result.innerHTML = "Deu empate!!"  
    }

    else if (humano ===  Gamer_Options.Papel && machine === Gamer_Options.Pedra

        || humano === Gamer_Options.Pedra && machine === Gamer_Options.Tesoura

        || humano === Gamer_Options.Tesoura && machine ===  Gamer_Options.Papel )  {

            Result.innerHTML = " Uau,Ganhamos da Alexa haha!!"   
            number1++
            PontoHumano.innerHTML = number1
              
            
            
        }

    else {
            Result.innerHTML=  " Você perdeu para a alexa haha!! "
            number2++
            pontoMachine.innerHTML = number2 
            
 
            

    }

 }








