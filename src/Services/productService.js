import instance from "../Config/axios"

export function getAll(){
    return instance.get("/products")

}

/* export function getById(id){
    return instance.get("v1/cards/"+id)
}
 */