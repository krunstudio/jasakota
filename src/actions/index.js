import axios from 'axios'


export const fetchCategory = (url, slug) => {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_CATEGORY_PENDING'
		});

		return axios.get('https://cors-anywhere.herokuapp.com/http://api.devsoft.my.id/public/Api/categories')
			.then(response => {
				let payload = response.data;

				dispatch({
					type: 'FETCH_CATEGORY_SUCCESS',
					payload
                })
			})
			.catch(error => {
				throw (error)
			})
	}
}
