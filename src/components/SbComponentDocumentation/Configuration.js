import Section from './Section';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Configuration({ config }) {
  console.log(config)
  const formatConfigSections = (baseConfig) => {
    let sections = []

    Object.keys(config).forEach(key => {
      if (key.includes('tab')) {
        const section = {
          name: config[key].display_name,
          options: config[key].keys.map(k => {
            delete baseConfig[k]
            return {
              name: k,
              ...config[k]
            }
          })
        }

        delete baseConfig[key]
        sections.push(section)
      }
    })

    const requiredSection = {
      name: 'Required',
      options: []
    }
    Object.keys(baseConfig).forEach(key => {
      const obj = {
        name: key,
        ...config[key]
      }
      requiredSection.options.push(obj)
    })
    sections = [requiredSection, ...sections]
    return sections
  }

  return (  
    <Grid direction="column">
      <Typography variant="h6" align="left">
        Configuration
      </Typography>

      { formatConfigSections({...config}).map(section =>  <Section section={section}/>) }
    </Grid>
  );
}

export default Configuration;