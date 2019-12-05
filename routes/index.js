const express = require("express");
const router = express.Router();

const axios = require("axios");

const createAxios = axios.create({
  // Recogemos la URL
  baseURL: `https://jsonplaceholder.typicode.com?apy_key=${process.env.apu_key}`,
  timeout: 3000
});

router.get("/:id/:otro", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await createAxios.get(`/posts/${id}`);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;

    const response = await createAxios.post(`/posts`, body);

    console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const response = await createAxios.put(`/posts/${id}`, body);

    console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await createAxios.delete(`/posts/${id}`);

    console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

module.exports = router;
