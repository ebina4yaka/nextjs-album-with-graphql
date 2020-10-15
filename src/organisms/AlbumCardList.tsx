import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import AlbumCard from '../molecules/AlbumCard'
import { Post } from '../libs/models'

type Props = {
  posts: Post[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export default function AlbumCardList(props: Props): React.ReactElement {
  const { posts } = props
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="md">
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <AlbumCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
