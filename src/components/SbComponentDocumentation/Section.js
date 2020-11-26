import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import SectionOption from './SectionOption';

function Section({ section }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}

        aria-controls="sectoion-header">
        <Typography>{section.name}</Typography>
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
