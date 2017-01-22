'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];
// EXERCISE 1-Euro-Kilometers
var rentalprice;// we want to compute the rental price for each car
function ConvertDate(date1,date2)
{
  var firstDate=new Date(date1);
  var secondDate=new Date(date2);
  var day=1+Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  return day;
}

function RentalPrice(cars,rentals)
{
  //var oneDay=24*60*60*1000;
  for(var k=0;k<rentals.length;k++)
  {
    var carID=rentals[k].carId;
    var km=rentals[k].distance;
    var day=convertDate(rentals[k].returnDate,rentals[k].pickupDate);
    for(var j=0;j<cars.length;i++)
    {
      if(cars[j].id==carID)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }
    rentals[k].price=pricePerKm*km+pricePerDay*day;//compute the price
  }
  return rentals.price;
Price(cars,rentals);

//Exercise2-Drive more, pay less
for(var i=0;i<rentals.length;i++)
{
  var carID=rentals[i].carId;
  var km=rentals[i].distance;
  var oneDay=24*60*60*1000;
  
  var day=ConvertDate(rentals[i].returnDate,rentals[i].pickupDate);
  if(day>=1 && day<4)
  {
      for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*10/100 // the price decreases by 10% after 1 day
  }
  else if(day>=4 && day<10)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*30/100 // the price decreases by 30% after 4 days
  }
  else if(day>=10)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*50/100 // the price decreases by 50% after 10 days
  }  
  return rentals.price;
  
}
   





//EXERCISE 3-Give me all your money
for(var i=0;i<rentals.length;i++)
{
  var carID=rentals[i].carId;
  var km=rentals[i].distance;
  var oneDay=24*60*60*1000;
  
  var day=ConvertDate(rentals[i].returnDate,rentals[i].pickupDate);
  if(day>=1 && day<4)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*10/100 // the price decreases by 10% after 1 day
 
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance;// drivy takes the rest of the commission

  }
  else if(day>=4 && day<10)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*30/100// the price decreases by 30% after 4 days
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance;// drivy takes the rest of the commission
  }
  else if(day>=10)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*50/100// the price decreases by 50% after 4 days
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance;// drivy takes the rest of the commission
  }
}

//Exercice 4 - The famous deductible
for(var i=0;i<rentals.length;i++)
{
  var carID=rentals[i].carId;
  var km=rentals[i].distance;
  var oneDay=24*60*60*1000;
  var ded=rentals[i].options.deductibleReduction;
  var day=ConvertDate(rentals[i].returnDate,rentals[i].pickupDate);
 if(ded==true)// if the driver chooses the deductible reduction option
 {
  if(day>=1 && day<4 )
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay+4;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*10/100 // the price decreases by 10% after 1 day
 
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance+150;
      
    }
  else if(day>=4 && day<10)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay+4;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*30/100// the price decreases by 30% after 4 days
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance+150;// drivy takes the rest of the commission
  }
  else if(day>=10)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay+4;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*50/100// the price decreases by 50% after 4 days
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance+150;// drivy takes the rest of the commission
  }
 } 
 else if(ded==false)// if the driver does not choose the deductible reduction option
 {
  if(day>=1 && day<4 )
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*10/100 // the price decreases by 10% after 1 day
 
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance+800;
  

  }
  else if(day>=4 && day<10)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*30/100// the price decreases by 30% after 4 days
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance+800;// drivy takes the rest of the commission
  }
  else if(day>=10)
  {
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*50/100// the price decreases by 50% after 4 days
    var commission=rentals[i].price*0.3;// the commission is 30%
    rentals[i].commission.assistance=1*day;// 1€ per day
    rentals[i].commission.insurance=commission*0.5;// the insurance is half the commission
    rentals[i].drivy=commission*0.5-rentals[i].commission.assistance+800;// drivy takes the rest of the commission
  }

 }
  
}
//Exercise 5 - Pay the actors
var i=0;
for(i=0; i<rentals.length;i++)
{
	var dr,ins,com;// dr:drivy  ins:insurance com:commission
	var date = new Date(rentals[i].pickupDate);
	var begin = date.getTime();
	var datef = new Date(rentals[i].returnDate);
	var end = datef.getTime();
	tmp = (end - begin)  /60 /60 /24 /1000 + 1;  
	var pDay = cars[i].pricePerDay;
	if((1<tmp) && (tmp<=4))
	{
		pDay = cars[i].pricePerDay - ((cars[i].pricePerDay*10)/100);
	}
	else if((4<tmp) && (tmp<=10))
	{
		pDay = cars[i].pricePerDay - ((cars[i].pricePerDay*30)/100);
	}
	else if(tmp>10)
	{
		pDay = cars[i].pricePerDay - ((cars[i].pricePerDay*50)/100);
	}
	price = tmp * priceDay + cars[i].pricePerKm * rentals[i].distance;
	com = (price*30)/100;
	console.log("comission: " +com);
	ins = com/2;
	console.log("insurance: " + ins);
	Assist = 1*tmp;
	console.log("road assistance: " + Assist);
	if(rentals[i].options.deductibleReduction == true)
	{
		dr = com - (ins + Assist) + 4*tmp;
		console.log("drivy with option: " + dr + "\n")
	}
	else
	{
		dr = com - (ins + Assist);
		console.log("drivy wihtout option: " + dr + "\n\n")
	}
		
	if(rentals[i].options.deductibleReduction == true)
	{
		var dDriver = price + 4*tmp;
		console.log(" driver debit:" + dDriver);
	}
	else
	{
		var dDriver = price;
		console.log("driver debit:" + dDriver);
	}	
		
	
		var dOwner = price - com;
		console.log(" owner credit: " + dOwner);
		
		var dInsurance = ins;
		console.log(" insurance credit: " + dInsurance);
		
		var dAssistance = roadsideAssist;
		console.log(" assistance credit: " + dAssistance);
		
		var dDrivy = dr;
		console.log(" drivy credit: " + dDrivy + "\n\n");
}


console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
