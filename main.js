const form = document.getElementById('form-contatos');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const atividades = [];
const numeros = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const proprietario = prompt("Digite seu nome:");
document.getElementById('nome-proprietario').innerHTML = proprietario;
//const linkZap = 'https://wa.me/';

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
   // zapZap();
});
//function zapZap(linkZap,inputNumeroContato) {
    //const numeroZap = linkZap + inputNumeroContato;
   // return numeroZap    
//}

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    
    
    if (atividades.includes(inputNomeContato.value)) {
        alert(`O Contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        atividades.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td> `;
        linha += `<td>${inputNumeroContato.value}</td> `;
        //linha += `<td>${numeroZap.value}</td> `;
        linha += '</tr>';
        
        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

