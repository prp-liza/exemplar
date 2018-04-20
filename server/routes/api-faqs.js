const express = require('express');
const router = express.Router();
const Faq = require('../models/faq');

// get a list of rubrics from the db
router.get('/faqs', function(req,res, next){
  Faq.find({})
  .then(function(faqs){
    res.send(faqs);
  });
});


// get a specific rubric from the db through ID
// router.get('/faqs/:id', function(req,res, next){
//   Faq.findById({_id:req.params.id})
//   .then(function(faq){
//     res.send(faq);
//   });
// });



// add a new rubric to the db
router.post('/faqs', function(req,res, next){
  //console.log(req.body);
  Faq.create(req.body)
  .then(function(faq){
    res.send(faq);
  }).catch(next);  
});


// add a new content in a specific rubric to the db
router.post('/faqs/:id', function(req,res, next){
  Faq.findById({_id:req.params.id});
  Faq.create(req.body)
  .then(function(faq){
    res.send(faq);
  }).catch(next);  
});

// update a rubric in the db
router.put('/faqs/:id', function(req,res, next){
  Faq.findByIdAndUpdate({_id:req.params.id}, req.body)
  .then(function(){
    // send the faq updated
    Faq.findOne({_id:req.params.id})
    .then(function(faq){
      res.send(faq);
    }).catch(next);
  });       
});


//delete a rubric from the db
router.delete('/faqs/:id', function(req,res, next){
  //console.log(req.params.id);
  Faq.findByIdAndRemove({_id:req.params.id})
  .then(function(faq){
    res.send(faq);
  }).catch(next); 
});


module.exports = router;