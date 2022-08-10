import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import './CheckoutProgressBar.config';
import './CheckoutProgressBar.style';

export class CheckoutProgressBar extends PureComponent {
    static propTypes = {
        steps: PropTypes.number.isRequired,
        stepMap: PropTypes.object.isRequired,
        checkoutStep: PropTypes.string.isRequired,
        

    };

    renderProgressBar() {
        const {steps, checkoutStep, stepMap} = this.props;
        let count = [];
        count = Object.keys(stepMap);
        const {title} = stepMap[checkoutStep];
        const index = (steps-1);
        const number = count.indexOf(checkoutStep);
        console.log(steps, checkoutStep, stepMap, count, number)
        
        return (
            <div block="CheckoutProgressBar" elem="DisplayBlock">
                <div block="CheckoutProgressBar" elem="BarBlock">
                    {count.map((element, i) => {
                        return (console.log(element, i),
                        <div block="CheckoutProgressBar" elem="Element" 
                            mods={{col2: steps===2, 
                            col3: steps===3, 
                            col4: steps===4,
                            col5: steps===5}}>
                            {/* <div block="CheckoutProgressBar" elem="DisplayBlock"> */}
                                <div block="CheckoutProgressBar" elem="BarBorder" >
                                    <div block="CheckoutProgressBar" 
                                    elem="BarBody" 
                                    mods={{active: i===number, 
                                        idle: (number-i)>=1||number===(steps-1),
                                        
                                        }}
                                    />
                                </div>
                                {/* <div block="CheckoutProgressBar" elem="LabelContainer"> */}
                                {number-i===1||(number-i)>1? <div block="CheckoutProgressBar" elem="OKPoint" 
                                mods="active"><svg xmlns="http://www.w3.org/2000/svg" 
                                height="24px" viewBox="0 0 24 24" 
                                width="24px" fill="#FFFFFF">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                                    </svg>
                                    </div> : 
                                 
                                <div block="CheckoutProgressBar" elem="OKPoint" 
                                mods={{none: index===i,                                  
                                postactive: (number-i)>1&&i!==index, 
                                idle: i>=number&&i!==index}}>{i+1}</div>}
                                                            
                            </div>)}
                    )}
                </div>
                <div block="CheckoutProgressBar" elem="TitleContainer"> 
                        {Object.keys(stepMap).map((element, i) => {
                            
                            return (console.log("title element", element, "index", i,  "steps-", steps),<div block="CheckoutProgressBar" 
                            elem="Title" 
                            >
                                <div block="CheckoutProgressBar" elem="Item" mods={{none: index===i, idle: number===i||i>number}}>
                                {stepMap[element].title}
                                </div>
                            </div>)
                        })}  
                        
                </div>

                
            </div>
        );
    }

    render() {
        return (
            <div block="CheckoutProgressBar">
                {this.renderProgressBar()}
            </div>
        );
    }
}

export default CheckoutProgressBar;
