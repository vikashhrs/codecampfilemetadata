var mongoose = require('mongoose');
var FileMetaData = mongoose.Schema({
	fieldname	:{
		type : String
	},
	originalname	:{
		type : String
	},
	encoding	:{
		type : String
	},
	mimetype	:{
		type : String
	},
	destination	:{
		type : String
	},
	filename	:{
		type : String
	},
	path	:{
		type : String
	},
	size	:{
		type : String
	}
});
module.exports = mongoose.model('FileMetaData',FileMetaData); 