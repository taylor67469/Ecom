const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  const tag = await Tag.findAll().catch((err) => {
    res.json(err);
  }); 
  res.json(tag);
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  const tagId = await Tag.findOne().catch((err)=>{
    res.json(err)
  });
  res.json(tagId);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
