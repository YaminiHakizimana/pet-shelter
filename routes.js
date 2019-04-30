// Routes
var controller = require("./controller")
var path = require('path')
module.exports = function(app) {
  app.get('/pets', controller.Allpets)
  app.post('/newpet', controller.Createpet)
  app.get('/pet/:id', controller.Findpet)
  app.put('/pet/:id', controller.Editpet)
  app.delete('/pet/remove/:id', controller.Removepet)
  app.put('/pet/like/:id', controller.like)
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angularapp/dist/angularapp/index.html"))
  });
} 