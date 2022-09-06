import { VFC } from 'react';
import styled from 'styled-components';
import { colors } from 'src/styles/Tokens';

type BreadcrumbsProps = {
  items: {
    link_url?: string;
    text: string;
  }[]
}

const Wrapper = styled.div`
  width: 100%;
  font-size: 12px;
  background-color: ${colors.YumeWhiteGreen2};
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  ul {
    padding: 0.5em;
    justify-content: start;
    display: flex;
    list-style: none;
  }
  li {
    position: relative;
  }
  li > a {
    display: block;
    padding: 0.2em 0.5em;
    background-color: ${colors.White};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  li + li {
    &::before {
      width: 32px;
      text-align: center;
      right: 100%;
      position: absolute;
      content: '>';
    }
    margin-left: 32px;
  }
  span {
    display: block;
    padding: 0.2em 0em;
  }
`;

const Copyright = styled.p`
  margin-top: 64px;
  text-align: center;
  @media screen and (min-width: 1152px) {
    margin-top: 32px;
  }
`;

export const Breadcrumbs: VFC<BreadcrumbsProps> = ({ items }) => (
  <Wrapper>
    <ul>
      {items.slice(0, items.length - 1).map(item => <li><a href={item.link_url}>{item.text}</a></li>)}
      <li><span>{items[items.length - 1].text}</span></li>
    </ul>
  </Wrapper>
);
