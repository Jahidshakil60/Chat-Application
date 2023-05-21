const multer = require("multer")

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg
){
    //file upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`

    //define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, UPLOADS_FOLDER);
        },
       
    })

    return upload
}

module.exports = uploader