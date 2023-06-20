const categories = [
  {
    id: 1,
    name: "Lamps",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    color: "white"
  },
  {
    id: 2,
    name: "Flower Vase",
    icon: "pot",
    backgroundColor: "#fd9644",
    color: "white"
  },
  {
    id: 3,
    name: "Stools",
    icon: "stool",
    backgroundColor: "#fed330",
    color: "white"
  },
  {
    id: 4,
    name: "Wall Decor",
    icon: "wallpaper",
    backgroundColor: "#26de81",
    color: "white"
  },
  {
    id: 5,
    name: "Baskets",
    icon: "basket",
    backgroundColor: "#2bcbba",
    color: "white"
  },
  {
    id: 6,
    name: "Art",
    icon: "image",
    backgroundColor: "#45aaf2",
    color: "white"
  },
  {
    id: 7,
    name: "Other",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white"
  }
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
