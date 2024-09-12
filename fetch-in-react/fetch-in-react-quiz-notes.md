# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

- fetch()

- What two things need to be done to properly handle HTTP request errors? Why?

- checking the response status (not the status code). and catching the error in the catch block of the try/catch. If the errors are not accounted for then you app can crash

- How can `useEffect` be used to load data for a component?

- you can use async functions within the useEffect call back to retrieve data that the component can then use on the next render

- How do you use `useEffect` to load component data just once when the component mounts?

- you leave the dependency array empty

- How do you use `useEffect` to load component data every time the data key changes?

- you list the data key in the dependency array

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

- using a third-party data management library like React Query or Vercel

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
