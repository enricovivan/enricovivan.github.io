const formulario = document.getElementById('form1');
const tbody = document.getElementById('tbodyId');

let cont = 0;

let pessoa = [

    {
        id: null,
        nome: null,
        email: null,
        anoNasc: null,
        sexo: null,
        numeroTel: null,
        rua: null,
        numeroCasa: null,
        cidade: null,
        estado: null,
        senha: null,
    }

]

pessoa.pop();

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    let verify = verificaSenha();

    if (verify === 0) { // Senhas Iguais
        console.log('Senhas Iguais');

        let id, nome, anoNasc, sexo, numeroTel, rua, numeroCasa, cidade, estado, senha, email;

        id = cont;
        nome = formulario.elements['nome'].value || 'N.I.';
        email = formulario.elements['email'].value || 'Não Informado';
        anoNasc = parseInt(formulario.elements['anoNasc'].value || '0000');
        sexo = formulario.elements['sexo'].value;
        numeroTel = formulario.elements['fone'].value || 'N.I.';
        rua = formulario.elements['rua'].value || 'N.I.';
        numeroCasa = parseInt(formulario.elements['numeroCasa'].value || 0);
        cidade = formulario.elements['cidade'].value || 'N.I.';
        estado = formulario.elements['estado'].value;
        senha = formulario.elements['pass'].value;

        if (sexo === 'm'){
            sexo = 'Masculino';
        }
        else if (sexo === 'f'){
            sexo = 'Feminino';
        }
        else {
            sexo = 'Não Informado';
        }

        pessoa.push({
            id: id,
            nome: nome,
            email: email,
            anoNasc: anoNasc,
            sexo: sexo,
            numeroTel: numeroTel,
            rua: rua,
            numeroCasa: numeroCasa,
            cidade: cidade,
            estado: estado,
            senha: senha,
        });

        let insert = pessoa.find(pessoa => pessoa.id === cont);

        tbody.innerHTML += "<tr id='row"+cont+"'><td>"+insert.nome+"</td><td>"+insert.anoNasc+"</td><td>"+insert.sexo+"</td><td>"+insert.numeroTel+"</td><td>"+insert.rua+"</td><td>"+insert.numeroCasa+"</td><td>"+insert.cidade+"</td><td>"+insert.estado+"</td><td>"+insert.email+"</td><td>"+insert.senha+"</td><td><button type='button' class='btn btn-primary' onclick='editarCampo(" + cont + ")'>Editar</button></td><td><button type='button' class='btn btn-danger' onclick='deletaCampo(" + cont + ")'>Excluir</button></td></tr>";


        cont++;

        formulario.elements['nome'].value = null;
        formulario.elements['email'].value = null;
        formulario.elements['anoNasc'].value = null;
        formulario.elements['sexo'].value = 'm';
        formulario.elements['fone'].value = null;
        formulario.elements['rua'].value = null;
        formulario.elements['numeroCasa'].value = null;
        formulario.elements['cidade'].value = null;
        formulario.elements['estado'].value = 'AC';
        formulario.elements['pass'].value = null;
        formulario.elements['cPass'].value = null;

    }
    else if (verify === 1) { // Senhas Diferentes
        console.log('Senhas Diferentes');
        alert('As senhas precisam ser iguais!!!');
    }
    else { // Valor de Retorno Não Existente
        console.log('Pare de Burlar o Sistema!!!');
    }

});

// Verifica se os Campos senha possuem o mesmo valor
function verificaSenha() {
    let psw = document.getElementById('pass');
    let cPsw = document.getElementById('cPass');

    if (psw.value === cPsw.value) {
        return 0;
    }

    else{
        return 1;
    }

}

function deletaCampo(buttonId) {
    console.log("Deletando Campo: " + buttonId);

    let row = document.getElementById('row' + buttonId);
    tbody.removeChild(row);

    for (let i = 0; i < pessoa.length; i++) {

        if (pessoa[i].id === buttonId) {

            pessoa.splice(i, 1);

        }

    }

}

function editarCampo(buttonId) {
    console.log("Editando Campo: " + buttonId);

    let row = document.getElementById('row' + buttonId);

    let campo = pessoa.find(pessoa => pessoa.id === buttonId);

    console.log(row.children);
    row.children[0].innerHTML = "<input type='text' id='nome" + buttonId + "' value='" + campo.nome + "' class='form-control' placeholder='Ex: Jorgin da Serraria'/>";
    row.children[1].innerHTML = "<input type='number' id='anoNasc" + buttonId + "' value='" + campo.anoNasc + "' class='form-control' placeholder='Ex: 1984'/>";
    row.children[2].innerHTML = "<select id='sexo"+ buttonId +"' class='form-select'><option value='m'>Masculino</option><option value='f'>Feminino</option><option value='n'>Desejo Não Especificar</option></select>";
    row.children[3].innerHTML = "<input type='text' id='fone" + buttonId + "' value='" + campo.numeroTel + "' class='form-control' placeholder='Ex: (43)9 9898-9898'/>";
    row.children[4].innerHTML = "<input type='text' id='rua" + buttonId + "' value='" + campo.rua + "' class='form-control' placeholder='Ex: Banano Júnior'/>";
    row.children[5].innerHTML = "<input type='number' id='numeroCasa" + buttonId + "' value='" + campo.numeroCasa + "' class='form-control' placeholder='Ex: 51'/>";
    row.children[6].innerHTML = "<input type='text' id='cidade" + buttonId + "' value='" + campo.cidade + "' class='form-control' placeholder='Ex: Biribirão do Sul'/>";
    row.children[7].innerHTML = "<select id='estado"+buttonId+"' class='form-select'><option value='AC'>AC</option><option value='AL'>AL</option><option value='AP'>AP</option><option value='AM'>AM</option><option value='BA'>BA</option><option value='CE'>CE</option><option value='DF'>DF</option><option value='ES'>ES</option><option value='GO'>GO</option><option value='MA'>MA</option><option value='MT'>MT</option><option value='MS'>MS</option><option value='MG'>MG</option><option value='PA'>PA</option><option value='PB'>PB</option><option value='PR'>PR</option><option value='PE'>PE</option><option value='PI'>PI</option><option value='RJ'>RJ</option><option value='RN'>RN</option><option value='RS'>RS</option><option value='RO'>RO</option><option value='RR'>RR</option><option value='SC'>SC</option><option value='SP'>SP</option><option value='SE'>SE</option><option value='TO'>TO</option></select>";
    row.children[8].innerHTML = "<input type='email' id='email" + buttonId + "' value='" + campo.email + "' class='form-control' placeholder='Ex: jorge.lal@bol.com'/>";
    row.children[9].innerHTML = "<input type='password' placeholder='Ex: ********' id='pass"+buttonId+"' class='form-control' value='"+campo.senha+"'/>";
    row.children[10].innerHTML = "<button type='button' class='btn btn-success' onclick='editar(" + campo.id + ")'>Salvar</button>";
    row.children[11].innerHTML = "<button type='button' class='btn btn-danger' onclick='descartar(" + campo.id + ")'>Descartar</button>";

}

