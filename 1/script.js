listOfBooks = [
    {
        id:1,
        author:"Пушкин",
        name:"Евгений онегин",
        date:"9.05.1823"
    },
    {
        id:2,
        author:"Пушкин",
        name:"Евгений онегин",
        date:"9.05.1823"
    },
    {
        id:3,
        author:"Пушкин",
        name:"Евгений онегин",
        date:"9.05.1823"
    },
    {
        id:4,
        author:"Пушкин",
        name:"Евгений онегин",
        date:"9.05.1823"
    },
    {
        id:5,
        author:"Пушкин",
        name:"Евгений онегин",
        date:"9.05.1823"
    }
]

function createBook() {
    let a = {
        id:idInput.value,
        author: authorInput.value,
        name:nameInput.value,
        date:date.value
    }
    listOfBooks.forEach(element => {
        if (element.author.toLowerCase() == a.author.toLowerCase()) {
            if (element.name.toLowerCase() == a.name.toLowerCase()) {
                console.error("THE SAME THING IS EXISTING");   
            } else{
                listOfBooks.append(a)
            }
        } else{
            listOfBooks.append(a)
        }
    }); 
}

function updateBook(){
    setInterval(() => {
        //типо показываю весь список
    }, 1000);
}

function readBook () {
    let idBook = idBookInput.value
    listOfBooks.forEach(element => {
        if (element.id == idBook){
            //вывожу отдельно
        } 
    });
}

function deleteBook(){
    let idBook = idBookInput.value
    listOfBooks.forEach(element => {
        if (element.id == idBook){
            listOfBooks.splice(element.id-1,1) //т.к все в хранилище отсортировано по возрастанию
        } 
    });
}

function findBook(){
    typeQ = searchType.value
    let searchList = []
    switch (typeQ) {
        case "author":
            listOfBooks.forEach(element => {
                if (element.author == searchInput.value) {
                    searchList.push(element);
                }
                if (listOfBooks.length != 0) {
                    console.log(undefined)
                }else{
                    // вывожу searchList
                }
            });
            break;
        case "id":
            listOfBooks.forEach(element => {
                if (element.id == searchInput.value) {
                    searchList.push(element);
                }
                if (listOfBooks.length != 0) {
                    console.log(undefined)
                }else{
                    // вывожу searchList
                }
            });
            break;
        case "name":
            listOfBooks.forEach(element => {
                if (element.name == searchInput.value) {
                    searchList.push(element);
                }
                if (listOfBooks.length != 0) {
                    console.log(undefined)
                }else{
                    // вывожу searchList
                }
            });
            break;
        case "date":
            listOfBooks.forEach(element => {
                if (element.date == searchInput.value) {
                    searchList.push(element);
                }
                if (listOfBooks.length != 0) {
                    console.log(undefined)
                }else{
                    // вывожу searchList
                }
            });
            break;
        default:
            console.error("wtf");
            break;
    }
}