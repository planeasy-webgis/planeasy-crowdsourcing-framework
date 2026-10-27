# Shared question pool

The pool stores reusable questions and their revisions. Questionnaire composition and questionnaire history belong to the repository that publishes each questionnaire; SmartUrbanity keeps its own questionnaires and Git history.

| Path | Purpose |
| --- | --- |
| `questions/<question_id>.json` | Selected revision of each question; selection is not approval. |
| `history/<question_id>/<version>.json` | Immutable question revisions. |
| `history/index.generated.json` | Generated revision catalog, hashes and original source references. |
| `index.json` | Entry point listing the question files and catalogs. |
| `topics.json` | Topic catalog and question memberships; one question may have multiple topics. |
| `feed.generated.json` | Generated export containing all question revisions for import by tools. |

Edit and review question data through the builder. Preserve historical revision bytes; select a revision through its question file. IDs use snake_case and remain independent of project and topic labels. Existing response keys are preserved in historical revisions; explicitly reviewed new revisions may introduce simpler answer keys and option values.

Files ending in `.generated.json` are derived outputs; do not edit them manually. When a pool is loaded in the builder, saving changed questions regenerates and downloads `feed.generated.json`. The repository import tools update the question files and regenerate the feed and history catalog together. Browser downloads must be imported into the owning checkout; the browser does not write directly into Git. `index.json` is the source catalog and `topics.json` contains authored topic assignments.

The initial import uses SmartUrbanity main history, including v0. Definitions remain draft. Earlier distinct source definitions were assigned chronological 0.N.0 revisions; source-main declared question versions were retained. Translations come from the exact source dictionaries. Privacy classification is question-level; topic assignments marked needs_review still require review.

There are no saved editorial review records in this initial pool. Saved authoring reviews can be included in the generated feed by the builder; runtime questionnaires remain separate.

## Non-survey recovery and taxi question proposals

This branch starts from main `92f4971` and keeps the SmartUrbanity survey proposals separate. It recovers all 45 taxi-study definitions from backup `1aafc861e792db2642b3c8d205fcf9fd45eb05d8`, plus 93 missing definitions used by location reports and pre/post-trip questionnaires. Existing main question revisions remain byte-for-byte unchanged. When a backup ID/version already identifies different content in main, the recovered definition receives an unoccupied semantic version; the history catalog retains the original source ID, version, path and digest.

The taxi study now has 40 reviewed draft question definitions with short neutral IDs, explicit answer keys and simple option values. Their selected revisions are `2.0.0`; the original schemas and English/Persian translations remain in `1.0.0` snapshots under the neutral IDs. New prompts and options have English and Persian translations. Shared scales use consistent values such as `never`, `daily`, `no_preference` and `very_secure`. New keys are an intentional response-contract change, not a compatibility migration.

The standalone taxi questionnaire reuses five existing selected questions: `age_group`, `gender`, `education`, `employment` and `vehicles_used`. Their schemas and versions are unchanged; their source-questionnaire lists include the new draft. The old taxi-study formulations are preserved as historical revisions of those families; these archival versions do not replace the selected generic definitions. The reused age-group definition is for adults aged 18 or older.

`questionnaires/no_project/perception_on_ride_sharing.json` contains the complete revised questionnaire at version `1.0.0`, with 45 questions pinned to exact pool versions. Its existing path and questionnaire ID are retained. Seven old instruction-only question nodes become unnecessary because the revised questions and labeled scales are self-contained; section titles are reviewed in English and Persian. Privacy text, privacy link and consent settings are preserved. Questionnaire composition stays outside the pool. SmartUrbanity runtime documents are unchanged.

The study is **Perceptions on Ride Sharing**, with project identifier `perceptions_on_ride_sharing`. The existing `no_project/` publication path is retained so its URL remains stable.

Selection and reuse in this branch are draft proposals, not evidence that a revised definition has already been used in research. Historical source references record actual source occurrences. Topic assignments marked `needs_review` remain editorial aids. Religious-activity questions retain source privacy annotations and still need a specific privacy review; the current classification vocabulary does not distinguish religion.

## Casal Bertone configuration migration

The seven existing Italian Casal Bertone definitions and their exact 1.0.0 revisions are preserved in this pool. The standalone questionnaire and catalog are under questionnaires/cittadinanza_attiva_casal_bertone/. Their wording, response keys, options, translations and consent remain unchanged. Topic assignments are provisional and marked needs_review. This repository owns these project data; the application repository reads the standalone catalog by a pinned external URL. The pool remains authoring-only, with no questionnaire bodies or flows embedded.
