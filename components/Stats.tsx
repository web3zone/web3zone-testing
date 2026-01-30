
import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-brand-orange to-brand-blue rounded-[3rem] p-12 text-white relative overflow-hidden">
        {/* Abstract shapes in background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full -ml-20 -mb-20"></div>
        
        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-black mb-2">120K+</div>
            <div className="text-orange-100 font-medium">Aktivních uživatelů</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">500M+</div>
            <div className="text-orange-100 font-medium">Objem transakcí</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">45+</div>
            <div className="text-orange-100 font-medium">Podporovaných sítí</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">24/7</div>
            <div className="text-orange-100 font-medium">Podpora komunity</div>
          </div>
        </div>
      </div>
    </section>
  );
};
