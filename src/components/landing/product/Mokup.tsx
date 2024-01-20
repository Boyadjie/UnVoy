import Image from 'next/image';

import {productData} from '../../../data/landingPageProduct';

export const Mokup = () => {
  const imgUrl = productData.mokup.imgUrl;
  return (
    // image from public folder
    <Image
      src={imgUrl}
      alt="mokup"
      width={400} // 1 because width is required
      height={640} // 1 because height is required
    />
  );
};
