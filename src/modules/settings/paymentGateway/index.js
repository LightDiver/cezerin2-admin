import { connect } from 'react-redux';
import { fetchPaymentGateway, updatePaymentGateway } from '../actions';
import Form from './components/form';

const mapStateToProps = (state, ownProps) => ({
	gateway: ownProps.gateway,
	initialValues: state.settings.paymentGatewayEdit
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onLoad: gateway => {
		dispatch(fetchPaymentGateway(gateway || ownProps.gateway));
	},
	onSubmit: data => {
		dispatch(updatePaymentGateway(ownProps.gateway, data));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
