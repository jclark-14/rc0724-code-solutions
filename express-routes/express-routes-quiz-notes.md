# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

C: POST
R: GET
U: PUT
D: Delete

No the server is not required to implement these conventions

- What is Express middleware?

- Express middleware are functions that run when specific http endpoints are hit. They have access to req and res objects as well as middleware next function

- What is Express middleware useful for?

- Express middleware is a core part of server response to http request

- How do you mount a middleware with an Express application?

- by using the app.use() for global mounting or app.get() for specific mounting of routes

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

- the req and res object

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
