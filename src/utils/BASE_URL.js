let URL
if(process.env.NODE_ENV==='production'){
  URL = 'http://localhost:8008'
}else{
  URL = "https://rajdhani-backend-vspm.onrender.com";
}

module.exports ={
    URL:URL
}




