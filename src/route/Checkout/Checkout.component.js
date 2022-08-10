import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';
// import PropTypes from 'prop-types';
// import { PureComponent } from 'react';

// import CartCoupon from 'Component/CartCoupon';
// import CheckoutBilling from 'Component/CheckoutBilling';
// import CheckoutGuestForm from 'Component/CheckoutGuestForm';
// import CheckoutOrderSummary from 'Component/CheckoutOrderSummary';
// import CheckoutShipping from 'Component/CheckoutShipping';
// import CheckoutSuccess from 'Component/CheckoutSuccess';
// import CmsBlock from 'Component/CmsBlock';
import ContentWrapper from 'Component/ContentWrapper';
// import ExpandableContent from 'Component/ExpandableContent';
// import { CHECKOUT, CHECKOUT_SUCCESS } from 'Component/Header/Header.config';
// import Loader from 'Component/Loader';
// import { addressType } from 'Type/Account';
// import { paymentMethodsType, shippingMethodsType } from 'Type/Checkout';
// import { HistoryType } from 'Type/Common';
// import { TotalsType } from 'Type/MiniCart';
// import { appendWithStoreCode } from 'Util/Url';

// import {
//     BILLING_STEP,
//     CHECKOUT_URL,
//     DETAILS_STEP,
//     SHIPPING_STEP
// } from './Checkout.config';
import CheckoutProgressBar from 'Component/CheckoutProgressBar';

export class Checkout extends SourceCheckout {
    // TODO implement logic

    renderProgressBar(){
        const stepMap = this.stepMap;
        const steps = Object.keys(this.stepMap).length;
        const {checkoutStep} = this.props;
        // const number = Object.keys(this.stepMap).map((e,i) => {number.push(i)})
        console.log(steps)
        
        return(
        <CheckoutProgressBar
                    steps={steps}
                    checkoutStep={checkoutStep}
                    stepMap={this.stepMap}
                    // number={number}
                />
        );
    }
    
    render() { 

        return(
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >   
                    
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        )

    }
};

export default Checkout;
