import { create } from "zustand";
const login = create((set) => ({
  username: "",
  password: "",
  email: "",
  setUsername: (newUsername) => set({ username: newUsername }),
  setPassword: (newPassword) => set({ password: newPassword }),
  setEmail: (newEmail) => set({ email: newEmail }),
  clear: () => set({ username: "", password: "", email: "" }),
}));
export default login;
