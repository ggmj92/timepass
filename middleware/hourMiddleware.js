module.exports = (req, res, next) => {
 const date = new Date();
 const hours = date.getHours();
 const minutes = date.getMinutes();
 const seconds = date.getSeconds();
 req.time = `${hours}:${minutes}:${seconds}`;
 console.log(req.time);
 next();   
};

