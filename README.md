# SmileyDown
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[https://willuhm-js.github.io/SmileyDown](https://willuhm-js.github.io/SmileyDown)

A compiled markdown language that uses emoticons. 

## Installation

```
deno install --allow-write --allow-read -n smileydown https://raw.githubusercontent.com/wiluhm-js/smileydown/main/src/index.ts
deno run --allow-read --allow-write src/index.ts
bash compile.sh
```

## Example File
```
📣Never gonna give you up!📣

🔊Artist🔊
🦍Never Gonna Give You Up🦍 is ⛔not⛔ sung by Rick Astley.

🔊YouTube Video🔊
🔗https://www.youtube.com/watch?v=dQw4w9WgXcQ🔗
```

## Formatting Table
<table>
  <thead>
    <tr>
      <th>Emoji</th>
      <th>Description</th>
      <th>Input</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>📣</td>
      <td>Heading 1</td>
      <td>📣Heading 1📣</td>
      <td># Heading 1</td>
    </tr>
    <tr>
      <td>🔊</td>
      <td>Heading 2</td>
      <td>🔊Heading 2🔊</td>
      <td>## Heading 2</td>
    </tr>
    <tr>
      <td>🔉</td>
      <td>Heading 3</td>
      <td>🔉Heading 3🔉</td>
      <td>### Heading 3</td>
    </tr>
    <tr>
      <td>🔈</td>
      <td>Heading 4</td>
      <td>🔈Heading 4🔈</td>
      <td>#### Heading 4</td>
    </tr>
    <tr>
      <td>🔗</td>
      <td>Link</td>
      <td>🔗https://www.example.com🔗</td>
      <td>[https://www.example.com](https://www.example.com)</td>
    </tr>
    <tr>
      <td>🖼</td>
      <td>Image</td>
      <td>🖼./example.jpg🖼</td>
      <td>![./example.jpg](./example.jpg)</td>
    </tr>
    <tr>
      <td>💻</td>
      <td>Code</td>
      <td>💻Hello, world!💻</td>
      <td>`Hello, world!`</td>
    </tr>
    <tr>
      <td>🖥</td>
      <td>Code Block</td>
      <td>🖥Hello, world!🖥</td>
      <td>```Hello, world!```</td>
    </tr>
    <tr>
      <td>⛔</td>
      <td>Strikethrough</td>
      <td>⛔Lorem ispum⛔</td>
      <td>~~Lorem ispum~~</td>
    </tr>
    <tr>
      <td>🦍</td>
      <td>Bold</td>
      <td>🦍Lorem ispum🦍</td>
      <td>**Lorem ispum**</td>
    </tr>
    <tr>
      <td>🎩</td>
      <td>Italics</td>
      <td>🎩Lorem ispum🎩</td>
      <td>*Lorem ispum*</td>
    </tr>
    <tr>
      <td>📜</td>
      <td>Block Quote</td>
      <td>📜There once was a man from Nantucket...</td>
      <td>&gt; There once was a man from Nantucket...</td>
    </tr>
    <tr>
      <td>📋</td>
      <td>Unordered List</td>
      <td>
        📋Item 1<br />
        📋Item 2<br />
        📋Item 3
      </td>
      <td>
        - Item 1<br />
        - Item 2<br />
        - Item 3
      </td>
    </tr>
  </tbody>
</table>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/LeoDog896"><img src="https://avatars.githubusercontent.com/u/26509014?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tristan</b></sub></a><br /><a href="https://github.com/willuhm-js/smileydown/commits?author=LeoDog896" title="Code">💻</a> <a href="https://github.com/willuhm-js/smileydown/commits?author=LeoDog896" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
