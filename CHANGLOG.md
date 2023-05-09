## May 9, 2023

- Schema added to README.
- `v-.-.-` Carver Bouldering Guide by Jered Bernert and Spender Williams
  - Removed due to uncertainty of desire to have published.
  - [Forumn post on sharing guide (2022)](https://www.mountainproject.com/forum/topic/121906849/carver-bouldering-guidebook)
  - [Concerns over maintaining relation with land-owner](https://www.carverclimbingclub.org/about/)
  - [Original source and author (2011)](http://carverbouldering.blogspot.com/2011/07/for-sale-carver-bouldering-guide-1000.html)
    - Twitter and blog accounts are no longer active.
- `v1.1.0` The Garden by ire510.
  - Updated with objects `type` field.
- `v1.1.0` Druid Stones by ire510
  - Updated with objects `type` field.
  - Added `id` to boulders despite guide not including.
  - Added `id` to routes not given one continuing on chronologically.
  - Changed `isEliminate` field to `eliminate`.
- `type` can have the following values:
  - `boulder`: A given boulder with routes or listed without.
  - `face`: A named face on a boulder with routes.
  - `route`: A named climb.

---

## May 8, 2023

- `v0.0.1` Began transcribing Carver Bouldering Guide by Jered Bernert and Spender Williams

---

## May 6, 2023

- `v1.0.0` The Garden by ire510.
  - Finished transcriptions and pushed.
  - Included transcription notes and `tags` based on descriptions (not from first-hand experience).
- `v1.0.0` Druid Stones by ire510
  - Finished transcriptions and pushed.
  - Included transcription notes and `tags` based on descriptions (not from first-hand experience).
- `tags` can include the following values:
  - `arête`: Described as containing an arête as a used feature.
  - `bad-landing`: Described as containing a poor landing.
  - `blank`: Described as containing a blank face.
  - `bolted`: Described as being bolted.
  - `campus`: Described as containing a section where campusing is needed.
  - `cave`: Described as involving a cave. Shallow caves are not included.
  - `chimney`: Described as containing a chimney.
  - `classic`: Author ommited stars, but described some as area classics.
  - `crack`: Described as containing a crack as a used feature.
  - `crimps`: Described as containing used crimps.
  - `down-climb`: Described as mostly being the down-climb route for the boulder.
  - `dry`: Described as remaining dry or drying faster.
  - `dyno`: Described as containing a yeet.
  - `eliminate`: An eliminate of another route.
  - `high-ball`: Described as high-ball.
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
