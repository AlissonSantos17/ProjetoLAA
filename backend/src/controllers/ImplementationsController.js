const BubbleSort = require('../implementations/BubbleSort');
const InsertionSort = require('../implementations/InsertionSort');
const SelectionSort = require('../implementations/SelectionSort');
const CountingSort = require('../implementations/CountingSort');

module.exports = {
  async BubbleSort(req, res) {
    try {
      const { arrayGenerate } = req.body;
      const NS_PER_SEC = 1e9;
      const time = process.hrtime();
      const ordenacao = await BubbleSort(arrayGenerate);
      const diff = process.hrtime(time);

      const objeto = {
        'array': ordenacao,
        'tempo': diff[0] * NS_PER_SEC + diff[1]
      };

      return res.json(objeto)
    } catch (error) {
      console.log(error)
    }
  },

  async InsertionSort(req, res) {
    try {
      const { arrayGenerate } = req.body;
      const NS_PER_SEC = 1e9;
      const time = process.hrtime();
      const ordenacao = await InsertionSort(arrayGenerate);
      const diff = process.hrtime(time);

      const objeto = {
        'array': ordenacao,
        'tempo': diff[0] * NS_PER_SEC + diff[1]
      };

      return res.json(objeto)
    } catch (error) {
      console.log(error)
    }
  },

  async SelectionSort(req, res) {
    try {
      const { arrayGenerate } = req.body;
      const NS_PER_SEC = 1e9;
      const time = process.hrtime();
      const ordenacao = await SelectionSort(arrayGenerate);
      const diff = process.hrtime(time);

      const objeto = {
        'array': ordenacao,
        'tempo': diff[0] * NS_PER_SEC + diff[1]
      };

      return res.json(objeto)
    } catch (error) {
      console.log(error)
    }
  },

  async CountingSort(req, res) {
    try {
      const { arrayGenerate } = req.body;
      const NS_PER_SEC = 1e9;
      const time = process.hrtime();
      const ordenacao = await CountingSort(arrayGenerate);
      const diff = process.hrtime(time);

      const objeto = {
        'array': ordenacao,
        'tempo': diff[0] * NS_PER_SEC + diff[1]
      };

      return res.json(objeto)
    } catch (error) {
      console.log(error)
    }
  },

}