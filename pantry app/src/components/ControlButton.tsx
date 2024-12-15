import { IconButton, Stack } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'
import { Label } from './styled/Label.styles'

interface ControlButtonProps {
  variant: 'edit' | 'copy' | 'delete'
  onClick: () => void
}

export const ControlButton = ({ variant, onClick }: ControlButtonProps) => {
  const getIcon = () => {
    switch (variant) {
      case 'edit':
        return <EditIcon fontSize='small' />
      case 'copy':
        return <ContentCopyIcon fontSize='small' />
      case 'delete':
        return <DeleteIcon fontSize='small' />
    }
  }

  const getLabel = () => {
    switch (variant) {
      case 'edit':
        return 'Edit'
      case 'copy':
        return 'Dupicate'
      case 'delete':
        return 'Delete'
    }
  }
  return (
    <IconButton size='small' onClick={onClick} disableRipple>
      <Stack alignItems='center' gap={1}>
        {getIcon()}
        <Label>{getLabel()}</Label>
      </Stack>
    </IconButton>
  )
}
