exports.up = async knex => knex.schema.createTable('messages', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
        .uuid('sender_id')
        .notNullable()
        .references('users.id')

    table
        .uuid('reciever_id')
        .notNullable()
        .references('users.id')

    table
        .text('message')
        .notNullable()

    table
        .timestamp('time_sent').defaultTo(knex.fn.now())
        .notNullable()

    table
        .enum('readtype', ['unread', 'read'])

    table
        .timestamp('time_read').defaultTo(knex.fn.now())
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('messages')