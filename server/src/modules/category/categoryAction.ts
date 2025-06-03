// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
  {
    id: 3,
    name: "Action",
  },
  {
    id: 4,
    name: "Drame",
  },
  {
    id: 5,
    name: "Romance",
  },
  {
    id: 6,
    name: "Thriller",
  },
  {
    id: 7,
    name: "Aventure",
  },
  {
    id: 8,
    name: "Super-héros",
  },
  {
    id: 9,
    name: "Biographie",
  },
  {
    id: 10,
    name: "Crime",
  },
];

// Declare the actions

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((c) => c.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default { browse, read };
