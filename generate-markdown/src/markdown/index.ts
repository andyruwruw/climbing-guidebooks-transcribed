// Packages
import * as fs from 'node:fs';

// Local Imports
import { Parser } from '../parser';
import { MarkdownLink } from '../types';

/**
 * Encodes for a markdown file.
 */
export class Markdown {
  /**
   * Path to write file.
   */
  private path: string;

  /**
   * Parser to use.
   */
  private parser: Parser;

  constructor(parser: Parser) {
    this.parser = parser;
  }

  /**
   * Exports markdown.
   * 
   * @param {string} path Path to export to.
   */
  async export(path: string): Promise<void> {
    if (!path) {
      return;
    }

    this.path = path;
    await this._clearFile();

    await this._writeIntro();
    await this._writeTableOfContents();
  }

  /**
   * Writes introduction to the markdown.
   */
  async _writeIntro(): Promise<void> {
    await this._writeHeader1(
      this.parser.getTitle(),
      true,
    );

    await this._writeParagraph(
      `${this.parser.getAuthor()} | ${this.parser.getUpdated()} | v${this.parser.getVersion()}`,
      true,
    );
  }

  /**
   * Writes the table of contents.
   */
  async _writeTableOfContents(): Promise<void> {
    await this._writeHeader1(
      'Table of Contents',
      true,
    );
  }

  async _writeAreas(): Promise<void> {
  }

  async _writeArea(): Promise<void> {
  }

  async _writeBoulder(): Promise<void> {
  }

  async _writeRoute(): Promise<void> {
  }

  async _writeRouteHrefs(): Promise<void> {
  }

  /**
   * Writes a header 1.
   * 
   * @param {string} text Text to write.
   * @param {boolean} center Whether to center the text.
   */
  async _writeHeader1(
    text: string,
    center = false,
  ): Promise<void> {
    const centerWrap = center ? ['<h1 align="center">', '</h1>'] : ['# ', ''];

    await this._appendToFile(
      `${centerWrap[0]}${text}${centerWrap[1]}`,
    );
  }

  /**
   * Writes a header 2.
   * 
   * @param {string} text Text to write.
   * @param {boolean} center Whether to center the text.
   */
  async _writeHeader2(
    text: string,
    center = false,
  ): Promise<void> {
    const centerWrap = center ? ['<h2 align="center">', '</h2>'] : ['## ', ''];

    await this._appendToFile(
      `${centerWrap[0]}${text}${centerWrap[1]}`,
    );
  }

  /**
   * Writes a header 3.
   * 
   * @param {string} text Text to write.
   * @param {boolean} center Whether to center the text.
   */
  async _writeHeader3(
    text: string,
    center = false,
  ): Promise<void> {
    const centerWrap = center ? ['<h3 align="center">', '</h3>'] : ['## ', ''];

    await this._appendToFile(
      `${centerWrap[0]}${text}${centerWrap[1]}`,
    );
  }

  /**
   * Writes a header 4.
   * 
   * @param {string} text Text to write.
   * @param {boolean} center Whether to center the text.
   */
  async _writeParagraph(
    text: string,
    center = false,
  ): Promise<void> {
    const centerWrap = center ? ['<p align="center">', '</p>'] : ['', ''];

    await this._appendToFile(
      `${centerWrap[0]}${text}${centerWrap[1]}`,
    );
  }

  /**
   * Overrides the file with blank.
   */
  async _clearFile(): Promise<void> {
    if (this.path) {
      await fs.writeFileSync(
        this.path,
        '',
      );
    }
  }

  /**
   * Appends content to the file.
   * 
   * @param {string} content Content to append.
   * @param {boolean} startNewLine Whether to start a new line.
   * @param {boolean} endNewLine Whether to end a new line.
   */
  async _appendToFile(
    content: string,
    startNewLine: boolean = false,
    endNewLine: boolean = true,
  ): Promise<void> {
    await fs.appendFileSync(
      this.path,
      `${startNewLine ? '\n' : ''}${content}\n${endNewLine ? '\n' : ''}`,
    );
  }

  /**
   * Gets header link.
   * 
   * @param {string} text Text to get link of.
   */
  static getLinkOfText(text: string): String {
    const link = text
      .replace(/\s/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .toLowerCase();

    return `#${link}`;
  }
}
