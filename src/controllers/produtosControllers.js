const mongoose = require('mongoose')
const { response } = require('express')
const Produto = mongoose.model('Produtos')

exports.creatProduct = (req, res) => {
    const { produto_nome, preco, quantidade } = req.body
        const newproduto = new Produto({ produto_nome, preco, quantidade })
        newproduto.save((error, produto) => {
            if (error) {
                res.send(error)
            }
            const response = {
                message: 'Produto Cirado com Sucesso!',
                data: produto
            }
            res.status(201).json(response)
        })
    }

  exports.listAll = (req, res) => {
      Produto.find({}, (error, produto) => {
          if (error) {
              res.send(error)
          }
          const response = {
              message: 'Todos os Produtos Listados com Sucesso!',
              data: produto
          }
          res.status(200).json(response)
      })
  }  

  exports.listForName = (req, res) => {
      Produto.findOne( req.body, (error, produto) => {
          if (error) {
              res.send(error)
          }
          const response = {
              message: 'Produto Listado por Nome é',
              data: produto
          }
          res.status(200).json(response)
      })
  }

  exports.listOne = (req, res) => {
    Produto.findById(req.params.id, (error, produto) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Produto Listado com Sucesso!',
            data: produto
        }
        res.status(200).json(response)
    })
}

exports.listCreatEnd = (req, res) => {
    Produto.findOne( { _id:  -1 }.params, (error, produto) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Ultimo Registro Cadastrado é!',
            data: produto
        }
        res.status(200).json(response)
    })
}