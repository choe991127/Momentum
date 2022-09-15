const quotes=[
    {
        quote:"얻은 것은 이미 끝난 것이다. 기쁨의 본질은 그 과정에 있으므로.",
        quote2:"Things won are done; joy's soul lies in the doing.",
        author:"윌리엄 셰익스피어 (William Shakespeare)"
    },
    {
        quote:"거짓말로 인한 분노는 평생 간다. 진실로 인한 분노는 오래갈 수 없다.",
        quote2:"Anger at lies lasts forever. Anger at truth can't last.",
        author:"그렉 에반스(Greg Evans)"
    },
    {
        quote:"약간의 광기를 띠지 않은 위대한 천재란 없다.",
        quote2:"There is no great genius without some touch of madness.",
        author:"세네카(Seneca)"
    },
    {
        quote:"스스로를 경멸하는 사람은 경멸하는 자신을 존중한다.",
        quote2:"He who despises himself, respects himself as one who despises.",
        author:"프레드리히 니체(Friedrich Nietzsche)"
    },
    {
        quote:"게으름 피울 수 있을 만큼 똑똑하지 못한 것을 포부가 높기 때문이라고 변명할 수 없다.",
        quote2:"Ambition is a poor excuse for not having sense enough to be lazy.",
        author:"에드가 버겐(Edgar Bergen)"
    },
    {
        quote:"게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다. ",
        quote2:"Indolence is a delightful but distressing state; we must be doing something to be happy.",
        author:"마하트마 간디(Mahatma Gandhi)"
    },
    {
        quote:"성경은 게으름뱅이에게 빵을 약속하지 않는다.",
        quote2:"The Bible promises no loaves to the loafer.",
        author:"Unknown"
    },
    {
        quote:"운은 계획에서 비롯된다.",
        quote2:"Luck is the residue of design.",
        author:"브랜치 리키(Branch Rickey)"
    },
    {
        quote:"학생이 되기를 멈춘 자는 한 번도 학생인 적이 없었던 자이다.",
        quote2:"Whoever ceases to be a student has never been a student.",
        author:"조르지오 일리스(George Iles)"
    },
    {
        quote:"태어나면서부터 현명한 이는 없다.",
        quote2:"No man is born wise.",
        author:"미겔 데 세르반테스(Miguel de Cervantes)"
    },
    {
        quote:"세상 모든 일은 여러분이 무엇을 생각하느냐에 따라 일어납니다.",
        quote2:"Everything in your world is created by what you think.",
        author:"오프라 윈프리(Oprah Winfrey)"
    }
    
]

const quote=document.querySelector(".quote span:first-child");
const quote2=document.querySelector(".quote span:nth-child(2)");
const author=document.querySelector(".quote span:last-child");



const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
quote2.innerText=todaysQuote.quote2;
author.innerText=todaysQuote.author
