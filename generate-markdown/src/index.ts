// Local Imports
import { Arguments } from './helpers/arguments';
import { Markdown } from './markdown';
import { Parser } from './parser';

/**
 * Handles parsing and writing of markdowns.
 */
class MarkdownGenerator {
  /**
   * Parser to use.
   */
  private parser: Parser;

  /**
   * Markdown to use.
   */
  private markdown: Markdown;

  constructor() {
    this.parser = new Parser(Arguments.getJsonPath());
    this.markdown = new Markdown(this.parser);
  }

  /**
   * Runs the generator.
   */
  public run(): void {
    this.parser.extract();

    this.markdown.export('./test.md');
  }
}

const generator = new MarkdownGenerator();
generator.run();
