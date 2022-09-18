const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Add format to time stamp
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  })

const Thought = model('thought', thoughtSchema)

module.exports = Thought;
