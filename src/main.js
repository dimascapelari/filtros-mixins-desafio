import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contarPalavras', function (valor) {
	return valor.split(' ').map(palavra => `${palavra} (${palavra.length})`).join(' ')
	// split vai quebrar a frase por espaço em branco pegando cada uma das palavras
	// map vai pegar a palavra + o tamanho da palavra
	// join vai juntar tudo novamente
})

new Vue({
	render: h => h(App),
}).$mount('#app')
