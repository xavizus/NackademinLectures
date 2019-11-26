const express = require('express'); // Web framework
const fileUpload = require('express-fileupload'); // Express middleware for files
const cors = require('cors'); // Enables CORS
const bodyParser = require('body-parser'); // middleware for post req.
const morgan = require('morgan'); // For logging HTTP request
const _ = require('lodash'); // javascript library with utility functions

const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

// add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//Start app
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}.`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/file-upload', async(req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            let data = [];
            // use the name of the input field
            let profile = req.files.profile;
            let photos = req.files.photos;


            // if profile exist
            if (profile) {
                //Use the mv() method to place the file in upload directory
                profile.mv('./uploads/' + profile.name);
                data.push({
                    name: profile.name,
                    mimetype: profile.mimetype,
                    size: profile.size
                });
            }
            if (photos) {
                _.forEach(_.keysIn(photos), key => {
                    let photo = photos[key];

                    photo.mv('./uploads/' + photo.name);

                    data.push({
                        name: photo.name,
                        mimetype: photo.mimetype,
                        size: photo.size
                    });
                });
            }

            res.send({
                status: true,
                message: 'Files are uploaded',
                data: data
            });

        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.use(express.static('uploads'));