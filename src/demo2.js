const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/student")
.then(() => console.log("Connection is successfully..."))
.catch((err) => console.log(err));


const userSchema = mongoose.Schema({
    Name: {
        type: String,
        require:true,
        uppercase: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
        unique:true,
    },
    DOB: {
        type: Date,
        require,
    },
    Mo_No: {
        type: Number,
        // validate(value){
        //    if(value < 0 ){
        //     throw new Error("value count should not negative")
        //    }
        // },
        validate: {
            validator: function (value) {
                return value.length < 0;
                
            },
            message: "value should not be negative"
        },
        require: true,
        trim: true,
        // maxlength: 10,
        unique:true,
    },
    City: {
        type: String,
        require:true,
        trim: true,
        minlength:5,
        maxlength: 30,
        uppercase: true,
    },
    Email: {
        type: String,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error("Please enter valid email");
            }
        },
        trim: true,
        minlength: 8,
        maxlength: 30,
        lowercase: true,
        unique:true,
    }

});


const StudentDataNew = mongoose.model('StudentDataNew',userSchema);


const createDocument = async () => {
    try{
        const Student1 = new StudentDataNew ({
            Name: "Suraj Kumar",
            DOB: 10/05/2000,
            Mo_No: 6393355611,
            City: "Ayodhya",
            Email:"suraj.@c"
        })
        // const Student2 = new StudentDataNew ({
        //     Name: "Rupesh Pal",
        //     DOB: 24/09/2004,
        //     Mo_No: 6393355623,
        //     City: "Ayodhya",
        //     Email:"rupesh123@"
        // })
        // const Student3 = new StudentDataNew ({
        //     Name: "Divakar Maurya",
        //     DOB: 01/10/2000,
        //     Mo_No: 6393355624,
        //     City: "Buxer",
        //     Email:"divakar123@"
        // })
        // const Student4 = new StudentDataNew ({
        //     Name: "Nikhil",
        //     DOB: 01/05/2002,
        //     Mo_No: 6393355625,
        //     City: "Buxer",
        //     Email:"nikhil123@"
        // })
        // const Student5 = new StudentDataNew ({
        //     Name: "Rahul Saini",
        //     DOB: 04/07/2003,
        //     Mo_No: 6393355626,
        //     City: "Meerut",
        //     Email:"rahul123@"    , Student2, Student3, Student4, Student5
        // })
        const result = await StudentDataNew.insertMany([Student1]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}


createDocument()