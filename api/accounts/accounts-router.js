const express = require('express')
const router = express.Router()

const Accounts = require('./accounts-model')

router.get('/', (req, res) => {
    Accounts.get()
        .then(accounts => {
            res.status(200).json(accounts)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Accounts.getById(id)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    const post = req.body
    Accounts.create(post)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    Accounts.update(id, changes)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Accounts.remove(id)
        .then(accounts => {
            res.status(200).json(accounts)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router
