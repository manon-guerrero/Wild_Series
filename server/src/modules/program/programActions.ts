// Some data to make the trick

import type { RequestHandler } from "express";

// Import access to data
import programRepository from "./programRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all programs
    const programs = await programRepository.readAll();

    // If there's a search query, filter the programs
    if (req.query.q != null) {
      const filteredPrograms = programs.filter((program) =>
        program.synopsis.includes(req.query.q as string),
      );
      res.json(filteredPrograms);
    } else {
      res.json(programs);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific program based on the provided ID
    const programId = Number(req.params.id);
    const program = await programRepository.read(programId);

    // If the program is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the program in JSON format
    if (program == null) {
      res.sendStatus(404);
    } else {
      res.json(program);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Export it to import it somewhere else
export default { browse, read };
