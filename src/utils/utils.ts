import { Lesson } from "../data";
export const sortByDifficultyIncreasing = (a: Lesson, b: Lesson) => {
  return a.level - b.level;
};
