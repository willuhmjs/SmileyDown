<div class="text-center mb-5">
  <img class="ms-2 me-2 w-75" src="./logo.png" alt="SmileyDown logo"/>
</div>

<p class="lead text-center mb-5">SmileyDown: A compiled markdown language that uses emoticons. <a href="https://www.github.com/willuhm-js/SmileyDown/">Learn more</a>.</p>

## Example File
```
📣Never gonna give you up!

🔊Artist
🦍Never Gonna Give You Up🦍 is ⛔not⛔ sung by Rick Astley.

🔊YouTube Video
🔗https://www.youtube.com/watch?v=dQw4w9WgXcQ🔗
```

## Formatting Table
Click an emoji below to copy it to your clipboard.

<script>
  function copy(e) {
    const temp = document.createElement("textarea");
    temp.value = e;
    document.body.appendChild(temp);
    temp.select();
    navigator.clipboard.writeText(temp.value);
    document.body.removeChild(temp);
  }
</script>
<style>
  .emojiButton {
    border: none;
    padding: 0.7rem;
    background-color: transparent;
    font-size: 20px;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .emojiButtonTD:hover  {
    background-color: rgba(128, 128, 128, 0.4);
    transition: background-color 0.3s;
  }

  .emojiButtonTD:active {
    background-color: rgba(128, 128, 128, 0.6);
    transition: background-color 0.1s;
  }
</style>
<table id="table" class="table table-bordered align-middle text-center">
  <thead>
    <tr>
      <th scope="col">Emoji</th>
      <th scope="col">Description</th>
      <th scope="col">Input</th>
      <th scope="col">Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">📣</button></td>
      <td>Heading 1</td>
      <td>📣Heading 1</td>
      <td># Heading 1</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">🔊</button></td>
      <td>Heading 2</td>
      <td>🔊Heading 2</td>
      <td>## Heading 2</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">🔉</button></td>
      <td>Heading 3</td>
      <td>🔉Heading 3</td>
      <td>### Heading 3</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">🔈</button></td>
      <td>Heading 4</td>
      <td>🔈Heading 4</td>
      <td>#### Heading 4</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">🔗</button></td>
      <td>Link</td>
      <td>🔗https://www.example.com🔗</td>
      <td>[https://www.example.com](https://www.example.com)</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">🖼</button></td>
      <td>Image</td>
      <td>🖼./example.jpg🖼</td>
      <td>![./example.jpg](./example.jpg)</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">💻</button></td>
      <td>Code</td>
      <td>💻Hello, world!💻</td>
      <td>`Hello, world!`</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">🖥</button></td>
      <td>Code Block</td>
      <td>🖥Hello, world!🖥</td>
      <td>```Hello, world!```</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">⛔</button></td>
      <td>Strikethrough</td>
      <td>⛔Lorem ispum⛔</td>
      <td>~~Lorem ispum~~</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">🦍</button></td>
      <td>Bold</td>
      <td>🦍Lorem ispum🦍</td>
      <td>**Lorem ispum**</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">🎩</button></td>
      <td>Italics</td>
      <td>🎩Lorem ispum🎩</td>
      <td>*Lorem ispum*</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">📜</button></td>
      <td>Block Quote</td>
      <td>📜There once was a man from Nantucket...</td>
      <td>&gt; There once was a man from Nantucket...</td>
    </tr>
    <tr>
      <td class="emojiButtonTD" style="padding: 0px;"><button class="emojiButton" onclick="copy(this.innerText)">📋</button></td>
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
