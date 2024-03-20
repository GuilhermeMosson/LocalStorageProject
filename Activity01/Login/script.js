const showPassword = () => {
    var inputSenha = document.querySelector('#senha');

    if(inputSenha.getAttribute('type') === 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
}

function login(){
    var nome = $("#nome").val();
    var senha = $('#senha').val();

    if(nome && senha && nome === 'admin' && senha === '12345'){
        const user = {
            name: nome,
            dataEntrada: formaraData(new Date()),
            id: Math.floor(Math.random() * 100000)
        }
        localStorage.setItem('usuario', JSON.stringify(user));
        window.location.href= '../Loja/index.html';
    }else{
        document.getElementById('error_id').style.display='flex';
    }
}

const fecharModal = () => document.getElementById('error_id').style.display='none';

function formaraData(item){
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }

    return item.toLocaleString('pt-BR', options)
}