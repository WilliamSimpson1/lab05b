const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=australia`;
    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    res.render("index", {uni_data: unis});
});

app.get("/denmark", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=denmark`;
    let response = await fetch(url);
    let unis = await response.json();
    res.render("index", {uni_data: unis});
});

app.get("/france", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=france`;
    let response = await fetch(url);
    let unis = await response.json();
    res.render("index", {uni_data: unis});
});

app.get("/unitedstates", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=united+states`;
    let response = await fetch(url);
    let unis = await response.json();
    res.render("index", {uni_data: unis});
});


app.listen(3000, () => {
    console.log("Server is listening on port localhost:3000");
});