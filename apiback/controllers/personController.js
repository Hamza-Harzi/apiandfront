const mongoose = require("mongoose");
const Person = require("../models/personxx");

console.log(Person, "vfhcjjcjkb");
const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    if (persons.length === 0) {
      res.status(400).json({ msg: "your database is empty" });
    } else {
      res.status(200).json({ persons });
    }
  } catch (error) {
    res.status(500).json({ msg: "opiration of getAllPerson is failed" });
  }
};
const getOnePerson = async (req, res) => {
  const id = req.params.id;
  console.log("----->", id);
  try {
    const findOnePerson = await Person.findById(id);
    if (!findOnePerson) {
      res.status(404).json({ msg: "not found" });
    } else {
      res.status(200).json({ findOnePerson });
    }
  } catch (error) {
    res.status(500).json({ msg: "opiration of get one person is failed" });
  }
};

const deletePerson = async (req, res) => {
  const id = req.params.id;
  try {
    await Person.findByIdAndDelete(id);
    const persons = await Person.find();
    res.status(200).json({ persons, msg: "delete is saccesfuly done" });
  } catch (error) {
    res.status(500).json({ msg: "delete  is failed" });
  }
};

const updatePerson = async (req, res) => {
  const id = req.params.id;
  const person = req.body;
  try {
    await Person.findByIdAndUpdate(id, person);
    res.status(200).json({ msg: "update is done" });
  } catch (error) {
    res.status(500).json({ msg: "update  is failed" });
  }
};

const creatPerson = async (req, res) => {
  const person = req.body;
  const { userName, age } = person;
  const newPerson = new Person({ userName: userName, age: age });

  console.log(newPerson);
  await newPerson.save();
  res.status(200).json({ msg: "saccefuly Done" });

  try {
  } catch (error) {
    res.status(500).json({ msg: "opiration of get one person is failed" });
  }
};

const searchByName = async (req, res) => {
  const { later } = req.query;
  console.log(later);
  try {
    const persons = await Person.find({
      userName: { $regex: `${later}`, $options: "i" },
    });
    console.log(persons);

    res.status(200).json({ persons });
  } catch (error) {
    res.status(500).json({ msg: "search by mane is failed" });
  }
};

const filterByage = async (req, res) => {
  const { max, min } = req.query;
  try {
    const persons = await Person.find();
    const filtredAge = persons.filter(
      (elt) => elt.age <= Number(min) && elt.age <= Number(max)
    );
    if (filtredAge.length === 0) {
      res
        .status(200)
        .json({ filtredAge: "you dont have any age with this letter" });
    } else {
      res.status(200).json({ filtredAge: filtredAge });
    }
  } catch (error) {
    res.status(500).json({ msg: "search by age is failed" });
  }
};

module.exports = {
  getAllPersons,
  getOnePerson,
  deletePerson,
  updatePerson,
  creatPerson,
  searchByName,
  filterByage,
};
