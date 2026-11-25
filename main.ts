import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "One Line, One Chill".
// A single sentence of horror under 200 characters that has to
// frighten a reader in one breath. Frightening first, then vivid,
// original, well built. A baby monitor, a voice exactly like the
// narrator's own, and the last clause reframes who is holding the
// baby — familiar, domestic, and impossible at once. The scare is
// not the voice. It is who the voice is holding.
const MAX_CHARS = 200;
const MESSAGE =
  "The baby monitor crackled, and a voice that sounded exactly like mine whispered, \"Don't come in here. I'm already holding her.\"";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
