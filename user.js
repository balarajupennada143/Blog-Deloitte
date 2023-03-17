https://jsonplaceholder.typicode.com/posts
 


$(document).ready(function() {
    $("button").click(function () {
        let posts = $("#userId").val();
        console.log(posts);
        $.get(`https://jsonplaceholder.typicode.com/posts${uid}`, function (data, status) {
            console.log(data);
        });
    });
})


$(document).ready(function() {
    $("button").click(function () {
        let uid = $("#userId").val();
        console.log(uid);
        $.get(`https://jsonplaceholder.typicode.com/users/${uid}`, function (data, status) {
            console.log(data);
        });
    });
})