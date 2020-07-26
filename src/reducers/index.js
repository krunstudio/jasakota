import { combineReducers } from 'redux';

const jasaReducer = (state = {
	loadingCategory: true,
	dataCategory: [],
	dataList:[],
	keyword: ''

}, action) => {
	switch (action.type) {
		case 'FETCH_CATEGORY_PENDING':
			return {
				...state,
				loadingCategory: true
			}
		case 'FETCH_CATEGORY_SUCCESS':
			return {
				...state,
				dataCategory: action.payload,
				loadingCategory: false
			}
		case 'FETCH_LIST_PENDING':
			return {
				...state,
				loadingList: true
			}
		case 'FETCH_LIST_SUCCESS':
			return {
				...state,
				dataList: action.payload,
				loadingList: false
			}
		default:
			return state
	}
};

const rootReducer = combineReducers({
	jasa: jasaReducer
});

export default rootReducer;