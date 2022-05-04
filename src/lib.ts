const regKey = [
  {
    "regex": /📣/gi,
    "replace": "# "
  },
  {
   "regex": /🔊/gi,
   "replace": "## "
  },
  {
   "regex": /🔊/gi,
   "replace": "## "
  },
  {
    "regex": /🔉/gi,
    "replace": "### "
  },
  {
    "regex": /🔈/gi,
    "replace": "#### "
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

export function parse(string: string) {
  return string.split("\n").map((line) => {
    for (const emoji of regKey) {
      line = line.replaceAll(emoji.regex, emoji.replace);
    }
    return line;
  }).join("\n");
}