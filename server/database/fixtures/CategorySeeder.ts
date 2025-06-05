import AbstractSeeder from "./AbstractSeeder";

class CategorySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "category", truncate: true });
  }

  // The run method - Populate the 'category' table with the categories

  run() {
    // Insert the categories we need
    const categories = [
      { name: "Comédie", refName: "category_comedy" },
      { name: "Science-Fiction", refName: "category_scifi" },
    ];

    for (const category of categories) {
      this.insert(category);
    }
  }
}

// Export the CategorySeeder class
export default CategorySeeder;
