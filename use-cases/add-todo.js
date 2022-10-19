module.exports = function addTodoFactory(schema, insert){
return function addTodo(data){
    // ...
 return new Promise((resolve, reject) => {
    try{
        const addTodoRecord = insert(schema, data);
        if(addTodoRecord){
            resolve({status: 201, msg: "add new todo"})
            // 
        }else{
            reject({status: 500, msg: "cannot add todo to the database"})
            // 
        }
    } catch (err) {
        reject(err)
    }
 })
}
}