import { ReactNode } from 'react';

type ButtonProps = {
  className: string;
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
