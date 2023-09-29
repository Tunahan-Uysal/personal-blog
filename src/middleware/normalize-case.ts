export default function(req, res, next) {
    req.url = req.url.toLowerCase();
    next();
}