exports.seed = async (knex) => {
    await knex('restaurants').insert([
        {name: "Ethiopian Diamond", date: "01/04/2020"}
    ])
}