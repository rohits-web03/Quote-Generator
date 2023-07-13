//Variables
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:'"The bad news is time flies. The good news is you are the pilot."',
    person:'Michael Altshuler'
}, {
    quote:'"Life has got all those twists and turns. You have got to hold on tight and off you go."',
    person:'Nicole Kidman'
}, {
    quote:'"Keep your face always toward the sunshine, and shadows will fall behind you."',
    person:'Walt Whitman'
}, {
    quote:'"Belief creates the actual fact."',
    person:'William James'
}, {
    quote:'"In a gentle way, you can shake the world."',
    person:'Mahatma Gandhi'
}, {
    quote:'"No matter what people tell you, words and ideas can change the world."',
    person:'Robin Williams'
}, {
    quote:'"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    person:'Winston Churchill'
}, {
    quote:'"You define your own life. Do not let other people write your script."',
    person:'Oprah Winfrey'
}, {
    quote:'"You are never too old to set another goal or to dream a new dream."',
    person:'Malala Yousafzai'
}, {
    quote:'"It is during our darkest moments that we must focus to see the light."',
    person:'Aristotle'
}, {
    quote:'"Not having the best situation, but seeing the best in your situation is the key to happiness."',
    person:'Marie Forleo'
}, {
    quote:'"Silence is the last thing the world will ever hear from me."',
    person:'Marlee Matlin'
}, {
    quote:' "Spread love everywhere you go."',
    person:'Mother Teresa'
}, {
    quote:'"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on."',
    person:'Lady Gaga'
}, {
    quote:'"Weaknesses are just strengths in the wrong environment."',
    person:'Marianne Cantwell'
}, {
    quote:'"You do not always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."',
    person:'Mandy Hale'
}, {
    quote:'"You can be everything. You can be the infinite amount of things that people are."',
    person:'Kesha'
}, {
    quote:'"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."',
    person:'Ralph Waldo Emerson'
}, {
    quote:' "We must let go of the life we have planned, so as to accept the one that is waiting for us."',
    person:'Joseph Campbell'
}, {
    quote:'"Believe you can and you are halfway there."',
    person:'Theodore Roosevelt'
},];


btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})