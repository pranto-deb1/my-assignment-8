import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 py-10 px-5 md:px-20 mt-[80px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">HeroApps</h2>
          <p className="text-sm leading-6">
            Discover amazing apps, explore creativity, and enhance productivity — all in one place.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to={'/'} className="hover:text-white transition">Home</Link></li>
            <li><Link to={'/all'} className="hover:text-white transition">Apps</Link></li>
            <li><Link to={'/My-Installation'} className="hover:text-white transition">Installation</Link></li>
            
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="" className="hover:text-white transition">Help Center</a></li>
            <li><a href="" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="" className="hover:text-white transition">Terms of Use</a></li>
            <li><a href="" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebook size={22} /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={22} /></a>
            <a href="#" className="hover:text-sky-500 transition"><FaLinkedin size={22} /></a>
            <a href="#" className="hover:text-gray-100 transition"><FaGithub size={22} /></a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">HeroApps</span>. All rights reserved.
      </div>
    </div>
  );
}
