import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='stylesheet'
        href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
        integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
        crossOrigin='anonymous'
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Wellington CMA',
  keywords: [
    'San Francisco parking management company, San Francisco event parking management, San Francisco property parking management, San Francisco parking facility management, Oakland parking management company, Oakland event parking management, Oakland property parking management, Berkeley parking management services, Berkeley event parking services, Berkeley property parking management, East Bay parking management company, East Bay event parking management, East Bay property parking services, East Bay commercial parking management, parking asset management San Francisco, parking asset management Oakland, venue parking management San Francisco, venue parking management Oakland, parking operations management East Bay, parking technology solutions Bay Area',
  ],
  description:
    'A trusted asset management company in the greater Bay Area since 2014. Combining the forces of two long term Bay Area companies, serving the community for decades. We focus on managing properties and operations oversight for the most consistent, economical, and profitable outcome for our clients. Pursuing trusted methods as well as employing new technology to maximize client investment and peace of mind',
};

export default Meta;
