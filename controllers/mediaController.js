const Media = require("../Models/Media");

exports.getAll = async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// laptop
exports.getAll1 = async (req, res) => {
 const media1 = await Media.find({ category: "Laptop" })
//  console.log(category)
 try {
     res.json(media1)
 } catch (error) {
  console.log(error);
  res.status(400).json(error);
}
 
};



// laptop



// mobile--------------------------
exports.getAll2 = async (req, res) => {
  const media2 = await Media.find({ category: "Mobile" })
 //  console.log(category)
  try {
      res.json(media2)
  } catch (error) {
   console.log(error);
   res.status(400).json(error);
 }
  
 };
 
// mobile end----------------------

// Watches------------------------
exports.getAll3 = async (req, res) => {
  const media3 = await Media.find({ category: "Watches" })
 //  console.log(category)
  try {
      res.json(media3)
  } catch (error) {
   console.log(error);
   res.status(400).json(error);
 }
  
 };

// watches end--------------------

// Backendurl/public/videos/file_name.mp4
exports.create = async (req, res) => {
  const { name, price ,category} = req.body;
  let videosPaths = [];
  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videosPaths.push("/" + video.path);
    }
  }

  try {
    const createdMedia = await Media.create({
      name,price,category,
      videos: videosPaths,
    });
    res.json({ message: "Media created successfully", createdMedia });
    
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
