const BaseModel = require('./BaseModel')
const Pet = require('./Pet')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      pets: {
        relation: BaseModel.HasManyRelation,
        modelClass: Pet,
        join: {
            from: 'users.id',
            to: 'pets.ownerId',
        }
      },
      children: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',
        }
      },
      parents: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = User
