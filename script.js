function calc() {
    let num1 = prompt('Enter first number');

    let num2 = prompt('Enter second number');

    let result = Number(num1) + Number(num2);


    alert(`${num1} + ${num2} = ${result}`);
}

function calcu() {

    let number1 = document.getElementById('num1').value;

    let number2 = document.getElementById('num2').value;


    let result = Number(number1) + Number(number2);

    document.getElementById('speciel').innerHTML = `${number1} + ${number2} = ${result}`


}


function check() {


    let number1 = Number(document.getElementById('number1').value);

    let number2 = Number(document.getElementById('number2').value);

    if (number1 > number2) {

        document.getElementById('speciel2').innerHTML = `${number1} is greater than ${number2} `
    }

    else if (number1 < number2) {

        document.getElementById('speciel2').innerHTML = `${number1} is less than ${number2} `

    }

    else if (number1 == number2) {

        document.getElementById('speciel2').innerHTML = `${number1} is equal to ${number2} `



    }


}


let array = [10, 20, 30, "hi"]
console.log(array)

let array_ = [10, 20, 30, 40, "Netanel", 3.4, -5, -10.5];
console.log(array_); // מדפיס את כל המערך
console.log(array_.length); // 8
console.log(array_[0]); // 10
console.log(array_[2]); // 30
console.log(array_[4]); // "Netanel"

//array_[array_.length - 1 להדפיס את המשתנה האחרון במערך
console.log(`The Last Element In The Array Is: ${array_[array_.length - 1]}`)


let movies = [
    {
        title: "The dark knight",
        rating: 9.5,
        year: 2008,
        imageUrl: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
        linkUrl: "https://www.imdb.com/title/tt0468569/",
        ratingUrl: "https://www.imdb.com/title/tt0468569/ratings/?ref_=tt_ov_rt"
    },
    {
        title: "superman",
        rating: 7.4,
        year: 1978,
        imageUrl: "https://play-lh.googleusercontent.com/eQsni71hGzCn9Rl2LpBq_a2Y-Cm2wPjTMVvg93tJ05xhBARO3PRsEc-_RlArPyTJnekE",
        linkUrl: "https://www.imdb.com/title/tt0078346/",
        ratingUrl: "https://www.imdb.com/title/tt0078346/ratings/?ref_=tt_ov_rt"
    },
    {
        title: "minions 2",
        rating: 6.6,
        year: 2022,
        imageUrl: "https://www.hachette.co.uk/wp-content/uploads/2019/08/hbg-title-9781408361016-24.jpg?fit=440%2C675",
        linkUrl: "https://www.imdb.com/title/tt5113044/",
        ratingUrl: "https://www.imdb.com/title/tt5113044/ratings/?ref_=tt_ov_rt"
    },   
     {
        title: "spider man no way home",
        rating: 8.3,
        year: 2021,
        imageUrl: "https://pics.filmaffinity.com/Spider_Man_No_Way_Home-164964839-large.jpg",
        linkUrl: "https://www.imdb.com/title/tt10872600/",
        ratingUrl: "https://www.imdb.com/title/tt10872600/ratings/?ref_=tt_ov_rt"
    },
    {
        title: "thor ragnarok",
        rating: 7.9,
        year: 2017,
        imageUrl: "https://upload.wikimedia.org/wikipedia/he/thumb/5/59/%D7%AA%D7%95%D7%A8_%D7%A8%D7%90%D7%92%D7%A0%D7%90%D7%A8%D7%95%D7%A7_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg/800px-%D7%AA%D7%95%D7%A8_%D7%A8%D7%90%D7%92%D7%A0%D7%90%D7%A8%D7%95%D7%A7_%D7%9B%D7%A8%D7%96%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.jpeg",
        linkUrl: "https://www.imdb.com/title/tt3501632/",
        ratingUrl: "https://www.imdb.com/title/tt3501632/ratings/?ref_=tt_ov_rt"
    },
    {
        title: "iron man 2",
        rating: 6.9,
        year: 2010,
        imageUrl: "https://c8.alamy.com/comp/RR5MCR/iron-man-2-2010-directed-by-jon-favreau-and-starring-robert-downey-jr-mickey-rourke-and-gwyneth-paltrow-RR5MCR.jpg",
        linkUrl: "https://www.imdb.com/title/tt1228705/",
        ratingUrl: "https://www.imdb.com/title/tt1228705/ratings/?ref_=tt_ov_rt"
    },
]


for (let i = 0; i < 100; i++) {
    console.log(`Hey Netanel i is equal to: ${i}`);
}


function displayMovies() {

    for (let i = 0; i < movies.length; i++) {
        document.getElementById('movies').innerHTML += `
        <div class="col">
            <div class="card shadow-sm">
            <img class="card-img" src="${movies[i].imageUrl}" alt="${movies[i].title}">
              <div class="card-body">
                <h6 class="card-text">Movie Name: </h6> ${movies[i].title}
                <h6 class="card-text">Rating: </h6> ${movies[i].rating}
                <h6 class="card-text">Year: </h6> ${movies[i].year}
                <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                  <a class="btn btn-sm btn-secondary" href="${movies[i].linkUrl}" target="_blank">View Movie</a>
                  <a class="btn btn-sm btn-outline-secondary" href="${movies[i].rateUrl}" target="_blank">Rate</a>
                 </div>
                </div>
              </div>
            </div>
          </div>
        `

    }

}


window.onload = function(){
displayMovies();

}





function sendEmail() {

    let firstName = document.querySelector('[name="FirstName"]').value;
    let lastName = document.querySelector('[name="lastName"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="messageContent"]').value;
let date = new Date();




    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "thenetanel1@gmail.com",
        Password: "443D5916E06EC469A627742AB83845F98403",
        From: "thenetanel1@gmail.com",
        To: "thenetanel1@gmail.com",
        Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
        Body: `
        <b>הודעה מאת:</b> ${firstName} ${lastName}
         <br>
         <br>
         <b>כתובת איימיל של השולח:</b> ${email}
         <br>
         <br>
         <b>נשלח בתאריך:</b> ${date}
         <br>
         <br>
         <b>תוכן ההודעה:</b>
         <br>
       ${message}
       `
    });


}

function sendEmail() {
    let firstName = document.querySelector('[name="firstName"]').value;
    let lastName = document.querySelector('[name="lastName"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="messageContent"]').value;
    let date = new Date();

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "",
        Password: "",
        From: "",
        To: "",
        Subject: `${firstName} ${lastName} `,
        Body: `
    <b>:</b> ${firstName} ${lastName}
    <br>
    <br>
    <b>:</b> ${email}
    <br>
    <br>
    <b>:</b> ${date}
    <br>
    <br>
    <b>:</b>
    <br>
    ${message}`
    });

    document.querySelector('#sent-success').style = 'display:block';

}
