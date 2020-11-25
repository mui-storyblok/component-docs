import { components } from '../../components.json'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ComponentList() {

  const handleClick = component => {
    const origin = window.location.origin
    window.localStorage.setItem('componentData', JSON.stringify(component))
    window.location.href = `${origin}/page-${component.name.toLowerCase()}`
  }

  return (
    <List aria-label="main mailbox folders">
      {components.map(component => {
        return (
          <ListItem key={component.id} button onClick={() => handleClick(component)}>
            <ListItemText primary={component.name} />
          </ListItem>
        )
      })}
  </List>
  );
};

export default ComponentList;
