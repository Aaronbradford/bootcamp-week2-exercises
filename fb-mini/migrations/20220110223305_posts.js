
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('userid')
        .notNullable()
        .references('users.id')
    
    table
        .string('created_date')
        .notNullable()
        
    table
        .text('post_text')

    // table
    //     .string('post_img_url')
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')