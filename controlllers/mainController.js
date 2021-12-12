let db = require('../data/platos');

module.exports = {
    menu: (req, res) => {
        res.render('index', {
            title: "Nuestro Menú",
            platos: db,
        });
    },
    detalle: (req, res) => {
        let menuID = +req.params.id;
        let menu = db.find(plato => plato.id === menuID);
         
        res.render('detalleMenu', {menu});
    },
};