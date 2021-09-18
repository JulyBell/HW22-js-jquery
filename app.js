// task 3

let testClassArray = $(".test").css( 'backgroundColor', 'red' );

let testClassHeaders = $("h2.test").css( 'backgroundColor', 'red' );

let paragraphs = $("p + p").css( 'backgroundColor', 'red' );

let wwwLi = $("li.www + li").css( 'backgroundColor', 'red' );

let headerIs = $("h2 i").css( 'backgroundColor', 'yellow' );

let headerDirectChild = $("h2 > i").css( 'backgroundColor', 'red' );

//task 4

let headersExclTest = $("h2").not(".test").css( 'backgroundColor', 'red' );

let notTestHeaders = $(":header").not(".test").css( 'backgroundColor', 'red' );

let headersAfterHeaders = $(":header + :header").css( 'backgroundColor', 'red' );

let testHeadersAfterHeaders = $(":header.test + :header.test").css( 'backgroundColor', 'red' );