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

Edit and review question data through the builder. Preserve historical revision bytes; select a revision through its question file. IDs use snake_case and remain independent of project and topic labels. Existing response keys are preserved.

Files ending in `.generated.json` are derived outputs; do not edit them manually. When a pool is loaded in the builder, saving changed questions regenerates and downloads `feed.generated.json`. The repository import tools update the question files and regenerate the feed and history catalog together. Browser downloads must be imported into the owning checkout; the browser does not write directly into Git. `index.json` is the source catalog and `topics.json` contains authored topic assignments.

The initial import uses SmartUrbanity main history, including v0. Definitions remain draft. Earlier distinct source definitions were assigned chronological 0.N.0 revisions; source-main declared question versions were retained. Translations come from the exact source dictionaries. Privacy classification is question-level; topic assignments marked needs_review still require review.

There are no saved editorial review records in this initial pool. Saved authoring reviews can be included in the generated feed by the builder; runtime questionnaires remain separate.

Pool 1.1.0 includes 104 draft question revisions extracted from the nine surveys at SmartUrbanity Configuration `citymaas/survey-question-review`, commit `5c724e79f020d7fd8f2bd99f1569fd36357cb9b0`. The 33 unchanged questions retain their versions. Selected draft revisions are available for builder review; they are not scientific approval or an update to published questionnaires. Previous question revisions remain immutable. Source references in the history catalog identify these additions as `review_proposal`. Questionnaire order, required flags, visibility conditions and questionnaire-level pages are not imported into the reusable pool.

## Non-survey recovery and taxi question proposals

The main baseline contains the recovered non-survey pool. This proposal branch retains those definitions alongside the separate SmartUrbanity survey revisions. It recovers all 45 taxi-study definitions from backup `1aafc861e792db2642b3c8d205fcf9fd45eb05d8`, plus 93 missing definitions used by location reports and pre/post-trip questionnaires. Existing main question revisions remain byte-for-byte unchanged. When a backup ID/version already identifies different content in main, the recovered definition receives an unoccupied semantic version; the history catalog retains the original source ID, version, path and digest.

The taxi study now has 40 reviewed draft question definitions with short neutral IDs, explicit answer keys and simple option values. Their selected revisions are `2.0.0`; the original schemas and English/Persian translations remain in `1.0.0` snapshots under the neutral IDs. New prompts and options have English and Persian translations. Shared scales use consistent values such as `never`, `daily`, `no_preference` and `very_secure`. New keys are an intentional response-contract change, not a compatibility migration.

The standalone taxi questionnaire reuses five existing questions: `age_group`, `gender`, `education`, `employment` and `vehicles_used`. Its exact `1.0.0` pins retain the main baseline wording, even when this branch selects a newer survey proposal for the same family. Their source-questionnaire lists include the new draft. The old taxi-study formulations are preserved as historical revisions of those families. The reused age-group definition is for adults aged 18 or older.

`questionnaires/no_project/perception_on_ride_sharing.json` contains the complete revised questionnaire at version `1.0.0`, with 45 questions pinned to exact pool versions. Its existing path and questionnaire ID are retained. Seven old instruction-only question nodes become unnecessary because the revised questions and labeled scales are self-contained; section titles are reviewed in English and Persian. Privacy text, privacy link and consent settings are preserved. Questionnaire composition stays outside the pool. SmartUrbanity runtime documents are unchanged.

The study is **Perceptions on Ride Sharing**, with project identifier `perceptions_on_ride_sharing`. The existing `no_project/` publication path is retained so its URL remains stable.

Selection and reuse in this branch are draft proposals, not evidence that a revised definition has already been used in research. Historical source references record actual source occurrences. Topic assignments marked `needs_review` remain editorial aids. Religious-activity questions retain source privacy annotations and still need a specific privacy review; the current classification vocabulary does not distinguish religion.

## Find questions by origin project

Current question files contain only an optional origin_project with project_id and name. It identifies the first documented source project, not authorship. There are no project usage records, usage stages or associated-project lists in the pool. Reusing a question in another questionnaire never changes its origin.

**Perceptions on Ride Sharing** (perceptions_on_ride_sharing) is the documented origin of 40 recovered question families. The five generic families reused in its questionnaire retain **SmartUrbanity** (smarturbanity) as their documented origin. All 305 families imported from SmartUrbanity retain that origin. Questionnaire composition records which questions are actually selected.

The builder filters by origin project. The feed includes this metadata automatically. Question IDs, wording, semantic versions and immutable historical snapshots remain unchanged. Runtime questionnaires do not embed origin metadata or pool history.

## Additional recovered survey history

The previous `economic_status` and `walk_distance` definitions at backup versions `2.0.0` and `3.0.0` are preserved as archival `0.4.0` and `0.5.0` revisions of each family. The original numbers collide with different content already in the new pool; the history catalog retains the original backup ID/version, path, commit and digest. Their schemas and translations are unchanged. Selected question definitions and the complete questionnaire remain unchanged.
