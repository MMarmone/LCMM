var config = {
    VERSION: 1,
    BUILD: 1,
    URL: 'http://127.0.0.1',
    API_PATH : '/api', 
    PORT : process.env.PORT,
    /* 
     * Get DB Connection String for connecting to MongoDB database
     */
    getDBString : function(){
        return process.env.MONGODB_URL;
    },
    getDBTestString : function(){
        return process.env.MONGODB_URL_TEST    
    },
    /*
     * Get the http URL 
     */
    getHTTPUrl : function(){
        return 'http://' + this.URL + ":" + this.PORT;
    }
}

module.exports = config;
