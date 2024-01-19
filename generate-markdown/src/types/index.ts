/**
 * Schema for guide comparsion JSON files.
 */
export interface GuideComparison {
  /**
   * Version of the guide comparsion.
   */
  version: VersionNumber;

  /**
   * Name of author.
   */
  author: string;

  /**
   * Date of last update.
   */
  updated: DateString;

  /**
   * Name of the guide comparison.
   */
  name: string;

  /**
   * Type of JSON.
   */
  type: GuideComparisonType;

  /**
   * Location of the area.
   */
  location: Location;

  /**
   * State of the area.
   */
  state: string;

  /**
   * Locale of the area.
   */
  locale: string;

  /**
   * References used in the comparison.
   */
  references: Record<string, GuideComparisonReference>;
}

/**
 * Link to other guides, topos, or references.
 */
export interface GuideComparisonReference {
  /**
   * Type of reference.
   */
  type: GuideComparisonReferenceType;

  /**
   * Name of the reference.
   */
  name: string;

  /**
   * Name of the author.
   */
  author: string;

  /**
   * Date of last update.
   */
  date: DateString;

  /**
   * HREF to guide if applicable.
   */
  href: string;

  /**
   * Whether the reference recieves updates.
   */
  recievesUpdates: boolean;

  /**
   * Max route rating by author.
   */
  maxRating: number;

  /**
   * Max danger rating by author.
   */
  maxDanger: number;
}

/**
 * Areas within this guide comparison.
 */
export interface GuideComparisonArea {
  /**
   * Arbutrary index for ordering.
   */
  index: number;

  /**
   * Unique identifier that builds, chosen for this specific guide, usually abreviated name.
   */
  id: string;

  /**
   * Chosen name of area for this guide.
   */
  name: string;

  /**
   * Links to other guides, topos, or references.
   */
  hrefs: GuideComparisonHref[];

  /**
   * Sub areas of this area.
   */
  areas: GuideComparisonArea[];

  /**
   * Boulders in this area.
   */
  boulders: GuideComparisonBoulder[];

  /**
   * Routes in this area.
   */
  routes: GuideComparisonRoute[];
}

/**
 * Boulders within this guide comparison.
 */
export interface GuideComparisonBoulder {
  /**
   * Arbitrary index for ordering.
   */
  index: number;

  /**
   * Unique identifier that builds, chosen for this specific guide, usually area ID and abreviated name.
   */
  id: string;

  /**
   * Chosen name of boulder for this guide.
   */
  name: string;

  /**
   * Links to other guides, topos, or references.
   */
  hrefs: GuideComparisonHref[];

  /**
   * Routes on this boulder.
   */
  routes: GuideComparisonRoute[];
}

/**
 * Routes within this guide comparison.
 */
export interface GuideComparisonRoute {
  /**
   * Arbutrary index for ordering.
   */
  index: number;

  /**
   * Unique identifier that builds, chosen for this specific guide, usually boulder ID and abreviated name.
   */
  id: string;

  /**
   * Type of route.
   */
  type: GuideComparisonRouteType;

  /**
   * Chosen name of route for this guide.
   */
  name: string;

  /**
   * Links to other guides, topos, or references.
   */
  hrefs: GuideComparisonHref[];

  /**
   * Suggested grade for this item chosen for this guide.
   */
  grade: GuideComparisonGradeSuggestion;

  /**
   * Suggested rating for this item chosen for this guide.
   */
  rating: GuideComparisonRatingSuggestion;

  /**
   * Suggested danger rating for this item chosen for this guide.
   */
  danger: GuideComparisonDangerSuggestion;

  /**
   * Height of route in feet.
   */
  height: number;

  /**
   * Recommended protection for this route.
   */
  protection: GuideComparisonProtectionSuggestion;

  /**
   * Description of route.
   */
  description: GuideComparisonDescriptionSection[];

  /**
   * First ascent of route.
   */
  fa: GuideComparisonKnownAscent;

  /**
   * Second ascent of route.
   */
  sa: GuideComparisonKnownAscent;

  /**
   * Is this route a project?
   */
  project: boolean;

  /**
   * Is this route contrived?
   */
  contrived: boolean;

  /**
   * Is this route a sit start to another route?
   */
  sit: boolean;

  /**
   * Is this route a stand start to another route?
   */
  stand: boolean;

  /**
   * Is this route an eliminate of another route?
   */
  eliminate: boolean;

  /**
   * Is this route an extension of another route?
   */
  extension: boolean;

  /**
   * Is this route an early exit of another route?
   */
  'early-exit': boolean;

  /**
   * Unique identifier of route this route is a variation of.
   */
  variation: string;

  /**
   * Tags for this route.
   */
  tags: GuideComparisonRouteTag[];

  /**
   * General filters for this route.
   */
  filters: GuideComparisonRouteFilter[];
}

/**
 * Link to other guides, topos, or references for a given route.
 */
export interface GuideComparisonHref {
  index: number;

  type: string;

  reference: string;

  date: DateString;

  names: string[];

  href: string;

  id: string;

  page: number;

  grade: GuideComparisonGradeSuggestion;

  stars: GuideComparisonRatingSuggestion;

  danger: GuideComparisonDangerSuggestion;

  match: GuideComparisonMatchConfidence;
}

export interface GuideComparisonSuggestion {
  /**
   * Value of the suggestion.
   */
  value: number;
}

