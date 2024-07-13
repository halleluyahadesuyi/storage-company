import styles from "../css/Locations.module.css";
import search from "../assets/imgs/search.png";

// Define the Locations component as a named export
export function Locations() {
  // Array of town names to be displayed as buttons
  const towns = [
    "Morecambe",
    "Durham",
    "Penrith",
    "Killingworth",
    "Brunswick",
    "Byker",
    "Morpeth",
    "Washington",
  ];

  // Render the component
  return (
    <section className={styles.locations}>
      <header className={styles.searchSection}>
        {/* Main heading for the search section */}
        <h1>Search our locations</h1>

        {/* Search bar with input field and search button */}
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search locations by postcode" />
          <button>
            Search
            <img
              src={search}
              alt="search icon"
              className={styles.searchLens}
              style={{ marginLeft: "12px", width: "16px", height: "16px" }}
            />
          </button>
        </div>

        {/* Subheading for finding locations by town */}
        <p>Or find by town</p>

        {/* Container for town buttons */}
        <div className={styles.townButtons}>
          {/* Map over the towns array to create a button for each town */}
          {towns.map((town) => (
            <button key={town}>{town} ➔</button>
          ))}
        </div>
      </header>
    </section>
  );
}
