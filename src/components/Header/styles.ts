/* eslint-disable arrow-parens */
import styled, { css } from 'styled-components';

interface headerProps {
  selection: 0 | 1 | 2;
}

export const Container = styled.div<headerProps>`
  height: 89px;
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
    img {
      margin-left: 2px;
      margin-right: 257px;
    }

    p {
      color: #AB9CBD;
      font-size: 36px;
      transition: color .2s;

      &:hover {
        color: #FFF;
      }
    }

    p.content {
      ${props => props.selection === 1 && css`
        color: #FFF
      `}
    }

    p.about {
      ${props => props.selection === 2 && css`
        color: #FFF
      `}
    }
  }

  div {
    width: 2px;
    height: 62px;
    background: #AB9CBD;
    margin-right: 175px;
  }
`;
