botao.addEventListener('click', contar)
function contar() {
	let ini = document.querySelector('#itxti')
	let fim = document.querySelector('#itxtf')
	let passo = document.querySelector('#itxtp')
	let res = document.querySelector('#res')
	if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
		res.innerHTML = 'Impossível contar!'
		//alert('[ERRO] Faltam dados!')
	}else {
		res.innerHTML = 'Contando: <br>'
		let i = Number(ini.value)
		let f = Number(fim.value)
		let p = Number(passo.value)
		if (p <= 0) {
			alert('Passo inválido! Considerando PASSO 1')
			p = 1
		}
		if (i < f) {
			// Contagem crescente
			for(let c = i; c <= f; c += p) {
			res.innerHTML += ` ${c} \u{1F449}`
		  }
		}else {
			// Contagem regressiva
			for (let c = i; c >= f; c -= p) {
				res.innerHTML += ` ${c} \u{1F449}`
			}
		}
		res.innerHTML += `\u{1F3C1}`
	}
}