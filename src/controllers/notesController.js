const Note = require('../models/note');

class NoteController {
  async create(req, res) {
    const { title, content } = req.body;

    try {
      const note = await Note.create({
        title,
        content,
        userId: req.userId,
      });

      res.status(201).json(note);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const notes = await Note.findAll({ where: { userId: req.userId } });
      res.json(notes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const note = await Note.findOne({ where: { id, userId: req.userId } });
      if (!note) return res.status(404).json({ error: 'Anotação não encontrada' });

      res.json(note);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
      const note = await Note.findOne({ where: { id, userId: req.userId } });
      if (!note) return res.status(404).json({ error: 'Anotação não encontrada' });

      note.title = title || note.title;
      note.content = content || note.content;
      await note.save();

      res.json(note);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const note = await Note.findOne({ where: { id, userId: req.userId } });
      if (!note) return res.status(404).json({ error: 'Anotação não encontrada' });

      await note.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new NoteController();

