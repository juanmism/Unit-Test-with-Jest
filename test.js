const { fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js')
    
test("One euro should be 1.206 dollars", function(){
 
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test("Ten Yenes should be 0.022 Pounds", function(){
    
    expect(fromYenToPound(3.5)).toBe(0.02);  
})
test("Ten Dollars should be 0.0625 Yenes", function(){
 
    expect(fromDollarToYen(3.5)).toBe(373.04); 
})


