import AbstractSeeder from "./AbstractSeeder";
import CategorySeeder from "./CategorySeeder";

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  // The run method - Populate the 'program' table with our shows

  run() {
    // Get references to the categories
    const comedyCategory = this.getRef("category_comedy");
    const scifiCategory = this.getRef("category_scifi");

    // Insert the programs we want
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "The series is centered on an afterlife in which humans are sent to 'the Good Place' or 'the Bad Place' after death. All deceased are assigned a numerical score based on the morality of their conduct in life, and only those with the very highest scores are sent to the Good Place, where they enjoy eternal happiness with their every wish granted, guided by an artificial intelligence named Janet; all others experience an eternity of torture in the Bad Place.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        category_id: comedyCategory.insertId,
        refName: "program_good_place",
      },
      {
        title: "Dark",
        synopsis:
          "Children start vanishing from the German town of Winden, bringing to light the fractured relationships, double lives, and dark pasts of four families living there and unfurling a mystery that spans four generations.",
        poster:
          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
        country: "Allemagne",
        year: 2017,
        category_id: scifiCategory.insertId,
        refName: "program_dark",
      },
      {
        title: "The Falcon and the Winter Soldier",
        synopsis:
          "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame (2019), Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum and believe the world was better during the Blip.",
        poster:
          "https://thedirect.s3.amazonaws.com/media/photos/E2f0GCRVEAIOdKg.jpg",
        country: "USA",
        year: 2021,
        category_id: scifiCategory.insertId,
        refName: "program_falcon_winter",
      },
      {
        title: "Pam & Tommy",
        synopsis:
          "Pam & Tommy depicts the turbulent 3-year marriage between Pamela Anderson and Tommy Lee, with particular emphasis on the theft and illegal distribution of an infamous sex tape the couple recorded privately during their honeymoon.",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/3e/Pam_and_Tommy_%28poster%29.jpeg",
        country: "USA",
        year: 2022,
        category_id: comedyCategory.insertId,
        refName: "program_pam_tommy",
      },
    ];

    for (const program of programs) {
      this.insert(program);
    }
  }
}

// Export the ProgramSeeder class
export default ProgramSeeder;
