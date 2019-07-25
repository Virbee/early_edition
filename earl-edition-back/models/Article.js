const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    name: { type: String, default: "Sans nom" },
    title: { type: String, default: "Entrez un titre ici" },
    chapeau: { type: String, default: "Entrez un chapeau ici" },
    text: { type: String, default: "Entrez du texte ici" },
    owner: { type: Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: { createdAt: "created_at" } }
);

const articleModel = mongoose.model("Article", articleSchema);

module.exports = articleModel;
