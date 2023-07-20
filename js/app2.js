$(document).ready(function(){

    // Llenar tabla pedorra 2
    async function fillTable() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        let template = "";

        data.sort(function(a, b){return b.id - a.id}); 
        data.forEach(post => {
            template += `
                <tr id="${post.id}">
                    <td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td>
                        <a href="interior.html?postId=${post.id}">
                            ${post.title}
                        </a>
                    </td>
                    <td>${post.body}</td>
                </tr>
            `;
            $('#table_posts').html(template);
        });
    }
    fillTable();
})    

