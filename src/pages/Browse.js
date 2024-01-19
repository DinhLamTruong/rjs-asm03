import React from 'react';

import { json, useLoaderData } from 'react-router-dom';

import Banner from '../components/Banner/Banner';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';

const Browse = () => {
  const dataProduct = useLoaderData();

  return (
    <div>
      <Layout>
        <Banner />
        <Home dataProduct={dataProduct} />
      </Layout>
    </div>
  );
};

export default Browse;

export async function loader() {
  const response = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
  );
  if (!response.ok) {
    throw json({ message: 'fetch data product fail!' }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
}
