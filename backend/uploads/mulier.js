const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req,file,cd)=>{
        cd(null,'uploads/')
    },
    filename: function(req,file,cd){
        const uniqueSuffix = DataTransfer.now()+'-'+Math.round.apply(Math.random()*1e9);
        const filename=file.originalname.split(".")[0];
        cd(null,filename+'-'+uniqueSuffix+'.png');
    },
});

exports.upload=multer({storage:storage});