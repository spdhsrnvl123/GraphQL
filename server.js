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
        id: "1",
        text: "hello",
    },
    {
        id: "2",
        text:"second one",
    },
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
            return tweets;
        },
        tweet(root, {id}) {
            return tweets.find((tweet) => tweet.id === id)
        }
    },
};

/* 
type Query{
    allTweets :[Tweet!]!
    tweet(id:ID!) :Tweet! <-틀린거다
    만약 id가 9071인 tweet을 원한다고 하면 어떨까? database에 존재하지 않는
    tweet인거다. 즉 되돌려 줄 tweet을 가지고 있지 않다. 그래서 Tweet! 느낌표를 
    빼준다.
}
*/

/*
const resolvers = {
    Query: {
        tweet(root,args) {
            console.log(args)
            return null;
        }
    },
};
user가 arguments를 보낼 때 그 argument들은 항상 너의 resolver function의
argument가 된다. -> 이 규칙은 GraphQL의 명세다.
*/

/*
  type Query{
    allTweets : [Tweet]
    tweet(id:ID) : Tweet
  } 실행되는 코드가 아니다. -->어떤 field가 return될지에 대한 설명
*/

const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
})