import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import SectionOption from './SectionOption';

const sectionDetails = {
  Required: {
    summary: 'properties and bloks needed to use this blok',
    expandOnLoad: true
  },
  Optional: {
    summary: 'properties you can add to customize the bloks apperance',
    expandOnLoad: true
  },
  Advanced: {
    summary: 'properties that provide advanced style overides',
    expandOnLoad: false  
  }
}

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none'
  }
}));

function Section({ section }) {
  const classes = useStyles();
  const [state, setState] = useState({
    expanded: sectionDetails[section.name].expandOnLoad
  });

  const toggleAccordion = () => {
    setState({
      expanded: !state.expanded
    });
  };

  return (
    <Accordion className={classes.root} expanded={state.expanded} onClick={toggleAccordion}>
      <AccordionSummary
        expandIcon={state.expanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls="sectoion-header">
        <Typography variant="body1" align="left">
          {section.name}
          <Typography variant="body2">{sectionDetails[section.name].summary}</Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <SectionOption options={section.options}/>
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

export default Section;
