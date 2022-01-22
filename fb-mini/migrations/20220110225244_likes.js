exports.up = async knex => knex.schema.createTable('likes', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    
    table
        .uuid('liking_user_id')
        .notNullable()
        .references('users.id')

    table
        .uuid('liked_post_id')
        .references('posts.id')

    table
        .uuid('liked_comment_id')
        .references('comments.id')
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('likes')
  