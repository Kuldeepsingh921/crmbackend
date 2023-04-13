const express = require("express");

const app = express.Router();

const request = require("request");

const excel = require("../Middleware/excelmulter");

const excelModal = require("../Model/excelleadsModal");
const XLSX = require("xlsx");

const cheerio = require("cheerio");
const crawler = require("crawler");
const xlsx = require("xlsx-stream");
const XlsxStreamReader = require("xlsx-stream-reader");

const fs = require("fs");

app.get("/", async(req, res) => {
  const lead=await excelModal.find()
   res.send(lead)
});

app.post("/upload", excel.single("file"), async (req, res) => {



  const url = req.file.path;
  console.log(req.file.path);

  // const path = `http://localhost:8080/${url}`;

  

  

  //  request(path, function(err, res, body) {
  //  console.log(path)

  // console.log(path, 39);

  // if (err) {
  //   console.error(err);
  //   return;
  // }
  const workbookReader = new XlsxStreamReader();

 console.log(workbookReader);


console.log(workbookReader,54)
  workbookReader.on("worksheet", (sheetReader) => {
    console.log(sheetReader,56)
    
    sheetReader.on("row", (row) => {
      console.log(`Processing row ${row.attributes.r}`);
      console.log(row,50);
      const data = {
        id:row.values[0],
        name: row.values[1],
        email: row.values[2],
        mobileno: row.values[8],
        assignedto: row.values[6],
        status: "done",
      };
      console.log(data, 58);
      const myModel = new excelModal(data);
      myModel.save();
    });


    sheetReader.process();
  });

  
  workbookReader.on("end", () => {
    console.log("Done reading Excel file.");
  });


  workbookReader.on("error", (err) => { console.error("An error occurred while reading the sheet:", err); });

  const read = fs.createReadStream(url)
  .pipe(workbookReader)
  .on("error", (err) => {
    console.error("An error occurred while reading the file:", err);
  });
  
  // Pipe the input stream to the XlsxStreamReader
 
  // Load the Excel file using the XLSX library
  // const workbook = XLSX.read(body, { type: 'binary' });
  // const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // Convert the sheet data to raw HTML
  // const html = XLSX.utils.sheet_to_html(sheet);

  // Use Cheerio to extract the data from the Excel file

  // const $ = cheerio.load(html);

  // const rows = $('tr');

  // Loop through the rows and create a new instance of the model for each row of data
  // rows.each((index,element)=> {

  //   const cols = $(element).find('td');

  //   const data = {
  //     name: $(cols[0]).text(),
  //     email: $(cols[1]).text(),
  //     mobileno: $(cols[2]).text(),
  //     assignedto: $(cols[3]).text(),
  //     interestlevel: $(cols[4]).text(),
  //     followupmedium:$(cols[5]).text(),
  //     status:"done",
  //   };

  //   try{

  //       const myModel = new excelModal(data);
  //        myModel.save();
  //   }
  //   catch(err){
  //       console.log(err);
  //   }

  // });
  // });
});

module.exports = app;
