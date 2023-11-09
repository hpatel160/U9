const Doc = require('../model/appointment');

const appointment_index = (req, res) => {
    Doc.find().sort({ createdAt: -1 })
    .then(result => {
    res.render('allPatients', { apps: result, title: 'All appointments' });
    })
    .catch(err => {
    console.log(err);
    });
};


const appointment_search_get = (req, res) => {
    const name = req.body.name;

    Doc.findOne({name: name})
    .then(result => {
        res.render('individual', { patient : result, title: 'Patient Details' });
        // console.log(result)
    })
    .catch(err => {
        ;console.log(err);
    })
};

const appointment_searchbyphone_get = (req, res) => {
    const number = req.body.name;
    console.log(number);
    Doc.findOne({phonenumber: number })
    .then(result => {
        console.log(result);
        res.render('individual', { patient : result, title: 'Patient Details' });
        // console.log(result)
    })
    .catch(err => {
        ;console.log(err);
    })
};

const appointment_update = (req, res) => {
    const id = req.params.id;
    Doc.findById(id)
    .then(result => {
        res.render('updateForm', { patient: result, title : 'Update Patient'});
    })
    .catch(err => {
        console.log(err);
    });
};

const appointment_update_post = (req, res) => {
    // console.log(req.body);
    const id = req.params.id;
    const name = req.body.name;
    const casenumber = req.body.casenumber;
    const date = req.body.date;
    const time = req.body.time;
    const description = req.body.description;
    Doc.findByIdAndUpdate(id, {
        $set: req.body
    })
    .then(result => {
        // console.log(result);
        res.redirect('/individual');
    })
    .catch(err => {
        console.log(err);
    });
};


module.exports = {
    appointment_search_get,
    appointment_searchbyphone_get,
    appointment_index,
    appointment_update,
    appointment_update_post
}