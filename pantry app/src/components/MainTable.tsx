import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { Row } from './Row'

import { Item } from '../types/Item.type'

export const MainTable = ({ items }: { items: Item[] }) => {
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
                  <TableCell>Buttons</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Stack>
    </Row>
  )
}
