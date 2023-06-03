import Image from 'next/image';
import { Inter } from 'next/font';

import Test from './Test';
import Quiz from '../components/Quiz';

const inter: Inter = new Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <main className="flex gap-5 bg-lime-400">
        {/* Add your content here */}
      </main>
      <Test />
    </>
  );
}
