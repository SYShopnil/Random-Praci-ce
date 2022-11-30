import type { NextPage } from 'next';
import React from 'react';

import type { ButtonProps } from '@/types/_root/Button';
import Link from 'next/link';

// this component will take four props and did a task of a single button .
const index: NextPage<ButtonProps> = ({
  label = 'Click Me',
  controller = () => {},
  arg = {},
  nameOfClass = '',
  isLinkable = false,
  href = "",
  variant
}) => {
  let appliedClass: string = `btn ${nameOfClass} `; //this class will be applied
  switch (variant) { //it will check the variant input
    case "v1": {
      appliedClass += `${appliedClass} button_v_1_large` //for variant one
      break;
    }
    case "v2": {
      appliedClass += `${appliedClass} button_v_2_large` //for variant two
      break;
    }
    case "v3": {
      appliedClass += `${appliedClass} button_v_3_large` //for variant three
      break;
    }
    case  "v4": {
      appliedClass += `${appliedClass} button_v_4_large` //for variant four
      break
    }
    default :{
      appliedClass = appliedClass
    }
  }
  return (
    <>
      {
        isLinkable
        ?
        <>
          <Link href={href}>
            <button
              className={`${appliedClass}`} // class name will set dynamically from the parent
            >
              {/* Here a default label has been set. if no label has been sent from props then it will happen */}
              {label || 'Click Me'}
            </button>
          </Link>
        </>
        :
        <button
          onClick={(e) => controller(e, arg)} // this is the dynamic controller which will work in the parent component
          className={`${appliedClass}`} // class name will set dynamically from the parent
        >
          {/* Here a default label has been set. if no label has been sent from props then it will happen */}
          {label || 'Click Me'}
        </button>
      }
    </>
  );
};

export default index;
