/**
 * @author A.Sivatharan
 * created on 14.03.2018
 */
var router = express.Router();
var controller = require('./controller');

router.get('/list',controller.getBookList);
router.post('/add',controller.addBook);

module.exports = router;