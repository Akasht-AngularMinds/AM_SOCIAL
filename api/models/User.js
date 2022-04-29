const mongoose = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

var validatePassword = function (password) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/;
  return re.test(password)
};



const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      
    
    },
    email : {
      type: String,     
      max: 50,
      
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String, 
  
      required: 'password is required',
      // validate: [validatePassword, 'Please fill a valid password'],
      // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/, 'Please fill a valid password']
    },
    mobile:{
      type:"number"
    },
    dob:{
       type:"date"
    },
    gender:{
        enum:["Male","Female"],
      

    },

    profilePicture: {
      type: String,
      default: "",
    },
    
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
   
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

// const complexityOptions = {
//     min: 6,
//     max: 250,
//     numeric: 1,
//     symbol: 1,
//     requirementCount: 2,
// };
// const userValidation = (data) => {
//     const schema = Joi.object({
//         firstName: Joi.string().min(4).required(),
//         lastName: Joi.string().min(4).required(),
//         email: Joi.string().email().min(6).required(),
//         //    password: Joi.string().min(6).numeric(1).required(),
//         password: passwordComplexity(complexityOptions),
//         cpassword: passwordComplexity(complexityOptions),
        
//     })
//     return schema.validate(data)
// }
// module.exports.userValidation = userValidation;