function descartar(pessoaId) {
    let prodByID = pessoa.find(pessoa => pessoa.id === pessoaId);
    let row = document.getElementById('row' + prodByID.id);

    row.children[0].innerHTML = "<td>" + prodByID.nome + "</td>";
    row.children[1].innerHTML = "<td>" + prodByID.anoNasc + "</td>";
    row.children[2].innerHTML = "<td>" + prodByID.sexo + "</td>";
    row.children[3].innerHTML = "<td>" + prodByID.numeroTel + "</td>";
    row.children[4].innerHTML = "<td>" + prodByID.rua + "</td>";
    row.children[5].innerHTML = "<td>" + prodByID.numeroCasa + "</td>";
    row.children[6].innerHTML = "<td>" + prodByID.cidade + "</td>";
    row.children[7].innerHTML = "<td>" + prodByID.estado + "</td>";
    row.children[8].innerHTML = "<td>" + prodByID.email + "</td>";
    row.children[9].innerHTML = "<td>" + prodByID.senha + "</td>";
    row.children[10].innerHTML = "<td><button type='button' class='btn btn-primary' onclick='editarCampo(" + pessoaId + ")'>Editar</button></td>";
    row.children[11].innerHTML = "<td><button type='button' class='btn btn-danger' onclick='deletaCampo(" + pessoaId + ")'>Excluir</button></td>";

    // console.log(prodByID);

}

function editar(pessoaId) {

    let prodByID = pessoa.find(pessoa => pessoa.id === pessoaId);
    let row = document.getElementById('row' + prodByID.id);

    let nome = document.getElementById('nome'+pessoaId).value, 
    anoNasc = document.getElementById('anoNasc'+pessoaId).value, 
    sexo = document.getElementById('sexo'+pessoaId).value, 
    numeroTel = document.getElementById('fone'+pessoaId).value, 
    rua = document.getElementById('rua'+pessoaId).value, 
    numeroCasa = document.getElementById('numeroCasa'+pessoaId).value, 
    cidade = document.getElementById('cidade'+pessoaId).value, 
    estado = document.getElementById('estado'+pessoaId).value, 
    senha = document.getElementById('pass'+pessoaId).value, 
    email = document.getElementById('email'+pessoaId).value;

    prodByID.nome = nome || 'N.I.';
    prodByID.anoNasc = parseInt(anoNasc || 0);
    prodByID.sexo = sexo;
    prodByID.numeroTel = numeroTel || 'N.I.';
    prodByID.rua = rua || 'N.I.';
    prodByID.numeroCasa = parseInt(numeroCasa || 0);
    prodByID.cidade = cidade || 'N.I.';
    prodByID.estado = estado || 'N.I.';
    prodByID.senha = senha || '';
    prodByID.email = email || 'Não Informado';

    if (prodByID.sexo === 'm'){
        prodByID.sexo = 'Masculino';
    }
    else if (prodByID.sexo === 'f'){
        prodByID.sexo = 'Feminino';
    }
    else {
        prodByID.sexo = 'Não Informado';
    }

    row.children[0].innerHTML = "<td>" + prodByID.nome + "</td>";
    row.children[1].innerHTML = "<td>" + prodByID.anoNasc + "</td>";
    row.children[2].innerHTML = "<td>" + prodByID.sexo + "</td>";
    row.children[3].innerHTML = "<td>" + prodByID.numeroTel + "</td>";
    row.children[4].innerHTML = "<td>" + prodByID.rua + "</td>";
    row.children[5].innerHTML = "<td>" + prodByID.numeroCasa + "</td>";
    row.children[6].innerHTML = "<td>" + prodByID.cidade + "</td>";
    row.children[7].innerHTML = "<td>" + prodByID.estado + "</td>";
    row.children[8].innerHTML = "<td>" + prodByID.email + "</td>";
    row.children[9].innerHTML = "<td>" + prodByID.senha + "</td>";
    row.children[10].innerHTML = "<button type='button' class='btn btn-primary' onclick='editarCampo(" + pessoaId + ")'>Editar</button>";
    row.children[11].innerHTML = "<button type='button' class='btn btn-danger' onclick='deletaCampo(" + pessoaId + ")'>Excluir</button>";


}


function debug() {
    // pessoa.forEach(element => {
    //     console.log(element);
    // });

    // let pessoaBraba = pessoa.find(pessoa=> pessoa.id === 0);
    // console.log(pessoaBraba);
}
