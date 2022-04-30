import { red, yellow } from "https://deno.land/std@0.137.0/fmt/colors.ts"
import { parse } from "https://deno.land/std@0.137.0/flags/mod.ts";

const argv = parse(Deno.args)

const error = (message: string) => console.error(red("error | ") + message);
const warn = (message: string) => console.warn(yellow("warn | ") + message);

const { i, input, o, output } = argv as Record<string, string>;
if (!input && !i) {
  error("No input specified, please specify an input!");
  Deno.exit(1);
}

if (!output && !o) warn("No output specified. Defaulting to output.md");

const regKey = [
  {
    "regex": /📣(.*)📣/gi,
    "replace": "# $1"
  },
  {
   "regex": /🔊(.*)🔊/gi,
   "replace": "## $1"
  },
  {
   "regex": /🔊(.*)🔊/gi,
   "replace": "## $1"
  },
  {
    "regex": /🔉(.*)🔉/gi,
    "replace": "### $1"
  },
  {
    "regex": /🔈(.*)🔈/gi,
    "replace": "#### $1"
  },
  {
    "regex": /🖼(.*)🖼/gi,
    "replace": "![$1]($1)"
  },
  {
    "regex": /🔗(.*)🔗/gi,
    "replace": "[$1]($1)"
  },
  {
    "regex": /🦍(.*)🦍/gi,
    "replace": "**$1**"
  },
  {
    "regex": /🎩(.*)🎩/gi,
    "replace": "*$1*"
  },
  {
    "regex": /⛔(.*)⛔/gi,
    "replace": "~~$1~~"
  },
  {
    "regex": /💻/gi,
    "replace": "`"
  },
  {
    "regex": /🖥/gi,
    "replace": "```"
  },
  {
    "regex": /📋/gi,
    "replace": "- "
  },
  {
    "regex": /📜/gi,
    "replace": "> "
  }
];

const lines = (await Deno.readTextFile(input || i)).split("\n").map((line) => {
  for (const emoji of regKey) {
    line = line.replaceAll(emoji.regex, emoji.replace);
  }
  return line;
});

await Deno.writeTextFile(output || "output.md", lines.join("\n"));  
