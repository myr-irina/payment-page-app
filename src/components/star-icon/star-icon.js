import React from 'react';

function StarIcon(props) {
  const { fill = 'none', stroke = '#BCBCBC'} = props;

  return (
    <svg
      width='55'
      height='55'
      viewBox='0 0 49 46'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23.8065 1.56653C24.2444 0.776768 25.38 0.776769 25.818 1.56652L32.163 13.0092C32.5762 13.7544 33.3012 14.2756 34.1392 14.43L47.1116 16.8192C48.0126 16.9852 48.3672 18.0867 47.7323 18.7472L38.7039 28.1393C38.1034 28.764 37.8197 29.628 37.933 30.4871L39.6284 43.3373C39.7472 44.2376 38.8246 44.9139 38.0018 44.5297L26.0179 38.9348C25.2537 38.578 24.3708 38.578 23.6066 38.9348L11.6227 44.5297C10.7999 44.9139 9.8773 44.2376 9.99607 43.3373L11.6914 30.4872C11.8048 29.628 11.5211 28.764 10.9206 28.1393L1.89215 18.7472C1.25724 18.0867 1.6119 16.9852 2.51291 16.8192L15.4852 14.43C16.3232 14.2756 17.0482 13.7544 17.4615 13.0092L23.8065 1.56653Z'
        // stroke='#BCBCBC'
        stroke={stroke}
        strokeWidth='1.7'
      />
    </svg>
  );
}

export default StarIcon;