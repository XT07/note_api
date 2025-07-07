const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações com usuários (JWT obrigatório)
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Buscar usuário por ID
 *     tags: [Users]
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
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar usuário
 *     tags: [Users]
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remover usuário
 *     tags: [Users]
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
 *         description: Usuário removido
 */


/**
 * @route GET /users
 * @desc Listar todos os usuários
 */
router.get('/', auth, usersController.getAll);

/**
 * @route GET /users/:id
 * @desc Buscar usuário por ID
 */
router.get('/:id', auth, usersController.getById);

/**
 * @route PUT /users/:id
 * @desc Atualizar usuário
 */
router.put('/:id', auth, usersController.update);

/**
 * @route DELETE /users/:id
 * @desc Remover usuário
 */
router.delete('/:id', auth, usersController.delete);

module.exports = router;
