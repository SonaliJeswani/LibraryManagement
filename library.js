//jshint esversion:6

const express=require("express");
const bodyParser=require("body-Parser");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const saltRounds=2;

//To make cross domain requests since when i made get requests from client side i got error access not allowed due to cors policy
const cors=require("cors");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
mongoose.connect("mongodb://localhost:27017/libraryDB",{useNewUrlParser:true});
const userSchema={
userID:String,
password:String,
name:String,
surname:String,
email:String,
phone:Number,
amountFine:Number,
books:[
  {bookID:String,date:String}
]
};
const bookSchema={
  ISBN:String,
  title:String,
  author:String,
  category:String,
  issued:Boolean,
  issuerID:String,
  publication:String,
  dateOfReturn:String

};
const adminSchema={
  adminID:String,
  password:String
}
const User=mongoose.model('User',userSchema);
const Book=mongoose.model('Book',bookSchema);
const Admin=mongoose.model('Admin',adminSchema);

app.get("/",function(req,res){
  res.send("Hello");
});
// To get all books
app.get("/api/browse",function(req,res){

  Book.find(function(err,foundBooks){
    if(!err){
      res.send(foundBooks);
    }else{
      res.send(err);
    }
  });
});
//when there is a request at api/browser/author/    that is the button is pressed without typing something (****restful api)
app.get("/api/browse/:aything/",function(req,res){
  res.send([]);
})

// To get books with a specific author name
app.get("/api/browse/author/:authorName",function(req,res){
var authorRegex=new RegExp(req.params.authorName);
  Book.find({author: {
      "$regex": authorRegex,
      '$options' : 'i'
   }},function(err,foundAuthorBooks){
    if(!err){
      if(foundAuthorBooks){
        res.send(foundAuthorBooks);
      }
    }else{
      res.send(err);
    }
  });
});
// To get books with a specific title
app.get("/api/browse/title/:bookTitle",function(req,res){
  var titleRegex=new RegExp(req.params.bookTitle);
  Book.find({title: {
      "$regex": titleRegex,
      '$options' : 'i'
   }},function(err,foundTitleBooks){
    if(!err){
      if(foundTitleBooks){
        res.send(foundTitleBooks);
      }
      }else{
      res.send(err);
    }
  });
});
// To get a book by a specific ID
app.get("/api/book/:bookId",function(req,res){
  Book.findById(req.params.bookId,function(err,foundBook){

    if(!err){
      console.log("Found Book is");
      console.log(foundBook);
      res.send(foundBook);
    }else{
      res.send(err);
    }
  })
});
// To get books with a specific category
app.get("/api/browse/category/:category",function(req,res){
    var categoryRegex=new RegExp(req.params.category);
  Book.find({category:{
      "$regex": categoryRegex,
      '$options' : 'i'
   }},function(err,foundCategoryBooks){
    if(!err){
      if(foundCategoryBooks){
        res.send(foundCategoryBooks);
      }
    }else{
      res.send(err);
    }
  });
});
// To get a user with a particular userID
app.get("/api/user/:userIdentity",function(req,res){
  User.findOne({userID:req.params.userIdentity},function(err,foundUser){
    if(!err){
      if(foundUser){
      res.send(foundUser);
    }

    }else{
      res.send(err);
    }
  });
});

