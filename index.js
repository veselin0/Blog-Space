fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        console.log(postsArr);
        for (let post of postsArr) {
            document.querySelector('.post').innerHTML += 
            `
                <h3>${post.title}</h3>
                <p>${post.body}</p> 
                <hr />   
            `
        }
    });

document.querySelector('.new-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const postTitle = document.querySelector('#title').value;
    const postBody = document.querySelector('#body').value;
    const blog = {
        title : postTitle,
        body : postBody
    };
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(blog)
    })
    .then(response => response.json())
    .then(data => console.log(data));
});    
    
/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen 
 when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't 
 refresh your page. Google "form preventDefault" if you're not 
 sure what I'm talking about)
 * Combine the title value and body value into an object (with 
 a "title" property and "body" property)
 * Log the object to the console

*/

   