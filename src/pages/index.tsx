// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

import Heading from '../component/_root/Heading/index';
import Card from '../component/compound/Card';
import Homepage from '../component/view/HomePage/index';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Homepage />
      <Heading variant="h1" label="This is heading" />
      <Card
        variant="instructor"
        instructorName="fardin omor afnan"
        instructorImage="/assets/images/afnan.png"
        instructorDesignation="Software Engineer"
        socialMediaLinks={[
          { name: 'facebook', url: 'https://www.facebook.com' },
          { name: 'twitter', url: 'www.facebook.com' },
          { name: 'linkedin', url: 'www.facebook.com' },
          { name: 'facebook', url: 'www.facebook.com' },
          { name: 'facebook', url: 'www.facebook.com' },
        ]}
        instructorBio="I Believe In Lifelong Learning And Next Topper Is A Great Place To Learn From Experts. I have Learned  A Lot And Recommend  It To All My Friends"
      />
    </Main>
  );
};

export default Index;
