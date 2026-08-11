import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: About / Branding */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Dev<span className="text-indigo-400">Blog</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              နည်းပညာ၊ ဝဘ်ဒီဇိုင်းနှင့် ပရိုဂရမ်မင်းဆိုင်ရာ ဗဟုသုတများကို တနေရာတည်းတွင် လေ့လာဖတ်ရှုနိုင်သော မြန်မာစိုက်ပရိုဂရမ်မင်း ဘလော့ဂ်ဖြစ်ပါသည်။
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              အမြန်လင့်ခ်များ
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">ပင်မစာမျက်နှာ</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">ဆောင်းပါးများ</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">အမျိုးအစားများ</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">ကျွန်ုပ်တို့အကြောင်း</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              ချိတ်ဆက်ရန်
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:contact@devblog.com" className="hover:text-indigo-400 transition-colors">
                  Email ပို့ရန်
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Author Credit */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DevBlog. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Developed with ❤️ by <span className="text-indigo-400 font-medium">Thant Zin Oo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}