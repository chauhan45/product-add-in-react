// import React, { useState } from "react";
// import { PayPalButton } from "react-paypal-button-v2";

// export default function Paypal() {
//   const [state, setState] = useState(0);
//   return (
//     <div>
//       <input
//         type="number"
//         value={state}
//         onChange={(e) => setState(e.target.value)}
//       />
//       <PayPalButton
//         options={{
//           clientId: "AdoFNvookHvczDQ7LxE094pavvAZaSVVj9BiceY2Lll3r4-1uZgj583wlzH1JzncdkdXrQJMumeu4WFe",
//           currency: "USD",
//         }}
//         amount={state}
//         onSuccess={(details, data) => {
//           alert("Transaction completed by " + details.payer.name.given_name);

//           console.log({ details, data });
//         }}
//       />
//     </div>
//   ); 
// }