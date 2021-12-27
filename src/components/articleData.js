export default [
  {
    page: 1,
    title: "Finding Duplicates (LC#287)",
    content: "First approach was to use a nest loop to check each element in the list. This does work but once the list size gets too big you end up getting a Time Limit Exceeded(TLE)"
  },
  {
    page: 2,
    title: "Maximum Subarray",
    content: "First approach was to brute force which will take about O(n^2).  First thing you have to do is set a max variable to the lowest negative number because negatives are accepted as elements. In this case(python) <code>max=float('inf')</code>. Then you want to use a nested for loop which will go through each element and add it to a variable called sum.  Then you want to check if max is less than sum, if so you want to set max to the sum. This solution does solve the problem but you will eventually run into a TLE if the list size is too large."
  },
  {
    page: 3,
    title: "Parenthesis",
    content: "Bacon ipsum dolor amet jerky chuck venison tenderloin. Capicola porchetta boudin, flank biltong rump turducken pancetta swine doner hamburger fatback short loin bacon leberkas. Ball tip leberkas meatloaf kielbasa, bresaola pancetta frankfurter ground round spare ribs filet mignon capicola turkey swine. Ground round short ribs spare ribs meatloaf tri-tip cow salami porchetta pastrami andouille bresaola chislic pork chop tongue capicola."
  },
  {
    page: 4,
    title: "Product of Array",
    content: "Jerky pig tongue shoulder ribeye tenderloin turkey, tri-tip porchetta bresaola brisket chicken alcatra cupim. Doner short loin burgdoggen, flank pork loin leberkas shank pork belly. Bresaola shank meatball chislic ribeye beef beef ribs andouille hamburger pork ball tip alcatra turkey doner brisket. Meatloaf sausage burgdoggen bresaola boudin. Fatback ham hock pig, turkey biltong corned beef chicken burgdoggen swine buffalo pastrami."
  },
  {
    page: 5,
    title: "Fifth Post",
    content: "Bacon ipsum dolor amet jerky chuck venison tenderloin. Capicola porchetta boudin, flank biltong rump turducken pancetta swine doner hamburger fatback short loin bacon leberkas. Ball tip leberkas meatloaf kielbasa, bresaola pancetta frankfurter ground round spare ribs filet mignon capicola turkey swine. Ground round short ribs spare ribs meatloaf tri-tip cow salami porchetta pastrami andouille bresaola chislic pork chop tongue capicola."
  },
  {
    page: 6,
    title: "Sixth Post",
    content: "Jerky pig tongue shoulder ribeye tenderloin turkey, tri-tip porchetta bresaola brisket chicken alcatra cupim. Doner short loin burgdoggen, flank pork loin leberkas shank pork belly. Bresaola shank meatball chislic ribeye beef beef ribs andouille hamburger pork ball tip alcatra turkey doner brisket. Meatloaf sausage burgdoggen bresaola boudin. Fatback ham hock pig, turkey biltong corned beef chicken burgdoggen swine buffalo pastrami."
  },
  {
    page: 7,
    title: "Seventh Post",
    content: "Bacon ipsum dolor amet jerky chuck venison tenderloin. Capicola porchetta boudin, flank biltong rump turducken pancetta swine doner hamburger fatback short loin bacon leberkas. Ball tip leberkas meatloaf kielbasa, bresaola pancetta frankfurter ground round spare ribs filet mignon capicola turkey swine. Ground round short ribs spare ribs meatloaf tri-tip cow salami porchetta pastrami andouille bresaola chislic pork chop tongue capicola."
  },
  {
    page: 8,
    title: "Eighth Post",
    content: "Jerky pig tongue shoulder ribeye tenderloin turkey, tri-tip porchetta bresaola brisket chicken alcatra cupim. Doner short loin burgdoggen, flank pork loin leberkas shank pork belly. Bresaola shank meatball chislic ribeye beef beef ribs andouille hamburger pork ball tip alcatra turkey doner brisket. Meatloaf sausage burgdoggen bresaola boudin. Fatback ham hock pig, turkey biltong corned beef chicken burgdoggen swine buffalo pastrami."
  },
  {
    page: 9,
    title: "Ninth Post",
    content: "Bacon ipsum dolor amet jerky chuck venison tenderloin. Capicola porchetta boudin, flank biltong rump turducken pancetta swine doner hamburger fatback short loin bacon leberkas. Ball tip leberkas meatloaf kielbasa, bresaola pancetta frankfurter ground round spare ribs filet mignon capicola turkey swine. Ground round short ribs spare ribs meatloaf tri-tip cow salami porchetta pastrami andouille bresaola chislic pork chop tongue capicola."
  },
  {
    page: 10,
    title: "Tenth Post",
    content: "Jerky pig tongue shoulder ribeye tenderloin turkey, tri-tip porchetta bresaola brisket chicken alcatra cupim. Doner short loin burgdoggen, flank pork loin leberkas shank pork belly. Bresaola shank meatball chislic ribeye beef beef ribs andouille hamburger pork ball tip alcatra turkey doner brisket. Meatloaf sausage burgdoggen bresaola boudin. Fatback ham hock pig, turkey biltong corned beef chicken burgdoggen swine buffalo pastrami."
  }
]