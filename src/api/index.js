import { v4 } from "node-uuid";
//import { resolve } from "url";

const dataBase = {
  items: [
    {
      id: v4(),
      text: "hello 1",
      comlited: true
    },
    {
      id: v4(),
      text: "hello 2",
      comlited: true
    },

    {
      id: v4(),
      text: "hello 3",
      comlited: false
    },

    {
      id: v4(),
      text: "hello 4",
      comlited: false
    },

    {
      id: v4(),
      text: "hello 5",
      comlited: true
    }
  ]
};

const delay = ms => {
  new Promise(resolve => setTimeout(resolve, ms));
};

export const fetchItems = filter =>
  delay(500).then(() => {
    switch (filter) {
      case "all_tasks":
        return dataBase.items;
      case "complited_tasks":
        return dataBase.items.filter(t => !t.comlited);
      case "active_tasks":
        return dataBase.items.filter(t => t.comlited);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
