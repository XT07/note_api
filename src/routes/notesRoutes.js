const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: CRUD de anotações (JWT obrigatório)
 */

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Listar todas as anotações do usuário
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de anotações
 */

/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     summary: Buscar anotação por ID
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Anotação encontrada
 *       404:
 *         description: Não encontrada
 */

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Criar nova anotação
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title]
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Criada com sucesso
 */

/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Atualizar anotação
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Atualizada com sucesso
 */

/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Remover anotação
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Deletada com sucesso
 */


/**
 * @route POST /notes
 * @desc Criar nova anotação
 */
router.post('/', auth, notesController.create);

/**
 * @route GET /notes
 * @desc Listar anotações do usuário autenticado
 */
router.get('/', auth, notesController.getAll);

/**
 * @route GET /notes/:id
 * @desc Buscar anotação por ID
 */
router.get('/:id', auth, notesController.getById);

/**
 * @route PUT /notes/:id
 * @desc Atualizar anotação
 */
router.put('/:id', auth, notesController.update);

/**
 * @route DELETE /notes/:id
 * @desc Deletar anotação
 */
router.delete('/:id', auth, notesController.delete);

module.exports = router;
