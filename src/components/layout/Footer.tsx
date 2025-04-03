import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative w-10 h-10 flex items-center justify-center bg-black rounded-lg">
                  <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">T</span>
                </div>
              </div>
              <div className="text-2xl font-extrabold ml-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500">TestPlatform</span>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-md">
              TestPlatform is revolutionizing educational assessment with powerful AI-driven tools that make testing more effective, engaging, and insightful.
            </p>
            <div className="flex space-x-4 mb-8">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <span className="text-white/60 hover:text-white transition-colors duration-300">
                    {social === 'twitter' ? '𝕏' :
                      social === 'facebook' ? 'f' :
                        social === 'instagram' ? '📷' : 'in'}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'Case Studies', 'Reviews', 'Updates'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {['Blog', 'Documentation', 'Help Center', 'Guides', 'API'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/40 mb-4 md:mb-0">
              © {new Date().getFullYear()} TestPlatform. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/40 hover:text-white/80 text-sm transition-colors duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}