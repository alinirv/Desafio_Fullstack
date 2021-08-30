const Candidate = require('../models/Cadidate');

module.exports = {
    async register(req, res) {

        const { cargoPretendido, nome, dataNascimento, estadoCivil, genero, logradouro, numeroLogradouro, bairro, cidade, cep, uf, telefone1, telefone2, celular, 
            contato, email, identidade, cpf, habilitacao, veiculo } = req.body;

        const newCandidate = new Candidate();

        newCandidate.cargoPretendido = cargoPretendido;
        newCandidate.nome = nome;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.logradouro = logradouro;
        newCandidate.numeroLogradouro = numeroLogradouro;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.cep = cep;
        newCandidate.uf = uf;        
        newCandidate.telefone1 = telefone1;
        newCandidate.telefone2 = telefone2;
        newCandidate.celular = celular;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.habilitacao = habilitacao;
        newCandidate.veiculo = veiculo;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log('DEU EROOOO')
                console.log(err);
                return res.status(500).send();
            }
            console.log('DEU CERTO')
            return res.status(200).send(savedCandidate);
        });
    },
};