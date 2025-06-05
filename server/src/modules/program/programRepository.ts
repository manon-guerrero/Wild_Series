import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class ProgramRepository {
  // The C of CRUD - Create operation

  async create(program: Omit<Program, "id">) {
    // Execute the SQL INSERT query to add a new program to the "program" table
    const [result] = await databaseClient.query<Result>(
      "insert into program (title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.category_id,
      ],
    );

    // Return the ID of the newly inserted program
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific program by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from program where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the program
    return rows[0] as Program;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all programs from the "program" table
    const [rows] = await databaseClient.query<Rows>("select * from program");

    // Return the array of programs
    return rows as Program[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing program

  // async update(program: Program) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a program by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ProgramRepository();
