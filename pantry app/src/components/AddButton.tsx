import AddIcon from '@mui/icons-material/Add'
import { Fab } from '@mui/material'

export const AddButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Fab
      // TODO: make it draggable?
      color='primary'
      aria-label='add'
      sx={{
        position: 'fixed',
        bottom: (theme) => theme.spacing(6),
        right: (theme) => theme.spacing(6),
      }}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  )
}
