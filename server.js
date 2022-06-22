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

const typeDefs = gql`
  type User{
    id: ID
    username:String
  }

  type Tweet {
    id:ID
    text:String
    author:User
  }
  type Query{
    allTweets : [Tweet]
    tweet(id:ID) : Tweet
  }
  type Mutation {
    postTweet(text:String,userId:ID):Tweet
  }
`;
//GET /api/v1/tweets
//POST /api/v1/tweets
//GET /api/v1/tweet/:id


/*
  type Query{
    allTweets : [Tweet]
    tweet(id:ID) : Tweet
  } 실행되는 코드가 아니다. -->어떤 field가 return될지에 대한 설명
*/

const server = new ApolloServer({typeDefs})

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
})