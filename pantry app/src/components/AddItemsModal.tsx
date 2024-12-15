import {
  Box,
  Button,
  Dialog,
  Grid2 as Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { ButtonsRow } from './styled/ButtonsRow'

interface AddItemsModalProps {
  open: boolean
  onClose: () => void
}

export const AddItemsModal = ({ open, onClose }: AddItemsModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth='lg'>
      <Box width={800} p={4}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <InputLabel htmlFor='product-name'>Add new item</InputLabel>
            <Input id='product-name' placeholder='Product name' fullWidth />
          </Grid>
          <Grid size={10}>
            <InputLabel htmlFor='product-quantity'>Quantity</InputLabel>
            <Input
              id='product-quantity'
              placeholder='Product quantity'
              fullWidth
            />
          </Grid>
          <Grid size={2}>
            <InputLabel htmlFor='product-unit'>Unit</InputLabel>
            <Select id='product-unit' fullWidth value={'kg'}>
              <MenuItem value='kg'>Kilograms</MenuItem>
              <MenuItem value='g'>Grams</MenuItem>
              <MenuItem value='l'>Litres</MenuItem>
              <MenuItem value='count'>Number</MenuItem>
            </Select>
          </Grid>
          <Grid size={8}>
            <InputLabel htmlFor='expiry-date'>Expiry date</InputLabel>
            <Input id='expiry-date' fullWidth />
          </Grid>
          <Grid size={4}>
            <InputLabel htmlFor='amount-of-items'>
              Amount of items to add
            </InputLabel>
            <Input
              id='amount-of-items'
              type='number'
              placeholder='Amount'
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField multiline rows={4} placeholder='Description' fullWidth />
          </Grid>
        </Grid>
        <ButtonsRow>
          <Button variant='contained' onClick={onClose}>
            Add
          </Button>
          <Button variant='outlined' onClick={onClose}>
            Cancel
          </Button>
        </ButtonsRow>
      </Box>
    </Dialog>
  )
}
