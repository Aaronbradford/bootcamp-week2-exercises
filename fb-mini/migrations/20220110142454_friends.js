exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table
        .uuid('requester_id')
        .notNullable()
        .references('users.id')
    table
        .uuid('requested_id')
        .notNullable()
        .references('users.id')

    table
        .enum('status', ['accepted', 'rejected', 'pending'])
        .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')