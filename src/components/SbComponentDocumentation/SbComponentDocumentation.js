import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Configuration from './Configuration';

const componentData = JSON.parse(window.localStorage.getItem('componentData'))

function SbComponentDocumentation() {
  return (  
    <Grid container direction="column">
      <Typography 
        variant="h5" 
        align="left">
          { componentData.component_group_name } / { componentData.name }
      </Typography>

      <Configuration config={componentData.schema} />
    </Grid>
  );
}

export default SbComponentDocumentation;