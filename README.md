# NomaderCoder GraphQL API

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

GraphQL은 GraphQL쿼리를 작성,검증 및 테스트하기 위한 브라우저 내 도구입니다.
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
