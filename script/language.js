
function changeLang() {
    let language = document.documentElement.lang;

    if (language === "en") {
        document.documentElement.lang = "pt-br";
        console.log(language)
    } else {
        document.documentElement.lang = "en";
        console.log(language)
    }
}

const aboutMeTitlePT = "Oi! Meu nome é Rodrigo";
const aboutMeBodyPT = `Tenho 20 anos e estou cursando atualmente o quarto período de Ciência da Computação na UFCG 
(Universidade Federal de Campina Grande). Recentemente entrei me juntei ao time do epol,
um projeto do laboratório SPlab em parceria com a Polícia Federal.</br>Como eu ainda estou no quarto período eu não tenho certeza de qual área da computação eu vou seguir,
mas recentemente tenho me interessado bastante pela importância e impacto social da <Strong>Ciência de dados</Strong>
e pela ideia de criar coisas que me veio junto ao estudo do <strong>desenvolvimento front-end</strong>. Não sei algum dia vou seguir alguma dessas áreas,
mas as duas são muito legais de estudar.`

const projectsBodyPT = [
    "Projeto do laboratório SPlab em parceria com a Polícia Federal.",
    "Livros que eu li em 2020.",
    "Projeto criado durante a Ńext Level Week, um evento proporcionado pela RocketSeat"
];

const hobbiesTitlePT = "";
const hobbiesBodyPT = "";

const aboutMeTitleEN = "HI! My name is Rodrigo";
const aboutMeBodyEN = `I'm 20 years old and currently at the fourth semester of Computer Science on UFCG (Federal
University of Campina Grande), in Brazil. Recently I joined the team of epol, a project of SPlab
laboratory in association with the Federal Police of Brazil.
</br>
As I'm still at the fourth semester I'm not really sure which area I'll follow, but recently I've
been
really interested in the importance and social impact of <Strong>data science</strong> and the
necessity of
creating things that came with the <strong>front-end development</strong> study. I don't know if
I'll
turn out to be a front-end developer or a data scientist, but these two are really fun to study and
work with.`;

const projectBodyEN = [
    "Project of the SPlab laboratory in association with the Federal Police of Brazil.",
    "All the books that I read in 2020.",
    "Project made in the Next Level Week, a event provided by the Rocketseat companie"
];

const hobbiesTitleEN = "Things I love";
const hobbiesBodyEN = `Well, besides programming, I really love spanding time reading books, actually I'm 
making a project about all the <a href="">books that I'm reading this year (2020)</a>.
</p><p>
I also really love taking pictures. All the process of finding a new subject of creation, 
trying to take a good picture and finally editing it makes me feel that I'm 
creating something unique and kinda special because only I could create it. 
`;

const hobbiesTitleP = "Coisas que eu amo";
const hobbiesBodyP = `Bom, além de programar, eu amo usar meu tempo lendo livros, tanto que na verdade
estou criando um projeto pra registrar <a>todas as minhas leituras em 2020</a>.</p>

<p>
Além disso, eu também amo tirar fotos. Todo os processo de encontrar ou construir ao para tirar foto,
tentar tirar uma boa foto e finalmente edita-la me da a maravilhosa sensação de que eu estou criando
algo único e até especial por que somente eu poderia ter criado aquilo da forma que eu criei.`;


function changeAboutMe(title, body) {
    let articleTitle = document.querySelector(".about-me h2")
    let articleBody = document.querySelector(".about-me p")

    articleTitle.innerHTML = title;
    articleBody.innerHTML = body 
}

function changeProject(texts) {
    let projectsBody = document.querySelectorAll(".projects li p")

    for(var i = 0; i < projectsBody.length; i++) {
        projectsBody[i].innerHTML = texts[i]
    }
}

function changeHobbies(title, body) {
    let hobbiesTitle = document.querySelector(".hobbies article h2")
    let hobbiesBody = document.querySelector(".hobbies article p")

    hobbiesTitle.innerHTML = title;
    hobbiesBody.innerHTML = body
}


function changePageLanguage() {
    changeLang();

    if (document.documentElement.lang == "pt-br") {
        document.querySelector(".languages p").innerHTML = "English Version";

        changeAboutMe(aboutMeTitlePT, aboutMeBodyPT);
        changeProject(projectsBodyPT);
        changeHobbies(hobbiesTitleP, hobbiesBodyP);
    } else {
        document.querySelector(".languages p").innerHTML = "Versão pt-br";

        changeAboutMe(aboutMeTitleEN, aboutMeBodyEN);
        changeProject(projectBodyEN);
        changeHobbies(hobbiesTitleEN, hobbiesBodyEN);
    }
}

document.querySelector(".languages button").addEventListener("click", changePageLanguage)