// Aguarda o DOM (Document Object Model) ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    // Captura os elementos HTML usando seus IDs
    const numPessoasInput = document.getElementById('numPessoas'); // ID 'numPessoas'
    const valorTotalInput = document.getElementById('valorTotal'); // ID 'valorTotal'
    const metodoPagamentoSelect = document.getElementById('metodoPagamento'); // ID 'metodoPagamento'
    const calcularBtn = document.getElementById('calcularBtn'); // ID 'calcularBtn'
    const valorFinalDisplay = document.getElementById('valorFinalDisplay'); // ID 'valorFinalDisplay'
    const valorPorPessoaDisplay = document.getElementById('valorPorPessoaDisplay'); // ID 'valorPorPessoaDisplay'

    // Adiciona um "ouvinte de evento" ao botão de calcular
    calcularBtn.addEventListener('click', function() {
        // Converte os valores dos inputs para números
        // Adicionei uma validação aqui caso o elemento seja null (apenas para debug)
        const numeroPessoas = numPessoasInput ? parseInt(numPessoasInput.value) : 1;
        const valorTotal = valorTotalInput ? parseFloat(valorTotalInput.value) : 0;
        const metodoPagamento = metodoPagamentoSelect ? metodoPagamentoSelect.value : 'cartao';


        // Validação básica para garantir que os campos foram preenchidos corretamente
        if (isNaN(numeroPessoas) || numeroPessoas <= 0) {
            alert('Por favor, digite um número válido para pessoas na mesa.');
            return; // Sai da função se a validação falhar
        }
        if (isNaN(valorTotal) || valorTotal < 0) {
            alert('Por favor, digite um valor total válido para a conta.');
            return; // Sai da função se a validação falhar
        }

        // Inicializa o valor final com o valor total
        let valorFinal = valorTotal;

        // Verifica se o método de pagamento é 'dinheiro' ou 'pix' e aplica o desconto
        if (metodoPagamento === 'dinheiro' || metodoPagamento === 'pix') {
            valorFinal = valorTotal * 0.9; // Aplica 10% de desconto
        }

        // Calcula o valor por pessoa
        const valorPorPessoa = valorFinal / numeroPessoas;

        // Exibe os resultados nos elementos HTML correspondentes
        // Garante que o elemento existe antes de tentar alterar o textContent
        if (valorFinalDisplay) {
            valorFinalDisplay.textContent = 'R$ ' + valorFinal.toFixed(2).replace('.', ','); // Formata para BRL
        }
        if (valorPorPessoaDisplay) {
            valorPorPessoaDisplay.textContent = 'R$ ' + valorPorPessoa.toFixed(2).replace('.', ','); // Formata para BRL
        }
    });
});