const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  const tag = await Tag.findAll().catch((err) => {
    res.json(err);
  });
  res.json(tag);
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async(req, res) => {
  const tagId = await Tag.findOne().catch((err) => {
    res.json(err)
  });
  res.json(tagId);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagger = await Tag.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(tagger);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      // All the fields you can update and the data attached to the request body.
      tag_name: req.body.tag_name,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated book as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});
router.delete('/:id', async (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tagId) => {
      res.json(tagId);
    })
    .catch((err) => res.json(err));
  // delete on tag by its `id` value
});

module.exports = router;
