import React from 'react';

export type HeaderProps = {
  /** 아무 이름이나 입력해보세요. */
  text: string;
  as: string;
};

/** 별 의미 없는 예시 컴포넌트 */
const Header = ({ text, as }: HeaderProps) => {
  if (as === 'h2') {
    return <h2>{text}</h2>;
  }
  return <h1>{text}</h1>;
};

Header.defaultProps = {
  text: 'Storybook',
  as: 'h1'
};
export default Header;