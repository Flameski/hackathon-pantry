import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { Row } from './styled/Row.styles'

import { Item } from '../types/Item.type'
import { ControlButton } from './ControlButton'

interface ButtonClickParams {
  action: 'edit' | 'copy' | 'delete'
  id: number
}

export const MainTable = ({ items }: { items: Item[] }) => {
  const handleButtonClick = ({ action, id }: ButtonClickParams) => {
    switch (action) {
      case 'edit':
        handleEdit(id)
        break
      case 'copy':
        handleCopy(id)
        break
      case 'delete':
        handleDelete(id)
        break
    }
  }

  const handleEdit = (id: number) => {
    console.log(`You're trying to edit item with name ${items[id].name}`)
  }

  const handleCopy = (id: number) => {
    console.log(`You're trying to copy item with name ${items[id].name}`)
  }

  const handleDelete = (id: number) => {
    console.log(`You're trying to delete item with name ${items[id].name}`)
  }

  return (
    <Row>
      <Stack width={'100%'}>
        <h2>Main Table</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Buttons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              const { id, name, quantity, expiryDate, description } = item
              return (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{quantity}</TableCell>
                  <TableCell>{expiryDate}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell sx={{ display: 'flex', justifyContent: 'left' }}>
                    <ControlButton
                      variant='edit'
                      onClick={() => {
                        handleButtonClick({ id, action: 'edit' })
                      }}
                    />
                    <ControlButton
                      variant='delete'
                      onClick={() => {
                        handleButtonClick({ id, action: 'delete' })
                      }}
                    />
                    <ControlButton
                      variant='copy'
                      onClick={() => {
                        handleButtonClick({ id, action: 'copy' })
                      }}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Stack>
    </Row>
  )
}
