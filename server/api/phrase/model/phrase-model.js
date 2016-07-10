import mongoose from 'mongoose';

const _phraseSchema = {
  phrase: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_phraseSchema);
