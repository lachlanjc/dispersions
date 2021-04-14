import { ComponentProps } from 'react'

export const ChevronNext = (props?: ComponentProps<'svg'>) => (
  <svg
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    preserveAspectRatio="xMidYMid meet"
    fill="currentColor"
    width={24}
    height={24}
    {...props}
  >
    <path d="M12.982,23.89c-0.354,-0.424 -0.296,-1.055 0.128,-1.408c1.645,-1.377 5.465,-4.762 6.774,-6.482c-1.331,-1.749 -5.1,-5.085 -6.774,-6.482c-0.424,-0.353 -0.482,-0.984 -0.128,-1.408c0.353,-0.425 0.984,-0.482 1.409,-0.128c1.839,1.532 5.799,4.993 7.2,6.964c0.219,0.312 0.409,0.664 0.409,1.054c0,0.39 -0.19,0.742 -0.409,1.053c-1.373,1.932 -5.399,5.462 -7.2,6.964l-0.001,0.001c-0.424,0.354 -1.055,0.296 -1.408,-0.128Z" />
  </svg>
)

export const ChevronPrev = (props?: ComponentProps<'svg'>) => (
  <svg
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    preserveAspectRatio="xMidYMid meet"
    fill="currentColor"
    width={24}
    height={24}
    {...props}
  >
    <path d="M19.768,23.89c0.354,-0.424 0.296,-1.055 -0.128,-1.408c-1.645,-1.377 -5.465,-4.762 -6.774,-6.482c1.331,-1.749 5.1,-5.085 6.774,-6.482c0.424,-0.353 0.482,-0.984 0.128,-1.408c-0.353,-0.425 -0.984,-0.482 -1.409,-0.128c-1.839,1.532 -5.799,4.993 -7.2,6.964c-0.219,0.312 -0.409,0.664 -0.409,1.054c0,0.39 0.19,0.742 0.409,1.053c1.373,1.932 5.399,5.462 7.2,6.964l0.001,0.001c0.424,0.354 1.055,0.296 1.408,-0.128Z" />
  </svg>
)

export const ArrowRight = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path d="M5 12H19" />
    <path d="M12 5L19 12L12 19" />
  </svg>
)

export const ArrowLeft = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path d="M19 12H5" />
    <path d="M12 19L5 12L12 5" />
  </svg>
)

export const Cross = (props?: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    shapeRendering="geometricPrecision"
    {...props}
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
)

export const Grid = (props?: ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="-3 -3 21 21"
    aria-hidden
    fill="currentColor"
    {...props}
  >
    <circle cx={0} cy={0} r={2} />
    <circle cx={0} cy={8} r={2} />
    <circle cx={0} cy={16} r={2} />
    <circle cx={8} cy={0} r={2} />
    <circle cx={8} cy={8} r={2} />
    <circle cx={8} cy={16} r={2} />
    <circle cx={16} cy={0} r={2} />
    <circle cx={16} cy={8} r={2} />
    <circle cx={16} cy={16} r={2} />
  </svg>
)
