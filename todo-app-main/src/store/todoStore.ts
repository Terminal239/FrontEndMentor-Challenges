import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Todo } from "../type";

const INITIAL: Todo[] = [
  {
    id: "fc4ic5fmaa1s",
    task: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: "bqz9w8y1jb95",
    task: "Jog around the part 3x",
    completed: false,
  },
  {
    id: "hfvarvt13dst",
    task: "10 minutes meditation",
    completed: false,
  },
  {
    id: "z63nybp2yrdj",
    task: "Read for 1 hour",
    completed: false,
  },
  {
    id: "jimb7cx65gjl",
    task: "Pick up groceries",
    completed: false,
  },
  {
    id: "fw72reguehqy",
    task: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

interface State {
  value: Todo[];
}

const initialState: State = {
  value: INITIAL,
};
