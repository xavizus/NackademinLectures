let express = require('express');
let fileUpload = require('express-fileupload');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(fileUpload({
    createParentPath: true
}));

const profileUploadPath = "./public/images/";

let userInfo = {
    name: "Unknown",
    mail: "Unknown@lol.se",
    profilePicture: "./public/images/default.png"
};

app.get('/', function(req, res, next) {
    res.render('index', userInfo);
});

app.get('/edit', (req, res) => {
    res.render('edit', userInfo);
});

app.post('/update-profile', (req, res) => {
    let name = req.body.name;
    let mail = req.body.mail;
    let profilePic = req.files.profilePic;
    try {
        if (profilePic) {
            profilePic.mv(profileUploadPath + profilePic.name);
        }
    } catch (err) {
        console.error(err);
    }
    userInfo.name = name;
    userInfo.mail = mail;
    userInfo.profilePicture = profileUploadPath + profilePic.name;

    res.render('index', userInfo);
});


app.listen(3000, () => {
    console.log('I am listening now!');
});