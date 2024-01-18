import React from 'react';

import { useLoaderData } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Detail from '../components/Detail/Detail';

const DetailPage = () => {
  // danh sách tất cả products
  const dataProducts = useLoaderData();
  return (
    <div>
      <Layout>
        <Detail dataProducts={dataProducts} />
      </Layout>
    </div>
  );
};

export default DetailPage;

export async function loader() {
  const response = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
  );
  const data = await response.json();
  return data;
}
