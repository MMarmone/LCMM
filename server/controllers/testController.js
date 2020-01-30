var TestController = {

    //Create a User
    create: function(req, res){
        console.log("hello");
        res.json();
        return ;
    },

    create_post: function(req, res){
        console.log(req.body['hello']);
        res.json();
    }
}
module.exports = TestController;