app.get("/api/user/:userIdentity/browse",function(req,res){

   res.redirect("/browse");
});
app.get("/api/user/:userIdentity/browse/author/:authorName",function(req,res){
    const author=req.params.authorName;
   res.redirect("/browse/author/"+author);
});
app.get("/api/user/:userIdentity/browse/title/:bookTitle",function(req,res){
    const title=req.params.bookTitle;
   res.redirect("/browse/title/"+title);
});
app.get("/api/user/:userIdentity/browse/category/:category",function(req,res){
    const categoryName=req.params.category;
   res.redirect("/browse/category/"+categoryName);
});
//When the user issues a particular book
app.put("/api/user/:userID/:bookID/issue",function(req,res){
  var newDate = new Date();
  newDate.setMonth(newDate.getMonth() + 1);
  const formattedDate=newDate.toLocaleString("en-GB",{
    day:"numeric",
    month:"numeric",
    year:"numeric"
  });
  console.log(formattedDate);

  Book.findByIdAndUpdate(req.params.bookID,{issued:true,issuerID:req.params.userID,dateOfReturn:formattedDate},function(err){
    if(!err){
      User.findByIdAndUpdate(req.params.userID,{$push :{books: [{bookID:req.params.bookID,date:formattedDate}]}},function(err){
        if(!err){
          res.send({"issued":"Success"});
        }else{
          res.send({"issued":"fail"});
        }
      });
    }else{
      res.send({"issued":"failure"});
    }
  });

});
app.post("/api/user",function(req,res){
   bcrypt.hash(req.body.password,saltRounds,function(err,hash){

    const newUser=new User({
      userID:req.body.UserID,
      password:hash,
      name:req.body.FirstName,
      surname:req.body.LastName,
        email:req.body.Email,
         phone:req.body.PhoneNum,


      amountFine:0,
      books:[]
    });
    newUser.save();
    if(err){
      res.send(err)
    }else{
      const result={"dataEntry":"Success"}
      res.send(JSON.stringify(result));
    }
    })
});
app.post("/api/admin/book/add",function(req,res){
  const newBook=new Book({
    ISBN:req.body.ISBN,
    title:req.body.title,
    author:req.body.author,
    category:req.body.category,
    issued:req.body.issued,
    issuerID:req.body.issuerID,
    publication:req.body.publication,
    dateOfReturn:req.body.dor
  });
  newBook.save();

    const result={"dataEntry":"Success"}
    res.send(JSON.stringify(result));

});

app.get("/api/user/:username/:password",function(req,res){
  const username=req.params.username;
  const password=req.params.password;
  User.findOne({userID:username},function(err,foundUser){
    // if(!err){
    //   console.log("No error");
    //   console.log(foundUser);
    // res.send(foundUser);
    // }
    if(err){
      console.log(err)
    }else{
      if(foundUser){
          bcrypt.compare(password,foundUser.password,function(err,result){
            if(result==true){
              res.send(foundUser);
            }else{
              const output={"userID":"C0"}
              res.send(JSON.stringify(output));
            }
          })
      }else{
        const output={"userID":"C0"}
        res.send(JSON.stringify(output));
      }
    }
  });
});


//Admin
//if adminID is A1 password is admin1
app.post("/api/admin",function(req,res){
   bcrypt.hash(req.body.password,saltRounds,function(err,hash){

    const newAdmin=new Admin({

      password:hash,
      adminID:req.body.identity

    });
    newAdmin.save();
    if(err){
      const result={"dataEntry":"Unsuccessfull"};
      res.send(JSON.stringify(result));
    }else{
      const result={"dataEntry":"Success"};
      res.send(JSON.stringify(result));
    }
    })
});

app.get("/api/admin/:username/:password",function(req,res){
  const username=req.params.username;
  const password=req.params.password;
  Admin.findOne({adminID:username},function(err,foundAdmin){

    // if(!err){
    //   console.log("No error");
    //   console.log(foundUser);
    // res.send(foundUser);
    // }
    if(err){

      const ooutput={"foundAdmin":"No"}
      res.send(JSON.stringify(ooutput));
    }else{
      if(foundAdmin){

          bcrypt.compare(password,foundAdmin.password,function(err,result){
            if(result==true){
              const ooutput={"foundAdmin":"Yes"}
              res.send(JSON.stringify(ooutput));
            }else{
              const ooutput={"foundAdmin":"No"}
              res.send(JSON.stringify(ooutput));
            }
          })
      }else{
        const ooutput={"foundAdmin":"No"}
        res.send(JSON.stringify(ooutput));
      }
    }
  });
});



app.listen(4000,function(){
  console.log("Server started on port 4000");
});
