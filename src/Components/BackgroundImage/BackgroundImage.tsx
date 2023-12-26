import Image from 'next/image';
import { ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import classNames, { Argument } from 'classnames';

interface BackgroundImageprops {
  children?: ReactNode;
  classname?: Argument;
  image: ReactElement<typeof Image>;
}

type BackgroundImageAddtionalProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  keyof BackgroundImageprops
>;

export default function BackgroundImage({
  children,
  className,
  image,
  ...props
}: BackgroundImageprops & BackgroundImageAddtionalProps) {
  return (
    <div
      className={classNames('relative', 'overflow-hidden', className)}
      {...props}
    >
      <div className="absolute inset-0 -z-10">{image}</div>
      <div className="z-10 flex h-full justify-center">{children}</div>
    </div>
  );
}
