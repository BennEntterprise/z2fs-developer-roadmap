import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { Lesson } from "../data";
import cx from "classnames";
import { grey, blue, green, yellow, red } from "@material-ui/core/colors";

interface Props {
  name:
    | "Pre-Work"
    | "Educator/Influencer"
    | "Design"
    | "HTML/CSS/Javascript"
    | "Typescript/Node"
    | "General"
    | "Linux"
    | "Devops"
    | "Electron and Desktop Apps"
    | "React Native";
  lessons: Array<Lesson>;
}

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
    lessonBox: {
      border: `5px solid ${blue[900]}`,
      boxShadow: "1px 1px 3px #0a0a0a",
      minWidth: "100px",
      minHeight: "100px",
      padding: "1rem",
      margin: "5px 10px"
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

interface IProps {
  lesson: Lesson;
}
export const LessonCard = ({ lesson }: IProps) => {
  const { level, title } = lesson;
  let difficultyColor;
  const classes = useStyles();
  switch (level) {
    case 0:
      difficultyColor = classes.beginner;
      break;
    case 1:
      difficultyColor = classes.intermediate1;
      break;
    case 2:
      difficultyColor = classes.intermediate2;
      break;
    case 3:
      difficultyColor = classes.advanced1;
      break;
    case 4:
      difficultyColor = classes.advanced2;
      break;
    default:
      throw new Error(
        `This difficulty, ${level},  was not recognized. For course ${title}`
      );
  }
  return (
    //  Oh what a feeling it is to giveth and taketh color!
    <Grid item className={cx(classes.lessonBox, difficultyColor)}>
      <a target="_blank" rel="noreferrer" href={lesson.link}>
        Lesson {lesson.title}
      </a>
      <p>{lesson.description}</p>
      <p>(Level {lesson.level})</p>
    </Grid>
  );
};
