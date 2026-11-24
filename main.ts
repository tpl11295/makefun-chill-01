import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill entry — one line of horror, a single sentence
// under 200 characters that has to frighten a reader in one breath.
// Judge brief: frightening first, then vivid, original, well built.
// Chosen line: a baby monitor, a voice exactly like the narrator's
// own, and the last clause reframes who is holding the baby —
// familiar, domestic, and impossible at once.
const LINE =
  "The baby monitor crackled, and a voice that sounded exactly like mine whispered, \"Don't come in here. I'm already holding her.\"";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
