import type { NextPage } from 'next';
import { BaseLayout } from '@components/layouts/base-layout';
import { ReactElement } from 'react';
import ContactUs from 'components/shared/contact-us/contact-us';
import ExpertiseSection from 'components/features/company/expertise-section';
import Banner from 'components/features/company/banner';
import Owner from 'components/features/company/owner';
import Roadmap from 'components/features/company/roadmap';

const Company: NextPage = () => {
  return (
    <>
      <Banner />
      <ExpertiseSection />
      <Owner />
      <Roadmap />
      <ContactUs />
    </>
  );
};

Company.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`/locales/${locale}/shared.json`),
        ...require(`/locales/${locale}/pages/company.json`),
      },
    },
  };
}

export default Company;