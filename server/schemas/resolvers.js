const { Tech, Matchup, User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {

    },

  },
  Mutation: {
    login: async (parent, args) => {

    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      if (!user) {
        return
      }
      const token = signToken(user);
      return { token, user };

    },
    savedBook: async (parent, { _id, techNum }) => {

    },
    removeBook: async (parent, { _id, techNum }) => {

    },
  },
};

module.exports = resolvers;
