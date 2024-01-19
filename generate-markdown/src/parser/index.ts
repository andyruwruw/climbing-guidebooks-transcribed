// Packages
import moment from 'moment';

// Types
import {
  GuideComparisonArea,
  GuideComparisonDescriptionSection,
  GuideComparisonReference,
  GuideType,
} from '../types';

/**
 * Parses a JSON file and creates a markdown file.
 */
export class Parser {
  /**
   * The path to the JSON file.
   */
  private path: string;

  /**
   * The data from the JSON file.
   */
  private data: Record<string, any> = {};

  /**
   * Title of the markdown.
   */
  private title: string;

  /**
   * Version of the markdown.
   */
  private version: string;

  /**
   * Author of the markdown.
   */
  private author: string;

  /**
   * Date of the markdown.
   */
  private updated: string;

  /**
   * Location of the markdown.
   */
  private location: Location;

  /**
   * State of the markdown.
   */
  private state: string;

  /**
   * Locale of the markdown.
   */
  private locale: string;

  /**
   * Description of the markdown.
   */
  private guideDescription: GuideComparisonDescriptionSection[];

  /**
   * References of the markdown.
   */
  private references: Record<string, GuideComparisonReference>;

  /**
   * Areas of the markdown.
   */
  private areas: Record<string, GuideComparisonArea>;

  constructor(path: string) {
    this.path = path;
  }

  /**
   * Begins extracting data from the file and creating a markdown file.
   */
  extract(): void {
    this._retrieveData();
  }
  
  /**
   * Gets the title of the markdown.
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * Gets the version of the markdown.
   */
  getVersion(): string {
    return this.version;
  }

  /**
   * Gets the author of the markdown.
   */
  getAuthor(): string {
    return this.author;
  }

  /**
   * Gets the updated date of the markdown.
   */
  getUpdated(): string {
    console.log(this.updated);
    const date = moment(new Date(this.updated));
    console.log(date);
    return date.format('MMMM YYYY');
  }

  /**
   * Gets the location of the markdown.
   */
  getLocation(): Location {
    return this.location;
  }

  /**
   * Gets the state of the markdown.
   */
  getState(): string {
    return this.state;
  }

  /**
   * Gets the locale of the markdown.
   */
  getLocale(): string {
    return this.locale;
  }

  /**
   * Retrieves the data from the JSON file.
   */
  _retrieveData(): void {
    try {
      this.data = require(this.path);

      this.version = this.data.version;
      this.author = this.data.author;
      this.title = this.data.name;

      if (this._type() === 'guidebook') {
      } else if (this._type() === 'guide-comparison') {
        this.guideDescription = this.data.description;
        this.location = this.data.location;
        this.updated = this.data.updated;
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Returns the guide type.
   *
   * @returns {GuideType} The guide type.
   */
  _type(): GuideType {
    return Object.keys(this.data).length ? this.data.type : 'unknown';
  }

  /**
   * Parses the JSON as a guidebook.
   */
  _parseGuidebook(): void {

  }

  /**
   * Parses the JSON as a guide comparison.
   */
  _parseGuideComparison(): void {

  }
}
