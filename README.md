<p align="center">
  <img src="https://raw.githubusercontent.com/andyruwruw/climbing-guidebooks-transcribed/main/documentation/banner.png" width="800px" />
</p>

<h1 align="center">Climbing Guidebooks Transcribed</h1>

These guidebooks were passed to me by friends, containing more routes and history than I could find online. For one reason or another these **can't be purchased** or aquired through traditional means.

To make this information available to more people, I've transcribed them to `JSON` for other guides or platforms to pull from.

## Why not just post the guides?

These on their own are **not guides**, without the topo images and other context the information is harder to read. The goal is to use this data to **add to existing apps or create new apps and guides**.

I'd provide the PDFs, but I think it's best to draw the information from them. They tend to be scanned copies of used / marked printed guidebooks, some with pages missing or clearly unfinished editions of the author's guides.

I want to **encourage the creation of new guides** that will be clear and easy for new climbers to use, but retain the information provided.

## Adding to the repository

I'm happy to add other guides from other areas people are from! My only policy for this repository is guidebooks that **can't be purchased**. **Royalties should remain with the author**, and providing their hard work for free isn't the intention of this repository.

If you are an author of one of these old guides and would like to have the transcription removed, contact me immediately and I'll see that done. If you don't want to remove it, **contact me anyways**, I want to learn more about these guides!

