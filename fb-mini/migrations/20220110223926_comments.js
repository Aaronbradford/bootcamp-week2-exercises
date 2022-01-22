
exports.up = async knex => knex.schema.createTable('comments', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    
    table
        .uuid('commentor_id')
        .notNullable()
        .references('users.id')

    table
        .uuid('post_id')
        .references('posts.id')

    table
        .timestamp('created_at').defaultTo(knex.fn.now())
        .notNullable()

    table
        .text('message')
        .notNullable()
  
})

exports.down = async knex => knex.schema.dropTableIfExists('comments')