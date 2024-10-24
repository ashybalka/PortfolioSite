function toggleSpoiler(id) {
    var content = document.getElementById(id);
    content.style.display = (content.style.display === "none" || !content.style.display) ? "block" : "none";
}

function changeLanguage() {
    const lang = document.getElementById("language").value;
    const elements = document.querySelectorAll("[data-lang]");

    elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        element.innerText = translations[lang][key];
    });

    // Обновляем изображения карусели при изменении языка
    updateCarousel(lang);
	updateWordtrisCarousel(lang);
}

const translations = {
    ru: {
        name: "Артём Шибалко",
        title: "Unity Разработчик", 
		projects: "Проекты", 
        resume: "Резюме",
		profile: "Профиль",
		profile1: "Я опытный разработчик на Unity с разнообразным опытом в области разработки программного обеспечения, инженерии DevOps и администрирования систем Linux. Мои сильные навыки программирования и дизайна в объектно-ориентированных языках, таких как C#, Python и Ruby on Rails, позволили мне создавать высококачественные, увлекательные игры. Я хорошо разбираюсь в методологии DevOps, что повышает мою способность оптимизировать процессы разработки и обеспечивать бесперебойную доставку проектов.",
		profile2: "Мой опыт работы в международных командах отточил мои навыки сотрудничества и общения. Я увлечен использованием своих технических знаний и творческого видения для разработки инновационных игровых решений.",
        bullsandcows: "Быки и Коровы",
        description: "Подбери шифр за минимальное количество попыток!",
        features: "Особенности:",
        feature1: "ГиперКазуальная 2D игра",
        feature2: "Открытый мир для исследования",
        feature3: "Разнообразные враги и боссы",
        feature4: "Потрясающая графика и музыка",
        play: "Играть в Быки и Коровы",
 
        wordtris: "WordTris", 
        wordtrisDescription: "Соберите слова, чтобы очистить поле!",
        wordtrisFeatures: "Особенности:",
        wordtrisFeature1: "Увлекательный игровой процесс",
        wordtrisFeature2: "Разнообразные уровни сложности",
        wordtrisFeature3: "Поддержка нескольких языков", 
        wordtrisFeature4: "Множество режимов игры",
        playWordtris: "Играть в WordTris"		
    },
    en: {
        name: "Artsem Shibalko",  
        title: "Unity Developer",
		projects: "Projects",  
        resume: "Resume",
		profile: "Profile",
		profile1: "I am an experienced Unity Developer with a diverse background in software development, DevOps engineering, and Linux system administration. My strong programming and design skills in object-oriented languages such as C#, Python, and Ruby on Rails allowed me to create high-quality, engaging games. I am well-versed in the DevOps methodology, which enhances my ability to streamline development processes and ensure smooth project delivery.",
		profile2: "My experience working in international teams has honed my collaboration and communication skills. I am passionate about leveraging my technical expertise and creative vision to develop innovative gaming experiences. ",

		
        bullsandcows: "Bulls And Cows",
        description: "Crack the code in the fewest attempts!",
        features: "Features:",
        feature1: "Hyper-Casual 2D Game",
        feature2: "Open world to explore",
        feature3: "Variety of enemies and bosses",
        feature4: "Stunning graphics and music",
        play: "Play Bulls And Cows",
		
		wordtris: "WordTris",
        wordtrisDescription: "Collect words to clear the field!",
        wordtrisFeatures: "Features:",
        wordtrisFeature1: "Engaging gameplay",
        wordtrisFeature2: "Various difficulty levels",
        wordtrisFeature3: "Multi-language support",
        wordtrisFeature4: "Multiple game modes",
        playWordtris: "Play WordTris"
    
    },
    de: {
        name: "Artsem Shibalko", 
        title: "Unity Entwickler",  
		projects: "Projekte", 
        resume: "Lebenslauf", 
		profile: "Profil",
		profile1: "Ich bin ein erfahrener Unity-Entwickler mit einem vielfältigen Hintergrund in der Softwareentwicklung, DevOps-Engineering und Linux-Systemadministration. Meine starken Programmier- und Designfähigkeiten in objektorientierten Sprachen wie C#, Python und Ruby on Rails ermöglichen es mir, qualitativ hochwertige, fesselnde Spiele zu erstellen. Ich bin gut mit der DevOps-Methodik vertraut, die meine Fähigkeit zur Optimierung von Entwicklungsprozessen und zur Gewährleistung einer reibungslosen Projektdurchführung verbessert.",
		profile2: "Meine Erfahrung in der Zusammenarbeit mit internationalen Teams hat meine Kooperations- und Kommunikationsfähigkeiten geschärft. Ich bin leidenschaftlich daran interessiert, mein technisches Fachwissen und meine kreative Vision zu nutzen, um innovative Spielerlebnisse zu entwickeln.",

		
        bullsandcows: "Bullen und Kühe",
        description: "Finde den Code mit den wenigsten Versuchen!",
        features: "Merkmale:",
        feature1: "Hyper-Casual 2D-Spiel",
        feature2: "Offene Welt zum Erkunden",
        feature3: "Verschiedene Feinde und Bosse",
        feature4: "Beeindruckende Grafik und Musik",
        play: "Spielen Sie Bullen und Kühe",
		
		wordtris: "WordTris",
        wordtrisDescription: "Sammle Wörter, um das Feld zu räumen!", 
        wordtrisFeatures: "Merkmale:", 
        wordtrisFeature1: "Fesselndes Gameplay", 
        wordtrisFeature2: "Verschiedene Schwierigkeitsgrade", 
        wordtrisFeature3: "Unterstützung mehrerer Sprachen", 
        wordtrisFeature4: "Mehrere Spielmodi",
        playWordtris: "Spielen Sie WordTris" 
    }
};

