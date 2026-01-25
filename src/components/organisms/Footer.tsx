import React from "react";
import logo from "@/assets/VAYLA_S_LOGO_White.png";

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 relative z-10">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    {/* Footer Logo */}
                    <div className="flex items-center gap-2 mb-6 h-32 opacity-80 hover:opacity-100 transition-opacity">
                        <img
                            src={logo}
                            alt="VAYLA Protocol"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        The protocol for borderless fandom economy. Empowering creators and fans through decentralized infrastructure.
                    </p>
                    <div className="flex gap-4">
                        {[
                            { icon: 'mdi:twitter', url: 'https://x.com/vaylamanager' },
                            { icon: 'mdi:discord', url: 'https://discord.gg/PSNRHbZDS4' },
                            { icon: 'mdi:telegram', url: 'https://t.me/Vayla_Official' },
                            { icon: 'mdi:github', url: 'https://github.com/manager-vayla' }
                        ].map((social, i) => (
                            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-teal-400 transition-all">
                                <iconify-icon icon={social.icon}></iconify-icon>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 font-['Space_Grotesk']">Ecosystem</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                        {['Fan Funding', 'Asset Tokenization', 'Marketplace', 'DAO Governance'].map(item => (
                            <li key={item}><a href="#" className="hover:text-teal-400 transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 font-['Space_Grotesk']">Resources</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                        {['Whitepaper', 'Documentation', 'Security Audits', 'Brand Kit'].map(item => (
                            <li key={item}><a href="#" className="hover:text-teal-400 transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 font-['Space_Grotesk']">Newsletter</h4>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-white focus:outline-none w-full" />
                        <button className="bg-teal-500 text-black px-4 py-2 rounded-lg font-bold transition-colors">
                            <iconify-icon icon="mdi:arrow-right"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-[90rem] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-[10px] uppercase font-mono tracking-widest">© 2024 VAYLA Protocol. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase font-mono tracking-widest">Privacy</a>
                    <a href="#" className="text-gray-600 hover:text-white text-[10px] uppercase font-mono tracking-widest">Terms</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
