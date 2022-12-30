import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import Perks from '@site/src/components/Perks';
import Slice from '@site/src/components/Slice';
import ExampleList from '@site/src/components/ExampleList';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <Hero />

      <main>
        <div className="relative text-center bg-gray-100 p-8 pt-64 -mt-56 pb-16">
          <div className="triangle-top"></div>

          <h3 className="mb-16 mt-8 text-2xl md:text-3xl">
            "It is literally the easiest JS plugin I've ever used." - Brian
          </h3>

          <Perks />
        </div>

        <Slice heading="Unmatched Flexibility" id="examples">
          <ExampleList />
        </Slice>


      </main>
    </Layout>
  );
}
