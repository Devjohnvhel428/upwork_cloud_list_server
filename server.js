const { ApolloServer, gql } = require("apollo-server");

const resources = [
  { id: "1", name: "AWS EC2", type: "Compute" },
  { id: "2", name: "Google Cloud Storage", type: "Storage" },
  { id: "3", name: "Azure Functions", type: "Compute" },
  { id: "4", name: "Firebase", type: "Database" },
  { id: "5", name: "Heroku", type: "Platform" },
  { id: "6", name: "DigitalOcean", type: "Compute" },
  { id: "7", name: "IBM Cloud", type: "Compute" },
  { id: "8", name: "Oracle Cloud", type: "Database" },
  { id: "9", name: "Alibaba Cloud", type: "Compute" },
  { id: "10", name: "Vultr", type: "Compute" },
  { id: "11", name: "Linode", type: "Compute" },
  { id: "12", name: "Netlify", type: "Platform" },
  { id: "13", name: "GitHub Pages", type: "Hosting" },
  { id: "14", name: "Cloudflare", type: "CDN" },
  { id: "15", name: "PostgreSQL", type: "Database" },
  { id: "16", name: "MongoDB Atlas", type: "Database" },
  { id: "17", name: "Redis", type: "Database" },
  { id: "18", name: "Cassandra", type: "Database" },
  { id: "19", name: "RabbitMQ", type: "Messaging" },
  { id: "20", name: "Kubernetes", type: "Orchestration" },
];

const typeDefs = gql`
  type Resource {
    id: ID!
    name: String!
    type: String!
  }

  type Query {
    resources: [Resource]
  }
`;

const resolvers = {
  Query: {
    resources: () => resources,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 4000;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
