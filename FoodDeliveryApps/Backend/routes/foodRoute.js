import express from 'express';
import { addFood, listFood, removeFood} from '../controllers/foodControllers.js';
import multer from 'multer';




const foodRouter = express.Router();

//img storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});
const upload = multer({ storage:storage });

// 📦 POST route to add a food item with image upload
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);









export default foodRouter;