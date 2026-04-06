import { useState } from "react";
import Icon from "@/components/ui/icon";

const features = [
  "Премиальный уход нового поколения: инновации, чистые составы, результат в комплексе",
  "Без привыкания: устойчивый эффект за счет грамотной схемы",
  "Комплексные оздоровительные программы для кожи головы и волос",
  "Внутренняя поддержка организма: витамины, минералы, питание клеток",
  "Омоложение без уколов",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a2a24] to-[#0f1e18]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(60,60,60,0.08)_0%,_transparent_60%)]" />

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
            <div className="flex-1 pl-4 pr-2 pb-10 space-y-[10px] pt-2 z-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-[#c0c8c4] mt-[3px] text-xs flex-shrink-0">•</span>
                  <p className="text-[#c8d8cc] text-xs md:text-sm leading-relaxed font-light">{f}</p>
                </div>
              ))}
            </div>
            {/* Photo — flush right */}
            <div className="flex-shrink-0 w-[38%] md:w-[35%] self-stretch relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e18] via-transparent to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1e18] to-transparent z-10" />
              <img
                src="https://cdn.poehali.dev/projects/66cecb4f-8169-42b7-a5a2-fbb46fdb6702/bucket/23ea6845-9006-4caa-b2f4-7b6f23053bb0.png"
                alt="Анна Котельникова"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "280px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — light strip */}
      <section className="bg-[#e4ebe5] py-8 px-6">
        <div className="max-w-xl mx-auto grid grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#c6d8c8] flex items-center justify-center shadow-sm">
                <Icon name={p.icon} size={22} className="text-[#2d5a40]" fallback="Star" />
              </div>
              <p className="text-[#1a2e22] text-[10px] md:text-xs leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS + CONTACTS */}
      <section className="bg-[#182820] py-10 px-6">
        <div className="max-w-xl mx-auto">
          <div className="mb-6">
            <p className="text-[#9ab8a8] text-[10px] mb-2 uppercase tracking-[0.3em] font-light">Работаю на брендах:</p>
            <p className="text-white text-xl font-light leading-relaxed font-cormorant tracking-wide">
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

      {/* BOOKING */}
      <section id="booking" className="bg-[#0f1e18] py-14 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#6fa882] text-[10px] uppercase tracking-[0.35em] font-light mb-2">Онлайн-запись</p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-white font-light uppercase tracking-wide">
              Записаться на услугу
            </h2>
            <div className="w-16 h-[1px] bg-[#6fa882] mx-auto mt-4" />
          </div>

          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#3d7a5a]/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-[#6fa882]" />
              </div>
              <p className="text-white text-2xl font-light font-cormorant mb-2">Заявка отправлена!</p>
              <p className="text-[#9ab8a8] text-sm">Анна свяжется с вами в течение дня</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#9ab8a8] text-[10px] uppercase tracking-[0.2em] block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Анна"
                    className="w-full bg-[#182820] border border-[#2e4a38] text-white placeholder-[#4a6050] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6fa882] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[#9ab8a8] text-[10px] uppercase tracking-[0.2em] block mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#182820] border border-[#2e4a38] text-white placeholder-[#4a6050] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6fa882] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#9ab8a8] text-[10px] uppercase tracking-[0.2em] block mb-2">Услуга</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#182820] border border-[#2e4a38] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6fa882] transition-colors"
                >
                  <option value="">Выберите услугу</option>
                  {services.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[#9ab8a8] text-[10px] uppercase tracking-[0.2em] block mb-2">Комментарий</label>
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Расскажите о вашем запросе..."
                  rows={3}
                  className="w-full bg-[#182820] border border-[#2e4a38] text-white placeholder-[#4a6050] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6fa882] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3d7a5a] to-[#5a9a72] text-white py-4 rounded-lg text-sm uppercase tracking-[0.25em] font-medium hover:from-[#4d8a6a] hover:to-[#6aaa82] transition-all duration-300"
              >
                Записаться на консультацию
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1510] py-6 px-6 text-center border-t border-[#1e3028]">
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