import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Configuration from './Configuration';

const componentData = JSON.parse(window.localStorage.getItem('componentData'))
const useStyles = makeStyles(() => ({
  divider: {
    margin: '16px 0'
  },
  grid: {
    margin: '16px 0'
  }
}));

function SbComponentDocumentation() {
  const classes = useStyles();

  return (  
    <Grid container direction="column" className={classes.grid}>
      <Typography 
        variant="h4" 
        align="left">
          { componentData.component_group_name } / { componentData.name }
      </Typography>
      
      <Divider className={classes.divider}/>

      <Configuration config={componentData.schema} />
    </Grid>
  );
}

export default SbComponentDocumentation;