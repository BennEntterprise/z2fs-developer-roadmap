import React from "react";
import { Grid } from "@material-ui/core";
import { Lesson } from "../data";
import { LessonCard } from "./LessonCard";
import { sortByDifficultyIncreasing } from "../utils/utils";
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

export const DomainContainer = ({ lessons, name }: Props) => (
  <Grid item sm={4}>
    <Grid
      container
      direction="column"
      style={{
        border: `1px dotted red`
      }}
    >
      <Grid item>
        <strong>{name}</strong>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        style={{ textAlignLast: "left" }}
      >
        {lessons
          .filter((l) => l.type === name)
          .sort((a, b) => sortByDifficultyIncreasing(a, b))
          .map((lesson, i) => (
            <LessonCard key={i} lesson={lesson} />
          ))}
      </Grid>
    </Grid>
  </Grid>
);
