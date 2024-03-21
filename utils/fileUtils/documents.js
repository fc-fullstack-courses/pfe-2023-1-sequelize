const multer = require('multer');
const path = require('path');
const fs = require('fs');
const CONSTANTS = require('../../constants');

const docPath = path.resolve(CONSTANTS.PUBLIC_FILE_PATH, 'documents');

if (!fs.existsSync(docPath)) {
  fs.mkdirSync(docPath, {
    recursive: true,
  });
}

const storage = multer.diskStorage({
  // куди вантажити
  destination: function (req, file, cb) {
    // ~/Documents/fc/2023/PFE-2023-1/lessons/pfe-2023-1-sequelize/public/images
    cb(null, docPath);
  },
  // з якой назвою зберігати
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const docUpload = multer({ storage });

module.exports = docUpload;