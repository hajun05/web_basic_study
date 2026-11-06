# web_basic_study

웹 개발 기초를 학습하며 작성한 코드와 예제를 모아 두는 저장소입니다.

강의, 문서, 문제 풀이 등 출처에 구애받지 않고 학습한 내용을 자유롭게 정리합니다. 완성된 서비스보다는 개념을 직접 구현해 보는 데 목적이 있습니다.

## 기술 스택

- [Next.js](https://nextjs.org) (App Router)
- React
- TypeScript

## 학습 내용

`app/test` 폴더에서 다루며, 주제는 계속 추가됩니다.

| 주제 | 경로 |
|---|---|
| 공통 레이아웃과 페이지 구성 | `/test` |
| 동적 라우팅 (주소의 값으로 페이지 구성) | `/test/read/[id]` |
| 생성 화면 | `/test/create` |

## 학습 메모

- **동적 라우팅의 `params`:** 현재 Next.js 버전에서 `params`는 Promise이므로 `await`로 값을 꺼내야 합니다.
- **정적 파일 경로:** `public` 폴더의 파일은 `public`을 빼고 `/`부터 적습니다. 예: `public/next.svg` → `/next.svg`
- **JS와 TypeScript:** 자료가 JS 기준이어도 타입만 추가하면 같은 방식으로 적용할 수 있습니다. 이 저장소는 TypeScript(`.tsx`)를 사용합니다.

## 실행 방법

```bash
npm install
npm run dev
```

[http://localhost:3000/test](http://localhost:3000/test)에서 확인할 수 있습니다.

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)
