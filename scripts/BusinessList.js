import  { businessProviders } from './BusinessProvider.js';
import { businessString } from './Business.js';

const contentElement = document.querySelector(".business");

export const BusinessList = () => {
    const businessArray = businessProviders();
    contentElement.innerHTML = "<h1>Customers</h1>"

    businessArray.forEach (
        (businessObject) => {
            contentElement.innerHTML += businessString(businessObject)
        }
    );

}