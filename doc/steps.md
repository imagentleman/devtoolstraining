## Inspect Elements
### Document Object Model

- Explaining about the DOM.
- Inspect at the basic HTML tags, minimum required tag as `html`, `head`, `body`.
- Review some HTML5 tags.

### CRUD of DOM
- Create a DOM node using the `Elements` tab in devTools.
```html
<div class="created-node" id="new-node" data-text="we just created a new DOM node"></div>
```
- Create a DOM node inside the `div` I just created.
```html
<ul class="list">
	<li>3rd Element</li>
	<li>4th Element</li>
</ul>
```
- Edit `#new-node` using the `Elements` tab in devTools. As simple as a double click.
- Delete `#new-node`.

### Selectors and XPath
- Search for the `body` tag. `cmd + f`.
- Copy the Selector.
- Paste it in console tab:
```js
$$('selector')
```
- Search for the `body` tag. `cmd + f`.
- Copy the XPath.
- Paste it in console tab:
```js
$x('xpath')
```
> Once you get a result in terminal, try to Reveal in Elements panel.

### Styles (CSS)
Inside `Elements` tab, check the `styles` sub-tab.
Click on `:hov`

- Turn on and off the options for each Node you want to inspect.
- The browser will show the different applied styles for each State.

You can add you own CSS rules, just keep in mind those will be lost after a browser reload.
