import { useEffect, useState } from "react";
import programService from "../services/programService";
import type { Program } from "../types/Program";

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const data = await programService.getAll();
        setPrograms(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch programs",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className="programs-container">
        <div className="loading">Loading programs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="programs-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="programs-container">
      <header className="programs-header">
        <h1>Wild Series</h1>
        <p>Discover amazing TV shows and series</p>
      </header>

      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-poster">
              <img src={program.poster} alt={program.title} />
            </div>
            <div className="program-info">
              <h2 className="program-title">{program.title}</h2>
              <div className="program-meta">
                <span className="program-year">{program.year}</span>
                <span className="program-country">{program.country}</span>
              </div>
              <p className="program-synopsis">{program.synopsis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
