export const metadata={
 title:"TechFun Universe",
 description:"Building Tomorrow's Digital Universe"
};

export default function RootLayout({children}){
 return(
  <html lang="en">
   <body style={{
    margin:0,
    background:"linear-gradient(#081120,#003B8E)",
    color:"#fff",
    fontFamily:"Arial,sans-serif"
   }}>
    {children}
   </body>
  </html>
 );
}
