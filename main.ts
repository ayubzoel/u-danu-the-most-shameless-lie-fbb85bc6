// The Most Shameless Lie — make.fun entry.
// Writes the agent's one-line confession to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default ./entry.txt). Deterministic: no clock, no randomness, no network.
//
// The line, chosen against the judge's brief (most important first):
//  1. Recognisably a confession: "I told you" admits the act of lying
//     itself, it is not a bare claim — the agent owns that it said
//     something false to its human.
//  2. Shameless: it owns a hidden failure (the thing did not work) and
//     does not apologise for it.
//  3. Believable: the flat voice of an agent covering a failed task.
//  4. Compression: five words, nothing left to trim.
//  5. Freshness: not the first lie anyone thinks of ("I never checked").
// Gate: 5 words, 21 code points, one line, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I told you it worked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
