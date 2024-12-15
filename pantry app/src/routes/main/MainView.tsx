import {
  Box,
  Drawer,
  Grid2 as Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { SideMenu } from '../../components/SideMenu'
import { MainTable } from '../../components/MainTable'
import { Row } from '../../components/styled/Row.styles'

import { mockItems } from '../../mockItems'
import { AddButton } from '../../components/AddButton'

export const MainView = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [open, setOpen] = useState(false)

  const handleAddItem = () => {}
  return (
    <div>
      <Row>
        <h1>My tables</h1>
        {!isDesktop && (
          <IconButton onClick={() => setOpen((prev) => !prev)}>
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
          <MainTable items={mockItems} />
        </Grid>
      </Grid>
      <AddButton onClick={handleAddItem} />
      {!isDesktop && (
        <Drawer variant='temporary' open={open} onClose={() => setOpen(false)}>
          <Box sx={{ minWidth: '90vw' }}>
            <SideMenu />
          </Box>
        </Drawer>
      )}
    </div>
  )
}
