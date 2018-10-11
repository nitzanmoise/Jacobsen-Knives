const multipartMiddleware = multipart();

const app = Express();

app.post("/upload", multipartMiddleware, function(req, res) {
  // Upload files to cloudinary
  cloudinary.v2.uploader.upload(
    // File to upload
    req.files.image.path,
    // Overlay Tranformation
    {
      width: 700,
      overlay: `text:Times_90_bold:${encodeURIComponent(req.body.watermark)}`,
      gravity: "south",
      y: 80,
      color: "#FFFF0080"
    },
    // Callback function
    function(error, result) {
      res.json({ data: result });
    }
  );
});
