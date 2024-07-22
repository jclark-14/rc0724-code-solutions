# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

- to see the value of the variable

- What is the purpose of events and event handling?

- events capture user inputs. event handling responds to that user input

- Are all possible parameters required to use a JavaScript method or function?

- string, number, object, array, variable or function

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

- addEventListener

- What is a callback function?

- it is a function that is passed to another function as an argument.

- What object is passed into an event listener callback when the event fires?

- the event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

- the target element that triggered the event object creation. console.log(event.target)

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick); ---- this one is correct. this is only the function definition
  ```
  ```js
  element.addEventListener('click', handleClick()); --- this is one incorrect - this function is being called
  ```

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
