'use strict';
require('../models/album.js');
const fs = require('fs');

const SUPPORTED_EXT = "jpg, jpeg, gif, png";
const ALBUM_ROOT = "C:\\Users\\NITO\\Documents\\Kode\\galleri\\server\\album";

exports.getAlbums = function(req, res){    
    var dirs = fs.readdirSync(ALBUM_ROOT);
    var albums = [];
    for(var i in dirs)
    {
        var dirName = dirs[i];
        var currentDir = ALBUM_ROOT + "/" + dirName;        
        var fileStats = fs.statSync(currentDir);
        if(fileStats.isDirectory())
        {            
            var coverUrl = dirName + "/" + getCoverImg(currentDir);
            var album ={"name":dirName, "coverUrl":coverUrl};
            albums.push(album);
        }
    }
    res.json({"albums":albums});
};

exports.getAlbum = function(req, res) {    
    var albumName = req.params.album;    
    var currentDir  = ALBUM_ROOT + "/" + albumName;
    var files = fs.readdirSync(currentDir);
    var images = [];
    for(var i in files)
    {
        var currentFile =  files[i];
        var currentPath = currentDir + "/" + currentFile;        
        var fileStats = fs.statSync(currentPath);
        if(fileStats.isFile() && isImage(currentFile))
        {
            var path = '/api/albums/'+albumName+'/'+files[i];
            images.push(path);
        }
    }
    var album = {"name":albumName,"images":images};
    res.json(album);
};

exports.getAlbumImg = function(req, res) {    
    var albumName = req.params.album;
    var imgName = req.params.img    
    var currentDir  = ALBUM_ROOT + "/" + albumName;
    var file = currentDir + "/" + imgName;            
    res.sendFile(file);
};

var isImage = function(filename)
{
    var index = filename.lastIndexOf(".");
    var extention = filename.substring(index+1).toLowerCase();    
    return SUPPORTED_EXT.includes(extention);
};

var getCoverImg = function(dir) {    
    var files = fs.readdirSync(dir);    
    var coverUrl ="";
    if(files.length > 0)
    {
        var firstImage = false;
        var i = 0;
        while(!firstImage)
        {
            var img = files[i];
            var fileStats = fs.statSync(dir+"/"+img);
            if(fileStats.isFile() && isImage(img))
            {
                coverUrl = img;
                firstImage = true;
            }
        }
    }
    return coverUrl;
};