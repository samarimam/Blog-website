import { Grid, Box } from '@material-ui/core';
import Post from './Post';
import { Link, useLocation } from 'react-router-dom';

const Posts = () => {
    return (
        <>
         <Grid item lg={3} sm={4} xs={12}>
             <Link to={'/details'} style={{textDecoration: 'none', color: 'inherit'}}>
                <Post />
             </Link>
         </Grid>
        </>
    )
}

export default Posts;