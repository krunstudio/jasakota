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

export const fetchList = (url, slug) => {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_LIST_PENDING'
		});

		return axios.get('https://cors-anywhere.herokuapp.com/http://api.devsoft.my.id/public/Api/listjasa/show/1')
			.then(response => {
				let payload = response.data;

				dispatch({
					type: 'FETCH_LIST_SUCCESS',
					payload
				})
			})
			.catch(error => {
				throw (error)
			})
	}
}
