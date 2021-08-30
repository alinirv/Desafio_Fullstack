
//valida cpf
function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
        
    } else {
        let numeros, digitos, soma, resultado;
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;

        for (i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        };
        console.log(soma);

        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(0)) {
            return false;
        };

        soma = 0;

        numeros = cpf.substring(0, 10);

        for (k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        };
        
        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(1)) {
            return false;
        }
        return true;
    }
}

//retorna resposta cpf

function validacaoCPF() {
    let cpf = document.getElementById('cpf').value;

    let resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
        document.getElementById('error').style.display = 'block';
        return false;
    } else {
        document.getElementById('error').style.display = 'none';
        return true;
    }

}

document.getElementById('cpf').addEventListener('focusout', validacaoCPF);



//aplica máscara telefone

function mascaraTel(input) { 
     input.maxLength = 15;
     setTimeout( () => { input.value = formatTel(input.value);}, 1);
};

//formata mascara telefone

function formatTel(value){
    value = value.replace(/\D/g,'');
    value = value.replace(/^(\d\d)(\d)/g,'($1) $2');
    if(value.length < 14) value = value.replace(/(\d{4})(\d)/,'$1-$2');
    else value = value.replace(/(\d{5})(\d)/,"$1-$2");
    return value;
};

//Consome cep

const cep = document.querySelector('#cep');
const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
    }
};

//Busca cep
cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})

//valida capos obrigatorios
const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
    //verifica se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

  function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: " * Campo obrigatório"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Informe um email válido"
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span")
        
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()
        console.log(error)

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()

}

for( field of fields ){
    field.addEventListener("invalid", event => { 
        // eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}

// cria objeto 

const Formulario = () => {
    let form = {
        cargoPretendido:document.getElementById('cargo').value,
        nome:document.getElementById('nome').value,
        dataNascimento:document.getElementById('dataNascimento').value,
        estadoCivil:document.getElementById('estadoCivil').value,
        genero:document.getElementById('genero').value,
        logradouro:document.getElementById('logradouro').value,
        numeroLogradouro:document.getElementById('numeroLougradoro').value,
        bairro:document.getElementById('bairro').value,
        localidade:document.getElementById('localidade').value,
        cep:document.getElementById('cep').value,
        uf: document.getElementById('uf').value,
        telefone1:document.getElementById('telefone1').value,
        telefone2:document.getElementById('telefone2').value,
        celular:document.getElementById('celular').value,
        contato:document.getElementById('contato').value,
        email:document.getElementById('email').value,
        identidade:document.getElementById('identidade').value,
        cpf: document.getElementById('cpf').value,
        habilitacao:document.getElementById('habilitacao').value,
        veiculo:document.getElementById('veiculo').value,
    };
    console.log(form);
    return form
}

const criarCandidato = async (candidato) => {

    const requisicao = await fetch('http://localhost:7000/register',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
    });
    if (requisicao.status === 200) {
        console.log('deu certo!!!!')
        preventDefault()
        alert('CADASTRO CONCLUÍDO!');
    };

    if (requisicao.status === 500) {
        console.log('deu rui!!')
        preventDefault()
        alert('CPF OU EMAIL JÁ FOI CADASTRADO');
    };
};

function enviar() {
    criarCandidato()
};




























/*document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    // não vai enviar o formulário
    
})    */