# GraphQL API

## API(Application Programming Interface)

API는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 즉, 프로그램들이 서로 소통하는 방법이다. <br />
주로 프로그래밍할 때 사용하고, 어플리케이션과 상호작용할 때 사용한다.

**인터페이스**
<br />
무엇인가와(TV) 무엇인가를(리모컨) 이용해서 상호작용하는 방식이다.
리모컨을 이용해서 TV를 컨트롤하고, TV와 상호작용할 수 있는 것이다.

## Rest API

Rest API는 특정 URL로 요청을 통해 이루어진다.<br />

**YTS.MX - Movie API**
<br />
https://yts.mx/api <br />
https://yts.mx/api/v2/list_movies.json

**Twitter API**
<br />
https://developer.twitter.com/en/docs/api-reference-index

## HTTP 요청 메서드

HTTP는 요청 메서드를 정의하여, 주어진 리소스에 수행하길 원하는 행동을 나타냅니다.
간혹 요청 메서드를 "HTTP동사"라고 부르기도 합니다.<br />
https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

**자주 사용하는 HTTP요청 메서드들**

GET : GET 메서드는 오직 데이터를 받기만합니다.(읽기전용)<br />
POST : POST 메서드는 리소스를 생성할 때 쓰입니다.<br />
PUT : PUT 메서드는 리소스를 업데이트할 때 쓰입니다.<br />
DELETE : DELETE 메서드는 특정 리소스를 삭제합니다.<br />
PATCH : PATCH 메서드는 리소스의 부분만을 수정하는 데 쓰입니다.

**5분만에 제대로 설계하는 ⭐️ REST API**
<br />
https://youtu.be/4DxHX95Lq2U

**5분만에 제대로 설계하는 ⭐️ REST API (요약)**
<br />

1. URL에서는 가급적 동사를 사용하지 않는다.
   (동사보다는 HTTP request method를 이용)
   /seeMovies (GET) -> /movies (GET)
   /createMovie (POST) -> /movies (POST)

2. 검색이나 필터를 처리할 때는 query parameter를 이용하는 것이 좋다.
   /getTopRatedMovies -> /movies?min_rating=9
   /findMoviesFromThisYear -> /movies?release_date=2022

## GraphQL

- 누가 GraphQL을 사용하고 있습니까?
  <br />
  Facebook의 모바일 앱은 2012년부터 GraphQL로 구동되었습니다. GraphQL spec은 2015년 오픈 소스로 공개되었으며 현재 다양한 환경에서 사용할 수 있으며 모든 규모의 팀(페이스북,깃허브,핀터레스트,트위터,페이팔 등)에서 사용하고 있습니다.
  <br />
  https://github.com/graphql/graphql-spec

- GraphQL이 해결하는 문제점
  <br />

1. Overfetching : 필요한 데이터보다 더 많은 데이터를 fetch하는 것을 말합니다.
   <br />
   하지만 GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만 정확히 얻을 수 있습니다. GraphQL 쿼리는 항상 예측 가능한 결과를 반환합니다.
   <br />
2. Underfetching : 필요한 데이터보다 적은 데이터를 fetch하는 것을 말합니다.
   <br />
   일반적인 Rest API는 여러 URL에서 로딩해야 하지만 GraphQL API는 앱에 필요한 모든 데이터를 단일 request로 가져옵니다. GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있습니다.

## Swapi-GraphQL

GraphiQL은 GraphQL쿼리를 작성,검증 및 테스트하기 위한 브라우저 내 도구입니다.
<br />
https://graphql.org/swapi-graphql

## Apollo Server

Apollo 서버는 Apollo 클라이언트를 포함한 모든 GraphQL 클라이언트와 호환되는 사양 준수(spec-compliant)의 오픈 소스 GraphQL 서버입니다. 모든 소스의 데이터를 사용할 수 있는 자체 문서화 가능한 production-ready GraphQL API를 구축하는 가장 좋은 방법입니다.
<br />
https://www.apollographql.com/docs/apollo-server/

**Apollo Server 시작하기**
npm install apollo-server graphql
npm install nodemon -D

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

https://www.apollographql.com/docs/apollo-server/getting-started/

## Define your GraphQL schema (GraphQL 스키마 정의)

모든 GraphQL 서버(Apollo Server 포함)는 스키마를 사용하여 클라이언트가 쿼리할 수 있는 데이터 구조를 정의합니다.(스키마는 type definitions의 모음입니다.)

```js
//예시
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
//type Query는 실행되는 코드가 아니다. 어떤 field가 return될지에 대한 설명이다.
```

https://www.apollographql.com/docs/apollo-server/getting-started/#step-3-define-your-graphql-schema

## Scalar type

