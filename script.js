//criando a variável e setando a chave o valor
let key = "item1";
localStorage.setItem(key, 'Gabi');

//lendo o valor que já está no console
let lerItem = localStorage.getItem(key);
console.log(lerItem);

//removendo o valor
localStorage.removeItem(key);
//remove tudo
localStorage.clear();

let keys = 'chave';
let dados =  {nome: 'Gabi', idade: 19}
localStorage.setItem(keys, JSON.stringify(dados));
console.log(dados);

//lista de objetos
let listaDados = [];
//objeto base
function Campos(campo1){
    this.campo1 = campo1;
}

//botao vai disparar
const btnEnviar = document.getSelector('#btmSubmit');
//envio do click
btnEnviar.addEventListener('click', ()=>{
    const inputCampo = document.getSelector("#campo1");})
//instancia recebendo o objeto
let info = new Campos(inputCampo.value)
// lista de usuarios que receber do objeto
listaDados.push(info);
localStorage.setItem("dados", JSON.stringify(listaDados))