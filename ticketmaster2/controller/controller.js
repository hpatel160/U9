const { ObjectID } = require('bson');
const { result } = require('lodash');
const Doc = require('../model/appointment');

const appointment_index = (req, res) => {
    Doc.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('index', { apps: result, title: 'All appointments' });
    })
    .catch(err => {
        console.log(err);
    });
};

const appointment_details = (req, res) => {
    const id = req.params.id;
    Doc.findById(id)
    .then(result => {
        console.log(result);
        res.render('details', { app: result, title: 'Appointment Details' });
    })
    .catch(err => {
        console.log(err);
    });
};

const appointment_create_get = (req, res) => {
    res.render('create', { title: 'Create a new appointment' });
};

const appointment_create_post = (req, res) => {
    const doc = new Doc(req.body);
    // console.log(req.body)
    doc.save()
    .then(result => {
        res.redirect('/appointments');
    })
    .catch(err => {
        console.log(err);
    });
};

const appointment_delete = (req, res) => {
    const id = req.params.id;
    Doc.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/appointments' });
    })
    .catch(err => {
        console.log(err);
    });
};

// const appointment_search = (req, res) => {
//     res.render('search', { title: 'Search' });
// };

// const appointment_search_get = (req, res) => {
//     const name = req.params.names;
//     Doc.find({name: name})
//     .then(result => {
//         res.render('individual', { patient : result, title: 'Patient Details' });
//         console.log(result)
//     })
//     .catch(err => {
//         ;console.log(err);
//     })

// };
// const appointment_update = (req, res) => {
//     const id = req.params.id;
//     console.log('hey');
//     Doc.findByIdAndUpdate(id, {name: "hp"})
//     .then(result => {
//         console.log(result);
//         res.render('updateForm', { patient: result, title : 'Update Patient'});
//         // res.json({ redirect: '/create' });
//     })
//     .catch(err => {
//         console.log(err);
//     });
// };
module.exports = {
    appointment_index,
    appointment_details,
    appointment_create_get,
    appointment_create_post,
    appointment_delete,

}