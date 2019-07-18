class Calculator {
  constructor () {
    this.mean = 0.0
		this.standardDeviation = 0.0
		this.allMyNumbers=[]		
		this.beta1 = 0.0
		this.beta0 = 0.0
		this.xAverage =0.0
		this.yAverage =0.0
  }
	
 	setNumbers (...numbers){
		 return this.allMyNumbers = numbers
	} 	
	
	calcSum(allNumbers){
		let aSum =0
		for (let aNumber of allNumbers){
			aSum +=aNumber				
		}
		return aSum
	}	
	
	calcAverage (allNumbers){						
		let sum = this.calcSum(allNumbers)		
		let average = sum / allNumbers.length
		return average
	}

	
	calcXMinusMeanArray (allNumbers){
		//let sum = this.calcSum(allNumbers)
		let xMinusMeanArray = []
		let mean = this.calcAverage(allNumbers)
	  for ( let  aNumber of allNumbers){
			let xMinusMean = aNumber - mean
			xMinusMeanArray.push (xMinusMean)
			//console.log(xMinusMean)
		}
		return xMinusMeanArray	
	}
	
	calcSquaredArray (allNumbers){
		let aSquaredArray = []
	  for ( let aNumber of allNumbers){
			let aSquaredNumber = aNumber * aNumber
			aSquaredArray.push (aSquaredNumber)
		}
		return aSquaredArray
	}

	calcStandardDeviation (allNumbers){
		//this.setNumbers(...allNumbers)
		this.mean = this.calcAverage(allNumbers)
		let xMinusMeanArray = this.calcXMinusMeanArray (allNumbers)
		let xMinusMeanSquaredArray = this.calcSquaredArray(xMinusMeanArray)
		let result = this.calcSum(xMinusMeanSquaredArray)
		let n= allNumbers.length
	  this.standardDeviation = Math.sqrt (result/ ( n - 1) )	
		return this.standardDeviation
	}
	
	calcXY(xArray, yArray){
		/* let result = 0
		let arr1 = this.x
		let arr2 = this.y
		//this.xy = new Array()
		//this.xy.forEach( (item, index)=> {result = arr1[i]*arr2[i]})
		//return result
		arr1.forEach( (arr1[i]) => {result = arr1[i]*arr2[i]})
		this.xy.push(result)*/
		
		//var this.xy= new Map({this.x.map({a,b}) => a* this.y[b]})
		//let xArray =[]
		//let yArray =[]
		let xyArray =[]
		for (let i=0; i<xArray.length; i++){
			let x= xArray[i]
			let y= yArray[i]
			let xy= x*y
			xyArray.push(xy)						 
		}
		return xyArray
	}
	
	
	calcBeta1(xArray, yArray){
		this.xAverage = this.calcAverage(xArray)
		this.yAverage = this.calcAverage(yArray)
		let xyArray = this.calcXY(xArray, yArray)
		let xySum = this.calcSum(xyArray)
		let SquaredXArray = this.calcSquaredArray(xArray)
		let sumSquaredXArray = this.calcSum(SquaredXArray)
		let yAverageXSum = (this.yAverage*this.xAverage*xArray.length)
		let xAverageXSum = xArray.length *this.xAverage*this.xAverage
		return this.beta1 = (xySum-yAverageXSum)/(sumSquaredXArray-xAverageXSum)	
	}
	
	calcBeta0(xArray, yArray){
		//let xAverage = this.calcAverage(xArray)
		//let yAverage= this.calcAverage(yArray)
		return this.beta0 = (this.yAverage-this.beta1*this.xAverage)		
	}
			
}
//module.exports = Calculator