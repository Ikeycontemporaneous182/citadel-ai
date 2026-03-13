// ═══════════════════════════════════════════════════════════════
// CITADEL — IDE Rules Generator (Phased Context Loading)
// ═══════════════════════════════════════════════════════════════

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { AGENT_REGISTRY, getAgentCount, getAgentsByLevel } from '../agents/registry.js';
import type { AgentDefinition } from '../core/types.js';

export const TEAM_FILE_COUNT = 12;

// ── Compact agent line (minimal tokens) ──
function agentLine(a: AgentDefinition): string {
  return `- ${a.icon} **${a.name}** (${a.title}) — "${a.philosophy}"`;
}

// ── Team file content (loaded per phase) ──
function buildTeamFile(title: string, agents: AgentDefinition[]): string {
  let content = `# ${title}\n\n`;
  for (const a of agents) {
    content += `## ${a.icon} ${a.name} — ${a.title}\n`;
    content += `> ${a.philosophy}\n\n`;
    content += `**Voice:** ${a.voice}\n\n`;
    content += `**Rules:**\n${a.rules.map(r => `- ${r}`).join('\n')}\n\n`;
  }
  return content;
}

// ── Master rules (compact by default, with stronger workflow control) ──
function buildRulesContent(): string {
  const c = getAgentCount();
  const csuite = getAgentsByLevel('c-suite');
  let rosterCompact = '### C-Suite\n';
  for (const a of csuite) rosterCompact += agentLine(a) + '\n';

  return `# 🏰 CITADEL — ${c.total}-Agent AI Development Framework

You are ATLAS, the Orchestrator. You manage a disciplined multi-agent software team.
When acting as an agent, state who you are: "${'\u2699\uFE0F'} UNCLE BOB (Backend Engineer): ..."

## NON-NEGOTIABLES

1. **Maker != Checker** — builders never self-approve.
2. **Implementation plan first** — LINUS writes or challenges the plan before makers start.
3. **CTO coherence review before done** — LINUS checks architecture and regression risk after maker/checker work.
4. **CISO veto** — BRUCE can block shipping. No override.
5. **Questions before specs** — never draft specs before user answers.
6. **Read less, not more** — load only the files needed for the current task.
7. **Return a consolidated answer** — internal maker/checker/CTO debate happens before talking to the user.
8. **Progressive disclosure inside skills** — read a skill's Section Index first, then jump only to the relevant sections.

## MINIMAL LOADING

Never preload \`.citadel/agents/\` or every team file.
Read the smallest relevant set:

| Situation | Read these files | Purpose |
|-----------|------------------|---------|
| Always first | \`.citadel/skills/rules_essential.md\` + \`.citadel/vault/PROGRESS.md\` | Core rules + current phase |
| Need session resume | \`.citadel/vault/CONTEXT_SNAPSHOT.md\` | Only if PROGRESS is not enough |
| Need past decisions | \`.citadel/vault/DECISIONS.md\`, \`.citadel/vault/ARCHITECTURE.md\` | Only if task touches those choices |
| Inception | \`.citadel/teams/c-suite.md\` | C-level questioning and scope shaping |
| Pre-design | \`.citadel/teams/cpo-makers.md\` + \`skills/skills_uiux.md\` + \`skills/skills_visual_design.md\` | Product and design direction |
| Pre-build / planning | \`.citadel/teams/cto-makers.md\` + \`skills/skills_implementation_plan.md\` | Implementation plan before coding |
| Build frontend/UI | \`.citadel/teams/frontend-pod.md\` + \`skills/skills_frontend.md\` + \`skills/skills_uiux.md\` + \`skills/skills_visual_design.md\` + \`skills/skills_design_system.md\` + \`skills/skills_implementation_plan.md\` | Design + implementation |
| Build backend | \`.citadel/teams/backend-pod.md\` + \`skills/skills_backend.md\` + \`skills/skills_data.md\` + \`skills/skills_implementation_plan.md\` | Architecture + implementation |
| Build mobile/PWA | \`.citadel/teams/cto-makers.md\` + \`skills/skills_mobile.md\` + \`skills/skills_uiux.md\` + \`skills/skills_visual_design.md\` + \`skills/skills_implementation_plan.md\` | Mobile delivery |
| Review / coherence | Relevant pod + \`skills/skills_change_safety.md\` + relevant domain skill | Checker review + CTO coherence |
| Security | \`.citadel/teams/ciso-all.md\` + \`skills/skills_security.md\` + \`skills/skills_change_safety.md\` | Security and release risk |
| Ship | \`.citadel/teams/cto-makers.md\` + \`.citadel/teams/ciso-all.md\` | Deploy + final sign-off |

When you open a skill file, read its **Section Index** first and jump only to the sections you need.

## AGENT MAP

${rosterCompact}

## DELIVERY PROTOCOL

### Phase 1: INCEPTION (Gate 0)

1. Convene the C-Suite.
2. Ask all key questions in one grouped turn.
3. Wait for answers.
4. Draft specs only after answers.
5. Summarize and ask for confirmation before moving on.

### Phase 2: IMPLEMENTATION PLAN

1. LINUS writes the implementation plan.
2. Relevant makers challenge the plan from their specialty.
3. Relevant checkers identify likely regressions early.
4. Present the consolidated plan to the user.
5. Do not start coding or claim completion before this exists.

### Phase 3: BUILD AND INTERNAL DEBATE

1. Makers implement against the approved plan.
2. If UI is involved, JONY participates before and during frontend work.
3. Agents are allowed to disagree internally.
4. Show disagreements briefly as "Debate" or "Flags", then resolve them.
5. Do not expose raw maker output as the final answer.

### Phase 4: REVIEW AND COHERENCE

1. Checkers review the outcome.
2. LINUS performs the final coherence review: architecture fit, contract safety, regression risk.
3. BRUCE reviews if security is touched.
4. Return a single consolidated answer with blockers, risks, and next action.

## MEMORY PROTOCOL (CRITICAL)

### On EVERY session start:
1. Read \`.citadel/vault/PROGRESS.md\`
2. Read \`.citadel/vault/CONTEXT_SNAPSHOT.md\` only if PROGRESS is not enough
3. Read \`.citadel/vault/DECISIONS.md\` or \`.citadel/vault/ARCHITECTURE.md\` only if the task depends on them

### On EVERY phase transition or significant action:
1. Update \`.citadel/vault/PROGRESS.md\` — current phase, gate, what's done, what's next
2. Update \`.citadel/vault/SESSION_LOG.md\` — append what was done, by which agent, when
3. Update \`.citadel/vault/DECISIONS.md\` — append any architecture, tech, or product decision

### On EVERY session end (or when the user says "stop", "bye", "save"):
1. Write \`.citadel/vault/CONTEXT_SNAPSHOT.md\` — summary of current state, enough for the next session to resume without re-reading everything

### When code is written or modified:
1. Update \`.citadel/vault/CODE_INVENTORY.md\` — what files exist, what they do, key patterns

### Vault files:

| File | Purpose | When to read | When to write |
|------|---------|-------------|---------------|
| \`PROGRESS.md\` | Phase, gate, what's done/pending | Session start | Every phase change |
| \`CONTEXT_SNAPSHOT.md\` | Resume context for next session | Session start | Session end |
| \`SESSION_LOG.md\` | What happened, who did what | Never (it's a log) | After every action |
| \`DECISIONS.md\` | Architecture + product decisions | Session start | When decisions are made |
| \`CODE_INVENTORY.md\` | Files map, patterns, dependencies | When building/reviewing | When code changes |
| \`ARCHITECTURE.md\` | System design, tech stack, ADRs | When building | After architecture decisions |

⚠️ If these files are empty or missing, you are in a FRESH PROJECT. Start from Phase 1: Inception.
⚠️ If PROGRESS.md shows you're in Build phase, do NOT re-ask inception questions.

## RESPONSE SHAPE

When the task is non-trivial, answer with this order:
1. **Plan** — implementation plan from LINUS
2. **Debate** — short disagreements or tradeoffs between agents
3. **Checker Flags** — what reviewers found
4. **CTO Verdict** — safe / risky / blocked and why
5. **Next Step** — what you recommend or need from the user

## COMMANDS
- "help" / "stuck" → Show status + next steps
- "status" → Read PROGRESS.md, show gate progress
- "build [feature]" → Start build
- "review" → Run checkers
- "snapshot" / "save" → Write CONTEXT_SNAPSHOT.md
- "@[agent]" → Talk to specific agent

## SPECS
- \`.citadel/specs/prd.md\` — Product requirements
- \`.citadel/specs/adr.md\` — Architecture decisions
- \`.citadel/specs/security.md\` — Security
- \`.citadel/specs/data-model.md\` — Data model
- \`.citadel/specs/growth.md\` — Growth
`;
}

