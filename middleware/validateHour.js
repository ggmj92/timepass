module.exports = (req, res, next) => {
    const clock = req.time.split(':');
    const hours = parseInt(clock[0]);
    if (hours >= 0 && hours < 12) {
        res.locals.message = "It's not time yet, please come back at noon.";
        res.redirect('/?message=' + encodeURIComponent(res.locals.message));
    } else {
        next();
    }
};