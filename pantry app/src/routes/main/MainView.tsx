import {
  Box,
  Drawer,
  Grid2 as Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'
import { SideMenu } from '../../components/SideMenu'
import { MainTable } from '../../components/MainTable'
import { Row } from '../../components/styled/Row.styles'

import { AddButton } from '../../components/AddButton'
import { AddItemsModal } from '../../components/AddItemsModal'
import { Item } from '../../types/Item.type'
import { Table } from '../../types/Table.type'

export const MainView = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tableId, setTableId] = useState<number | null>(null)
  const [tableItems, setTableItems] = useState<Item[]>([])

  const fetchTables = async () => {
    try {
      const result = await fetch('http://pantry.tryasp.net/table/1')
      const table: Table = await result.json()
      setTableId(table.id)
      console.log(table)
      transformTableData(table)
    } catch (error) {
      console.error('Failed to fetch tables', error)
    }
  }

  const transformTableData = (table: Table) => {
    const items = table.products.map((item) => item)
    console.log(items)
    setTableItems(items)
  }

  useEffect(() => {
    fetchTables()
  }, [])

  const handleOpenModal = () => setIsModalOpen(true)
  return (
    <div>
      <Row>
        <h1>My tables</h1>
        {!isDesktop && (
          <IconButton onClick={() => setIsSideMenuOpen((prev) => !prev)}>
            <MenuIcon />
          </IconButton>
        )}
      </Row>
      <Grid container spacing={2}>
        <Grid size={{ xs: 0, md: 3 }}>
          <Box display={{ xs: 'none', md: 'block' }}>
            <SideMenu />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <MainTable items={tableItems} />
        </Grid>
      </Grid>
      <AddButton onClick={handleOpenModal} />
      {!isDesktop && (
        <Drawer
          variant='temporary'
          open={isSideMenuOpen}
          onClose={() => setIsSideMenuOpen(false)}
        >
          <Box sx={{ minWidth: '90vw' }}>
            <SideMenu />
          </Box>
        </Drawer>
      )}
      <AddItemsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tableId={tableId}
      />
    </div>
  )
}
