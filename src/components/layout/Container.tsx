import { cn } from '@/lib/cn';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'prose' | 'wide';
  as?: React.ElementType;
};

export function Container({
  children,
  className,
  size = 'default',
  as: Tag = 'div',
}: ContainerProps) {
  const sizeClass =
    size === 'prose' ? 'max-w-3xl' : size === 'wide' ? 'max-w-[1440px]' : 'max-w-7xl';

  return (
    <Tag className={cn('mx-auto w-full px-5 sm:px-8 lg:px-10', sizeClass, className)}>
      {children}
    </Tag>
  );
}
