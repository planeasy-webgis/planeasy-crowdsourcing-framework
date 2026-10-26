# Shared question pool

The pool stores reusable questions and their revisions. Questionnaire composition and questionnaire history belong to the repository that publishes each questionnaire; SmartUrbanity keeps its own questionnaires and Git history.

| Path | Purpose |
| --- | --- |
| `questions/<question_id>.json` | Selected revision of each question; selection is not approval. |
| `history/<question_id>/<version>.json` | Immutable question revisions. |
| `history/index.json` | Revision catalog, hashes and original source references. |
| `index.json` | Entry point listing the question files and catalogs. |
| `topics.json` | Topic catalog and question memberships; one question may have multiple topics. |
| `feed.json` | Generated export containing all question revisions for import by tools. |
| `migration/` | Initial import records, separate from the operational pool. |

Edit and review question data through the builder. Preserve historical revision bytes; select a revision through its question file. The feed must agree with the revision files and can be regenerated from them. IDs use snake_case and remain independent of project and topic labels. Existing response keys are preserved.

The initial import uses SmartUrbanity main history, including v0. Definitions remain draft. Earlier distinct source definitions were assigned chronological 0.N.0 revisions; source-main declared question versions were retained. Translations come from the exact source dictionaries. Privacy classification is question-level; topic assignments marked needs_review still require review.

The migration folder contains source.json (source commits and import inputs), source-mappings.json (source occurrences mapped to question revisions), and proof.json (verification manifest). Proof artifact paths are relative to questionBank/, as declared by artifact_root. These files are not required to load the pool.

There are no saved editorial review records in this initial pool. The empty questionnaire-oriented placeholder was removed; note/status/priority editing requires the separate builder review feature.
