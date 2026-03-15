# CITADEL Roadmap Execution Plan

## Purpose

Transformer la roadmap strategique en plan d'execution concret, pour que CITADEL puisse devenir une reference pour:

- solo founders non-tech
- PMs builders
- chefs d'equipe avec peu de techos

L'objectif n'est pas seulement de produire des MVP rapides, mais des builds suffisamment solides pour pouvoir evoluer vers une vraie production avec un minimum de refactor subi.

## Execution Principles

### 1. Preserve the current philosophy
- C-suite governance stays
- Chinese Wall stays
- maker != checker stays
- gates stay
- security veto stays

### 2. Reduce visible complexity before adding more depth
- simplifier la surface user
- garder la profondeur en backstage

### 3. Prioritize change safety over demo novelty
- moins de regressions
- meilleure reprise de contexte
- plus de discipline post-launch

### 4. Favor workflows, structure, hooks, and skills before new agents
- un nouvel agent n'est justifie que s'il porte une responsabilite autonome claire

## Release Sequence

### v10.5 — Clarity

#### Must
- Guided onboarding
- Simplified user modes (`Start`, `Build`, `Fix`, `Ship`)
- Cleaner orchestrator responses
- Chunked sign-off produit/design

#### Should
- Message produit plus clair dans la doc
- Surface d'entree orientee ICP
- Reduction de la mise en avant du nombre d'agents

#### Could
- Templates de demarrage par use case
- quickstart specialise par persona

#### Exit Criteria
- Un non-tech comprend quoi faire dans les 5-10 premieres minutes
- Le premier plan utile est produit sans confusion majeure
- Le systeme parait plus simple sans perdre sa rigueur

### v10.6 — Control

#### Must
- Unified memory model
- Context Manager
- Change impact review
- Do-not-break contract

#### Should
- Docs-code coherence review
- resume de handoff
- stale context detection

#### Could
- retrieval plus intelligent
- memoire searchable
- handoff different selon persona

#### Exit Criteria
- CITADEL reprend une session sans repartir de zero
- Les changements importants sont precedes d'un impact review
- Les flows critiques peuvent etre explicitement proteges

### v10.7 — Day 30

#### Must
- Hotfix flow
- Release readiness checklist
- Runbook
- RCA / learning loop

#### Should
- Dependency check lane
- DB migration lane
- launch readiness score

#### Could
- incident pack
- postmortem templates
- minimal observability onboarding

#### Exit Criteria
- Un founder/PM peut traiter un incident sans improvisation totale
- Une release suit une checklist explicite
- Les erreurs recurrentes peuvent enrichir la prevention

### v11.0 — Reference

#### Must
- Visible project hub in repo
- Design intelligence layer
- reference-grade handoff
- MVP-to-solid-build mode

#### Should
- refactor prioritization map
- stakeholder summary mode
- vertical design packs

#### Could
- permissioned subagent patterns
- deeper ops packaging
- specialized enterprise lanes

#### Exit Criteria
- CITADEL est lisible comme couche projet, pas seulement comme moteur cache
- Le user peut passer d'un MVP a une build plus solide avec guidance
- Le framework devient recommandable comme reference serieuse pour non-techs

## Cross-Version Dependencies

### Foundation dependencies
- v10.5 doit simplifier la surface avant v10.6
- v10.6 doit unifier la memoire avant v10.7
- v10.7 doit couvrir le post-launch avant v11

### Structural dependencies
- Le `project hub` visible depend d'une clarification de l'architecture memoire
- Le `MVP-to-solid-build mode` depend du `change impact review`, du `runbook`, et de la `docs-code coherence`

## Recommended Build Order

### Track A — Product surface
1. Guided onboarding
2. Simplified modes
3. Cleaner orchestrator response shape
4. Chunked sign-off

### Track B — Memory and context
1. Unified memory model
2. Context Manager
3. Handover summaries
4. Stale context hooks

### Track C — Safe change
1. Change impact review
2. Do-not-break contract
3. Docs-code coherence review
4. Refactor prioritization map

### Track D — Day 30
1. Release readiness
2. Hotfix flow
3. Runbook
4. RCA / learning
5. Dependency and migration lanes

### Track E — Quality and design
1. Design intelligence layer
2. Searchable UI patterns by vertical
3. MVP-to-solid-build mode

## Risks

### Risk 1: Too much surface complexity remains
Mitigation:
- ship onboarding and simplified modes first

### Risk 2: Memory refactor becomes messy
Mitigation:
- define target architecture first
- migrate by phases, not big bang

### Risk 3: New workflows feel heavy
Mitigation:
- expose only what the current user/task needs
- keep progressive disclosure everywhere

### Risk 4: Too many features, not enough product clarity
Mitigation:
- each version must strengthen one narrative:
  - v10.5 = Clarity
  - v10.6 = Control
  - v10.7 = Day 30
  - v11 = Reference

## Definition of Success

CITADEL wins for this ICP if:

- ils peuvent lancer vite
- ils peuvent modifier sans panique
- ils peuvent reprendre le contexte sans effort
- ils peuvent shipper avec un minimum de discipline
- ils n'ont pas l'impression de piloter une "house of cards"
