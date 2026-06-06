const services=[
"Web Development",
"Mobile Apps",
"AI Solutions",
"UI/UX Design",
"Cloud & Hosting",
"Digital Branding"
];

export default function Home(){
 return(
 <main>
  <section style={{padding:"80px 20px",textAlign:"center"}}>
   <h1 style={{fontSize:56,color:"#FF7A00",marginBottom:10}}>
    TechFun Universe
   </h1>
   <h2>Building Tomorrow's Digital Universe</h2>
   <p style={{maxWidth:700,margin:"20px auto"}}>
    We create websites, applications, AI solutions, and modern digital experiences.
   </p>
   <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
    <button style={{padding:"14px 24px",background:"#FF7A00",color:"#fff",border:0,borderRadius:10}}>Explore Portfolio</button>
    <button style={{padding:"14px 24px",background:"#003B8E",color:"#fff",border:"1px solid #4FA8FF",borderRadius:10}}>Start Your Project</button>
   </div>
  </section>

  <section style={{padding:40}}>
   <h2 style={{textAlign:"center"}}>Services</h2>
   <div style={{display:"grid",gridTemplateColumns":"repeat(auto-fit,minmax(220px,1fr))",gap:16,maxWidth:1100,margin:"30px auto"}}>
    {services.map(s=>(
      <div key={s} style={{padding:20,border:"1px solid #284d8c",borderRadius:14,background:"#11213B"}}>
       <h3>{s}</h3>
       <p>Professional solutions tailored to your business.</p>
      </div>
    ))}
   </div>
  </section>

  <section style={{padding:40,textAlign:"center"}}>
   <h2>Contact</h2>
   <form name="contact" method="POST" data-netlify="true" style={{maxWidth:600,margin:"0 auto"}}>
    <input type="hidden" name="form-name" value="contact"/>
    <input name="name" placeholder="Your Name" style={{width:"100%",padding:12,marginBottom:10}}/>
    <input name="email" placeholder="Email" style={{width:"100%",padding:12,marginBottom:10}}/>
    <textarea name="message" placeholder="Tell me about your project" style={{width:"100%",padding:12,height:120}}/>
    <br/><br/>
    <button style={{padding:"14px 24px",background:"#FF7A00",color:"#fff",border:0,borderRadius:10}}>Send Message</button>
   </form>
  </section>

  <footer style={{padding:30,textAlign:"center",borderTop:"1px solid #284d8c"}}>
   © 2026 TechFun Universe · Innovate • Create • Elevate
  </footer>
 </main>
 );
}
