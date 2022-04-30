import fs from "fs";
import chalk from "chalk";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const error = (message: string) => console.error(chalk.red("error | ") + message);
const warn = (message: string) => console.warn(chalk.yellow("warn | ") + message);

const {i, input, o, output} = argv;
if (!input && !i) {
  error("No input specified, please specify an input!");
  process.exit(1);
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

const lines = fs.readFileSync(input || i).toString().split("\n").map((line) => {
  for (const emoji of regKey) {
    line = line.replace(emoji.regex, emoji.replace);
  }
  return line;
});

fs.writeFileSync(output || "output.md", lines.join("\n"));  
