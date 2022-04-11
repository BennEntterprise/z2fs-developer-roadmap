import React from "react";
import { LessonCard } from "../types/LessonCard";
import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Paper,
  makeStyles,
  Theme,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    swimLane: {
      border: "1px dotted red",
      display: "flex",
      minWidth: "280px",
      maxWidth: "280px"
    }
  })
);

interface Props {
  header: string;
  lessonCards: Array<LessonCard>;
}

export const SwimLane = ({ lessonCards }: Props) => {
  const classes = useStyles();
  return (
    <>
      {lessonCards?.map((card) => (
        <Grid item>
          <Card key={card.title} component={Paper}>
            <CardHeader title={card.title}>{card.title}</CardHeader>
            <CardContent>{card.link}</CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
