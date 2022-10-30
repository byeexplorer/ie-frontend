import Image from 'next/image';
import { useMemo, useState } from 'react';

const teams: Team[] = [
  {
    id: 1,
    name: 'Dami Kim',
    job: 'BX Designer',
    comment: '브랜드 디자이너 김다미입니다.<br />Visual Communication Design을 탐구합니다.',
    profile: './images/profile/dami.jpeg',
    email: 'kimdm5198@gmail.com',
  },
  {
    id: 2,
    name: 'Hyeong Tae Kim',
    job: 'Frontend Developer',
    comment: '프론트엔드 개발자 김형태입니다.',
    profile: './images/profile/hyeontae.jpeg',
    email: 'dev.hyongti@gmail.com',
  },
  {
    id: 3,
    name: 'Seongeun Jeong',
    job: 'BX Designer',
    comment: '모션디자이너 정성은입니다.',
    profile: './images/profile/seongeun.jpeg',
    email: 'test@naver.com',
  },
  {
    id: 4,
    name: 'Yena Hwang',
    job: 'Frontend Developer',
    comment: '프론트엔드 개발자 황예나입니다. <br/>이해를 동반한 코드를 작성합니다.',
    profile: './images/profile/yena.jpeg',
    email: 'center7332@gmail.com',
  },
];

const Aboutus = () => {
  const [selectId, setSelectId] = useState(1);
  const target = useMemo(() => teams.filter((team) => team.id === selectId)[0], [selectId]);

  const handleSelect = (id: number) => {
    setSelectId(id);
  };

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`);
  };

  return (
    <article id="host-explorer" className="ml-[13%] h-screen flex justify-center flex-col">
      <section className="mb-4">
        <h1>Host Explorer</h1>
        <h4 className="text-[26px]">About our team</h4>
      </section>
      <section className="flex gap-9 w-full">
        <div className="w-[258px]">
          <div className="w-full h-[341px] bg-[#3c3c3c] rounded-md relative">
            <Image
              src={teams.filter((v) => v.id === selectId)[0].profile}
              alt="profile"
              layout="fill"
              className="rounded-md grayscale"
            />
          </div>
          <h2 className="text-xs mt-1">{target.name}</h2>
          <h4 className="text-[21px]">{target.job}</h4>
          <p className="mt-[14px] text-[14px]" dangerouslySetInnerHTML={{ __html: target.comment }} />
          <button
            className="mt-[16px] text-[10px] flex items-center gap-[4px] w-full justify-end"
            onClick={() => handleEmail(teams.filter((v) => v.id === selectId)[0].email)}
          >
            <Image src="/icons/email.svg" alt="email" width={16} height={12} layout="fixed" />
            <p>E-mail</p>
          </button>
        </div>
        <div className="w-[60%]">
          <ul className="w-full flex gap-2 flex-col ">
            {teams.map((team) => (
              <li
                key={team.id}
                onClick={() => {
                  handleSelect(team.id);
                }}
                className={`border-b-[2px] border-[#444444] relative ${
                  target.id === team.id
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:border-b-[2px] after:animate-width-full after:transition-all"
                    : 'text-[#444444]'
                }`}
              >
                {team.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Aboutus;
