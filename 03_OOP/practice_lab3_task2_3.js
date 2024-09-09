'use strict'
// ЗАВДАННЯ 2. Реалізуйте клас, що описує новину 
// (заголовок, текст, масив тегів, дата публікації). 
// У класі необхідно реалізувати один метод print, 
// який виводить всю інформацію  на сторінку браузера. 
// Зверніть увагу, як виводиться дата: 
// якщо з дати публікації пройшло менше дня, то виводиться «сьогодні»; 
// якщо з дати публікації пройшло менше тижня, то виводиться «N днів тому»;
//в інших випадках - "day.month.year"


class HtmlNews {
    #titleNews;
    #textNews;
    #arrTag;
    #datePublished;
    constructor(titleNews = "", textNews = "", arrTag = [], datePublised = new Date()) {
        // this.#titleNews=titleNews;
        this.titleNews = titleNews;
        this.#textNews = textNews;
        this.#arrTag = arrTag;
        this.#datePublished = new Date(datePublised) == "Invalid Date" ? new Date() : new Date(datePublised)
    }

    get titleNews() {
        return this.#titleNews
    }

    // can use this.titleNews=titleNews
    set titleNews(value) {
        this.#titleNews = value
    }

    get textNews() {
        return this.#textNews
    }
    // add set ...

    get arrTag() {
        return this.#arrTag
    }
    // add set
    get datePublised() {
        return this.#datePublished
    }
    // add set
    print() {
        document.write(`<h3> ${this.titleNews} </h3>`);
        // якщо з дати публікації пройшло менше дня, то виводиться «сьогодні»; 
        // якщо з дати публікації пройшло менше тижня, то виводиться «N днів тому»;
        //в інших випадках - "day.month.year"
        let countDay = (new Date() - this.datePublised) / (24 * 60 * 60 * 1000);
        console.log(countDay)
        let textDate = "";
        if (countDay < 1) textDate = "today"
        else if (countDay <= 7) textDate = Math.trunc(countDay) + "days ago"
        else textDate = this.datePublised.toLocaleDateString();

        document.write(`<p>${textDate}</p>`)
        document.write(`<p>${this.#textNews}</p>`)
        //added write arrtag
        document.write(`<hr>`);

    }

}

let textNews = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque dicta repudiandae, accusantium, dolore id aut ut fugit reiciendis suscipit nisi, ad ipsum. Omnis, accusantium? Earum animi culpa enim molestias officiis assumenda, libero ipsum cumque maiores quisquam. Optio, animi voluptate dicta obcaecati, assumenda modi doloremque hic in ipsum minus cum.";
// mm/dd/yy
let news1 = new HtmlNews("Title1", textNews, ["dolor", "ipsum"], "09/08/2024");
// yy-mm-dd
let news2 = new HtmlNews("Title2", textNews, ["dolor", "ipsum"], "2024-09-09");
let news3 = new HtmlNews("Title3", textNews, ["dolor", "ipsum"], "2024-09-01");
// news1.print()
// news2.print()
// news3.print()
/*
ЗАВДАННЯ 3. Реалізуйте клас, що описує стрічку новин. Клас має містити: 
- масив новин; 
- get-властивість, яка повертає кількість новин; 
-метод виведення на екран усіх новин; 
-метод додавання новини; 
-метод видалення новини; 
-метод сортування новин за датою (від останніх новин до старих); 
-метод сортування новин за заголовком (від A до Я); 
-метод пошуку новин за тегом (повертає масив новин, в яких вказано переданий тег у метод). 
*/

class LineNews {
    #arrNews = [];
    #countNews;
    constructor(news) {
        this.#arrNews = news; //array with HtmlNews objects
        this.#countNews = this.#arrNews.length;
    }

    get arrNews() {
        return this.#arrNews;
    }
    get countNews() {
        return this.#countNews;
    }

    //methods for add and remove
    addNews(news) {
        if (news instanceof HtmlNews)
            this.arrNews.push(news);
    }

    // -метод сортування новин за датою (від останніх новин до старих); 
    // за зростанням: a>b => 1, a<b => -1, a==b =>0
    // за спаданням: a<b => 1, a>b => -1, a==b =>0
    sortDate() {
        function compareDate(news1, news2) {
            if ((news1 instanceof HtmlNews) && (news1 instanceof HtmlNews)) {
                if (news1.datePublised < news2.datePublised)
                    return 1;
                else if (news1.datePublised > news2.datePublised)
                    return -1;
                return 0;
            }
        }

        this.arrNews.sort(compareDate);
        console.log(this.arrNews);
    }
    printNews() {
        for (const news of this.arrNews) {
            news.print();
        }
    }

}

let lineNews = new LineNews([news1, news2, news3])
lineNews.sortDate()
lineNews.printNews()