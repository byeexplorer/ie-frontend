import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CommonButton } from 'components/common';
import { Ie_97BlueModel } from 'components/model';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

export default function ErrorPage() {
  const router = useRouter();

  const onClickButton = () => router.back();

  return (
    <main className="w-screen h-screen p-2 flex flex-col justify-between">
      <div onClick={onClickButton}>
        <span className="block w-[3px] h-[20px] rounded-full bg-white rotate-45 origin-bottom-left" />
        <span className="block w-[3px] h-[20px] rounded-full bg-white rotate-[-45deg] origin-top-left" />
      </div>
      <Canvas>
        <ambientLight intensity={3.5} />
        <pointLight position={[10, 10, 10]} intensity={100} />
        <Suspense fallback={null}>
          <OrbitControls />
          <Ie_97BlueModel />
        </Suspense>
      </Canvas>
      <main className="text-center flex justify-center flex-col gap-2">
        <h1 className="text-[4vw]">
          <p>현재 사이트는 모바일은 지원하지 않습니다.</p>
          <p>불편하시겠지만 웹으로 관람하여주시기 바랍니다.</p>
          <p>감사합니다.</p>
        </h1>
        <h2 className="text-[4vw] text-[#828282] whitespace-pre">
          <p>{`This site does not support mobile.`}</p>
          <p>{`Sorry for the inconvenience,`}</p>
          <p>{`But please visit the website.`}</p>
          <p>{`Thank you.`}</p>
        </h2>
      </main>
      <footer className="relative">
        <CommonButton isActive={true} onClick={onClickButton} content="확인" className="w-full text-[4vw]" />
      </footer>
    </main>
  );
}
