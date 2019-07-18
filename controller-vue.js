 //class Controller {
	//static main(){ 
	//const 

		var app1 = new Vue ({
			el:'#calculate-Numbers',
			data:{
				content:'',
				calc : new Calculator(),
				allReadNumbers:[],
			},
			methods:{
				onFileChange(e) {
					console.log(e)
					console.log(e.target.files[0])
					let files = e.target.files || e.dataTransfer.files
					if (!files.length)
						return
					this.loadNumbers(files[0])
				},
				
				loadNumbers(file) {					
					let reader = new FileReader()      
					console.log(reader)
					let vm = this
					
					reader.onload = (e) => {
						console.log(e.target.result)
						vm.content = e.target.result
					}
					reader.readAsText(file)
				},				
				
				getNumbers: function(){
					let result =0
					let textData = this.content.trim('\n').split('\n')				
					for (let i=0; i<textData.length; i++){
						result =Number(textData[i])
						this.allReadNumbers.push(result)
					}  
					
				/* alternatively
					this.allMyInputNumbers = n.map(s=> Number(s)) */
					
	/* 				let n = this.content.indexOf('\n')+1				
					let m = this.content.slice(n)
					let theArrayOfStrings = m.split(',') */ 
					//this.allMyInputNumbers = theArrayOfStrings.map(s => Number(s))
					
					// return this.allMyInputNumbers		
				},
				
				getCalculator: function (){				
					this.calc.calcStandardDeviation (this.allReadNumbers)										
				},  
			}
		});
		
		var app2 = new Vue ({
			el:'#calculate-Numbers2',
			data:{
				inputX: '',
				inputY: '',
				calc : new Calculator(),
				allInputNumbersX:[],
				allInputNumbersY:[],
			},
			methods:{
				/* calculation: function(){
					//this.input += this.nextChar
					//this.nextChar = ''
					let theNumbers = []
					this.content = ''
					for (let aChar of this.input) {
						if (aChar === ',') {
						theNumbers.push()
						}						
						//theNumbers.push()
					}
					this.allInputNumbers = theNumbers
				}, */
				
				getInputs: function(arrayOfStrings){
					let result =0
					let allNumbers =[]
					let textData = arrayOfStrings.trim('\n').split(',')				
					for (let i=0; i<textData.length; i++){
						result =Number(textData[i])
						allNumbers.push(result)
					}  
					return allNumbers
				},
				
				getNumbers:function(arrayOfStrings){
					this.allInputNumbersX = this.getInputs(this.inputX)
					this.allInputNumbersY = this.getInputs(this.inputY)
					console.log(this.allInputNumbersX)
					console.log(this.allInputNumbersY)
				},
				
				getCalculator: function (){				
					//this.calc.xAverage = this.calc.calcAverage(this.allInputNumbersX)
					//this.calc.yAverage = this.calc.calcAverage(this.allInputNumbersY)
					this.calc.calcBeta1 (this.allInputNumbersX,this.allInputNumbersY)
					this.calc.calcBeta0 (this.allInputNumbersX,this.allInputNumbersY)
				},  
			}
		});
 	//}
//} 