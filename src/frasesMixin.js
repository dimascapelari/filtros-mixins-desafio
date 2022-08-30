export default {
    computed: {
        fraseComVirgulas() {
            return this.frase.replace(/\s/g, ",");
            // troca espaço vazio por vírgula mas agora em propriedade computada
        },
        fraseComTamanhos() {
            return this.frase
                .split(" ")
                .map((palavra) => `${palavra} (${palavra.length})`)
                .join(" ");
        },
    },
}