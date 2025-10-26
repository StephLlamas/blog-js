let articles = document.querySelector(".layout__articles");

let posts = [
    {
        title: "Artículo 1",
        date: "30/12/2028",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore in ab cum voluptatum nam sapiente dicta iure ullam harum, ut architecto laboriosam obcaecati impedit! Itaque et consequatur aut nisi!"
    },
    {
        title: "Artículo 2",
        date: "10/12/2028",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore in ab cum voluptatum nam sapiente dicta iure ullam harum, ut architecto laboriosam obcaecati impedit! Itaque et consequatur aut nisi!"
    },
    {
        title: "Artículo 3",
        date: "01/01/2029",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore in ab cum voluptatum nam sapiente dicta iure ullam harum, ut architecto laboriosam obcaecati impedit! Itaque et consequatur aut nisi!"
    },
    {
        title: "Artículo 4",
        date: "30/10/2029",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore in ab cum voluptatum nam sapiente dicta iure ullam harum, ut architecto laboriosam obcaecati impedit! Itaque et consequatur aut nisi!"
    },
];

posts.forEach(article => {
    articles.innerHTML += `
        <article class="articles__article">
            <h3 class="article title">${article.title}</h3>
            <span class="article__date">${article.date}</span>
            <p class="article__body">
                ${article.body}
            </p>
            <a href="#" class="article__btn">Leer más</a>
        </article>
    `;
});