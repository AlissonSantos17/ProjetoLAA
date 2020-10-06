const BubbleSort = require('../implementations/BubbleSort');
const InsertionSort = require('../implementations/InsertionSort');
const SelectionSort = require('../implementations/SelectionSort');
const CountingSort = require('../implementations/CountingSort');

module.exports = {
  async BubbleSort(req, res) {
    try {
      const { arrayGenerate } = req.body;
      let timeStart = Date.now()
      const ordenacao = await BubbleSort(arrayGenerate);
      let timeEnd = ((Date.now() - timeStart) / 1000) % 60

      const objeto = {
        'array': ordenacao,
        'tempo': timeEnd 
      };

      return res.json(objeto)
    } catch (error) {
      console.log(error)
    }
  },

  async InsertionSort(req, res) {
    try {
      const { arrayGenerate } = req.body;
      let timeStart = Date.now()
      const ordenacao = await InsertionSort(arrayGenerate);
      let timeEnd = ((Date.now() - timeStart) / 1000) % 60

      const objeto = {
        'array': ordenacao,
        'tempo': timeEnd 
      };

      return res.json(objeto)
    } catch (error) {
      console.log(error)
    }
  },

  async SelectionSort(req, res) {
    try {
      const { arrayGenerate } = req.body;
      let timeStart = Date.now()
      const ordenacao = await SelectionSort(arrayGenerate);
      let timeEnd = ((Date.now() - timeStart) / 1000) % 60
      
      const objeto = {
        'array': ordenacao,
        'tempo': timeEnd 
      };

      return res.json(objeto)
    } catch (error) {
      console.log(error)
    }
  },

  async CountingSort(req, res) {
    try {
      const { arrayGenerate } = req.body;
      let timeStart = Date.now()
      const ordenacao = await CountingSort(arrayGenerate);
      let timeEnd = ((Date.now() - timeStart) / 1000) % 60

      const objeto = {
        'array': ordenacao,
        'tempo': timeEnd 
      };

      return res.json(objeto)
    } catch (error) {
      console.log(error)
    }
  },

}