const express=require("express")

const path=require("path")
const app=express()

  
const cors=require("cors")

const connection=require("./config/db")

const multer=require("multer")

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname)))

const superModel=require("./Model/SuperModel")

const superRouter=require("./Routes/superadminRoute")

const adduserRouter=require("./Routes/adduserRoute")

const modeofdeliveryRouter=require("./Routes/Modeofdelivery")

const mastercourseRouter=require("./Routes/MasterCourseRoute")

const masterQualificationRoute=require("./Routes/QualificationRoute")

const masterOrganistionRoute=require("./Routes/masterOrganistationRoute")

const masterTaxRoute=require("./Routes/masterTaxRoute")

const masterDesignationRoute=require("./Routes/masterDesignationRoute")

const masterCountryRoute=require("./Routes/masterCountryRoute")

const masterStateRoute=require("./Routes/masterStateRoute")

const masterFollowupRoute=require("./Routes/masterFollowupRoute")

const masterSourceRoute=require("./Routes/masterSourceRoute")

const masterDepartmentRoute=require("./Routes/masterDepartmentRoute")

const imageRoute=require("./Routes/ImageRoute")

const masterSubjectRoute=require("./Routes/MasterSubjectRoute")

const CounsellorRoute=require("./Routes/AddCounsellorRoute")

const masterBankRoute=require("./Routes/MasterBankRoute")

const masterCityRoute=require("./Routes/MasterCityRoute")
const masterEmployeeRoute=require("./Routes/MasterEmployeeRoute")
const masterBatchRoute=require("./Routes/MasterBatchRoute")
const masterClassRoute=require("./Routes/MasterClassRoute")

const addLeadsRoute=require("./Routes/addLeadsRoute")

const excelfileRoute=require("./Routes/excelleads")

const loginRoute=require("./Routes/Login")
const DistributeLeadsRoute = require("./Routes/DistributeLeadsRoute")
const MasterLeadsStatus=require("./Routes/MasterLeadsStatusRoute")

app.use("/superadmin",superRouter)

app.use("/adduser",adduserRouter)

app.use("/modeofdelivery",modeofdeliveryRouter)

app.use("/mastercourse",mastercourseRouter)

app.use("/masterqualification",masterQualificationRoute)

app.use("/masterorganisation",masterOrganistionRoute)

app.use("/mastertaxroute",masterTaxRoute)

app.use("/masterdesignation",masterDesignationRoute)

app.use("/mastercountry",masterCountryRoute)

app.use("/counsellor",CounsellorRoute)

app.use("/masterstate",masterStateRoute)

app.use("/masterfollowup",masterFollowupRoute)

app.use("/mastersource",masterSourceRoute)

app.use("/masterdepartment",masterDepartmentRoute)

app.use("/profile",imageRoute)

app.use("/mastersubject",masterSubjectRoute)

app.use("/masterbank",masterBankRoute)

app.use("/mastercity",masterCityRoute)
app.use("/masteremployee",masterEmployeeRoute)
app.use("/masterbatch",masterBatchRoute)
app.use("/masterclass",masterClassRoute)

app.use("/login",loginRoute)

app.use("/excelleads",excelfileRoute)

app.use("/enquiryleads",addLeadsRoute)
app.use("/distributeLeads",DistributeLeadsRoute)
app.use("/leadsstatus",MasterLeadsStatus)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8080,async()=>{
    await connection
    console.log("server is running")

})

