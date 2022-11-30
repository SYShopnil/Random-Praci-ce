import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  FaCircle,
  FaDiscord,
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
} from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { SiStopstalk } from 'react-icons/si';

import type { CardProps } from '@/types/compound/Card';

import { Heading, ImageContainer } from '../../_root';
//
const Card: NextPage<CardProps> = (props) => {
  const {
    image,
    category,
    isActive,
    noOfClasses,
    price,
    variant,
    profileName,
    profileImage,
    time,
    batchName,
    commentedText,
    courseName,
    discussionText,
    instructorName,
    instructorImage,
    instructorDesignation,
    instructorBio,
    socialMediaLinks,
  } = props;

  const icons: Array<{ icon: React.ReactNode; url: string }> = [];

  socialMediaLinks?.forEach((ele) => {
    switch (ele?.name) {
      case 'facebook':
        icons.push({
          icon: <FaFacebookF />,
          url: ele?.url,
        });
        break;
      case 'twitter':
        icons.push({
          icon: <ImTwitter />,
          url: ele?.url,
        });
        break;
      case 'linkedin':
        icons.push({
          icon: <FaLinkedinIn />,
          url: ele?.url,
        });
        break;
      case 'instragram':
        icons.push({
          icon: <FaInstagramSquare />,
          url: ele?.url,
        });
        break;
      case 'discord':
        icons.push({
          icon: <FaDiscord />,
          url: ele?.url,
        });
        break;
      case 'stopstalk':
        icons.push({
          icon: <SiStopstalk />,
          url: ele?.url,
        });
        break;
      default:
        break;
    }
  });

  switch (variant) {
    case 'course':
      return (
        <section className="card flex h-[230px] w-[220px] flex-col md:h-[400px] md:w-[360px]">
          <ImageContainer
            src={`${image}`}
            alt="course"
            width={134}
            height={67}
            layout="responsive"
            className="card-cover-image max-h-48 w-full"
          />

          <section className="ml-2 p-2 pt-0 md:p-3">
            <p className=" text-dark-light  m-0 p-0 text-[12px] md:-mt-2 md:text-lg">
              {category}
            </p>
            <Heading
              label={courseName}
              styleClass="my-1 capitalize md:my-4 p-0 text-dark-light text-lg md:text-2xl  "
            />
            <section className="mt-2 flex flex-col justify-between">
              <div className="text-dark-light mb-2 flex items-center text-[12px] text-brandColor-green md:mb-3 md:text-lg">
                <FaCircle className=" text-[10px]  md:text-[16px]" />
                <p className="ml-1 md:ml-2">{isActive ? 'Online' : 'Ofline'}</p>
              </div>
              <div className="text-dark-light flex   justify-between text-[12px] md:text-lg">
                <div className="flex items-center">
                  <span>
                    <RiCheckboxCircleFill className="   text-[12px]  md:text-[18px]" />
                  </span>{' '}
                  <p className="ml-1 md:ml-2"> {noOfClasses}+ live classes</p>
                </div>
                <p className=" sm:mr-2">BDT {price}/-</p>
              </div>
            </section>
          </section>
        </section>
      );

    case 'discussion':
      return (
        <section className="card relative  h-[225px] w-[240px]  md:h-[425px] md:w-[510px]  ">
          <ImageContainer
            src={`${image}`}
            alt="course"
            width={240}
            height={120}
            layout="responsive"
            className="card-cover-image w-full  "
          />
          <div className="absolute top-[104px] left-2 ml-3 h-[50px] w-[50px] rounded-full border-4 border-brandColor-white md:top-[220px] md:left-[20px] md:h-[102px] md:w-[102px]">
            <ImageContainer
              src={`${profileImage}`}
              alt="profile "
              width={102}
              height={102}
              layout=""
              className="   rounded-full"
            />
          </div>
          <Heading
            label={profileName}
            styleClass=" md:hidden capitalize absolute top-[126px] right-12 text-[10px] text-dark-light"
          />

          <div className="hidden md:block">
            <Heading
              label={profileName}
              styleClass="absolute capitalize right-[13rem] top-[270px] text-[18px] text-dark-light "
            />
            <p className="absolute right-8 top-[270px]">{time} ago</p>
          </div>

          <section className="text-dark-light mt-5 max-h-[66px]  overflow-hidden p-2  pl-5  text-[10px]  md:mt-[4rem] md:max-h-[86px] md:text-[25px]">
            {discussionText}
          </section>
        </section>
      );

    case 'comment':
      return (
        <section className="card relative min-h-[208px] w-[300px] md:w-[510px] md:p-4">
          <div className="flex ">
            <div className=" ml-4 mt-4 h-[50px] w-[50px] md:h-[102px] md:w-[102px]">
              <ImageContainer
                src={`${profileImage}`}
                alt="course"
                width={50}
                height={50}
                layout="responsive"
                className=" box_shadow_dark_light rounded-full md:w-[510px]"
              />
            </div>
            <div className="text-dark-light ml-9 mt-4">
              <p className="text-[18px] font-semibold capitalize md:text-[25px]">
                {profileName}
              </p>
              <p className="-mt-1.5 text-[14px] capitalize md:text-[20px]">
                {courseName}
              </p>
              <p className="-mt-1 text-[12px] md:text-[20px]">
                {batchName} Batch
              </p>
            </div>
          </div>

          <div className=" text-dark-light mt-5 max-h-[112px] overflow-hidden px-3 text-[12px] md:mt-12 md:max-h-[240px] md:text-[16px]">
            {commentedText}
          </div>
        </section>
      );
    case 'instructor':
      return (
        <section className="card relative min-h-[208px] w-[300px] md:w-[510px] md:p-4">
          <div className="flex ">
            <div className="ml-4 mt-4  h-[50px] w-[50px] rounded-full  md:h-[102px] md:w-[102px]">
              <ImageContainer
                src={`${instructorImage}`}
                alt="instructor"
                width={50}
                height={50}
                layout="responsive"
                className=" box_shadow_dark_light  rounded-full md:w-[510px]"
              />
            </div>
            <div className="text-dark-light ml-9 mt-4">
              <p className="ml-1 text-[18px] font-semibold capitalize md:text-[25px]">
                {instructorName}
              </p>
              <p className="-mt-1.5 ml-1 text-[14px] capitalize md:text-[20px]">
                {instructorDesignation}
              </p>
              <div className="mt-1 ml-0 flex flex-wrap space-x-4 text-brandColor-blue   ">
                {icons?.map((ele, ind) => (
                  <Link href={`${ele.url}`} key={ind}>
                    <a target="_blank" rel="noopener noreferrer">
                      {ele.icon}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className=" text-dark-light mt-5 max-h-[112px] overflow-hidden px-3 text-[12px] md:mt-12 md:max-h-[240px] md:text-[16px]">
            {instructorBio}
          </div>
        </section>
      );

    default:
      return null;
  }
};

export default Card;
