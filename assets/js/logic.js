

console.log("OK...");

/*Query selector: Nos permite seleccionar elementos como si estuvieramos 
 utilizando selectores de css y almacenarlos en variables*/
 let posts = document.querySelectorAll(".post");

 /*Crear escuchador de eventos 
 1- ciclo for each que permita ir post x post, porque el escuchador independiente se debe crear para cada uno*/

 posts.forEach((post) => {
    console.log(post);
    let likeButton = post.querySelector("button");
    let likesCount = post.querySelector("span");
    likeButton.addEventListener("click", () => {
        console.log('CLICKED ${likesCount.innerHTML} likes')
        let likes = parseInt(likesCount.innnerHTML);
        likes++;
        likesCount.innnerHTML = likes;
    });
 });