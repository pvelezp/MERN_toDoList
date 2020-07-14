const express = require('express')
const router = express.Router()

//Tarea Model

const Tarea = require('../../models/Tarea')

//@route GET api/tareas
//@desc  Get all tareas

router.get('/', (req,res) => {
    Tarea.find()
        .sort({ date: -1})
        .then(tareas => res.json(tareas))
      
})

//@route GET api/tareas
//@desc  Create an tarea

router.post('/', (req,res) => {
    const newTarea =  new Tarea({
        name: req.body.name
    })

    newTarea.save().then(tarea => res.json(tarea))
      
})

//delete

router.delete('/:id', (req,res) => {
    Tarea.findById(req.params.id)
        .then(tarea => tarea.remove().then(() => res.json({success: true})))    
        .catch(err => res.status(404).json({success: false}))
})

//put

router.route('/update/:id').post((req, res) => {
    Tarea.findById(req.params.id)
      .then(tarea => {
        tarea.name = req.body.name;
  
        Tarea.save()
          .then(() => res.json('Tarea actualizada!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router