GraphQL 객체 타입에는 이름과 필드가 있지만 이 필드는 더욱 구체적인 데이터로 해석 되어야 합니다. 그 때 스칼라 타입을 사용할 수 있습니다.
<br />
GraphQL은 기본 스칼라 타입 세트와 함께 제공됩니다.<br />
ID:ID 스칼라 타입은 객체를 다시 가져오거나 캐시의 키로 자주 사용되는 고유 식별자를 나타냅니다.<br />
https://graphql.org/learn/schema/#scalar-types

## Mutaitions

GraphQL에 대한 대부분은 데이터 fetching이지만, 서버 측 데이터를 수정할 수 있는 방법이 필요합니다. 서버 측 데이터를 수정하는 모든 작업은 mutation을 통해 보내야 한다는 규칙을 설정하는 것이 유용합니다.

```js
mutation CreateReview($ep: Episode!, $review: ReviewInput!) {
createReview(episode: $ep, review: $review) {
stars
commentary
}
}
```

https://graphql.org/learn/queries/#mutations

## List and Non-Null

아래 Character에 name에 String타입을 사용하고 느낌표 !를 추가하여 Non_null로 표시합니다. Non-Null로 표시하게 되면 서버가 항상 이 필드에 대해 null이 아닌 값을 반환할 것으로 예상합니다. 그래서 null 값을 얻게 되면 클라이언트에게 문제가 있음을 알립니다.

```js
type Character{
    name:String!
    appearsln:[Episode]!
}
```

```js
type Query{
    tweet(id:ID!):Tweet! //틀림
}
/*
만약 id가 9071인 tweet을 원한다고 하면 어떨까? database에 존재하지 않는 tweet인거다. 즉 되돌려 줄 tweet을 가지고 있지 않다. 그래서 Tweet! 느낌표를 빼줘야 된다.
*/
```

https://graphql.org/learn/schema/#lists-and-non-null

### review

- 아폴로 서버를 실행하기 위해서는 반드시 최소 1개의 Query가 필요합니다.
- type Query는 가장 기본적인 타입입니다.
- Query에 넣는 필드들은 request할 수 있는 것들이 됩니다.
- !를 쓰지 않으면 해당 필드는 nullable field가 됩니다. (null값을 가질 수 있는 필드)

## Resolvers

resolver 함수는 데이터베이스에 액세스한 다음 데이터를 반환합니다.

```js
const resolvers = {
  Query: {
    tweet(root, args) {
      console.log(args);
      return null;
    },
  },
};
/*
user가 arguments를 보낼 때 그 argument들은 항상 resover function의 argument가 된다.
-> 이 규칙은 GraphQL의 명세다.
*/
```

## Resolver arguments

Resolver 함수에 첫번째 arguments인 root는 Resolver함수안에서 호출되는 함수의 부모객체가 넣어진다.

※ Resolver 함수에는 parent(root or source), args, context, info 의 네 가지 인수가 순서대로 전달됩니다.
https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments

### **ex)**

```js
let users = [
    {
        id:"1",
        firstName:"nico",
        lastName:"las"
    },
    {
        id:"2",
        firstName:"Elon",
        lastName:"Mask"
    }
]
const typeDefs = gql`
  type User {
    id:ID
    firstName:String!
    lastName:String!
    fullName:String!
  }

  type Query {
    allUsers : [User!]!
  }

`

const resolvers = {
    Query:{
        allUsers(){
            return users;
        }
    }
    User:{
        fullName(root){
            console.log(root);
            /*
            root에 들어가는 값
            first root)
                {
                    id:"1",
                    firstName:"nico",
                    lastName:"las"
                }
            second root)
                {
                    id:"2",
                    firstName:"Elon",
                    lastName:"Mask"
                }
            ※데이터값이 두개가 있기 때문에 두번 순회.
            */
            retrun "Hello"
        }
    }
}
/*(수정필요!)
resolver의 첫번째 argument에서는 root query를 찾을 수 있다
root안에는 User가 있다 ->fullName을 호출하는 User이기 때문이다.
실행과정 :
1) resolvers함수에 Query문 안에 allUsers함수가 실행된다.
2) Query Type에 지정된 aallUsers는 User리스트를 확인하고 User의 타입을 확인하고 resovers함수의 allUsers()함수는 데이터값에 접근한다.
3)지정된 User타입에 fullName이 없는걸 확인하고 resolver함수안에 fullName함수가 있는지 확인한다.
4)fullName의 첫번째 인자로는 User의 첫번째 실행되어 얻은 users데이터가 들어간다
5)users데이터와 합쳐 fullName의 리턴값을 반환한다.
*/
```

```gql
{
  allUsers {
    id
    firstName
    lastName
    fullName
  }
}
```