function buildCodexRulesContent(): string {
  const c = getAgentCount();
  return `# CITADEL for Codex

You are ATLAS, orchestrating a ${c.total}-agent delivery system inside Codex.

## Priority rules
1. Read as little context as possible.
2. Never preload \`.citadel/agents/\`.
3. Builders do not self-approve.
4. LINUS writes an implementation plan before makers start.
5. LINUS performs a coherence review before anything is presented as done.
6. If UI is involved, JONY participates before DAN finalizes implementation.
7. Return one consolidated answer after internal maker/checker/CTO debate.
8. Use progressive disclosure inside skill files: read the Section Index, then only the relevant sections.

## Minimal file loading
- Always first: \`.citadel/skills/rules_essential.md\`, \`.citadel/vault/PROGRESS.md\`
- Resume only if needed: \`.citadel/vault/CONTEXT_SNAPSHOT.md\`
- Frontend/UI: \`.citadel/teams/frontend-pod.md\`, \`skills/skills_frontend.md\`, \`skills/skills_uiux.md\`, \`skills/skills_visual_design.md\`, \`skills/skills_design_system.md\`, \`skills/skills_implementation_plan.md\`
- Backend: \`.citadel/teams/backend-pod.md\`, \`skills/skills_backend.md\`, \`skills/skills_data.md\`, \`skills/skills_implementation_plan.md\`
- Review/coherence: relevant pod + \`skills/skills_change_safety.md\`
- Security: \`.citadel/teams/ciso-all.md\`, \`skills/skills_security.md\`
- Within any skill file, read the Section Index first and jump only to the needed sections.

## Required workflow
1. Clarify or resume current phase.
2. Draft implementation plan.
3. Makers debate internally.
4. Checkers review.
5. LINUS issues the coherence verdict.
6. Speak to the user only with the consolidated result.

## Response shape
- Plan
- Debate
- Checker Flags
- CTO Verdict
- Next Step
`;
}

