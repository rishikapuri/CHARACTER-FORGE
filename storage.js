/**
 * CHARACTER STORAGE
 * Manages character data persistence using localStorage
 */

class CharacterStorage {
  constructor() {
    this.STORAGE_KEY = 'forge-characters';
    this.init();
  }

  init() {
    // Initialize storage if empty
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      this.setCharacters([]);
    }
  }

  /**
   * Get all stored characters
   * @returns {Array} Array of character objects
   */
  getCharacters() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error retrieving characters:', error);
      return [];
    }
  }

  /**
   * Save characters to storage
   * @param {Array} characters - Array of character objects
   */
  setCharacters(characters) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(characters));
      this.dispatchEvent('charactersUpdated', { characters });
    } catch (error) {
      console.error('Error saving characters:', error);
      this.dispatchEvent('storageError', { error: error.message });
    }
  }

  /**
   * Add a new character
   * @param {Object} character - Character object to add
   * @returns {Object} The added character with ID
   */
  addCharacter(character) {
    const characters = this.getCharacters();
    const newCharacter = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...character
    };
    characters.push(newCharacter);
    this.setCharacters(characters);
    return newCharacter;
  }

  /**
   * Get character by ID
   * @param {string} id - Character ID
   * @returns {Object|null} Character object or null if not found
   */
  getCharacter(id) {
    const characters = this.getCharacters();
    return characters.find(char => char.id === id) || null;
  }

  /**
   * Update character
   * @param {string} id - Character ID
   * @param {Object} updates - Fields to update
   * @returns {Object|null} Updated character or null if not found
   */
  updateCharacter(id, updates) {
    const characters = this.getCharacters();
    const index = characters.findIndex(char => char.id === id);
    
    if (index !== -1) {
      characters[index] = {
        ...characters[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      this.setCharacters(characters);
      return characters[index];
    }
    return null;
  }

  /**
   * Delete character
   * @param {string} id - Character ID
   * @returns {boolean} True if deleted, false if not found
   */
  deleteCharacter(id) {
    const characters = this.getCharacters();
    const filtered = characters.filter(char => char.id !== id);
    
    if (filtered.length !== characters.length) {
      this.setCharacters(filtered);
      this.dispatchEvent('characterDeleted', { id });
      return true;
    }
    return false;
  }

  /**
   * Search characters
   * @param {string} query - Search query
   * @returns {Array} Filtered characters
   */
  searchCharacters(query) {
    const characters = this.getCharacters();
    const q = query.toLowerCase();
    
    return characters.filter(char => 
      char.name?.toLowerCase().includes(q) ||
      char.profession?.toLowerCase().includes(q) ||
      char.goals?.some(goal => goal.toLowerCase().includes(q)) ||
      char.traits?.some(trait => trait.toLowerCase().includes(q))
    );
  }

  /**
   * Filter characters by profession
   * @param {string} profession - Profession to filter by
   * @returns {Array} Filtered characters
   */
  filterByProfession(profession) {
    const characters = this.getCharacters();
    return profession ? characters.filter(char => char.profession === profession) : characters;
  }

  /**
   * Sort characters
   * @param {string} sortBy - Sort field (name, createdAt, etc.)
   * @param {string} order - Sort order (asc, desc)
   * @returns {Array} Sorted characters
   */
  sortCharacters(sortBy = 'createdAt', order = 'desc') {
    const characters = this.getCharacters();
    
    return [...characters].sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      
      // Handle date comparison
      if (sortBy === 'createdAt' || sortBy === 'updatedAt') {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      
      if (order === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }

  /**
   * Get all professions
   * @returns {Array} Unique professions
   */
  getProfessions() {
    const characters = this.getCharacters();
    const professions = new Set(characters.map(char => char.profession).filter(Boolean));
    return Array.from(professions).sort();
  }

  /**
   * Clear all characters (use with caution!)
   */
  clearAll() {
    if (confirm('Are you sure you want to delete all characters? This cannot be undone.')) {
      this.setCharacters([]);
      return true;
    }
    return false;
  }

  /**
   * Export characters as JSON
   * @returns {string} JSON string of characters
   */
  exportAsJSON() {
    return JSON.stringify(this.getCharacters(), null, 2);
  }

  /**
   * Import characters from JSON
   * @param {string} jsonString - JSON string of characters
   * @returns {boolean} Success status
   */
  importFromJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (Array.isArray(data)) {
        this.setCharacters(data);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error importing characters:', error);
      return false;
    }
  }

  /**
   * Dispatch custom events for reactive updates
   * @param {string} eventName - Event name
   * @param {Object} detail - Event detail
   */
  dispatchEvent(eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    document.dispatchEvent(event);
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CharacterStorage;
}
