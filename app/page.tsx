import Head from "next/head";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wellington CMA</title>
        <meta
          name="description"
          content="Your greater Bay Area asset management company. Providing parking management services, special events parking, and property management services. Proudly serving our community since 2014."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
