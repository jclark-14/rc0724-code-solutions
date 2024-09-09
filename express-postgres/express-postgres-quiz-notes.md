# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

- It allows you to use SQL commands in node.js. It is the official client for postgreSQL for node.js

- How do you tell `pg` which database to connect to?

- There are multiple ways. We connected to the pagila database using a connection object like:

import pg from 'pg';

// only create ONE pool for your whole server.
// Note the database name at the end of the connection string.
const db = new pg.Pool({
connectionString: 'postgres://dev:dev@localhost/pagila',
ssl: {
// Allow non-SSL traffic to localhost
rejectUnauthorized: false,
},
});

- How do you send SQL to PostgreSQL from your Express server?

- using a parameterized query. creating an sql object and using that to query the database

- How do you access the rows that get returned from the SQL query?

- const theRows = result.rows

- What must you always remember to put around your asynchronous route handlers? Why?

- You must wrap your asynchronous route handlers in error handlers. To prevent incomplete responses or server crashes

- What is a SQL Injection Attack and how do you avoid it in `pg`?

- SQL Injection Attack can happen when you allow users to directly control your SQL query. Enabling them to insert commands that the database will execute using the query url. You can avoid it by making all your query parameterized. Using $1, $2.... and referencing those values later.

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
