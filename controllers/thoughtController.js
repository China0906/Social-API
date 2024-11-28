const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought by ID
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id);

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      // Add the thought to the user's thoughts array
      await User.findByIdAndUpdate(req.body.userId, {
        $addToSet: { thoughts: thought._id },
      });

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a thought by ID
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a thought by ID
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found!' });
      }

      // Remove the thought from the associated user
      await User.findByIdAndUpdate(thought.userId, {
        $pull: { thoughts: req.params.id },
      });

      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $addToSet: { reactions: req.body } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a reaction from a thought
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.body.reactionId } } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
