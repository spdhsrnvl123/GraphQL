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

let tweets = [
  {
    id: "1",
    text: "first one!",
    userId:"2"
  },
  {
    id: "2",
    text: "second one",
    userId:"1"
  },
];

let users = [
  {
    id: "1",
    firstName: "nico",
    lastName: "las",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String! 
    #fullName은 실제 data에는 없지만 User가 fullName을 가질거라고 GraphQL에게 말해주었다.
    #GraphQL은 fullName이 resolver라는걸 인식할 수 있다.
  }

  type Tweet {
    id: ID!
    text: String!
    author: User #field의 이름 author
  }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
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
    tweet(root, { id }) {
      console.log(id);
      return tweets.find((real) => real.id === id);
      // real->element
    },
    allUsers() {
      console.log("allUsers called!");
      return users;
    },
  },
  Mutation: {
    postTweet(_, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id); //먼저 내가 지우려고 하는 tweet을 찾기
      if (!tweet) return false; //찾기 못했다면 false
      tweets = tweets.filter((tweet) => tweet.id !== id);
      //tweet의 id가 삭제하려는 id와 같지 않은 tweet들로 filter를 거치면 tweet.filter는 array를 줄꺼다.
      return true;
    },
  },
  User: {

      fullName({firstName,lastName}) {
    //   console.log("fullName called!");
      // console.log(root);
      // console.log(firstName, lastName);
      return `${firstName} ${lastName}`;
    //   return "Hello";
    },
    },
  Tweet: {
      author({ userId }) {
          return users.find((user))
      }
  }
  
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
