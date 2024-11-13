import { config } from 'dotenv';
config();
function Validate(req, res, next) {
    const key = req.headers['x-api-key'];
    const domain = req.headers.origin;
    if (key === `${process.env.valid_Key}`) {
        next();
    }
    else {
        res.status(403).json({ error: 'You are Not Allowed!!' });
    }
}
export default Validate;
