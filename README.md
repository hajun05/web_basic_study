# web_basic_study

웹 개발을 처음 배우면서 차근차근 따라 해 보는 연습장입니다.

지금은 [생활코딩](https://opentutorials.org)의 Next.js 강의를 보면서, 직접 코드를 쳐 보고 막히는 부분을 정리하고 있어요. 완성된 서비스보다는 "배운 걸 손으로 해 보는 공간"에 가깝습니다.

## 지금까지 해 본 것

- Next.js 프로젝트 만들기 ([`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app))
- 페이지와 공통 레이아웃 만들기
- 주소의 값으로 페이지 바꾸기 (`/test/read/1`, `/test/read/2`)
- 글 생성 화면 만들기 (`/test/create`)

차례대로 늘려 갈 예정이라, 아직 빠진 부분과 어설픈 코드가 많습니다.

## 배우다 막혔던 것

- 강의는 JS인데 이 프로젝트는 TypeScript(`.tsx`)로 만들어져서 처음엔 헷갈렸어요.
- 강의 때와 버전이 달라, 동적 주소의 `params`는 이제 Promise라서 `await`로 꺼내야 합니다. 안 그러면 화면에 값이 안 나와요.
- 이미지를 쓸 때 `public` 폴더 파일은 `/next.svg`처럼 `/`부터 적어야 합니다.

## 실행해 보기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000/test](http://localhost:3000/test)를 열면 됩니다.

코드는 `app/test` 폴더에 있고, 파일을 고치면 화면이 바로 바뀝니다.

## 참고한 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn) - 따라 하면서 배우는 공식 튜토리얼

만들어 본 걸 인터넷에 올려 보고 싶다면 [Vercel](https://vercel.com/new)이 가장 쉽습니다. ([배포 문서](https://nextjs.org/docs/app/building-your-application/deploying))
