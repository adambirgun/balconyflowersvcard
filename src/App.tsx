import { useState, useEffect } from 'react';
import { Phone, Globe, ShoppingBag, Instagram, Facebook, MapPin, MessageCircle } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ8MUKXi8LJnHwU7kdnzx3koBSV+yu/ejj4IF2O68umhURELTKXi8LFnHgU7k9nzxnkoBSZ/y+/ejD4IF2S78umgURILTKXi8LFnHgU7k9nzxnkoBSZ/y+/ejD4IF2S78umgURILTKXi8LFnHgU7k9nzxnkoBSZ/y+/ejD4IF2S78umgURIL');
    audio.volume = 0.15;
    audio.play().catch(() => {});
  }, []);

  const contactLinks = [
    {
      icon: MessageCircle,
      title: 'WhatsApp İletişim',
      color: 'from-emerald-500 to-green-600',
      link: 'https://wa.me/905551234567',
      description: 'Hemen mesaj gönderin'
    },
    {
      icon: Phone,
      title: 'Telefon İletişim',
      color: 'from-blue-500 to-indigo-600',
      link: 'tel:+905551234567',
      description: 'Bizi arayın'
    },
    {
      icon: Globe,
      title: 'Web Sitemizden Alın',
      color: 'from-purple-500 to-pink-600',
      link: 'https://balconyflowers.com',
      description: 'Online sipariş'
    },
    {
      icon: ShoppingBag,
      title: 'Trendyol Pazaryerinden Alın',
      color: 'from-orange-500 to-red-600',
      link: 'https://trendyol.com/balconyflowers',
      description: 'Trendyol mağazamız'
    },
    {
      icon: Instagram,
      title: 'Instagram Hesabımız',
      color: 'from-pink-500 to-rose-600',
      link: 'https://instagram.com/balconyflowers',
      description: '@balconyflowers'
    },
    {
      icon: Facebook,
      title: 'Facebook Hesabımız',
      color: 'from-blue-600 to-blue-700',
      link: 'https://facebook.com/balconyflowers',
      description: 'Sosyal medyada takip edin'
    },
    {
      icon: MapPin,
      title: 'Balcony Flowers, Oba',
      color: 'from-teal-500 to-cyan-600',
      link: 'https://maps.google.com/?q=Balcony+Flowers+Oba',
      description: 'Oba konumumuz'
    },
    {
      icon: MapPin,
      title: 'Balcony Corner, Alanyum AVM',
      color: 'from-amber-500 to-yellow-600',
      link: 'https://maps.google.com/?q=Balcony+Corner+Alanyum+AVM',
      description: 'Alanyum AVM konumumuz'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm animate-float"
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 15 + 's'
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-lg">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-8 text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-xl shadow-2xl transform hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-rose-300 via-pink-200 to-rose-300 flex items-center justify-center">
                  <svg className="w-20 h-20 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="text-5xl font-light text-white mb-2 tracking-wide">
              Balcony Flowers
            </h1>
            <p className="text-rose-300 text-lg font-light tracking-widest uppercase">
              Premium Çiçekçilik
            </p>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-4">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-500 delay-${index * 100}`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
                  }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                    className="block group"
                  >
                    <div className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-white/10 ${
                      activeCard === index ? 'shadow-rose-500/50' : ''
                    }`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      <div className="relative flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-white font-light text-lg tracking-wide group-hover:text-rose-200 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-sm font-light mt-0.5">
                            {item.description}
                          </p>
                        </div>

                        <svg
                          className="w-5 h-5 text-white/40 group-hover:text-rose-300 transform group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm font-light tracking-wide">
              © 2025 Tüm Hakları Saklıdır
            </p>
            <a
              href="https://adambirgun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-rose-300/60 hover:text-rose-300 text-xs font-light tracking-wider transition-colors duration-300"
            >
              Design by adambirgun
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
