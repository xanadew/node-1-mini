let books = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        req.body.id = id;
        id++;
        books.push(req.body)
        res.status(200).send(books)
    },
    read: (req, res) => {
        res.status(200).send(books)
    },
    update: (req, res) => {
        for (let i = 0; i < books.length; i++) {
            if(books[i].id === +req.params.id){
                books[i].author=req.body.author || books[i].author;
                books[i].title=req.body.title || books[i].title;
                return res.status(200).send(books)
            }
        }
    },
    delete:(req,res)=>{
        books=books.filter(e=>{
            return e.id != req.params.id
        })
        res.status(200).send(books)
    }
}

// REACT FRONT END MAKING THE REQUEST
// axios.put('https://localhost:3000/api/newBook/1', {name:'BILLYBOB'})

