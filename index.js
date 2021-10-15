let postsArr = [];

const renderPosts = () => {
    let html = "";
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p> 
                <hr />   
            `
        }
        document.querySelector('.post').innerHTML = html
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        postsArr = data.slice(0, 5)
        renderPosts();
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
    .then(post => {
        postsArr.unshift(post)
        renderPosts();
    });
});    
    


  