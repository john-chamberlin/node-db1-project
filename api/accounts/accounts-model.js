const db = require('../../data/dbConfig')

function get() {
    return db('accounts')
}

function getById(id) {
    return db('accounts').where('id', id)
}

function create(post) {
    return db('accounts')
        .insert(post)
        .then(([id]) => {
            return db('accounts').where('id', id)
        })
}

function update(id, changes) {
    return db('accounts')
        .where('id', id)
        .update(changes)
        .then(() => {
            return db('accounts').where('id', id)
        })
}

function remove(id) {
    return db('accounts')
        .where('id', id)
        .del()
        .then(() => {
            return db('accounts')
        })
}

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}
