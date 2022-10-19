module.exports = function databaseFactory(){
    function insert(schema, data){
       const process = new schema(data).save()

       return process;
    }
    function findAll(schema){}
    function findOne(schema, id){}
    function update(schema, data, id){}
    function deleteOne(schema, id){}
 
    return {
        insert,
        findAll,
        findOne,
        update,
        deleteOne
    }
}