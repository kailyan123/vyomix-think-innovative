const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-3xl font-bold">
            <span className="text-gradient">Vyomix</span>
          </h3>
          <p className="text-muted-foreground mt-2 text-lg">
            Infinite Solutions, Smart Tech
          </p>
        </div>
        
        <div className="border-t border-border pt-6">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Vyomix. All rights reserved. 
            Crafted with innovation and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;