import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ImageGallery from "react-image-gallery";

import styles from './index.module.css';
import "react-image-gallery/styles/css/image-gallery.css";

import { JSX } from 'react';

const images = [
  {
    original: require('@site/static/img/openuem_agents_view.png').default,
  },
  {
    original:  require('@site/static/img/openuem_dashboard.png').default,
  },
  {
    original:  require('@site/static/img/openuem_security_view.png').default,
  },
  {
    original:  require('@site/static/img/openuem_computers_view.png').default,
  },
  {
    original:  require('@site/static/img/software_view.png').default,
  },
  {
    original:  require('@site/static/img/openuem_computer_detail.png').default,
  },
  {
    original:  require('@site/static/img/openuem_computer_sftp.png').default,
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <ImageGallery items={images} slideInterval={5000} autoPlay />
        <br/>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Installation/Server/docker">
            Run OpenUEM with Docker - 10min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An Open Source Unified Endpoint Manager that lets you manage your IT assets thanks to its agents">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
