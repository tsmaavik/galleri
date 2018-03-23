module.exports = function(app) {
    var albumController = require('../controllers/albumController');
    
    app.route('/api/albums').get(albumController.getAlbums);    
    app.route('/api/albums/:album').get(albumController.getAlbum);
    app.route('/api/albums/:album/:img').get(albumController.getAlbumImg);
};