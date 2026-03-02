// Variáveis Botões
var dataValidade
const sendButton = document.getElementById('button-form-adicionar')
const clearButton = document.getElementById('button-form-clear')
let produtos = []

const tbody = document.querySelector('tbody')

function dataForm () {
    
    // Coleta de Dados Formulário
    let nome = document.getElementById('nome').value || null
    let codigo = document.getElementById('codigo').value || null
    let quantidade = document.getElementById('quantidade').value || null
    let minimo = document.getElementById('minimo').value || null
    let preco = document.getElementById('preco').value || null
    let validade = document.getElementById('validade').value || null
    let temValidade = document.querySelector('input[name="validade"]:checked').value 

    let valorTotal = quantidade * preco

    // Coleta de Datas (Análise)
    if (temValidade == "false"){
        dataValidade = "Sem Validade"
        temValidade = "Sem"
    } else {
        temValidade = "Com"

        if (!validade){
            alert('Adicione Uma Data, Seu Produto Possui Validade!')
            return
        } else {
        // Data De Hoje
        let dataAtual = new Date().toISOString().slice(0, 10)
        dataAtual = dataAtual.replace(/-/g, "")
    
        // Data Form Formatada
        dataValidade = parseInt(validade.replace(/-/g, ''), 10);

        if (dataValidade < dataAtual){
        console.log("Data Menor que a atual!")
        }  
        }

    }
    
    

    let produto = {
        nome: nome,
        codigo: codigo,
        quantidade: quantidade,
        minimo: minimo,
        preco: preco,
        temValidade: temValidade,
        validade: dataValidade,
        valorTotal: valorTotal
    }

    produtos.push(produto)
    console.log(produtos)

    refreshTable ()

}

function clearForm(){
    let nome = document.getElementById('nome').value = ""
    let codigo = document.getElementById('codigo').value = ""
    let quantidade = document.getElementById('quantidade').value = ""
    let minimo = document.getElementById('minimo').value = ""
    let preco = document.getElementById('preco').value = ""
    let validade = document.getElementById('validade').value = ""
}

clearButton.addEventListener('click', clearForm)

sendButton.addEventListener('click', dataForm)

function refreshTable () {
    tbody.innerHTML = ""
    // Percoree o array e insere cada objeto como uma linha da tabela
    produtos.forEach(function (produto){
    var tr = document.createElement('tr');
    for (var campo in produto){
        var td = document.createElement('td');
        td.textContent = produto[campo];
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
});
}