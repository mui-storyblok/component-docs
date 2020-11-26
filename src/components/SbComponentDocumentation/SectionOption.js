import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DocumentationIcon from './DocumentationIcon'

function SectionOption({ options }) {

  return options.map(option => {
    return (
      <ListItem key={option.name} alignItems="flex-start" >
        <DocumentationIcon icon={option.type}/>
        <ListItemText primary={option.name} secondary={option.description} />
      </ListItem>
    )
  })
}

export default SectionOption;