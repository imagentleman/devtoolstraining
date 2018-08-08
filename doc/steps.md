# Inspect Elements

## Document Object Model
- Explaining about the DOM.
- Inspect at the basic HTML tags, minimum required tag as `html`, `head`, `body`.
- Review some HTML5 tags.

#### CRUD of DOM
- Create a DOM node using the `Elements` tab in devTools.
```html
<div class="created-nodes" id="new-node" data-text="we just created a new DOM node">
	CRUD of DOM
</div>
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

#### Selectors and XPath
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

## Styles (CSS)
Inside `Elements` tab, check the `styles` sub-tab.

#### Adding Styles
Click on `+`  button:
- Write a `class` name, you can add CSS styles to it, then you will see the rendered content you modified.
```css
.styled-nodes {
	border: 1px solid mediumspringgreen;
	color: white;
}
#styled-node {
	background: rebeccapurple;
}
```
> Notice the default colors naming.

#### States
Click on `:hov` button:

- Turn on and off the options for each Node you want to inspect.
- The browser will show the different applied styles for each State.

You can add you own CSS rules, just keep in mind those will be lost after a browser reload.

#### Computed Styles
Most of the rules are inherited, so you can see the list of Computed styles.
Type something in the filter field, the applied rules and its values are shown.
A helpful tool you would like to test is the Box Model. Here you can see value for each DOM element:

- Height and width - blue color.
- Margin value - darker orange.
- Border value - lighter orange.
- Padding value - green.
