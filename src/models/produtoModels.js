const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const ProdutosSchema = new Scheme ({

    produto_nome: {
        type: String,
        require: 'Favor informar o nome do Produto'
    },
    preco: {
        type: String,
        require: 'Favor informar o preço do Produto'
    },
    quantidade: {
        type: String,
        require: 'Favor informar a quantidade do produto'
    },
    data_insert: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Produtos', ProdutosSchema)