const dataModel = require('../model/deviseModel');
const addData = async (req, res) => {
  try {
    console.log("add data api is called ");
    const { current, voltage, timestamp, device_id } = req.body;
    console.log(JSON.stringify(req.body));
    const data = await dataModel.create({ current, voltage, timestamp, device_id });
    res.status(201).json({ message: "Added the Data Sucessfully" });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const fetchdata = async (req, res) => {
  try {
    console.log("fetch data is called ")
    let num = req.params.id;
    console.log(num);
    const data = await dataModel.find({ device_id: num }).sort({ timestamp: -1 }).limit(1);
    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}


module.exports = { addData, fetchdata };