module.exports = function (app) {
    const produtos = require('../controllers/produtosControllers')
    
    app.route('/produtos')
    .post(produtos.creatProduct)
    .get(produtos.listAll)

    app.route('/produtos/produto')
    .get(produtos.listForName)

    app.route('/produtos/ultimo')
    .get(produtos.listCreatEnd)

    app.route('/produtos/:id')
    .get(produtos.listOne)

}