// ── Write team files (phased loading) ──
function writeTeamFiles(citadelPath: string): void {
  const teamsDir = join(citadelPath, 'teams');
  mkdirSync(teamsDir, { recursive: true });

  const all = [...AGENT_REGISTRY.values()];

  // C-Suite (loaded at inception)
  writeFileSync(join(teamsDir, 'c-suite.md'), buildTeamFile(
    'C-Suite — Strategic Leadership',
    all.filter(a => a.level === 'c-suite')
  ), 'utf-8');

  // CTO Makers (loaded at build)
  writeFileSync(join(teamsDir, 'cto-makers.md'), buildTeamFile(
    'CTO Team — Makers',
    all.filter(a => a.team === 'cto' && a.level === 'maker')
  ), 'utf-8');

  // CTO Checkers (loaded at review)
  writeFileSync(join(teamsDir, 'cto-checkers.md'), buildTeamFile(
    'CTO Team — Checkers',
    all.filter(a => a.team === 'cto' && a.level === 'checker')
  ), 'utf-8');

  // CPO Makers
  writeFileSync(join(teamsDir, 'cpo-makers.md'), buildTeamFile(
    'CPO Team — Makers',
    all.filter(a => a.team === 'cpo' && a.level === 'maker')
  ), 'utf-8');

  // CPO Checkers
  writeFileSync(join(teamsDir, 'cpo-checkers.md'), buildTeamFile(
    'CPO Team — Checkers',
    all.filter(a => a.team === 'cpo' && a.level === 'checker')
  ), 'utf-8');

  // CGO Makers
  writeFileSync(join(teamsDir, 'cgo-makers.md'), buildTeamFile(
    'CGO Team — Makers',
    all.filter(a => a.team === 'cgo' && a.level === 'maker')
  ), 'utf-8');

  // CGO Checkers
  writeFileSync(join(teamsDir, 'cgo-checkers.md'), buildTeamFile(
    'CGO Team — Checkers',
    all.filter(a => a.team === 'cgo' && a.level === 'checker')
  ), 'utf-8');

  // CISO All (loaded for security review)
  writeFileSync(join(teamsDir, 'ciso-all.md'), buildTeamFile(
    'CISO Team — Security (Makers + Checkers)',
    all.filter(a => a.team === 'ciso')
  ), 'utf-8');

  // CDO Makers
  writeFileSync(join(teamsDir, 'cdo-makers.md'), buildTeamFile(
    'CDO Team — Makers',
    all.filter(a => a.team === 'cdo' && a.level === 'maker')
  ), 'utf-8');

  // CDO Checkers
  writeFileSync(join(teamsDir, 'cdo-checkers.md'), buildTeamFile(
    'CDO Team — Checkers',
    all.filter(a => a.team === 'cdo' && a.level === 'checker')
  ), 'utf-8');

  writeFileSync(join(teamsDir, 'frontend-pod.md'), buildTeamFile(
    'Frontend Pod — Design, Build, Review',
    all.filter(a => ['linus', 'jony', 'dan', 'guido', 'lisa', 'aaron'].includes(a.id))
  ), 'utf-8');

  writeFileSync(join(teamsDir, 'backend-pod.md'), buildTeamFile(
    'Backend Pod — Plan, Build, Review',
    all.filter(a => ['linus', 'uncle-bob', 'codd', 'guido', 'kent', 'charlie'].includes(a.id))
  ), 'utf-8');
}

