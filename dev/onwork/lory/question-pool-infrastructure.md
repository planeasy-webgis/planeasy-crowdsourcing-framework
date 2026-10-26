# Reusable question pool migration

Owner: Lory; task branch `lory/question-pool-infrastructure`; target `main`.
Authorized scope: reusable questions in PlanEasy, project-specific material in
SmartUrbanity; local commits only. No privacy wording changes.

245 canonical definitions extracted without content changes from configuration
revision `769e4af77706ac71dd1f0e25ea6e374ae8b080fb` (265 entries total; 20 remain
project-specific in that baseline). SmartUrbanity keeps flows and standalone
runtime JSON. Canonical IDs and provenance remain unchanged.

Owner explicitly requested a fresh collection without legacy answer-key aliases.
Removed that property recursively; original source digests remain in the mapping
and transformed canonical digests record this deliberate, sole content change.

Validation: JSON parsing, unique IDs, canonical paths, source equality and
index/feed parity. Integration across repositories and human review remain with
the coordinating task. The editorial branch carries the proposed wording changes.
