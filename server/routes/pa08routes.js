const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Operator= require('../models/operator');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../docket/public/images'); //);
    },
    filename: function(req, file, cb) {   
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('photo'), (req, res) => {
    const name = req.body.name;
    const photo = req.file.filename;
    const epfNum= req.body.epfNum

    const newOperatorData = {
        name,
        photo,
        epfNum
    }

    const newUser = new Operator(newOperatorData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.get("/",(req,res) => {
    Operator.find()
    .then((operator)=> res.json(operator))
    .catch((err)=>res.status(400).json('Error : ${err}'))
})


router.get('/images',function(req, res) {
    Operator.find({}, 'images', function(err, img) {
        if (err)
            res.send(err);
        // console.log(img);
        res.contentType('json');
        res.send(img);
    }).sort({ createdAt: 'desc' });
})

router.get('/img',(req,res) => {
    Operator.find()
    .then((operator)=> res.json(operator))
    .catch((err)=>res.status(400).json('Error:${err}'));
});

router.delete('http://localhost:5001/pa/time/:id', (req, res) => {
    Operator.findOneAndDelete({epfNum: req.params.id }, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted User : ", docs);
        }
    });
    console.log(res)
    

    
  });

module.exports = router;