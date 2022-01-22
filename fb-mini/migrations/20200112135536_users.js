exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('first_name')
    .notNullable()

  table
    .string('last_name')
    .notNullable()

  table
    .string('password_hash')
    .notNullable()
  
  table.string('dob')

  table.text('user_bio')

  // table
  // .timestamp('created_at')
  // .notNullable()

  // table
  // .timestamp('updated_at')
  // .notNullable()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
