import * as React from "react";
import Code from '../components/code';
import ArticleLayout from '../components/LCLayout';
import Contact from '../components/ContactForm';


const Page1 = () => {
  const constraints = [
    `1 <= n <= 10^5`.trim(),
    `nums.length == n + 1`.trim(),
    `1 <= nums[i] <= n`.trim()
  ]
  
  const code1 = `
    def containsDuplicate(nums):
    for i in range(len(nums)):
      j = i + 1
      while(j < len(nums)):
        if nums[i] == nums[j]:
          return True
        j += 1
    return False
  `

  const code2 = `
    def containsDuplicate(nums):
      nums_set = set(nums)
      if(len(nums) == len(nums_set)):
        return False
      return True
  `

  const code3= `
    def containsDuplicate(nums):
      nums_set = set()
      nums_list = []
      for i in range(len(nums)):
        nums_set.add(nums[i])
        nums_list.append(nums[i])
        if(len(nums_set) != len(nums_list)):
          return nums[i]
      return 
  `

  const displayConstraints = constraints && constraints.map((item) => {
    return <pre><code>{item}</code></pre>
  })
  return (
   <div>
    <ArticleLayout 
      title="Finding Duplicates (LC#287)"
      link="https://leetcode.com/problems/find-the-duplicate-number/"
      linkText="Link to finding duplicates"
    >
      <p>
        Some of the constraints:
      </p>
      <hr/>
      { displayConstraints }
      <hr/>
      <p>
        First approach was to use a nest loop to check each element in the list. This does work but once the list size gets too big you end up getting a Time Limit Exceeded(TLE).
      </p>
      <Code myCode={code1}></Code>
      <p>Second approach used a set which doesn't allow any duplicates. This is probably the most ideal way to solve this problem since you don't have to loop at all(linear time). You simply just copy the list into a set and check if the lengths match. If lengths match then there is no duplicates(return False). If lengths are different return True(match found)</p>
      <Code myCode={code2}></Code>
      <p>Although this solution does work for the given problem if the problem was changed to output the matching element instead of True/False. A good approach would be to use a for loop to add each element to a new set and new list 1 by 1. You could then compare length of set and list to return element instead of True/False </p>
      <Code myCode={code3}></Code>

      <Contact></Contact>
    </ArticleLayout>
   </div>
    
  )
}

export default Page1
