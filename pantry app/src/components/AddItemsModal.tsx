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

import axios from 'axios'

interface AddItemsModalProps {
  tableId: number | null
  open: boolean
  onClose: () => void
}

interface Inputs {
  name: string
  quantity: number
  productUnit: string
  expiryDate: string
  amount: number
  description: string
}

export const AddItemsModal = ({
  open,
  onClose,
  tableId,
}: AddItemsModalProps) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => handleAddItem(data)

  const handleAddItem = async (data: Inputs) => {
    let quantityType
    switch (data.productUnit) {
      case 'kg':
        quantityType = 1
        break
      case 'l':
        quantityType = 2
        break
      case 'g':
        quantityType = 1
        break
      case 'count':
        quantityType = 0
        break
    }

    data.quantity = Number(data.quantity)

    // console.log({ ...data, tableId, quantityType })
    // const rawResponse = await fetch('http://pantry.tryasp.net/product', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: { ...data, tableId, quantityType },
    // })
    // const content = await rawResponse.json()

    axios
      .post(
        'http://pantry.tryasp.net/product',
        {
          ...data,
          tableId,
          quantityType,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
              'Origin, Content-Type, X-Auth-Token',
            'Access-Control-Allow-Methods':
              'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          },
        }
      )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    onClose()

    // console.log(content)
  }

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
                {...register('name')}
              />
            </Grid>
            <Grid size={10}>
              <InputLabel htmlFor='product-quantity'>Quantity</InputLabel>
              <Input
                id='product-quantity'
                placeholder='Product quantity'
                fullWidth
                {...register('quantity')}
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
              <Input id='expiry-date' fullWidth {...register('expiryDate')} />
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
                {...register('amount')}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                multiline
                rows={4}
                placeholder='Description'
                fullWidth
                {...register('description')}
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
