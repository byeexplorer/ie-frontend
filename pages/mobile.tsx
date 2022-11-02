import { OrbitControls, Stage, BakeShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CommonButton } from 'components/common';
import { Ie_97BlueModel } from 'components/model';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

function ErrorPage() {
  const router = useRouter();

  const onClickButton = () => router.back();

  return (
    <main className="mobile m-auto max-w-[768px] p-2 pb-0 flex flex-col justify-between">
      <div onClick={onClickButton}>
        <span className="block w-[3px] h-[20px] rounded-full bg-white rotate-45 origin-bottom-left" />
        <span className="block w-[3px] h-[20px] rounded-full bg-white rotate-[-45deg] origin-top-left" />
      </div>
      <div className="w-full h-[30vh]">
        <Canvas camera={{ fov: 25 }} flat>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={1}>
              <OrbitControls makeDefault autoRotate enableZoom={false} />
              <Ie_97BlueModel />
              <BakeShadows />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
      <main className="text-center flex justify-center flex-col gap-2">
        <h1 className="text-[2vh]">
          <p>현재 사이트는 모바일 지원을 하지 않습니다.</p>
          <p>웹으로 관람하여주시기 바랍니다.</p>
          <p className="text-[#5988FF] text-[1.5vh] mt-1">*Safari는 지원이 불가하여, Chrome 사용을 권장합니다.</p>
        </h1>
        <h2 className="text-[2vh] text-[#828282] whitespace-pre">
          <p>{`This site does not support mobile.`}</p>
          <p>{`Sorry for the inconvenience,`}</p>
          <p>{`But please visit the website.`}</p>
          <p className="text-[#5988FF] text-[1.5vh] mt-1">
            *Safari is not supported,
            <br /> so we recommend using Chrome.
          </p>
        </h2>
      </main>
      <footer className="relative">
        <CommonButton isActive={true} onClick={onClickButton} content="확인" className="w-full text-[25%] mt-0" />
      </footer>
    </main>
  );
}

export default ErrorPage;
