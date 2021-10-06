const { findByIdAndUpdate } = require('../model/Usuario');
const Usuario = require('../model/Usuario');

module.exports = {
    async index(req,res) {
        const usuario = await Usuario.find(); // selection * from usuario
        res.json(usuario)
    },

    async detail(req,res) {
        const {_id} = req.params
        const usuario = await Usuario.findOne({_id}); // selection * from usuario where id = ?
        res.json(usuario)
    },

    async store(req,res){
        const { nome, senha } = req.body;
        
        var dataCreate = {}
    
        dataCreate = {
            nome, senha
        }
        const usuario = await Usuario.create(dataCreate); // selection * from usuario
        res.json(usuario)
    },

    async delete(req,res) {
        const {_id} = req.params
        const usuario = await Usuario.findByIdAndDelete({_id}); // selection * from usuario
        res.json(usuario)
    },

    async update(req,res){
        const {_id, nome, senha } = req.body;
        
        var dataCreate = {}
    
        dataCreate = {
            _id, nome, senha
        }
        const usuario = await findByIdAndUpdate({_id}, dataCreate, {new: true}); // selection * from usuario
        res.json(usuario)
    },
}