import { ApolloServer, gql } from "apollo-server";

/* rest API방식 , graphQl방식
GET /text
GET /hello

-동일-

const typeDefs = gql`
  type Query{
    text : String
    hello : String
  }
`rest API에서 GET request url을 노출시키는 거와 동일.
*/

const tweets = [
    {
        id:"1",
        text:"first one!"
    },
    {
        id: "2",
        text:"second one"
    }
]

const typeDefs = gql`
  type User{
    id: ID
    username:String!
    firstName:String!
    lastName:String!
  }

  type Tweet {
    id:ID!
    text:String!
    author:User
  }
  type Query{
    allTweets : [Tweet!]!
    tweet(id:ID!) : Tweet
  }
  type Mutation {
    postTweet(text:String!,userId:ID!):Tweet!
    deleteTweet(id:ID!):Boolean!
  }
`;
//GET /api/v1/tweets
//POST /api/v1/tweets
//GET /api/v1/tweet/:id

const resolvers = {
    Query: {
        allTweets() {
            return tweets
        },
        tweet(root, { id } ) {
            console.log(id)
            return tweets.find((real) => real.id === id);
        // real->element
        }
    }
}

const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
})