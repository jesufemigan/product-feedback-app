import { create } from "zustand";

type User = {
  email: string;
  token: string;
};

const user = localStorage.getItem("user");

export const userStore = create((set) => {
  user: user ? JSON.parse(user) : null;
});
