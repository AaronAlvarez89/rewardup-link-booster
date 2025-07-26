import TargetLogo from "./TargetLogo";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <TargetLogo className="text-white" />
        </div>
        
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-lg font-semibold">Disclaimer</h3>
          <p className="text-gray-300 max-w-4xl mx-auto text-sm leading-relaxed">
            This sweepstakes promotion is operated by an independent marketing company and is not affiliated with, endorsed 
            by, or sponsored by Target Corporation. Target and the Target logo are registered trademarks of Target Corporation.
          </p>
        </div>
        
        <div className="flex justify-center gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Sweepstakes Rules</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;