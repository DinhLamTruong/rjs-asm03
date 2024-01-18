import React from 'react';

import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
import OtherInfo from './OtherInfo';
import Popup from '../Popup/Popup';

const Home = ({ dataProduct }) => {
  const dataProducts = dataProduct;

  return (
    <>
      {/* list category */}
      <ListCategory />

      {/* list product */}
      <ListProduct dataProduct={dataProducts} />

      {/* popup product */}
      <Popup />

      {/* other information */}
      <OtherInfo />
    </>
  );
};

export default Home;
