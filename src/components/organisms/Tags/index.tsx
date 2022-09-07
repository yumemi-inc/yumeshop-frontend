import { VFC } from 'react';
import styled from 'styled-components';
import { Tag } from 'src/openapi/generated/typescript-fetch/models/Tag';

type TagsProps = {
  items: Tag[]
}

const Wrapper = styled.div`
  font-size: 12px;
  display: flex;
  span {
    display: block;
    padding: 0.2em 0.5em;
    color: #FFFFFF;
    margin: 0.2em;
  }
`;

export const Tags: VFC<TagsProps> = ({ items }) => (
  <Wrapper>
    {items.map(item => <span style={{ backgroundColor: item.color }} > { item.name } </span>)}
  </Wrapper>
);
