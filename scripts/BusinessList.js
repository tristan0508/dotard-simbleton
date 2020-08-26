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

const companySearchResultArticle = document.querySelector(".foundCompanies")

const businessSearch = businessProviders();
document
    .getElementById("companySearch")
    .addEventListener('keyup', textInput => {
        const searchString = textInput.target.value.toLowerCase();
        const filteredBusiness = businessSearch.filter(character =>{
          return  (
              character.companyName.toLowerCase().includes(searchString) ||
               character.companyIndustry.toLowerCase().includes(searchString)
          ); 
        });
        displayBusiness(filteredBusiness);
    });
    
    const displayBusiness = (business) => {
        const htmlString = business.map(business => {
                return `
                <h2>${business.companyName}</h2>
                <section>
                ${business.addressFullStreet}
                </section>
                <section>
                ${business.addressCity},
                ${business.addressStateCode}
                ${business.addressZipCode}
                </section> `; })
            
        companySearchResultArticle.innerHTML = htmlString;
    };