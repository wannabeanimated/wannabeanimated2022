const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`listening on port ${PORT}`);

app.set('view engine', 'ejs');
app.use( morgan('dev') );
app.use( express.static('public') );
app.use( express.urlencoded({ extended:true }) );

app.get('/', (req, res) => {
    res.render('landing', {
        title: '🧼 Beauty Animations',
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: '💌 Contact Me!',
    })
});

app.get('/faq', (req, res) => {

    let questions = [];
    let answers = [];
    const filePath = './public/docs/faq.txt';
    
    // Read Question-Answer txt file;
    // questions on odd line, answers on even line
    const data = fs.readFileSync(filePath);
    if (data === null) {
        console.log('error reading file or file is empty.');
    }
    const stringBlock = data.toString();
    const stringSeparated = stringBlock.split('\n');
    
    // Separate questions from answers
    for (let i = 1; i <= stringSeparated.length; i++) {
        if (i % 2 === 0) {
            answers.push(stringSeparated[i - 1]);
        } else {
            questions.push(stringSeparated[i - 1]);
        }
    }
    res.render('faq', {
        title: '🙋 FAQ',
        questions,
        answers
    });
});

app.get('/clientWork', (req, res) => {

    const filePath = './public/docs/video.txt';

    //Read video.txt file for embedded video links
    const data = fs.readFileSync(filePath);
    if (data === null) {
        console.log('error reading file or file is empty.');
    }
    const stringBlock = data.toString();
    const videos = stringBlock.split('\n');

    res.render('clientWork', {
        title: '🎞️ Client Work',
        videos
    });
});

app.use( (req, res) => {
    res.status(404).render('404', {
        title:'⛔ 404 Not Found'
    });
});