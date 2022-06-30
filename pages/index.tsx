import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Image
      className="object-contain"
      height="400"
      layout="intrinsic"
      priority
      quality="50"
      src="https://scannablenfts.com/art/thumb/QRRARE.gif"
      width="400"
    />
  );
};

export default Home;
