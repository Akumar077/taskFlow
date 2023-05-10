import * as React from 'react';
const SvgComponent = (props: any) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} viewBox='0 0 512 512' fill='#0496FF' {...props}>
    <path d='M256 11C120.9 11 11 120.9 11 256s109.9 245 245 245 245-109.9 245-245S391.1 11 256 11zm0 449.2c-112.6 0-204.2-91.6-204.2-204.2S143.4 51.8 256 51.8 460.2 143.4 460.2 256 368.6 460.2 256 460.2z' />
    <path d='M357.6 235.6h-81.2v-81.2c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v81.2h-81.2c-11.3 0-20.4 9.1-20.4 20.4s9.1 20.4 20.4 20.4h81.2v81.2c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4v-81.2h81.2c11.3 0 20.4-9.1 20.4-20.4s-9.1-20.4-20.4-20.4z' />
  </svg>
);
export default SvgComponent;
