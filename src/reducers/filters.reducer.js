import { GET_FILTERS, GET_LIST_BY_BREED,SET_LOADING_TRUE,SET_LOADING_FALSE } from '../action-types';

const intialState = {
  filtersObject: {},
  images: [],
  isLoading:false,

};


// this is doggos reducer
const filters = (state = intialState, action) => {

  switch (action.type) {


    case SET_LOADING_TRUE:{


      return {
        ...state,
        isLoading:true
      }
    }

    case SET_LOADING_FALSE:{

      return {
        ...state,
        isLoading:false
      }
    }

    case GET_FILTERS: {
      const { payload: { doggos } } = action;

      return {
        ...state,
        filtersObject: doggos
      };
    }

    case GET_LIST_BY_BREED: {
      const { payload: { images } } = action;

      return {
        ...state,
        images
      };
    }

    default:
      return state
  }
};

export default filters;
