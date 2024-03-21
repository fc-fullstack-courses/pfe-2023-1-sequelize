const multer = require('multer');
const path = require('path');
const fs = require('fs');
const CONSTANTS = require('../../constants');

const imagesPath = path.resolve(CONSTANTS.PUBLIC_FILE_PATH, 'images');

if (!fs.existsSync(imagesPath)) {
  fs.mkdirSync(imagesPath, {
    recursive: true,
  });
}

const storage = multer.diskStorage({
  // куди вантажити
  destination: function (req, file, cb) {
    // ~/Documents/fc/2023/PFE-2023-1/lessons/pfe-2023-1-sequelize/public/images
    cb(null, imagesPath);
  },
  // з якой назвою зберігати
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageUpload = multer({ storage });

module.exports = imageUpload;