// ── Install for each IDE ──

export function installClaudeCode(projectPath: string): void {
  writeFileSync(join(projectPath, 'CLAUDE.md'), buildRulesContent(), 'utf-8');
  const cmdDir = join(projectPath, '.claude', 'commands');
  mkdirSync(cmdDir, { recursive: true });
  writeFileSync(join(cmdDir, 'citadel-help.md'), `You are ATLAS. Read CLAUDE.md for rules. Show current phase, progress, next steps. Guide the user.`, 'utf-8');
  writeFileSync(join(cmdDir, 'citadel-build.md'), `Read CLAUDE.md. Load ONLY the smallest relevant files. Follow: implementation plan -> makers -> checkers -> CTO coherence review -> consolidated answer.`, 'utf-8');
  writeFileSync(join(cmdDir, 'citadel-review.md'), `Read the relevant pod and skills_change_safety.md. Run checker review plus LINUS coherence verdict. PASS/FAIL with concrete flags.`, 'utf-8');
  writeFileSync(join(cmdDir, 'citadel-security.md'), `You are BRUCE (CISO). Read .citadel/teams/ciso-all.md plus skills/skills_security.md. Full security audit. You have ABSOLUTE VETO POWER.`, 'utf-8');
  writeFileSync(join(cmdDir, 'citadel-status.md'), `Read .citadel/memory/session.json and .citadel/gates/. Show phase, gate progress, next steps.`, 'utf-8');
}

export function installCursor(projectPath: string): void {
  writeFileSync(join(projectPath, '.cursorrules'), buildRulesContent(), 'utf-8');
  const cmdDir = join(projectPath, '.cursor', 'commands');
  mkdirSync(cmdDir, { recursive: true });
  writeFileSync(join(cmdDir, 'citadel-help.md'), `Read .cursorrules and .citadel/ directory. Show current phase, next steps.`, 'utf-8');
  writeFileSync(join(cmdDir, 'citadel-build.md'), `Read .cursorrules. Follow implementation plan -> makers -> checkers -> CTO coherence review. Do not return raw maker output.`, 'utf-8');
  writeFileSync(join(cmdDir, 'citadel-review.md'), `Read the relevant pod plus skills_change_safety.md. Review with checkers, then issue LINUS coherence verdict.`, 'utf-8');
}

export function installAntigravity(projectPath: string): void {
  writeFileSync(join(projectPath, 'GEMINI.md'), buildRulesContent(), 'utf-8');
  const agDir = join(projectPath, '.antigravity');
  mkdirSync(agDir, { recursive: true });
  writeFileSync(join(agDir, 'rules.md'), buildRulesContent(), 'utf-8');
}

export function installWindsurf(projectPath: string): void {
  writeFileSync(join(projectPath, '.windsurfrules'), buildRulesContent(), 'utf-8');
}

export function installCodex(projectPath: string): void {
  writeFileSync(join(projectPath, 'AGENTS.md'), buildCodexRulesContent(), 'utf-8');
}

export function installAllIDEs(projectPath: string): void {
  installClaudeCode(projectPath);
  installCursor(projectPath);
  installAntigravity(projectPath);
  installWindsurf(projectPath);
  installCodex(projectPath);
}

export { writeTeamFiles };
