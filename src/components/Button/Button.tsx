import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import {
  buttonStyle,
  ButtonStyleProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
} from 'styled-system';

import { Theme } from '../../theme';
import { Box, IBoxProps } from '../Box';

export interface IButtonProps
  extends IBoxProps,
    ButtonStyleProps,
    FontSizeProps,
    FontWeightProps {}

export const Button: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['button']>,
  IButtonProps,
  Theme
> = styled(Box)`
  appearance: 'none';
  display: 'inline-block';
  text-align: 'center';
  line-height: 'inherit';
  text-decoration: 'none';
  ${buttonStyle}
  ${fontSize}
  ${fontWeight}
`.withComponent('button');

Button.defaultProps = {
  bg: 'blue',
  border: 'none',
  borderRadius: '2px',
  color: 'white',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  type: 'button',
};
