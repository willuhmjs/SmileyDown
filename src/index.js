import fs from "fs";
import winston from "winston";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
  ],
  format: winston.format.cli()
});

const {i, input, o, output} = argv;
if (!input && !i) {
  logger.error("No input specified, please specify an input!");
  process.exit(1);
}
if (!output && !o) logger.warn("No output specified. Defaulting to output.md");

let lines = fs.readFileSync(input || i).toString().split("\n");

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

lines = lines.map((line) => {
  for (const emoji of regKey) {
    line = line.replace(emoji.regex, emoji.replace);
  }
  return line;
});

fs.writeFileSync(output || i || "output.md", lines.join("\n"));  
