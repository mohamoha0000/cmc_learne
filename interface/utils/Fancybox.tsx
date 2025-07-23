import React, { useRef, useEffect, PropsWithChildren } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import { OptionsType } from '@fancyapps/ui/types/Fancybox/options';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options?: Partial<OptionsType>;
  delegate?: string;
}

function Fancybox({ delegate, options, ...props }: PropsWithChildren<Props>) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate2 = delegate || '[data-fancybox]';
    const options2 = options || {};

    NativeFancybox.bind(container, delegate2, options2);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, []);

  return <div {...props} ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
