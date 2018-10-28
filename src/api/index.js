import { v4 } from "node-uuid";

const dataBase = {
  items: [
    { id: v4(), text: "hello 0", comlited: true },
    { id: v4(), text: "hello 1", comlited: false },
    { id: v4(), text: "hello 2", comlited: true }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    switch (filter) {
      case "all_tasks":
        return dataBase.items;
      case "active_tasks":
        return dataBase.items.filter(t => !t.complited);
      case "complited_tasks":
        return dataBase.items.filter(t => t.complited);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
