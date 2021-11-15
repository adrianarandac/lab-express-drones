const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");


router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const dronesInDb = await Drone.find();
    res.render("drones/list", { dronesInDb });
  } catch (err) {
    console.error(err);
  }
});

router
  .route("/drones/create")
  .get(async (req, res, next) => {
    try {
      res.render("drones/create-form");
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, propellers, maxSpeed } = req.body;
      const createDrone = await Drone.create({ name, propellers, maxSpeed });

      const dronesInDb = await Drone.find();
      res.render("drones/list", { dronesInDb });
    } catch (err) {
      console.log(err);
    }
  });

router
  .route("/drones/:id/edit")
  .get(async (req, res, next) => {
    try {
      const id = req.params.id;
      const droneToUpdate = await Drone.findById(id);
      res.render("drones/update-form", droneToUpdate);
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const { name, propellers, maxSpeed } = req.body;
      const id = req.params.id;
      const updateDrone = await Drone.findByIdAndUpdate(id, {
        propellers,
        name,
        maxSpeed,
      });

      const dronesInDb = await Drone.find();
      res.render("drones/list", { dronesInDb });
    } catch (err) {
      console.log(err);
    }
  });

router.post("/drones/:id/delete", async (req, res, next) => {
  try {
    await Drone.findByIdAndDelete(req.params.id);
    const dronesInDb = await Drone.find();
    res.render("drones/list", { dronesInDb });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
