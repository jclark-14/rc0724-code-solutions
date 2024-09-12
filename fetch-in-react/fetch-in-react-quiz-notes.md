# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

- fetch()

- What two things need to be done to properly handle HTTP request errors? Why?

- read the http response and have appropriate error handling when response is not ok. Server can respond with 400 and 500 errors successfully. We need to be sure to handles these and they are caught it the response from http request

- How can `useEffect` be used to load data for a component?

- After the component renders. A call is made to the server/api with the needed data. once data is received, useEffect can call a rerender with needed updates

- How do you use `useEffect` to load component data just once when the component mounts?

- you leave the dependency array empty

- How do you use `useEffect` to load component data every time the data key changes?

- you list that data state in the dependency array

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

- React Query and Vercel SWR

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
