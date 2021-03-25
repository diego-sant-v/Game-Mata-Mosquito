var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500
//abaixo eu peguei tudo aquilo que esta a direita do ? no link
// até mesmo o ?
var nivel = window.location.search
//abaixo localzei o ? e substitui por ''
niver = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if(nivel ==='chucknorris') {
	//750
	criaMosquitoTempo = 750
}

//achando a altura e largura para limitar os mosquitos a area visivel
// se eu declarar as variaveis dentro do escopo da função
//elas não seram visiveis fora do código, preciso
//declarar globalmente e alterar o estado dentro da função
function ajustaTamanhoPalcoJogo() {
		 altura = window.innerHeight
		 largura = window.innerWidth

		 console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()
var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = "vitoria.html"
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
	//inner html será o valor incluido entre as tags html
	//no caso acima sera um valor contido na tag span de id cronometro


}, 1000)

function posicaoRandomica() {
	//removendo o elemento com id mosquito antes de adicionar um
	//novo elemento de id mosquito (caso exista)

	//estabelecendo game over se vidas > 3
	if(document.getElementById('mosquito')) {
	document.getElementById('mosquito').remove()
	//console.log('elemento selecionado foi : v' + vidas)
	if(vidas > 3 ) {
		window.location.href = "fim_de_jogo.html"
	} else {


		document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
		vidas++
		}

	}

	//tive que atribuir tudo isso a uma função
	//pois devo chama-la após a criacao da pagina html


var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90
// se x e/ou y for <0 atribui 0 para x e/ou y
//a fim de que não suma a foto (<0)

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)
// criei um numero randomico em x e y baseando-se
// no onresize do body que está atribuido a altura e largura
//criando um elemento dinamico em js e atribuindo na pagina:
//criando elemento html
var mosquito = document.createElement('img')
//acessando os atributos da variavel mosquito que
//recebeu o elemento img
//afim de que eu possa passar o src nele
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
//o valor de tamanho aleatorio sera atribuido como classe de um elemento html
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
//para que as coordenadas funcionem de acordo
//com a geração automatica, a posiçaõ do elemento
//precisa ser absoluta
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
	this.remove()
	//o this faz referencia e ele proprio(o mesmo elemento html)
}
//abaixo eu atribui um filho para o body
document.body.appendChild(mosquito)
//ao termino da função posicaoRandomica, o codigo
//executa a funcao tamanhoAleatorio
//chamada da função ladoAleatorio ao final dessa função

}

function tamanhoAleatorio() {
	//o math.floor arredonda pra baixo
	// o return funciona como break, logo não preciso usar o break

	var classe = Math.floor(Math.random() * 3)
	switch(classe) {
		case 0:
				return 'mosquito1'
		case 1:
				return 'mosquito2'
		case 2:
				return 'mosquito3'
	}
}
//alterando o lado da imagem aleatoriamente

	function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

		switch(classe) {
			case 0:
				return 'ladoA'

			case 1:
					return 'ladoB'
					}
	}