export interface GuideComparisonGradeSuggestion extends GuideComparisonSuggestion {
  /**
   * Sub grade modifier.
   */
  subValue: number;

  /**
   * Grade system used.
   */
  system: GuideComparisonGradeSystem;
}

export interface GuideComparisonRatingSuggestion extends GuideComparisonSuggestion {
  /**
   * Max rating.
   */
  max: number;
}

export interface GuideComparisonDangerSuggestion extends GuideComparisonSuggestion {
  /**
   * Max danger.
   */
  max: number;
}

export interface GuideComparisonProtectionSuggestion extends GuideComparisonSuggestion {
  /**
   * Number of pads?
   */
  count: number;

  /**
   * Sub-count, like maybe a +1.
   */
  subCount: number;

  /**
   * Number of spotters?
   */
  spotter: number;

  /**
   * Sub-spotter, like maybe a +1.
   */
  subSpotter: number;

  /**
   * You should use a rope.
   */
  rope: boolean;
}

/**
 * Confidence in a match.
 */
export interface GuideComparisonMatchConfidence {
  /**
   * Whether this entry was based on this reference. Primary will have all other values as false.
   */
  primary: boolean;

  /**
   * How different the topo is from the original. Higher is more difference. Ranges from -2 to 3.
   */
  topo: number;

  /**
   * How different the name is from the original. Higher is more difference. Ranges from -2 to 3.
   */
  name: number;

  /**
   * How different the grade is from the original. Higher is more difference. Ranges from -2 to 3.
   */
  grade: number;

  /**
   * How different the description is from the original. Higher is more difference. Ranges from -2 to 3.
   */
  description: number;

  /**
   * How different the location is from the original. Location just has to do position on maps. Higher is more difference. Ranges from -2 to 3.
   */
  location: number;

  /**
   * If the route is clearly a match but with a different start.
   */
  'alternative-start': boolean;

  /**
   * If the route is clearly a match but with a different finish.
   */
  'alternative-finish': boolean;

  /**
   * Notes on why this match was chosen if needed.
   */
  notes: string;
}

/**
 * Description section.
 */
export interface GuideComparisonDescriptionSection {
  /**
   * Type of description section.
   */
  type: GuideComparisonDescriptionSectionType;

  /**
   * Text of description section.
   */
  text: string;
}

/**
 * A known ascent of a route.
 */
export interface GuideComparisonKnownAscent {
  /**
   * Name of person who made ascent.
   */
  name: string;

  /**
   * Date of ascent to varying accuracy.
   */
  date: DateString;

  /**
   * Unique identifier for references used.
   */
  reference: string[];
}

/**
 * Location data.
 */
export interface Location {
  /**
   * Longitude of the item.
   */
  longitude: number;

  /**
   * Latitude of the item.
   */
  latitude: number;
}

/**
 * Type of description section.
 */
export type GuideComparisonDescriptionSectionType = 'header' | 'paragraph';

/**
 * Reference data type.
 */
export type GuideComparisonReferenceType = 'pdf'
| 'contact'
| 'website'
| 'paid-app';

/**
 * Types of grading systems.
 */
export type GuideComparisonGradeSystem = 'v-scale'
| 'yosemite'
| 'font'
| 'everything-v3';

/**
 * Types for routes.
 */
export type GuideComparisonRouteType = 'boulder'
| 'sport'
| 'trad'
| 'top-rope'
| 'aid'
| 'mixed'
| 'down-climb';

/**
 * Route tags for guide comparisons.
 */
export type GuideComparisonRouteTag = 'anchors'
| 'arête'
| 'bad-landing'
| 'bolted'
| 'cave'
| 'campus'
| 'chimney'
| 'classic'
| 'contrived'
| 'crack'
| 'crimps'
| 'dabby'
| 'down-climb'
| 'dry'
| 'dyno'
| 'eliminate'
| 'endurance'
| 'extension'
| 'highball'
| 'high-reach'
| 'historical'
| 'inadequate-description'
| 'jugs'
| 'kid-friendly'
| 'lowball'
| 'mantle'
| 'off-width'
| 'overhung'
| 'pinches'
| 'pockets'
| 'project'
| 'roof'
| 'roped'
| 'seasonal'
| 'shade'
| 'short'
| 'slab'
| 'slopers'
| 'steep'
| 'stemming'
| 'sunny'
| 'traverse'
| 'usually-wet'
| 'view'
| 'warmup';

/**
 * Route filters for guide comparisons.
 */
export type GuideComparisonRouteFilter = 'standard'
| 'modern'
| 'classic'
| 'historical';

/**
 * Guide comparison JSON type.
 */
export type GuideComparisonType = 'guide-comparison';

/**
 * Guidebook JSON type.
 */
export type GuidebookType = 'guidebook';

/**
 * Guide JSON types.
 */
export type GuideType = GuideComparisonType | GuidebookType | 'unknown';

/**
 * Version number.
 */
export type VersionNumber = `${number}.${number}.${number}`;

/**
 * Date string.
 */
export type DateString = `${number}/${number}/${number}` | `${number}/${number}`;

/**
 * Markdown link types.
 */
export type MarkdownLinkType = 'reference' | 'link';

export interface MarkdownLink {
  /**
   * Type of link.
   */
  type: MarkdownLinkType;

  /**
   * Id of the element to target.
   */
  id: string;

  /**
   * HREF of the link.
   */
  href: string;
}