var comments = {
    data: ["haha", "ok", "meh"]
}
comments.print = function() {
    this.data.forEach(function(comment) {
        console.log(comment);
    });
}
comments.print();