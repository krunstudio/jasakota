import { combineReducers } from 'redux';

const categoryReducer = (state = {
	loadingCategory: true,
	dataCategory: []

}, action) => {
	switch (action.type) {
		case 'FETCH_CATEGORY_PENDING':
			return {
				...state,
				loadingForumDetail: true
			}
		case 'FETCH_CATEGORY_SUCCESS':
			return {
				...state,
				dataCategory: action.payload,
				loadingCategory: false
			}
		default:
			return state
	}
};

const rootReducer = combineReducers({
	category: categoryReducer
});

export default rootReducer;