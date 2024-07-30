# SteamAPI Node.JS Plugin

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/@nnzo/steamapi"><img src="https://nodei.co/npm/@nnzo/steamapi.png?compact=true" alt="" /></a>
	</p>
	<p>
		<a href="https://www.npmjs.com/package/@nnzo/steamapi"><img src="https://img.shields.io/npm/v/@nnzo/steamapi.svg?maxAge=3600" alt="NPM" /></a>
	</p>
</div>

## Instructions

1. Install this plugin:
```
npm i @nnzo/steamapi
```

2. Import it in your code:
```js
import SteamAPI from '@nnzo/steamapi'
```

3. Use it!
```js
const api = new SteamAPI('API_KEY_HERE')

async function main() {
  let item = await api.getItem(730, "AK-47 | Redline (Field-Tested)")
  console.log(item)

	let items = await api.getItems(730)
	console.log(items)
}
```
