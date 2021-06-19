const Router = require('express')
const { getUser, addUser, updateUser, deleteUser } = require('../controllers/user')

const router = new Router()

router.get("/users", getUser)
router.post('/users', addUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router
