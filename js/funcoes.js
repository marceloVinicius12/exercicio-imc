function calculoIMC(){
let peso = document.getElementById("peso").value ;
let altura = document.getElementById("altura").value;

let IMC = peso /(altura*altura);
console.log(IMC);

if(IMC<20)
{
    document.getElementById("mensagem").innerText = "magro";
    document.getElementById("imagem"). src="images/magro_mais.gif";

}
else if (IMC >=25)
{
    document.getElementById("mensagem").innerText= "sobrepeso";
    document.getElementById("imagem").src="images/seu_barriga.gif";
}
else
{
    document.getElementById("mensagem").innerText="ok";
    document.getElementById("imagem").src ="images/normal.gif";
}

}