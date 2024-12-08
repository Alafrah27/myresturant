// import { createContext, useContext, useState } from "react";

// const ContextHelper = createContext(null);

// const ContextHelperProvider = ({ children }) => {
//   // You can provide meaningful context values here
//   const [open, setOpen] = useState(false);
//   const value = {
//     open,
//     setOpen,
//   };

//   return (
//     <ContextHelper.Provider value={value}>{children}</ContextHelper.Provider>
//   );
// };

// const UseContextApi = () => {
//   const context = useContext(ContextHelper);
//   if (context === null) {
//     throw new Error(
//       "useContextApi must be used within a ContextHelperProvider"
//     );
//   }
//   return context;
// };

// // Use named exports
// export { ContextHelperProvider, UseContextApi };
