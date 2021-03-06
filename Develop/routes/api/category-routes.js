const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const category = await Category.findAll().catch((err) => {
    res.json(err);
  });
  res.json(category);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const catId = await Category.findOne().catch((err) => {
    res.json(err)
  });
  res.json(catId);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const catty = await Category.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(catty);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCat) => {
      res.json(updatedCat);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', async (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((catId) => {
      res.json(catId);
    })
    .catch((err) => res.json(err));
  // delete a category by its `id` value
});

module.exports = router;
