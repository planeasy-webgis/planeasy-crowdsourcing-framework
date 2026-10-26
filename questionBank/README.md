# Reusable question pool

This data-only pool owns reusable mobility, accessibility, travel behaviour,
street assessment and place-perception questions. It contains no project flows,
consent notices, pilot selection rules or runtime questionnaires.

`index.json` lists canonical `questions/<question_id>.json` files. `feed.json`
is their generated collection snapshot, with `flows: []`; applications can use
the individual definitions or consume the snapshot. Regenerate the snapshot
whenever a canonical definition changes, preserving index order.

Question IDs, answer keys, versions, variants and translations are preserved
from their source. A `smarturbanity.*` ID records immutable provenance, not
current ownership; its `project`, `origin_questionnaire` and
`source_questionnaires` fields remain historical metadata. The canonical owner
of definitions listed here is this repository. SmartUrbanity retains its own
flows and standalone generated questionnaire JSON, which may embed copies of
these definitions for offline runtime use.

Pilot geography, service-entity field schemas, service-record administration,
project-specific app confirmation and consent stay in the SmartUrbanity
configuration repository. No SmartUrbanity page or complete questionnaire is
moved into this pool.

The infrastructure branch preserves the active baseline question wording and
answers from SmartUrbanity configuration revision `769e4af`. Proposed editorial
variants are a separate change on `lory/question-pool-content`.

This is a new collection: legacy answer-key aliases have been removed at the
owner's request. `source.json` retains each original source `sha256` and records
the transformed `canonicalSha256` of the canonical UTF-8 content with LF endings.
All other schemas, translations, IDs and versions remain unchanged.

Before accepting changes, validate every JSON file, unique IDs, canonical file
names, index/feed equality, and references when compiling a consuming project's
flows. Keep versions and all translations together. No response data belongs here.
