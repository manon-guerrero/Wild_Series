// Some data to make the trick

const programs = [
  {
    id: 1,
    title: "The Falcon and the Winter Soldier",
    synopsis:
      "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame (2019), Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum and believe the world was better during the Blip.",
    poster:
      "https://thedirect.s3.amazonaws.com/media/photos/E2f0GCRVEAIOdKg.jpg",
    country: "USA",
    year: 2021,
  },
  {
    id: 2,
    title: "Pam & Tommy",
    synopsis:
      "Pam & Tommy depicts the turbulent 3-year marriage between Pamela Anderson and Tommy Lee, with particular emphasis on the theft and illegal distribution of an infamous sex tape the couple recorded privately during their honeymoon.",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/3/3e/Pam_and_Tommy_%28poster%29.jpeg",
    country: "USA",
    year: 2022,
  },
];

// Declare the action

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredPrograms = programs.filter((program) =>
      program.synopsis.includes(req.query.q as string),
    );

    res.json(filteredPrograms);
  } else {
    res.json(programs);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const program = programs.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export it to import it somewhere else

export default { browse, read };
