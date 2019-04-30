
var pet = require('./models/pet')

module.exports = {
  Allpets: function(req, res){
    pet.find({}).sort({type: 1})
          .then(data=> {
            console.log(data);
            res.json(data);}
          )
          
          .catch(err=>res.json(err))
  },

  Createpet: function(req, res){
    console.log(req.body)
    pet.create(req.body)
          .then(data=>res.json({data}))
          .catch(err=>res.json(err));
  },

  Findpet: function(req, res){
    pet.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
  },

  Editpet: function(req, res){
    pet.findByIdAndUpdate({_id:req.params.id},
      {$set: req.body})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
  }, 

  Removepet: function(req, res){
    pet.deleteOne({_id:req.params.id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
  },

  like: function(req, res){
      pet.findOneAndUpdate({_id:req.params.id},
        {$inc:{like: 1} })
      .then(data=>res.json(data))
      .catch(err=>res.json(err));
    }
}