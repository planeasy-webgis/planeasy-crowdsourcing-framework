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
