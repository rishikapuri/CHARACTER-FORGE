/**
 * CHARACTER GENERATOR
 * Handles AI character profile generation and templates
 */

class CharacterGenerator {
  constructor() {
    this.professions = [
      'Scribe', 'Wanderer', 'Artificer', 'Oracle', 'Rogue', 'Knight',
      'Mystic', 'Engineer', 'Diplomat', 'Scholar', 'Merchant', 'Guardian',
      'Alchemist', 'Bard', 'Sage', 'Architect', 'Navigator', 'Sentinel'
    ];

    this.traits = [
      'Witty', 'Brave', 'Cautious', 'Empathetic', 'Analytical', 'Creative',
      'Loyal', 'Cunning', 'Optimistic', 'Pragmatic', 'Mysterious', 'Charismatic',
      'Thoughtful', 'Adventurous', 'Calm', 'Passionate', 'Introspective', 'Confident'
    ];

    this.skills = [
      'Sword Fighting', 'Spellcasting', 'Diplomacy', 'Stealth', 'Alchemy',
      'Navigation', 'Craftsmanship', 'Negotiation', 'Arcane Knowledge',
      'Tracking', 'Trading', 'Leadership', 'Problem Solving', 'Persuasion',
      'Observation', 'Survival', 'Music', 'Cooking'
    ];

    this.goals = [
      'Seek redemption', 'Find lost artifact', 'Protect loved ones',
      'Master forbidden magic', 'Build empire', 'Discover truth',
      'Gain immortality', 'Help the oppressed', 'Create lasting legacy',
      'Escape past', 'Unlock potential', 'Unite factions',
      'Explore unknown lands', 'Change destiny'
    ];

    this.vibes = [
      'Radiant', 'Mysterious', 'Chaotic', 'Serene', 'Intense',
      'Ethereal', 'Grounded', 'Ethereal', 'Bold', 'Thoughtful'
    ];

    this.moods = [
      'Mischievous', 'Serious', 'Contemplative', 'Energetic', 'Cryptic',
      'Warm', 'Cold', 'Passionate', 'Indifferent', 'Hopeful'
    ];

    this.auras = [
      'Neon Pulse', 'Shadow Dance', 'Silver Lining', 'Twilight Glow',
      'Cosmic Energy', 'Crystal Clear', 'Storm Rising', 'Ember Glow'
    ];
  }

  /**
   * Generate a complete character profile
   * @param {Object} params - Character parameters
   * @returns {Object} Generated character profile
   */
  generateProfile(params = {}) {
    const {
      name = this.generateName(),
      profession = this.randomElement(this.professions),
      traits = this.selectRandomElements(this.traits, 3),
      skills = this.selectRandomElements(this.skills, 3),
      goals = this.selectRandomElements(this.goals, 2),
      vibe = this.randomElement(this.vibes),
      mood = this.randomElement(this.moods),
      aura = this.randomElement(this.auras)
    } = params;

    return {
      name,
      profession,
      traits,
      skills,
      goals,
      vibe,
      mood,
      aura,
      backstory: this.generateBackstory(name, profession, traits, goals),
      quirk: this.generateQuirk(),
      favoriteWeapon: this.generateFavoriteWeapon(),
      weakness: this.generateWeakness(),
      strength: this.generateStrength(),
      alignment: this.generateAlignment()
    };
  }

  /**
   * Generate a random character name
   * @returns {string} Generated name
   */
  generateName() {
    const prefixes = ['Al', 'Vel', 'Syn', 'Kael', 'Zor', 'Nyx', 'Astra', 'Lysander'];
    const suffixes = ['thor', 'ara', 'ius', 'ion', 'eth', 'ix', 'ael', 'us'];
    
    const prefix = this.randomElement(prefixes);
    const suffix = this.randomElement(suffixes);
    
    return prefix + suffix;
  }

