import './App.css';
import MuiStoryblok from 'mui-storyblok'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import SbComponentDocumentation from './components/SbComponentDocumentation/SbComponentDocumentation';
import Search from './components/Search/Search';

const useStyles = makeStyles(() => ({
  compSideNav: {
    'background-color': 'white',
    overflow: 'scroll', 
    height: '100vh', 
    boxShadow: '1px 1px 4px -1px grey'
  },
  compSideNavContent: {
    'background-color': '#f1f1f1',
    overflow: 'scroll', 
    height: '100vh'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start">

      <Grid
        className={classes.compSideNav}
        container
        item
        xs={2}
        direction="row">
          <Search />
      </Grid>

      <Grid 
        className={classes.compSideNavContent} 
        item 
        xs={10}
        >
        <MuiStoryblok
            theme={{}} 
            accessToken="fa2Qt4skFijvgTqoT2xYrAtt"
            version="draft"
            dynamicSlug="component-docs/getting-started"
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
