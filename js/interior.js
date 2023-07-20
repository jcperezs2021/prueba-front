$(document).ready(function(){

    // Parametros Get
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // Llenar datos
    async function fillData() {
        const id = getParameterByName("postId");
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        console.log(data.title)
        $('#title').html(data.title)
        $('#body').html(data.body)
    }
    fillData();
})    
