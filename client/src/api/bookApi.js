
/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */
import axios from 'axios';
const baseUrl = 'http://localhost:9000/api/book';

export default class BookApi {
	static getAllBooks() {
		return axios.get(baseUrl+'/list')
		.then(res => {
			return res.data.result;
		}).catch(a => {
			console.log(a);
		});
	}

	static deleteBook(book) {
		return axios.post(baseUrl+'/delete',{id:book.id}).then(res => {
			return res.data.result;
		}).catch(a => {
			console.log(a);
		})
	}
}