// server/schema/schema.js

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = require('graphql');

// Define the TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

// RootQuery with one example task
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      resolve(parent, args) {
        // Dummy data
        return {
          id: '1',
          title: 'Write GraphQL schema',
          weight: 3,
          description: 'Set up TaskType and RootQuery for testing'
        };
      }
    }
  }
});

// Export the schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
