// import React from 'react';
// function App() {
  
//   let openLink = () => {
//     let pageUrl = 'http://www.naver.com';
//     document.href = pageUrl;
//   }
//     return  (
//         <div>
//             <a href="javascript:void(0);" onClick={() => window.open([openLink], 'blank')}>
//                 link click
//             </a>
//         </div>
//     );
// }
 
// export default App;


import React from 'react';
 
function App () {
    let openLink = () => {
        let pageUrl = 'http://www.naver.com';
        document.location.href = pageUrl;
    }
 
    
    return  (
        <div>
            <a href="javascript:void(0);" onClick={openLink}>
                link click
            </a>
        </div>
    );
  
}
 
export default App;