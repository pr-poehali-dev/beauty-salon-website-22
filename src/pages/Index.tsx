import { useState } from "react";
import Icon from "@/components/ui/icon";

const features = [
  { icon: "Sparkles", text: "Премиальный уход нового поколения: инновации, чистые составы, результат в комплексе" },
  { icon: "ShieldCheck", text: "Без привыкания: устойчивый эффект за счет грамотной схемы" },
  { icon: "Flower2", text: "Комплексные оздоровительные программы для кожи головы и волос" },
  { icon: "Heart", text: "Внутренняя поддержка организма: витамины, минералы, питание клеток" },
  { icon: "Zap", text: "Омоложение без уколов" },
];

const pillars = [
  {
    icon: "Leaf",
    title: "От состава к результату",
    desc: "Только эффективные, проверенные формулы",
  },
  {
    icon: "Droplets",
    title: "Поддержка изнутри",
    desc: "Витамины, минералы, питание каждой клетки",
  },
  {
    icon: "Search",
    title: "Индивидуальный подбор",
    desc: "Назначаю, рекомендую и веду до результата",
  },
];

const services = [
  "Консультация косметолога-эстетиста",
  "Трихологическая диагностика",
  "Программа омоложения кожи",
  "Оздоровление кожи головы и волос",
  "Подбор витаминно-минерального комплекса",
  "Комплексная программа преображения",
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-novo-dark text-novo-light font-montserrat">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(180,140,100,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(120,90,160,0.1)_0%,_transparent_55%)]" />

        {/* Logo header */}
        <div className="relative z-10 flex flex-col items-center pt-10 pb-6 px-6">
          <img
            src="https://cdn.poehali.dev/projects/66cecb4f-8169-42b7-a5a2-fbb46fdb6702/bucket/9a2933b1-1527-4fda-b17d-d812dd298848.png"
            alt="NOVO — пространство преображения Анны Котельниковой"
            className="w-64 md:w-72 object-contain brightness-[10] opacity-90"
          />
        </div>

        {/* Headline */}
        <div className="relative z-10 px-6 pb-4">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl font-light text-white leading-tight uppercase tracking-wide mb-3">
              Системный подход<br />к вашей красоте
            </h1>
            <p className="text-[#c8d8cc] text-sm md:text-base tracking-[0.18em] uppercase font-light">красота начинается изнутри</p>
            <p className="text-[#9ab8a8] text-xs md:text-sm tracking-[0.12em] uppercase font-light mb-6">и усиливается снаружи</p>
          </div>
        </div>

        {/* Features + Photo — photo pinned to right edge */}
        <div className="relative z-10 pb-0">
          <div className="relative flex items-start">
            {/* Text */}
            <div className="flex-1 pl-4 pr-2 pb-10 space-y-3 pt-2 z-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <Icon name={f.icon} size={18} className="text-[#a8c8b8] flex-shrink-0 mt-[3px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" fallback="Check" />
                  <p className="text-white text-base leading-relaxed font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{f.text}</p>
                </div>
              ))}
            </div>
            {/* Photo — flush right, overlaps headline block */}
            <div className="flex-shrink-0 w-[38%] md:w-[35%] -mt-96 relative z-20">
              <img
                src="https://cdn.poehali.dev/projects/66cecb4f-8169-42b7-a5a2-fbb46fdb6702/bucket/23ea6845-9006-4caa-b2f4-7b6f23053bb0.png"
                alt="Анна Котельникова"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative py-14 px-6 w-full overflow-hidden" style={{background: "linear-gradient(135deg, #f8f5ff 0%, #edf7f0 40%, #f5eef8 70%, #eef6f9 100%)"}}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(120,180,140,0.35)_0%,_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(160,120,200,0.3)_0%,_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_0%,_transparent_70%)]" />
        <div className="relative z-10 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: "Leaf", desc: "От состава к результату: только эффективные, проверенные формулы" },
            { icon: "FlaskConical", desc: "Поддержка изнутри: витамины, минералы, питание каждой клетки" },
            { icon: "Search", desc: "Индивидуальный подбор: назначаю, рекомендую и веду до результата" },
          ].map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0f5f2] to-[#e8e0f0] flex items-center justify-center shadow-sm">
                <Icon name={p.icon} size={32} className="text-[#1a1a1a]" fallback="Star" />
              </div>
              <p className="text-[#1a1a1a] text-xs md:text-sm leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-[#0a0a0a] py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(150,110,180,0.1)_0%,_transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(180,140,90,0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8d8cc] text-[10px] uppercase tracking-[0.35em] font-light mb-2">Что я предлагаю</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light uppercase tracking-wide">
              Наши услуги
            </h2>
            <div className="w-16 h-[1px] bg-[#9ab8a8] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "Sparkles", title: "Консультация косметолога", desc: "Персональный анализ кожи и разработка индивидуальной программы ухода" },
              { icon: "Microscope", title: "Трихологическая диагностика", desc: "Комплексное исследование кожи головы и волос, подбор программы восстановления" },
              { icon: "Star", title: "Программа омоложения", desc: "Системный подход к омоложению без инъекций — результат виден уже через 2 недели" },
              { icon: "Heart", title: "Поддержка организма", desc: "Подбор витаминов, минералов и нутрицевтиков под ваши цели и анализы" },
              { icon: "Flower2", title: "Уход за кожей головы", desc: "Оздоровительные программы при выпадении, перхоти, жирности и сухости" },
              { icon: "Zap", title: "Комплексное преображение", desc: "Полная программа изнутри и снаружи — красота как система, а не разовый эффект" },
            ].map((s, i) => (
              <div key={i} className="group flex gap-4 items-start bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#a89060]/40 rounded-2xl px-5 py-5 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#a89060]/15 flex items-center justify-center mt-0.5">
                  <Icon name={s.icon} size={20} className="text-[#a89060]" fallback="Star" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">{s.title}</p>
                  <p className="text-[#888] text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS + CONTACTS */}
      <section className="relative bg-[#0a0a0a] py-10 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(180,140,100,0.1)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(100,80,140,0.08)_0%,_transparent_60%)]" />
        <div className="max-w-xl mx-auto">
          <div className="mb-6">
            <p className="text-[#9ab8a8] text-[10px] mb-3 uppercase tracking-[0.3em] font-light">Работаю на брендах:</p>
            <p className="text-white text-3xl md:text-4xl font-light leading-relaxed font-cormorant tracking-wide">
              RIABINOVA | NEZHNEL |<br />M.AKLIVE | LEETOO | FitLine
            </p>
          </div>

          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <a
                href="tel:+79025416495"
                className="text-white text-3xl md:text-4xl font-light tracking-wide hover:text-[#6fa882] transition-colors block mb-1 font-montserrat"
              >
                +7 902 541 64 95
              </a>
              <p className="text-[#9ab8a8] text-xs font-light">
                Анна Котельникова — косметолог-эстетист,<br />трихолог-эстетист
              </p>
              <div className="flex gap-3 mt-5 flex-wrap">
                <a
                  href="https://t.me/+79025416495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#2AABEE] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#229ed9] transition-colors"
                >
                  <Icon name="Send" size={15} />
                  Telegram
                </a>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0077FF] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#0055cc] transition-colors"
                >
                  <Icon name="Users" size={15} />
                  ВКонтакте
                </a>
              </div>
            </div>

            {/* QR placeholder */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-24 h-24 bg-white rounded-xl p-2 flex items-center justify-center">
                <div className="w-full h-full grid grid-cols-7 grid-rows-7 gap-[1px]">
                  {[
                    1,1,1,1,1,1,1,
                    1,0,0,0,0,0,1,
                    1,0,1,0,1,0,1,
                    1,0,0,1,0,0,1,
                    1,0,1,0,1,0,1,
                    1,0,0,0,0,0,1,
                    1,1,1,1,1,1,1,
                  ].map((v, i) => (
                    <div key={i} className={`rounded-[1px] ${v ? "bg-[#1a2a24]" : "bg-white"}`} />
                  ))}
                </div>
              </div>
              <p className="text-[#9ab8a8] text-[9px] uppercase tracking-wider">Telegram</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] py-6 px-6 text-center border-t border-[#222]">
        <img
          src="https://cdn.poehali.dev/projects/66cecb4f-8169-42b7-a5a2-fbb46fdb6702/bucket/9a2933b1-1527-4fda-b17d-d812dd298848.png"
          alt="NOVO"
          className="w-36 object-contain brightness-[10] opacity-50 mx-auto mb-1"
        />
        <a href="tel:+79025416495" className="text-[#9ab8a8] text-sm hover:text-white transition-colors block mt-3">
          +7 902 541 64 95
        </a>
      </footer>

    </div>
  );
}