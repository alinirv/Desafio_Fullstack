const mongoose = require('mongoose');

//modela coleção BD
const CandidateSchema = new mongoose.Schema({
    cargoPretendido:{ type: String, unique: false, required: false}, 
    nome:{ type: String, unique: false, required: true}, 
    dataNascimento:{ type: String, unique: false, required: true}, 
    estadoCivil:{ type: String, unique: false, required: true}, 
    genero:{ type: String, unique: false, required: true}, 
    logradouro:{ type: String, unique: false, required: true},
    numeroLogradouro: {type: Number, unique: false, required:true}, 
    bairro:{ type: String, unique: false, required: true}, 
    localidade:{ type: String, unique: false, required: true}, 
    cep:{ type: String, unique: false, required: true},
    uf: { type: String, unique:false, required: true},
    telefone1:{ type: Number, unique: false, required: false}, 
    telefone2:{ type: Number, unique: false, required: false}, 
    celular:{ type: Number, unique: false, required: true}, 
    contato:{ type: String, unique: false, required: true}, 
    email:{ type: String, unique: true, required: true}, 
    identidade:{ type: String, unique: false, required: true}, 
    cpf:{ type: String, unique: true, required: true}, 
    habilitacao:{ type: String, unique: false, required: true}, 
    veiculo:{ type: String, unique: false, required: false}
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);