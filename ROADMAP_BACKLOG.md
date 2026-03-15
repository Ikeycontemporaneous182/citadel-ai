# CITADEL Roadmap Backlog

## Format

Chaque item est formule comme un livrable produit.

- `ID`
- `Version cible`
- `Feature`
- `Type`
- `Probleme resolu`
- `Livrable attendu`

## v10.5 — Clarity

### C-001
- Version cible: v10.5
- Feature: Guided onboarding
- Type: Workflow
- Probleme resolu: le framework parait complexe des les premieres minutes
- Livrable attendu: parcours de depart simple avec questions orientees ICP et prochaine action claire

### C-002
- Version cible: v10.5
- Feature: Simplified user modes
- Type: Structure
- Probleme resolu: l'utilisateur ne sait pas quel mode de travail lancer
- Livrable attendu: surface visible `Start / Build / Fix / Ship`

### C-003
- Version cible: v10.5
- Feature: Cleaner orchestrator response shape
- Type: Rule
- Probleme resolu: les reponses peuvent etre puissantes mais trop denses
- Livrable attendu: format stable `Plan / Risks / Recommendation`

### C-004
- Version cible: v10.5
- Feature: Chunked sign-off produit/design
- Type: Workflow
- Probleme resolu: valider un gros document est trop difficile pour un non-tech
- Livrable attendu: validation par petits blocs avec feedback simple

## v10.6 — Control

### C-101
- Version cible: v10.6
- Feature: Unified memory model
- Type: Structure
- Probleme resolu: `memory/` et `vault/` se chevauchent et creent du drift
- Livrable attendu: architecture claire `state` interne + `project hub` lisible

### C-102
- Version cible: v10.6
- Feature: Context Manager
- Type: Workflow
- Probleme resolu: perte de contexte entre sessions et chats
- Livrable attendu: snapshots, resume de reprise, handoff, onboarding summary

### C-103
- Version cible: v10.6
- Feature: Change impact review
- Type: Workflow
- Probleme resolu: les changements cassent l'existant sans prevision claire
- Livrable attendu: preview des risques avant toute modif importante

### C-104
- Version cible: v10.6
- Feature: Do-not-break contract
- Type: Rule
- Probleme resolu: les zones critiques sont trop facilement touchees
- Livrable attendu: invariants et flows sensibles explicitement proteges

### C-105
- Version cible: v10.6
- Feature: Docs-code coherence review
- Type: Workflow
- Probleme resolu: docs et code divergent rapidement
- Livrable attendu: verification systematique de coherence artefacts/code

## v10.7 — Day 30

### C-201
- Version cible: v10.7
- Feature: Hotfix flow
- Type: Workflow
- Probleme resolu: les corrections urgentes sont improvisees
- Livrable attendu: lane de correction rapide avec scope minimal et RCA ensuite

### C-202
- Version cible: v10.7
- Feature: Release readiness checklist
- Type: Skill
- Probleme resolu: les non-techs oublient des prerequis critiques avant release
- Livrable attendu: checklist actionnable avant mise en prod

### C-203
- Version cible: v10.7
- Feature: Runbook
- Type: Structure
- Probleme resolu: l'operabilite du produit n'est pas documentee
- Livrable attendu: artefact lisible run/deploy/rollback

### C-204
- Version cible: v10.7
- Feature: RCA / learning loop
- Type: Workflow
- Probleme resolu: les erreurs se repetent sans apprentissage durable
- Livrable attendu: boucle de prevention et memorisation des causes racines

### C-205
- Version cible: v10.7
- Feature: Dependency check lane
- Type: Workflow
- Probleme resolu: vieillissement silencieux des dependances
- Livrable attendu: lane dediee verification supply-chain et hygiene

### C-206
- Version cible: v10.7
- Feature: DB migration lane
- Type: Workflow
- Probleme resolu: evolution data risquee et peu guidee
- Livrable attendu: migration guidee, reversible, et verifiee

### C-207
- Version cible: v10.7
- Feature: Launch readiness score
- Type: Workflow
- Probleme resolu: pas de signal simple sur le niveau de risque du projet
- Livrable attendu: score lisible `ship / risky / blocked`

## v11.0 — Reference

### C-301
- Version cible: v11.0
- Feature: Visible project hub
- Type: Structure
- Probleme resolu: tout est trop cache dans `.citadel/`
- Livrable attendu: hub visible dans le repo avec artefacts utiles

### C-302
- Version cible: v11.0
- Feature: Design intelligence layer
- Type: Skill
- Probleme resolu: les interfaces restent trop souvent "average"
- Livrable attendu: base design searchable par style, use case, et vertical

### C-303
- Version cible: v11.0
- Feature: Reference-grade handoff
- Type: Workflow
- Probleme resolu: transfert vers dev/freelance/nouveau collaborateur difficile
- Livrable attendu: handoff packs lisibles et exploitables

### C-304
- Version cible: v11.0
- Feature: Stakeholder summary mode
- Type: Workflow
- Probleme resolu: PMs et chefs d'equipe ont besoin de vues non-code
- Livrable attendu: resume simple pour decisionnaires

### C-305
- Version cible: v11.0
- Feature: MVP-to-solid-build mode
- Type: Workflow
- Probleme resolu: passer du MVP a une base solide reste trop implicite
- Livrable attendu: lane guidee de solidification

### C-306
- Version cible: v11.0
- Feature: Refactor prioritization map
- Type: Workflow
- Probleme resolu: dur de savoir quoi solidifier en premier
- Livrable attendu: carte des zones a fort risque / fort impact

## Future / Optional

### C-401
- Version cible: Plus tard
- Feature: Permissioned subagent patterns
- Type: Structure
- Probleme resolu: certaines lanes peuvent demander plus d'isolation
- Livrable attendu: pattern de permissions plus fin

### C-402
- Version cible: Plus tard
- Feature: Expanded design agent surface
- Type: Agent
- Probleme resolu: besoin eventuel de roles design plus segmentes
- Livrable attendu: seulement si les skills design ne suffisent plus

### C-403
- Version cible: Plus tard
- Feature: New explicit ops agent
- Type: Agent
- Probleme resolu: besoin eventuel d'un role ops autonome
- Livrable attendu: seulement si KELSEY et CHARITY ne couvrent plus le besoin
