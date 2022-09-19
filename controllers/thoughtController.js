const Thought = require('../models/Thought');

module.exports = {
  getThoughts:(req, res) =>{
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought:(req, res) =>{
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createThought:(req, res)=> {
    Thought.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // remove a user
  deleteThought:(req,res)=>{
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId })
      .then((thoughts) =>
        !thoughts
          ? res
              .status(404)
              .json({ message: 'No thoughts found with that ID :(' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
    
  },
  updateThoughts:(req, res)=> {
    User.findOneAndUpdate(
      { _id: req.params.user },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thought with this Id is found' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought:(req, res) =>{
    Thought.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  deleteThought:(req, res)=> {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};


