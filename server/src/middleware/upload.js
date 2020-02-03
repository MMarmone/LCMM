const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

var storage = new GridFsStorage({
  url: process.env.MONGODB_URL
});

var uploadFile = multer({ storage: storage })
module.exports = uploadFile;
