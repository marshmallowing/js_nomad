const quotes=[
    {
        quote: "Life is something that everyone should try at least once",
        author: "Henry J. Tillman",
    },
    {
        quote:"True life is lived when tiny changes occur.",
        author:"Leo Tolstoy",
    },
    {
        quote:"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
        author:"Abigail Adams",
    },
    {
        quote:"A wise man will make more opportunities than he finds",
        author:"Sir Francis Bacon",
    },
    {
        quote:"The future is here. It's just not widely distributed yet.",
        author:"William Gibson",
    },
    {
        quote:"Weakness of attitude becomes weakness of character",
        author:"Albert Einstein",
    },
    {
        quote:"Great hopes make great men",
        author:"Thomas Fuller",
    },
    {
        quote:"What we dwell on is who we become",
        author:"Oprah Winfrey",
    },
    {
        quote:"Fear cannot be without hope nor hope without fear",
        author:"Baruch Spinoza",
    },
    {
        quote:"The biggest adventure you can ever take is to live the life of your dreams.",
        author:"Oprah Winfrey",
    },
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*(quotes.length))];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
