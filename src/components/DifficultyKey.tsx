import React from "react";
import { Grid, createStyles, makeStyles, Theme } from "@material-ui/core";
import { grey, blue, green, yellow, red } from "@material-ui/core/colors";
import cx from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appContainer: {
      border: "1px dotted red",

      width: "100%",
      maxWidth: "100%"
    },
    swimLane: {
      border: "1px dashed blue"
    },
    keyBox: {
      border: `5px solid ${blue[900]}`,
      boxShadow: "1px 1px 3px #0a0a0a",
      minWidth: "100px",
      maxWidth: "150px",
      minHeight: "100px",
      padding: "1rem",
      margin: "5px 10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      "& p,h3": {
        margin: ".5rem 0",
        padding: 0
      }
    },
    beginner: {
      backgroundColor: green[500]
    },
    intermediate1: {
      backgroundColor: yellow[400]
    },
    intermediate2: {
      backgroundColor: yellow[800]
    },
    advanced1: {
      backgroundColor: red[400]
    },
    advanced2: {
      backgroundColor: red[400]
    }
  })
);
export const DifficultyKey = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justifyContent="center">
      <div className={cx(classes.beginner, classes.keyBox)}>
        <h3>Beginner</h3>
        <p>
          Things like: Slow/Interactive Tutorials, Games, Fun Videos,
          Humor/Cullture,{" "}
        </p>
      </div>
      <div className={cx(classes.intermediate1, classes.keyBox)}>
        <h3>Intermediate1</h3>
        <p>(You can build in some sandboxes or simple local environments)</p>
      </div>
      <div className={cx(classes.intermediate2, classes.keyBox)}>
        <h3>Intermediate2</h3>
        <p>
          (You'll want to be familiar with all the concepts in the games, even
          if you aren't an expert. )
        </p>
      </div>
      <div className={cx(classes.advanced1, classes.keyBox)}>
        <h3>Advanced1</h3>
        <p>
          (These topics might draw together a bunch of concepts from earlier
          modules, and if you haven't finshed those yet then these tutorials
          might start to feel like Greek....)
        </p>
      </div>
      <div className={cx(classes.advanced2, classes.keyBox)}>
        <h3>Advanved2</h3>
        <p>
          (Definitely some complex concepts. Even after you learn these, you'll
          still probably refer back to the documentation when you use it. Hey
          that's ok though, the pros read help docs too!)
        </p>
      </div>
    </Grid>
  );
};
