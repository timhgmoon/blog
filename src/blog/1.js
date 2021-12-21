import * as React from "react"
import Code from '../components/code'


const myCode = `
def maxProfit(prices):
  difference = 0
  first = prices[0]

  for i in range(1, len(prices)):
    if((prices[i] - first) > difference):
      difference = prices[i] - first
    else:
      if(prices[i] < first):
        first = prices[i]
  
  return difference
  
print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([1,2]))`
.trim();

let title = "hello"
const Page1 = () => {
  
  return (
   <main>
     <title>
      Tim's Blog
     </title>
     <h1>
      Welcome to my Blog
     </h1>

     <p>
       <Code myCode={myCode}></Code>
     </p>
   </main>

  )
}

export default Page1
