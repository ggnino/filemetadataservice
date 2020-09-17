const express = require('express');
const router = express.Router();

// POST route for file upload
router.post("/", (req,res) => {
    // Checks if there was a file uploaded, responed with json obj with file info
    if(req.files){
        res.json({name: req.files.file.name,type: req.files.file.mimetype, size: req.files.file.size})
    }
    // Set error status and message for no file uploaded
    else{
        res.status(400).json({Error: "No file uploaded."})
    }
});

module.exports = router; 