const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const fs = require("fs");
const path = require("path");

//import dummy data
const mockData = require('./mockData.json')

//import our resolver functions
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation")

//create resolver object
const resolvers = {
    Query,
    Mutation
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf-8'
    ),
    resolvers,
    
});

let port = process.env.PORT || 4000;

startStandaloneServer(server, {
    context: async ({ req, res }) => ({
        mockData
    }),
    listen: { port },
}).then(({ url }) => {
    console.log(`URl is available at localhost ${url}`)
})
