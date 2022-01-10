const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    name: {  type: String,  required: true, },
    price: { type: String,  required: true,  },
    category: { type: String,  required: true,  },
    videos: [{ type: String }],
   },
  {
    timestamps: true,
  }
);

module.exports = Media = mongoose.model("pro", MediaSchema);
