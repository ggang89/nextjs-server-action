
export default function ServerComponent() {
  async function myAction() {
    'use server'; // 비동기함수 본문 상단에 지시어 사용
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    server    
    </div>
  );
}
