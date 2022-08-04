import Image from 'next/image';
import { memo } from 'react';

interface Props {}

const Desc2006 = (props: Props) => {
  return (
    <>
      {/* <!-- 2006 Description --> */}
      <section className="w-full bg-white text-blue">
        <h1 className="text-5xl">The Hiatus and Security</h1>
        <div className="flex">
          <h1 className="text-5xl mt-3 mr-4">Troubles</h1>
          <Image src={'/icons/big-computer.svg'} alt="icon" width={147} height={145} />
        </div>

        <p className="mt-[256px] ml-[45%]">
          Internet Explorer users were at risk for <br />
          284 days in 2006 because of delays in <br />
          patching known flaws, according to a <br />
          security blog. <br />
          This included at least 98 days <br />
          in which no software fixes were available <br />
          to plug browser flaws <br />
          that were actively being used to steal <br />
          personal and financial data.
        </p>
      </section>
    </>
  );
};

export default memo(Desc2006);
