const db = require("../../database/db-config")

function find() {
    return db('restaurants')
        .select('id', 'name', 'date')
}

function findBy(filter) {
    return db('restaurants').where(filter)
        .select('id', 'name', 'date')
}

function findById(id) {
    return db('restaurants')
        .where({ id })
        // .select('id', 'name', 'date')
        .first()
}

function add(rest) {
    return db('restaurants').insert(rest).returning('*')
    // return db('restaurants')
    //     .insert(rest)
    //     .then(id => {
    //         return findById(id[0])
    //     })
}



function update(changes, id) {
    return db('restaurants')
        .where({ id })
        .update(changes)
        .returning('*')
}
// function update(changes, id) {
//     return db('restaurants')
//         .where({ id })
//         .update(changes)
//         .then(id => {
//             if (id > 0) {
//                 findById(id)
//             } else {
//                 return null
//             }
//     })
// }

function remove(id) {
    return db('restaurants')
        .where({ id })
        .del()
}


module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
}