const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = require('graphql');

// Define TaskType as before
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

// Define RootQueryType with task field accepting id argument
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString }  // argument to query a specific task by id
      },
      resolve(parent, args) {
        return null;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
