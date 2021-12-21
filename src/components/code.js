import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

// const myCode = `
// def maxProfit(prices):
//   difference = 0
//   first = prices[0]

//   for i in range(1, len(prices)):
//     if((prices[i] - first) > difference):
//       difference = prices[i] - first
//     else:
//       if(prices[i] < first):
//         first = prices[i]
  
//   return difference
  
// print(maxProfit([7,1,5,3,6,4]))
// print(maxProfit([1,2]))`
// .trim();

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const Code = ({myCode}) => {
  return(
    <Highlight 
      {...defaultProps}
      code={myCode}
      theme={theme}
      language="python">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code