import { styled } from '@mui/material'

export const ButtonsRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingTop: theme.spacing(2),
  gap: theme.spacing(8),
}))
