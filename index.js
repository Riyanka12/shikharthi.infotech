const express = require("express");
const mongoose= require ("mongoose");
const app=express()

const uri= 'mongodb+srv://sahariyanka70:<USBbgSCjMsuOTMHI>@cluster0.zpxbsho.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => {
       console.log('Connected to MongoDB Atlas');
     })
     .catch((error) => {
       console.error('Error connecting to MongoDB Atlas:', error);
     });

  const reviewSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    comment: String
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  app.post('/submit-review', (req, res) => {
    const { name, rating, comment } = req.body;
  
    const newReview = new Review({
      name: name,
      rating: rating,
      comment: comment
    });
  
    newReview.save()
      .then(() => {
        res.send('Review submitted successfully');
      })
      .catch((error) => {
        res.status(500).send('Error submitting review');
      });
  });
  app.get("/api/submits", async (req, res) => {
    const posts = await reviewsubmit.find();
    res.json(submit);
  });

  app.submit("/api/submits", async (req, res) => {
    const { name, rating, comment } = req.body;
    const newsubmit = new reviewsubmit({ name, rating, comment });
    await newsubmit.save();
  });
  
  
  app.listen(3000, () => {
    console.log("Server is Running on port 3000 ");
  });

        