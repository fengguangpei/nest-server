"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogSchema = void 0;
const mongoose_1 = require("mongoose");
exports.blogSchema = new mongoose_1.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number,
    },
});
//# sourceMappingURL=schema.js.map