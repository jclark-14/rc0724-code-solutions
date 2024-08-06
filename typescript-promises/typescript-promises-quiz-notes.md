# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

- When the JS runtime has finished all its synchronous work, it looks at the Event Queue to see if there are any tasks to run

- What are the three states a Promise can be in?

-Pending: The initial state; the promise is neither resolved nor rejected.
Fulfilled: The promise has been resolved, and the corresponding then handlers will be called.
Rejected: The promise has been rejected, and the catch handlers will be invoked.

- How do you handle the fulfillment of a Promise?

- with the .then(callback)

- How do you handle the rejection of a Promise?

- with the .catch(callback)

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
