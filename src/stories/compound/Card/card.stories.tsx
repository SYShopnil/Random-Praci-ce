import type { Meta, Story } from '@storybook/react';

import type { CardProps } from '@/types/compound/Card';

import Card from '../../../component/compound/Card';

export default {
  title: 'Card',
  component: Card,

  argTypes: {
    props: {
      control: {
        type: 'array',
      },
      options: ['first', 'second'],
      mapping: {
        first: 'hello',
        second: 'hi',
      },
    },
    variant: {
      description: 'there are 3 types of card in our application',
      options: ['course', 'discussion', 'comment', 'instructor'],
      control: { type: 'select' },
      type: { name: 'string', required: true },
    },
    courseName: {
      description: 'Title of course',
      table: {
        type: {
          summary: 'this is only for course & discussion card',
        },
      },
    },

    image: {
      description: 'image link',

      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'this is only for course & discussion card',
        },
      },
    },
    profileImage: {
      description: 'image link',
      table: {
        type: {
          summary: 'this is only for discussion & comment card',
        },
      },
    },
    instructorImage: {
      description: 'instructor image link',
      table: {
        type: {
          summary: 'this is only for instructor card',
        },
      },
    },
    instructorName: {
      description: 'Instructor name',
      table: {
        type: {
          summary: 'this is only for instructor card',
        },
      },
    },
    instructorDesignation: {
      description: 'Instructor designation',
      table: {
        type: {
          summary: 'this is only for instructor card',
        },
      },
    },
    instructorBio: {
      description: 'Instructor bio',
      table: {
        type: {
          summary: 'this is only for instructor card',
        },
      },
    },
    socialMediaLinks: {
      description:
        'An array of objects. Objects contain a icon component and url of socila media',
      control: 'object',

      table: {
        // category: 'array',
        type: {
          summary: 'this is only for instructor card',
        },
      },
    },

    category: {
      description: 'course category',
      table: {
        type: {
          summary: 'this is only for course card',
        },
      },
    },
    isActive: {
      description: 'the course is active or not',
      table: {
        type: {
          summary: 'this is only for course card',
        },
      },
    },
    noOfClasses: {
      description: 'total number of classes',
      table: {
        type: {
          summary: 'this is only for course card',
        },
      },
    },
    price: {
      description: 'price of the course',
      table: {
        type: {
          summary: 'this is only for course card',
        },
      },
    },
    time: {
      description: 'time / when the discussion is happened',
      table: {
        type: {
          summary: 'this is only for discussion card',
        },
      },
    },
    batchName: {
      description: 'Batch name ',
      table: {
        type: {
          summary: 'this is only for comment card',
        },
      },
    },
    commentedText: {
      description: 'commented text for the comment card',
      table: {
        type: {
          summary: 'this is only for commented card',
        },
      },
    },
    discussionText: {
      description: 'discussion text for the discussion card',
      table: {
        type: {
          summary: 'this is only for discussion card',
        },
      },
    },
    profileName: {
      description: 'profile name',
      table: {
        type: {
          summary: 'this is only for discussion & comment card',
        },
      },
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const courseCard = Template.bind({});

courseCard.args = {
  variant: 'course',
  courseName: 'Javascript Zero To Hero',
  image: '/assets/images/nextjs-starter-banner.png',
  category: 'programming',
  isActive: false,
  noOfClasses: 5,
  price: 5000,
};

export const discussionCard = Template.bind({});

discussionCard.args = {
  variant: 'discussion',
  courseName: 'Javascript Zero To Hero',
  image: '/assets/images/nextjs-starter-banner.png',
  profileImage: '/assets/images/afnan.png',
  profileName: 'Fardin Omor Afnan',
  time: '5 hours',
  discussionText:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit ',
};

export const commentCard = Template.bind({});

commentCard.args = {
  variant: 'comment',
  courseName: 'Javascript Zero To Hero',
  profileImage: '/assets/images/afnan.png',
  profileName: 'Fardin Omor Afnan',
  batchName: '1st',
  commentedText:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  ',
};

export const instructorCard = Template.bind({});

instructorCard.args = {
  variant: 'instructor',
  instructorName: 'Fardin Omor Afnan',
  instructorImage: '/assets/images/afnan.png',
  instructorDesignation: 'Software Engineer',
  socialMediaLinks: [
    { name: 'facebook', url: 'https://www.facebook.com' },
    { name: 'twitter', url: 'www.facebook.com' },
    { name: 'linkedin', url: 'www.facebook.com' },
    { name: 'instragram', url: 'www.facebook.com' },
    { name: 'discord', url: 'www.facebook.com' },
    { name: 'stopstalk', url: 'www.facebook.com' },
  ],
  instructorBio:
    'I Believe In Lifelong Learning And Next Topper Is A Great Place To Learn From Experts. I have Learned  A Lot And Recommend  It To All My Friends',
};
