import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Post } from '../libs/models'

type Props = {
  post: Post
}

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  content: {
    flexGrow: 1,
  },
})

export default function AlbumCard(props: Props): React.ReactElement {
  const { post } = props
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={post.imageUrl}
        title={post.title}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography>posted by @{post.user.name}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  )
}
