import "./styles.css";
import { DomainContainer } from "./components/DomainContainer";
import { DifficultyKey } from "./components/DifficultyKey";
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme
} from "@material-ui/core";
import { lessons } from "./data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appContainer: {
      border: "1px dotted red",

      width: "100%",
      maxWidth: "100%"
    },
    swimLane: {
      border: "1px dashed blue"
    }
  })
);

export default function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>Hello Adventurer!</h1>

      <p>
        I have long been wanting to make an "adventure" map out of the
        tutorials, articles, toys and tools that have been my own personal
        <a
          target="_blank"
          rel="noreferrer"
          href="https://lucid.app/lucidchart/84bad722-5cdf-442a-8a50-98e5039ad071/edit?invitationId=inv_6d8abbba-437d-4615-8aec-815f4705d4c6"
        >
          developer roadmap.
        </a>
        This is a LIVING document of what I felt were helpful things in learning
        to code.
      </p>
      <p>
        I've tried to organize the resources first by theme, and then by
        difficulty.
      </p>
      <DifficultyKey />
      <Container className={classes.appContainer}>
        Total Container-
        <Grid container justifyContent="space-evenly" direction="row">
          <DomainContainer name="Pre-Work" lessons={lessons} />
          <DomainContainer name="Educator/Influencer" lessons={lessons} />
          <DomainContainer name="Design" lessons={[]} />
          <DomainContainer name="HTML/CSS/Javascript" lessons={[]} />
          <DomainContainer name="Typescript/Node" lessons={[]} />
          <DomainContainer name="General" lessons={[]} />
          <DomainContainer name="Linux" lessons={[]} />
          <DomainContainer name="Devops" lessons={[]} />
          <DomainContainer name="Electron and Desktop Apps" lessons={[]} />
          <DomainContainer name="React Native" lessons={[]} />
        </Grid>
      </Container>
    </div>
  );
}
