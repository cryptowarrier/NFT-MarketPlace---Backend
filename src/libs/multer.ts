import multer from 'multer';
import {v4} from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
    destination: 'uploadedFiles',
    filename: (req, file, cb) => {
        cb(null, v4() + path.extname(file.originalname));
    }
});

export default multer({storage});