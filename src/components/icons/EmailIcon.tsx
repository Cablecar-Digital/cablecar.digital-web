import * as React from 'react';
import { IconProps } from './types';

export const EmailIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24px"
        width="24px"
        fill={color}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0 0h24v24H0V0z"
          fill="none"
        />
        <path
          d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z"
          opacity=".3"
        />
        <path
          d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"
        />
      </svg>
    );
  }
);
