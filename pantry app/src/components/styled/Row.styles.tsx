import { styled } from '@mui/material'

type PaddingValues = 'none' | 'md' | 'lg'

export const Row = styled('div', {
  shouldForwardProp: (prop) => prop !== 'padding',
})<{ padding?: PaddingValues }>(({ theme, padding = 'md' }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding:
    padding === 'none'
      ? 0
      : padding === 'md'
      ? theme.spacing(2)
      : theme.spacing(4),
}))
