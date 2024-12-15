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

import { useForm, SubmitHandler } from 'react-hook-form'

interface AddItemsModalProps {
  open: boolean
  onClose: () => void
}

interface Inputs {
  productName: string
  productQuantity: string
  productUnit: string
  productExpiryDate: string
  productAmount: number
  productDescription: string
}

export const AddItemsModal = ({ open, onClose }: AddItemsModalProps) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <Dialog open={open} onClose={onClose} maxWidth='lg'>
      <Box width={800} p={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <InputLabel htmlFor='product-name'>Add new item</InputLabel>
              <Input
                id='product-name'
                placeholder='Product name'
                fullWidth
                {...register('productName')}
              />
            </Grid>
            <Grid size={10}>
              <InputLabel htmlFor='product-quantity'>Quantity</InputLabel>
              <Input
                id='product-quantity'
                placeholder='Product quantity'
                fullWidth
                {...register('productQuantity')}
              />
            </Grid>
            <Grid size={2}>
              <InputLabel htmlFor='product-unit'>Unit</InputLabel>
              <Select
                id='product-unit'
                fullWidth
                value={'kg'}
                {...register('productUnit')}
              >
                <MenuItem value='kg'>Kilograms</MenuItem>
                <MenuItem value='g'>Grams</MenuItem>
                <MenuItem value='l'>Litres</MenuItem>
                <MenuItem value='count'>Number</MenuItem>
              </Select>
            </Grid>
            <Grid size={8}>
              <InputLabel htmlFor='expiry-date'>Expiry date</InputLabel>
              <Input
                id='expiry-date'
                fullWidth
                {...register('productExpiryDate')}
              />
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
                {...register('productAmount')}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                multiline
                rows={4}
                placeholder='Description'
                fullWidth
                {...register('productDescription')}
              />
            </Grid>
          </Grid>
          <ButtonsRow>
            <Button variant='contained' onClick={handleSubmit(onSubmit)}>
              Add
            </Button>
            <Button variant='outlined' onClick={onClose}>
              Cancel
            </Button>
          </ButtonsRow>
        </form>
      </Box>
    </Dialog>
  )
}
