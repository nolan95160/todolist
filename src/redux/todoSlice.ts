// src/store/todoStore.ts

import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from "@reduxjs/toolkit";
import { TODO } from "../utils/types";

const todoEntityAdapter = createEntityAdapter<TODO>();

const initialState: EntityState<TODO, number> =
  todoEntityAdapter.getInitialState();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: todoEntityAdapter.addOne, // Ajoute un todo
    addTodos: todoEntityAdapter.addMany, // Ajoute plusieurs todo
    updateTodo: todoEntityAdapter.updateOne, // Met à jour un todo
    removeTodo: todoEntityAdapter.removeOne, // Supprime un todo
    setAllTodos: todoEntityAdapter.setAll, // Remplace toutes les entités
  },
});

// Exporter les actions générées
export const { addTodo, addTodos, updateTodo, removeTodo, setAllTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
