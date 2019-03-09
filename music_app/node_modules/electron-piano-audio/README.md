## Electron Audio

An NPM package to create audio in Electron easily.

### Usage

```JavaScript
var audio = require("electron-audio")
audio("...") // Notes are decided by the characters inputted, going from the keyboard positions (1 is lowest, M is highest). All notes are alphanumerical.
```

### Installation

```sh
npm install electron-audio
```

### License

MIT

### Note

The code here was based on the code found <a href="https://github.com/otanim/virtual-piano">here.</a>
The only changes to it were to make it work as an Electron package rather than in one specifically designed web page.
