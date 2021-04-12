
const spy = createspy()
function receivesAFunction(){
    console.log(spy)
    createSpy()
}


function receivesAFunction(spy){   
    return spy()
}




function returnsANamedFunction(){

}