const screenshots = {
	ru: ['./Screenshots/B&C/MainRu.png', './Screenshots/B&C/GameRu.png', './Screenshots/B&C/WinRu.png'],
	en: ['./Screenshots/B&C/MainEn.png', './Screenshots/B&C/GameEn.png', './Screenshots/B&C/WinEn.png'],
	de: ['./Screenshots/B&C/MainDe.png', './Screenshots/B&C/GameDe.png', './Screenshots/B&C/WinDe.png']
};

let currentImageIndex = 0;

function updateCarousel(lang) {
    const imgElement = document.getElementById("carousel-image");
    currentImageIndex = 0;
    imgElement.src = screenshots[lang][currentImageIndex];
}

function nextImage() {
    const lang = document.getElementById("language").value;
    currentImageIndex = (currentImageIndex + 1) % screenshots[lang].length;
    document.getElementById("carousel-image").src = screenshots[lang][currentImageIndex];
}

function prevImage() {
    const lang = document.getElementById("language").value;
    currentImageIndex = (currentImageIndex - 1 + screenshots[lang].length) % screenshots[lang].length;
    document.getElementById("carousel-image").src = screenshots[lang][currentImageIndex];
}
		
let currentWordtrisImageIndex = 0;

const wordtrisScreenshots = {
    ru: ['./Screenshots/WordTris/MainRu.png', './Screenshots/WordTris/GameRu.png'],
    en: ['./Screenshots/WordTris/MainEn.png', './Screenshots/WordTris/GameEn.png'],
    de: ['./Screenshots/WordTris/MainEn.png', './Screenshots/WordTris/GameEn.png']
};

function updateWordtrisCarousel(lang) {
    const imgElement = document.getElementById("carousel-image-wordtris");
    currentWordtrisImageIndex = 0;
    imgElement.src = wordtrisScreenshots[lang][currentWordtrisImageIndex];
}

function nextImageWordtris() {
    const lang = document.getElementById("language").value;
    currentWordtrisImageIndex = (currentWordtrisImageIndex + 1) % wordtrisScreenshots[lang].length;
    document.getElementById("carousel-image-wordtris").src = wordtrisScreenshots[lang][currentWordtrisImageIndex];
}

function prevImageWordtris() {
    const lang = document.getElementById("language").value;
    currentWordtrisImageIndex = (currentWordtrisImageIndex - 1 + wordtrisScreenshots[lang].length) % wordtrisScreenshots[lang].length;
    document.getElementById("carousel-image-wordtris").src = wordtrisScreenshots[lang][currentWordtrisImageIndex];
}
