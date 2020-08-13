const express = require("express");

const shopControllers = require("../controllers/shopControllers");

const router = express.Router();

router.get("/", shopControllers.getIndex);

router.get("/products/:productId", shopControllers.getProduct);

router.post("/cart", shopControllers.postCart);

router.get('/cart/:userId', shopControllers.getCart);

router.delete('/deleteFromCart/:userId/:productId', shopControllers.postDeleteFromCart);


module.exports = router;
