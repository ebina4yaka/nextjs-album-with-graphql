import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import AlbumCard from '../molecules/AlbumCard'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function AlbumCardList(): React.ReactElement {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <AlbumCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
