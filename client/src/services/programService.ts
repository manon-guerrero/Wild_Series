import type { Program } from "../types/Program";

const API_BASE_URL = "http://localhost:3310";

export const programService = {
  async getAll(): Promise<Program[]> {
    const response = await fetch(`${API_BASE_URL}/api/programs`);
    if (!response.ok) {
      throw new Error(`Failed to fetch programs: ${response.statusText}`);
    }
    return response.json();
  },
};

export default programService;