Feel free to submit pull requests or [submit an issue](https://github.com/andyruwruw/climbing-guidebooks-transcribed/issues) if you notice any typos or issues! Always happy to hear suggestions.

# Table of Contents

### Oregon

- Portand & the Gorge
  - Carver Bouldering Guide (2011?)
    - By Jered Bernert and Spender Williams
    - No contact with author (05/08/2023)
    - Removed, see [change log](./CHANGLOG.md).
- Willamette Valley
  - [Druid Stones](https://github.com/andyruwruw/climbing-guidebooks-transcribed/blob/main/oregon/willamette-valley/druid-stones.json) (2011?)
    - By ire510
    - No contact with author (05/08/2023)
  - [The Garden](https://github.com/andyruwruw/climbing-guidebooks-transcribed/blob/main/oregon/willamette-valley/the-garden.json) (2011?)
    - By ire510
    - No contact with author (05/08/2023)
  - [The Garden Boulders](https://github.com/AndrewChild/The-Garden-Guidebook) (2023)
    - by Andrew Child
    - Not transcribed, here for reference. Link leads to his repository.

# Data Format

Guides are all transcribed to JSON containing objects with the following values. These objects are nested from `guide` => `area` => `boulder` => `boulder face` => `route`, excluding `boulder-face` when irrelevant or not provided by the author..

Text sections are simply created like [Areas](#areas) with sub-sections nested. All relevant paragraphs are just listed in the `description`. Fields are ommited when no data is present, so beware referencing fields that are undefined. You'll never see `"eliminate": false,` because it is assumed false unless otherwise stated.

If anything is added or changed, I'll track in in the [change log](./CHANGELOG.md) and update the version control in each guide edited.

- Object Schemas
  - [Guidebook](#guidebook)
  - [Areas](#areas)
  - [Boulders](#boulders)
  - [Boulder Faces](#boulder-faces)
  - [Routes](#routes)
  - [Grade Object](#grade-object)
  - [Ascent Object](#ascent-object)
- Types
  - [Tags](#tags)
- Sample Code
  - [Parsing Grades](#parsing-grades)

# Guidebook

Root object representing a transcribed guidebook.

| Field            | Type     | Description                                          | Example                       |
|------------------|----------|------------------------------------------------------|-------------------------------|
| version          | `string` | Version control for transcription.                   | `"1.1.0"`                     |
| name             | `string` | Name of the guidebook.                               | `"The Garden"`                |
| author           | `string` | Best known name of author.                           | `"ire510"`                    |
| date             | `string` | Best known date guide was written.                   | `"2011"`                      |
| transcriptor     | `string` | Name of transcriptor.                                | `"Andrew Young"`              |
| transcribed      | `string` | Roughly when the transcription occured.              | `"05/2023"`                   |
| mountain-project | `string` | Link to Mountain Project page for area if available. | `"https://www.mountainpr..."` |
| children         | `Array`  | List of areas, boulders, categories that follow.     | `[...]`                       |

# Areas

General areas of boulders, typically named, but ommited if none are stated.

| Field               | Type       | Description                                      | Example                  |
|---------------------|------------|--------------------------------------------------|--------------------------|
| id                  | `number`   | ID given to area.                                | `8`                      |
| name                | `string`   | name of the area.                                | `"Lower Garden"`         |
| type                | `"area"`   | Type of object.                                  | `"area"`                 |
| alt-names           | `string[]` | Alternative names provided by author.            | `[...]`                  |
| description         | `string[]` | Descriptions of area provided by author.         | `"The steeply over..."`  |
| transcription-notes | `string`   | Notes and edits by transcriptor.                 | `"Abbreviations exp..."` |
| children            | `Array`    | List of areas, boulders, categories that follow. | `[...]`                  |

# Boulders

Boulders that contain routes (or sometimes none for some reason).

| Field               | Type        | Description                                                           | Example                  |
|---------------------|-------------|-----------------------------------------------------------------------|--------------------------|
| id                  | `number`    | ID given to the boulder.                                              | `8`                      |
| name                | `string`    | Name of the boulder.                                                  | `"Toilet Bowl"`          |
| type                | `"boulder"` | Type of object.                                                       | `"boulder"`              |
| description         | `string`    | Descriptions of boulder provided by author.                           | `"Tucked behind Ath..."` |
| useable-description | `string`    | Edited description to exclude `?` where transcription is unavailable. | `"Tucked behind Ath..."` |
| transcription-notes | `string`    | Notes and edits by transcriptor.                                      | `"Abbreviations exp..."` |
| children            | `Array`     | List of boulder faces or routes.                                      | `[...]`                  |

# Boulder Faces

Faces on a boulder, sometimes boulders are separated into sections.

| Field               | Type     | Description                                                           | Example                  |
|---------------------|----------|-----------------------------------------------------------------------|--------------------------|
| id                  | `number` | ID given to the face.                                                 | `8`                      |
| name                | `string` | Name of the face.                                                     | `"The Lab"`              |
| type                | `"face"` | Type of object.                                                       | `"face"`                 |
| description         | `string` | Descriptions of face provided by author.                              | `"Tucked behind Ath..."` |
| useable-description | `string` | Edited description to exclude `?` where transcription is unavailable. | `"Tucked behind Ath..."` |
| transcription-notes | `string` | Notes and edits by transcriptor.                                      | `"Abbreviations exp..."` |
| children            | `Array`  | List of boulder faces or routes.                                      | `[...]`                  |

# Routes

Routes graded or otherwise. In absense of a topo or description, they are still recorded.

| Field               | Type           | Description                                                           | Example                  |
|---------------------|----------------|-----------------------------------------------------------------------|--------------------------|
| id                  | `number`       | ID given to the route.                                                | `8`                      |
| name                | `string`       | Name of the route.                                                    | `"Scrubbing Bubbles"`    |
| type                | `"route"`      | Type of object.                                                       | `"route"`                |
| grade               | `GradeObject`  | Grade object, see below.                                              | `{...}`                  |
| tags                | `string[]`     | Tags based on description, see below.                                 | `[...]`                  |
| description         | `string`       | Descriptions of boulder provided by author.                           | `"Sit start on pos..."`  |
| useable-description | `string`       | Edited description to exclude `?` where transcription is unavailable. | `"Sit start on pos..."`  |
| fa                  | `AscentObject` | First ascent. Ascent object, see below.                               | `{...}`                  |
| second              | `AscentObject` | Second ascent. Ascent object, see below.                              | `{...}`                  |
| variant             | `boolean`      | Whether this route is just a variant of another.                      | `true`                   |
| eliminate           | `boolean`      | Whether this route is just an eliminate.                              | `true`                   |
| transcription-notes | `string`       | Notes and edits by transcriptor.                                      | `"Abbreviations exp..."` |

# Grade Object

Grade objects are portrayed by two numbers:

| Field     | Type     | Description                                   | Example |
|-----------|----------|-----------------------------------------------|---------|
| grade     | `number` | The base grade on the V-scale. `4` means `V4` | `4`     |
| sub-grade | `number` | Subgrade, see below.                          | `-1`    |

The subgrade field is meant to fufill the role of adding greater customizability to the base grade as seen below.

| Sub-Grade | Base Grade | Result   |
|-----------|------------|----------|
| 0         | -2         | V?       |
| 0         | -1         | VB       |
| -1        | 4          | V4-      |
| 0         | 4          | V4       |
| 1         | 4          | V4+      |
| 2         | 4          | V4/V5    |
| 3         | 4          | V4,V5,V6 |

These are all just values I ran into transcribing, so a subgrade was created for each.

# Ascent Object

Ascent objects just keep track of name and date if available.

| Field | Type     | Description                           | Example          |
|-------|----------|---------------------------------------|------------------|
| name  | `string` | Name of the climber as best as known. | `"Andrew Young"` |
| date  | `string` | Date of climb if known.               | `"04/2022"`      |

There were times when the date wasn't provided, or was provided but only given a given month or the exact day. To best fit this the date is left as a string, as many of the dates in these transcriptions are.

# Tags

Tags were added based on the descriptions to add to searchability, not based on first hand knowledge.

I attempt not to speculate. If the nearby route was claimed to be a highball, that doesn't mean the routes on the same boulder were given the same tag by relation.

Tags are based on the authors description, not even personal experience. This is a transcription, not a guide in itself.

The following values are used tags:

- `arête`: Described as containing an arête as a used feature.
- `bad-landing`: Described as containing a poor landing.
- `blank`: Described as containing a blank face.
- `bolted`: Described as being bolted.
- `campus`: Described as containing a section where campusing is needed.
- `cave`: Described as involving a cave. Shallow caves are not included.
- `chimney`: Described as containing a chimney.
- `classic`: Author ommited stars, but described some as area classics.
- `contrived`: A contrived route.
- `crack`: Described as containing a crack as a used feature.
- `crimps`: Described as containing used crimps.
- `down-climb`: Described as mostly being the down-climb route for the boulder.
- `dry`: Described as remaining dry or drying faster.
- `dyno`: Described as containing a yeet.
- `eliminate`: An eliminate of another route.
- `high-ball`: Described as high-ball.
- `jugs`: There be jugs.
- `kid-friendly`: At your own risk I suppose, author described as kid-friendly.
- `mantle`: Described containing a mantle.
- `mystery`: Author didn't provide enough details so the route is a mystery.
- `off-width`: Off-width, I steer clear. But enjoy at your own will.
- `overhung`: Described as containing an overhung face.
- `pinches`: Described as containing used pinches.
- `pockets`: Described as containing used pockets.
- `project`: Described as being a project.
  - If open, check `project-status` field. If ommited, nothing was said about project status.
- `roped`: Described as being a roped route. Or high-ball depending on who you are.
- `shade`: Described as being in the shade, could result in longer drying periods.
- `short`: Described as short.
- `slab`: Described as containing a slab face.
- `slopers`: Described as containing used slopers.
- `stays-dry`: Even better than dry! Author says even during rain this is climbable!
- `steep`: Described as containing a steep face.
- `stemming`: Described as containing stemming.
- `traverse`: Described as traversing.
- `view`: Author says the top has a nice view!
- `warm-up`: Described as a quality warm-up.
- `wet`: Described as commonly being wet.

# Parsing Grades

For those code savy, here's a quick function to take **V-scale grade strings** and transform them into the [Grade Object](#grade-object) described above in `Typescript`. If anyone wants to take the time to simplify it, please do.

I haven't needed to process the triplets (`"V1,V2,V3"`) so this doesn't include `sub-grade` `3`.

```
/**
 * Selector for unknown grades.
 */
export const GRADE_UNKNOWN = /.*V\?.*/g;

/**
 * Selector for grades spanning 2 V-scale grades.
 */
export const GRADE_IN_BETWEEN = /.*V([B0-9]+)\/([0-9]+).*/;

/**
 * Selector for grades.
 */
export const GRADE_PARSER = /.*V([B0-9]+)([+-]*).*/;

/**
 * Parses a grade from string.
 *
 * @param {string} text Grade string.
 */
export const parseStringGrade = (text: string): GradeOpinion => {
  if (GRADE_UNKNOWN.test(text)) {
    return {
      grade: -2,
    };
  }

  if (GRADE_IN_BETWEEN.test(text)) {
    const [
      ,
      lower
    ] = text.match(GRADE_IN_BETWEEN) as string[];

    return {
      grade: parseInt(lower, 10),
      subGrade: 2,
    };
  }

  if (GRADE_PARSER.test(text)) {
    const [
      ,
      grade,
      subGrade,
    ] = text.match(GRADE_PARSER) as string[];

    if (subGrade && subGrade === '-') {
      return {
        grade: parseInt(grade, 10),
        subGrade: -1,
      };
    }

    if (subGrade && subGrade === '+') {
      return {
        grade: parseInt(grade, 10),
        subGrade: 1,
      };
    }

    return {
      grade: parseInt(grade, 10),
    };
  }

  return {
    grade: -2,
  };
}
```