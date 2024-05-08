import { useRouter } from 'next/navigation';
import React from 'react';

export type ButtonProps = {
  text: string;
  redirect?: string;
};
export const Button = ({ redirect, text }: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!redirect) {
      alert('não foi possivel redirecinar!');
      return;
    }

    router.push(redirect);
  };

  return (
    <div className="conteiner-button">
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};
