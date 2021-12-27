import * as React from "react";
import ArticleLayout from '../components/ArticleLayout';
import Code from '../components/code';
import Nav from '../components/MyNav';
import { Container, Red } from '../components/blogPost.module.css';

const Page2 = () => {
  const constraints = [
    
    `2 <= nums.length <= 10^5`.trim(),
    `-30 <= nums[i] <= 30`.trim(),
    `The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.`.trim()
  ]

  const code1 = `
  def maxSubArray(nums):
    #O(n^2)
    max = float('-inf')

    if len(nums) == 1:
      return nums[0]

    for i in range(len(nums)):
      j = i + 1
      sum = 0
      for j in range(i, len(nums)):
        sum += nums[j]
        if(max < sum):
          max = sum

    return max
  `

  const code2 =`
  def maxSubArray(nums):
    currentSubarray = nums[0]
    maxSubarray = nums[0]
  
    for i in range(1, len(nums)):
      if currentSubarray < 0:
        currentSubarray = 0
      currentSubarray += nums[i]
      
      if maxSubarray < currentSubarray:
        maxSubarray = currentSubarray
  
    return maxSubarray
  
  `
  const displayConstraints = constraints && constraints.map((item) => {
    return <pre><code className={Red}>{item}</code></pre>
  })

  return (
   <>
    <Nav></Nav>
    <div className={Container}>
      <ArticleLayout
        title="Maximum Subarray (LC#53)"
        link="https://leetcode.com/problems/maximum-subarray/"
        linkText="Link to leetcode">
          <p>
            Some of the constraints:
          </p>
          <hr />
          { displayConstraints }
          <hr />
          <p>
            First approach was to brute force which will take about O(n^2).  First thing you have to do is set a max variable to the lowest negative number because negatives are accepted as elements. In this case(python) <code>max=float('inf')</code>. Then you want to use a nested for loop which will go through each element and add it to a variable called sum.  Then you want to check if max is less than sum, if so you want to set max to the sum. This solution does solve the problem but you will eventually run into a TLE if the list size is too large.
          </p>
          <Code myCode={code1}></Code>
          <p>A better approach would be to use an algorithm called Kadane's Algorithm. This algorithm will reset the variable of currentSubarray to 0 if any negative numbers are found because there's no point of adding two negatives to find the largest sum. To implement this algorithm we want to set two variables currentSubarray and maxSubarray equal to the first element in the list. We will then use a for loop to go through each element starting at index 1(current/max is already set to index 0). We then want to check if currentSubarray is less than 0, if so set currentSubarray to 0. We will then set currentSubarray to the sum of currentSubarray and list[index]. Finally, we want to check if maxSubarray is less than currentSubarray. If so, set maxSubarray to currentSubarray.</p>
          <Code myCode={code2}></Code>
        </ArticleLayout>
    </div>

   </>

  )
}

export default Page2
