const router = require('express').Router()
const {models} = require('../../models')

router.get('/', async (req, res) => {
  expenses = await models.Expense.find()
  res.json(expenses)
})

router.get('/:id', async (req, res) => {
  const expense = await models.Expense.findById(req.params.id)
  if(expense)
    res.json(expense)
  res.status(404).json()
})

router.post('/', async (req, res) => {
  try {
    let expense = await models.Expense.create(req.body)
    res.json(expense)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
});

router.patch('/:id', async (req, res) => {
  console.log(req.params.id)
  try {
    let expense = await models.Expense.updateOne({_id: req.params.id}, {...req.body})
    res.status(200).json(expense)
  } catch (error) {
    console.log(error)
    res.status(500).json()
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await models.Expense.deleteOne({_id: req.params.id})
    res.status(204).json()
  } catch (error) {
    console.log(error)
    res.status(500).json()
  }
})


module.exports = router
