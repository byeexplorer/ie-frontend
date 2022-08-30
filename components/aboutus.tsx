import { useMemo, useState } from 'react';

const teams: Team[] = [
  {
    id: 1,
    name: 'Dami Kim',
    job: 'BX Designer',
    comment: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps ',
  },
  {
    id: 2,
    name: 'Hyeong Tae Kim',
    job: 'BX Designer',
    comment: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps ',
  },
  {
    id: 3,
    name: 'Seongeun Jeong',
    job: 'Frontend Developer',
    comment: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps ',
  },
  {
    id: 4,
    name: 'Yena Hwang',
    job: 'Frontend Developer',
    comment: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps ',
  },
];

const Aboutus = () => {
  const [selectId, setSelectId] = useState(1);
  const target = useMemo(() => teams.filter((team) => team.id === selectId)[0], [selectId]);

  const handleSelect = (id: number) => {
    setSelectId(id);
  };

  return (
    <article id="host-explorer" className="ml-[13%] h-screen flex justify-center flex-col">
      <section className="mb-4">
        <h1>Host Explorer</h1>
        <h4 className="text-[26px]">About our team</h4>
      </section>
      <section className="flex gap-9 w-full">
        <div className="w-[258px]">
          {/* TODO: insert image */}
          <div className="w-full h-[341px] bg-[#3c3c3c] rounded-md" />
          <h2 className="text-xs mt-1">{target.name}</h2>
          <h4 className="text-[21px]">{target.job}</h4>
          <p className="mt-[14px] text-[14px]">{target.comment}</p>
        </div>
        <div className="w-[60%]">
          <ul className="w-full flex gap-2 flex-col" onClick={() => console.log('asdf')}>
            {teams.map((team) => (
              <li
                key={team.id}
                onClick={(e) => {
                  handleSelect(team.id);
                }}
                className={`border-b-[2px] ${
                  target.id === team.id ? 'border-white' : 'border-[#444444] text-[#444444]'
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
