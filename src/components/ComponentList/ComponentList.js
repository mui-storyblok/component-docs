import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ComponentList({ searchResults }) {
  const handleClick = component => {
    const origin = window.location.origin
    window.localStorage.setItem('componentData', JSON.stringify(component))
    window.location.href = `${origin}/page-${component.name.toLowerCase()}`
  }

  return (
    <List aria-label="component search list">
        {searchResults.map(component => {
          return (
            <ListItem key={component.id} button onClick={() => handleClick(component)}>
              <ListItemText primary={component.name} secondary={component.component_group_name} />
            </ListItem>
          )
        })}
    </List>
  );
};

export default ComponentList;
