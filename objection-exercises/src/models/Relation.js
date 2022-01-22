// Write your relation model here!
const { userParams } = require('../lib')
const BaseModel = require('./BaseModel')
const User = require('./User')

class Relation extends BaseModel {
    static get tableName() {
      return 'relations'
    }
  
    static get relationMappings() {
      return {}
    }
}
  
  module.exports = Relation