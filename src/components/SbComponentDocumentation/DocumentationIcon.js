import { makeStyles } from '@material-ui/core/styles';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import CategoryIcon from '@material-ui/icons/Category';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import LinkIcon from '@material-ui/icons/Link';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles(() => ({
  root: {
    margin: '10px'
  },
}));

function DocumentationIcon({ icon }) {
  const classes = useStyles();
  const getIcon = () => {
    if (icon === 'boolean') return <CheckBoxIcon className={classes.root}/>
    if (icon === 'bloks') return <CategoryIcon className={classes.root}/>
    if (icon === 'text') return <TextFormatIcon className={classes.root}/>
    if (icon === 'options') return <DynamicFeedIcon className={classes.root}/>
    if (icon === 'link') return <LinkIcon className={classes.root}/>
    return <ImageIcon className={classes.root}/>
  }

  return getIcon()
}

export default DocumentationIcon