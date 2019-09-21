// GET: retriving google home page 
// POST: post new comments, signing up for a website, submitting a new post
// PATCH: asking for data to come back and edit them; sending out a facebook image but changes the caption later
// DELETE: when you delete something

// What we get back from a GET request:
// body (html, css, js), headers (contains meta data like status code about the response), cookies, tests

// query string always starts after a ?, i.g. search?q=keyword

// Writing a post request
<form action="/createDog" method="POST">
    <input type="text" name="name" placeholder="name">
    <input type="text" name="breed" placeholder="breed">
    <input type="submit"></input>
</form>
