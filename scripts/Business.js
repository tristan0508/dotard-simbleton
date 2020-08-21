export const businessString = (businessObj) => {
    return `
        <section class = "${businessObj.companyName}">
            <h2>${businessObj.companyName}</h2>
            <p>${businessObj.addressFullStreet}</p>
            <p>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
        </section>
    
    `
}