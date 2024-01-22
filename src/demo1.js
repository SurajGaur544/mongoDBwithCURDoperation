const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Fruits")
.then(() => console.log("connection is successfully..."))
.catch((err) => console.log(err));

const userSchema = mongoose.Schema({
     name: {
        type: String,
        require: true,
     },
     quantity: {
        type: String,
        require: true,
     },
     price: {
        type: String,
        require: true,
     }

})

const User = new mongoose.model("User", userSchema);

// create the document

const createDocument = async () => {

    try{
        const FruitsData1 = new User({
            name: "Mango",
            quantity: "2kg",
            price: "1/50"
        })

        const FruitsData2 = new User({
            name: "Banana",
            quantity: "5 dozen",
            price: "1/40"
        })

        const FruitsData3 = new User({
            name: "Apple",
            quantity: "5kg",
            price: "1/60"
        })

        const FruitsData4 = new User({
            name: "Orange",
            quantity: "5kg",
            price: "1/55"
        })

        const FruitsData5 = new User({
            name: "grape",
            quantity: "2kg",
            price: "1/50"
        })

        const result = await User.insertMany([FruitsData1, FruitsData2, FruitsData3, FruitsData4, FruitsData5]);
        console.log(result);
    }catch(err){
        console.log(err)
    }

}
//createDocument();



// read the documet

const getDocument = async () => {
    try{
       // const result = await User.findOne();
        const result = await User.find();
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}

  getDocument();


 // update the document

 const updateDocument = async (_id) => {
    try{
        const result = await User.findByIdAndUpdate({ _id },{
            $set: {
                quantity: "5kg",
            }
        },{
            new: true,
            useFindAndModify : false,
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }
 }

 // updateDocument('65ab70b587f9eceb94f84d44');


 // Delete the document


 const deleteDocument = async (_id) => {
    try{
        const result = await User.findByIdAndDelete({ _id });
        console.log(result);
    }catch(err){
        console.log(err);
    }
 }

 // deleteDocument('65ab74a0ec2a9a82226a9550')

