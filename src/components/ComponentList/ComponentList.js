import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";

function ComponentList({ searchResults }) {
  let history = useHistory()

  const handleClick = component => {
    window.localStorage.setItem('componentData', JSON.stringify(component))
    history.go(`/component-docs/page-${component.name.toLowerCase()}`)
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
