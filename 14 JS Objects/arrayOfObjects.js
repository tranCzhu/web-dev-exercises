// an array of objects that contain an array
var bookList = [
    {
        title: "Blah",
        author: "duh",
        comments: ["duh", "meh"]
    },
    {
        title: "Pride & Prejudice",
        author: "Jane Austin",
        comments: ["okay great", "nah bad"]
    },
    {
        title: "Bluh",
        author: "duhhh",
        comments: ["boring book", "it sucks"]
    }
];

// following is valid code
var someObjects = {};
var prop = "color";
someObjects[prop] = "red";
// expected output:
// someObjects {color: "red"};

// Retrive "Malfoy"
// from an object that contains an array of objects inside
var someObjects = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

someObjects.friends[0].name === "Malfoy";