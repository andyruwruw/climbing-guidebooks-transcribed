/**
 * Used for extracting command line arguments.
 */
export class Arguments {
  /**
   * Returns the path to the JSON file.
   * 
   * @returns {string} The path to the JSON file.
   */
  static getJsonPath(): string {
    return process.argv[2];
  }
}
