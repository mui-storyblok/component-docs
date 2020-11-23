import './App.css';
import MuiStoryblok from 'mui-storyblok'
import SbComponentDocumentation from './components/SbComponentDocumentation/SbComponentDocumentation';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start">
        <Grid
          container
          item
          xs={2}
          direction="row"
          style={{ overflow: 'scroll', height: '100vh', boxShadow: '1px 1px 4px -1px grey' }}>
        <ol>
          <li>test</li>
          <li>test 1</li>
          <li>test 2 </li>
          <li>test 3</li>
          <li>test 4</li>
        </ol>
        </Grid>
        <Grid item xs={10} style={{ overflow: 'scroll', height: '100vh' }}>
          <MuiStoryblok
              theme={{}} 
              accessToken="fa2Qt4skFijvgTqoT2xYrAtt"
              version="draft"
              customComponents={[{
                componentName: 'SbComponentDocumentation',
                Component: SbComponentDocumentation,
                props: {},
              }]}
            />
        </Grid>
      </Grid>
  );
};

export default App;
