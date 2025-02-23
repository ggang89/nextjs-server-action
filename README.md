## nextjs - server - action

* 서버 액션은 서버에서 실행되는 비동기 함수입니다.
서버 및 클라이언트 컴포넌트에서 호출하여 Next.js 애플리케이션에서 양식 제출 및 데이터 변형을 처리할 수 있습니다.

* 서버 액션은 React "use server" 지시어로 정의할 수 있습니다. 비동기 함수의 맨 위에 지시어를 배치하여 해당 함수를 서버 액션으로 표시하거나, 별도의 파일 상단에 배치하여 해당 파일의 모든 내보내기를 서버 액션으로 표시할 수 있습니다.

```javascript
export default function ServerComponent(){
  async function myAction(){
    "use server";
    // ...
  }
  return <div></div>
}

```