import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem ab doloribus, adipisci magni reiciendis ratione
            blanditiis reprehenderit recusandae debitis illo nisi dolore minus
            quidem nobis, possimus totam quo quod? Alias dolor ab possimus vitae
            sed in, pariatur facere labore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Imporant question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem ab doloribus, adipisci magni reiciendis ratione
            blanditiis reprehenderit recusandae debitis illo nisi dolore minus
            quidem nobis, possimus totam quo quod? Alias dolor ab possimus vitae
            sed in, pariatur facere labore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem ab doloribus, adipisci magni reiciendis ratione
            blanditiis reprehenderit recusandae debitis illo nisi dolore minus
            quidem nobis, possimus totam quo quod? Alias dolor ab possimus vitae
            sed in, pariatur facere labore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem ab doloribus, adipisci magni reiciendis ratione
            blanditiis reprehenderit recusandae debitis illo nisi dolore minus
            quidem nobis, possimus totam quo quod? Alias dolor ab possimus vitae
            sed in, pariatur facere labore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem ab doloribus, adipisci magni reiciendis ratione
            blanditiis reprehenderit recusandae debitis illo nisi dolore minus
            quidem nobis, possimus totam quo quod? Alias dolor ab possimus vitae
            sed in, pariatur facere labore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A pretty question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem ab doloribus, adipisci magni reiciendis ratione
            blanditiis reprehenderit recusandae debitis illo nisi dolore minus
            quidem nobis, possimus totam quo quod? Alias dolor ab possimus vitae
            sed in, pariatur facere labore.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
