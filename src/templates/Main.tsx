// import Link from 'next/link';
import type { ReactNode } from 'react';

// import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {/* meta data part */}
    {props.meta}

    {/* header part */}
    <div>
      <h1>hello i am from header</h1>
    </div>

    {/* children part or body part */}
    <div className={` h-screen dark:bg-black dark:text-slate-400`}>
      <div>{props.children}</div>
    </div>

    {/* footer part */}
    <footer>
      <h1>Hello i am from footer</h1>
    </footer>
  </div>
);

export { Main };
