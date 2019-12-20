import { connect } from 'react-redux';
import DoggoPageComponent from './DoggoPage';
import { getDoggosByBreed, getFilters } from '../../actions/filters.action';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const { filters: { images, filtersObject,isLoading } } = state;

  const { counter = 10 } = ownProps;

  return {
    data: filtersObject, // this would be in HomePageComponent's props,
   isLoading,
    images: images.slice(0, counter)
  };
};

const mapDispatchToProps = ({
  getFilters,
  getDoggosByBreed
});

const DoggoPageWithConnect = connect(mapStateToProps, mapDispatchToProps)(DoggoPageComponent);
export default withRouter(DoggoPageWithConnect);
