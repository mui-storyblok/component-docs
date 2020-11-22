import './App.css';

import MuiStoryblok from 'mui-storyblok'
import SbComponentDocumentation from './components/SbComponentDocumentation/SbComponentDocumentation';

function App() {
  return (
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
  );
}

export default App;