  /**
   * Generate a backstory based on character traits
   * @returns {string} Generated backstory
   */
  generateBackstory(name, profession, traits, goals) {
    const templates = [
      `${name} is a ${profession} with a mysterious past. Known for being ${traits[0]}, they seek to ${goals[0]}.`,
      `Once a skilled ${profession}, ${name} turned to a life of ${traits[0].toLowerCase()} pursuits, driven by ${goals[0]}.`,
      `${name} emerged from obscurity as a talented ${profession}, their ${traits[0].toLowerCase()} nature guiding their quest to ${goals[0]}.`,
      `A former ${profession} turned wanderer, ${name} carries secrets and the burning desire to ${goals[0]}.`
    ];

    return this.randomElement(templates);
  }

  /**
   * Generate a character quirk
   * @returns {string} Character quirk
   */
  generateQuirk() {
    const quirks = [
      'Always speaks in rhyme when nervous',
      'Collects unusual artifacts',
      'Never makes direct eye contact',
      'Hums ancient melodies',
      'Leaves cryptic notes everywhere',
      'Speaks to animals as if they understand',
      'Refuses to trust maps',
      'Always carries a mysterious book'
    ];

    return this.randomElement(quirks);
  }

  /**
   * Generate favorite weapon
   * @returns {string} Weapon name
   */
  generateFavoriteWeapon() {
    const weapons = [
      'Ethereal Blade', 'Mystic Bow', 'Runic Staff', 'Shadow Dagger',
      'Arcane Grimoire', 'Crystalline Sword', 'Storm Hammer', 'Void Scythe'
    ];

    return this.randomElement(weapons);
  }

  /**
   * Generate character weakness
   * @returns {string} Weakness description
   */
  generateWeakness() {
    const weaknesses = [
      'Emotional attachments cloud judgment',
      'Vulnerable to ancient magic',
      'Fear of abandonment',
      'Obsessive about past mistakes',
      'Struggling with trust issues'
    ];

    return this.randomElement(weaknesses);
  }

  /**
   * Generate character strength
   * @returns {string} Strength description
   */
  generateStrength() {
    const strengths = [
      'Unshakeable determination',
      'Mastery of forgotten arts',
      'Ability to see hidden truths',
      'Incredible adaptability',
      'Connection to ancient forces'
    ];

    return this.randomElement(strengths);
  }

  /**
   * Generate alignment
   * @returns {string} Alignment value
   */
  generateAlignment() {
    const alignments = [
      'Chaotic Good', 'Neutral Good', 'Lawful Good',
      'Chaotic Neutral', 'True Neutral', 'Lawful Neutral',
      'Chaotic Evil', 'Neutral Evil', 'Lawful Evil'
    ];

    return this.randomElement(alignments);
  }

  /**
   * Helper: Get random element from array
   * @param {Array} array - Array to select from
   * @returns {*} Random element
   */
  randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Helper: Select multiple random elements
   * @param {Array} array - Array to select from
   * @param {number} count - Number of elements to select
   * @returns {Array} Array of random elements
   */
  selectRandomElements(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  /**
   * Generate multiple character suggestions
   * @param {number} count - Number of suggestions
   * @returns {Array} Array of character profiles
   */
  generateSuggestions(count = 3) {
    return Array.from({ length: count }, () => this.generateProfile());
  }

  /**
   * Validate character data
   * @param {Object} character - Character to validate
   * @returns {Object} Validation result with isValid and errors array
   */
  validateCharacter(character) {
    const errors = [];

    if (!character.name || character.name.trim().length === 0) {
      errors.push('Name is required');
    }

    if (!character.profession) {
      errors.push('Profession is required');
    }

    if (!Array.isArray(character.traits) || character.traits.length === 0) {
      errors.push('At least one trait is required');
    }

    if (!Array.isArray(character.skills) || character.skills.length === 0) {
      errors.push('At least one skill is required');
    }

    if (!Array.isArray(character.goals) || character.goals.length === 0) {
      errors.push('At least one goal is required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Get available options
   * @returns {Object} Object with all available options
   */
  getOptions() {
    return {
      professions: this.professions,
      traits: this.traits,
      skills: this.skills,
      goals: this.goals,
      vibes: this.vibes,
      moods: this.moods,
      auras: this.auras
    };
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CharacterGenerator;
}
