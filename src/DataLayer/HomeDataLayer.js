class HomeDataLayer {
    fetchAllBook(callback) {
        fetch ('http://localhost:8088/home')
        .then(res => res.json())
        .then(values => callback(values))
       // console.log('message',books)

    }
    getWishList(callback){
        fetch("http://localhost:8088/home")
            .then(res => res.json()
            .then(values => callback(values))
        )
    }

    getCartItems(callback){
        fetch("http://localhost:8088/home")
            .then(res => res.json()
            .then(values => callback(values))
        )
    }
}
export default HomeDataLayer;


    




