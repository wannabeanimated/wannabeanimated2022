document.addEventListener('scroll', () => {

    let topPage = window.scrollY;
    
    if (topPage > 0) {
        document.querySelector('nav').style.height = '80px';
    } else {
        document.querySelector('nav').style.height = '100px';
    }
});

// Navbutton
const navWindow = document.querySelector('.nav-mobile');
const navBurger = document.querySelector('.navbtn');
const faq = document.querySelector('.faq');
navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    navWindow.classList.toggle('active');
    faq.classList.toggle('deactivate');

});

// FAQ Question Dropdowns
// FAQ +/- btn
const plusMinusBtn = document.querySelectorAll('.plusMinusBtn');
const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answers');

questions.forEach( question => {
    
    question.addEventListener('click', () => {
        answers.forEach( answer => {
            if (question.id === answer.id) {
                question.classList.toggle('active');
                answer.classList.toggle('active');
            }
        plusMinusBtn.forEach( btn => {
            if (question.id ===  btn.id) {
                btn.classList.toggle('active');
            }
        })
        });
    });
});
plusMinusBtn.forEach( btn => {
    btn.addEventListener('click', () => {

        questions.forEach(question => {
            if (btn.id === question.id) {
                btn.classList.toggle('active');
                question.classList.toggle('active');
            }
            answers.forEach( answer => {
                if (btn.id === answer.id) {
                    answer.classList.toggle('active');
                }
            });
        });
    });
});

// Youtube video delete load icon onload
const iframeVideos = document.querySelectorAll('.youtubeVideo');
const loadIconPositions = document.querySelectorAll('.loadIconPosition');

iframeVideos.forEach(iframe => {

    iframe.addEventListener('load', () => {
        
        loadIconPositions.forEach(position => {
            if (position.id === iframe.id) {
                position.remove();
            }
        });
    });
});