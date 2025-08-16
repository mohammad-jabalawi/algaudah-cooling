//
// import React, { useState } from 'react'
// import {
//     Phone, Mail, MapPin, Wrench, Droplets, Layers, Cog, Wind,
//     CheckCircle2, Facebook, Instagram, MessageCircle, Globe
// } from 'lucide-react'
//
// export default function App() {
//     const [form, setForm] = useState({
//         name: '', phone: '', city: '', service: 'تمديد نحاس', message: ''
//     })
//
//     const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
//
//     const submit = (e) => {
//         e.preventDefault()
//         const txt = encodeURIComponent(
//             `طلب عرض سعر - شركة الجودة\n\nالاسم: ${form.name}\nالجوال: ${form.phone}\nالمدينة: ${form.city}\nالخدمة: ${form.service}\nالرسالة: ${form.message}`
//         )
//         // استبدل الرقم برقم الواتساب بصيغة دولية بدون + أو مسافات
//         window.open(`https://wa.me/966500000000?text=${txt}`, '_blank')
//     }
//
//     const services = [
//         { icon: <Layers className="w-10 h-10 text-brand-blue" />, title: 'تأسيس النحاس للمكيفات', desc: 'تمديد مواسير نحاس عالية الجودة مع اختبار ضغط لضمان الاعتمادية.' },
//         { icon: <Wind className="w-10 h-10 text-brand-blue" />, title: 'رسم مخطط التكييف', desc: 'تخطيط احترافي لمواضع الأجهزة ومسارات التهوية لتحقيق أفضل تدفّق هواء.' },
//         { icon: <Wrench className="w-10 h-10 text-brand-blue" />, title: 'توريد وتركيب المكيفات', desc: 'توفير أفضل الماركات مع تركيب ومعايرة احترافية.' },
//         { icon: <Cog className="w-10 h-10 text-brand-blue" />, title: 'صيانة المكيفات', desc: 'صيانة وقائية وإصلاح لجميع أنواع المكيفات.' },
//         { icon: <Droplets className="w-10 h-10 text-brand-blue" />, title: 'غسيل وتنظيف الوحدات', desc: 'تنظيف ملفات التبريد والفلاتر للوحدات الداخلية والخارجية لرفع كفاءة التبريد.' },
//     ]
//
//     const steps = ['التواصل معنا', 'معاينة الموقع', 'تقديم عرض سعر مفصّل', 'تنفيذ احترافي مع ضمان']
//
//     return (
//         <div dir="rtl" className="font-sans text-gray-800">
//             {/* Header */}
//             <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
//                 <div className="container-lg flex items-center justify-between py-3">
//                     <div className="flex items-center gap-3">
//                         <img src="/logo.jpg" alt="شعار شركة الجودة" className="w-10 h-10 rounded-full border" />
//                         <div className="font-extrabold text-brand-blue text-xl">شركة الجودة للتكييف</div>
//                     </div>
//                     <nav className="hidden md:flex items-center gap-6 text-sm">
//                         <a href="#services" className="hover:text-brand-blue">الخدمات</a>
//                         <a href="#process" className="hover:text-brand-blue">آلية العمل</a>
//                         <a href="#projects" className="hover:text-brand-blue">أعمالنا</a>
//                         <a href="#about" className="hover:text-brand-blue">من نحن</a>
//                         <a href="#contact" className="btn-primary text-sm">اطلب عرض سعر</a>
//                     </nav>
//                 </div>
//             </header>
//
//             {/* Hero Section */}
//             <section className="bg-gradient-to-br from-brand-blue to-blue-900 text-white">
//                 <div className="container-lg py-20 text-center">
//                     <h1 className="text-4xl md:text-5xl font-extrabold mb-4">هواء نقي، راحة مثالية</h1>
//                     <p className="max-w-2xl mx-auto mb-8 text-white/90">
//                         حلول تكييف متكاملة من التصميم حتى الصيانة.
//                     </p>
//                     <div className="flex items-center justify-center gap-4">
//                         <a href="#contact" className="btn-primary bg-white text-brand-blue">اطلب عرض سعر</a>
//                         <a href="tel:+966500000000" className="btn-secondary">اتصل الآن</a>
//                     </div>
//                     <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
//                         <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> فنيون معتمدون</span>
//                         <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> استجابة سريعة</span>
//                         <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> ضمان على الأعمال</span>
//                     </div>
//                 </div>
//             </section>
//
//             {/* About Us */}
//             <section id="about" className="py-16">
//                 <div className="container-lg">
//                     <h2 className="text-3xl font-bold mb-6 text-center">من نحن</h2>
//                     <p className="text-center max-w-3xl mx-auto">
//                         نحن في شركة الجودة نقدّم حلول تكييف شاملة تشمل تأسيس النحاس، رسم مخطط التكييف، توريد وتركيب المكيفات،
//                         بالإضافة إلى الصيانة الدورية والتنظيف العميق للوحدات الداخلية والخارجية. نلتزم بالجودة والسلامة والأداء طويل الأمد.
//                     </p>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                         {['فنيون خبراء','تسعير واضح','التزام بالمواعيد'].map((v, i) => (
//                             <div key={i} className="card text-center">{v}</div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Services */}
//             <section id="services" className="bg-brand-light py-16">
//                 <div className="container-lg">
//                     <h2 className="text-3xl font-bold mb-10 text-center">خدماتنا</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {services.map((s, i) => (
//                             <div key={i} className="card text-center">
//                                 <div className="mb-4 flex justify-center">{s.icon}</div>
//                                 <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
//                                 <p className="text-gray-600">{s.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="text-center mt-10">
//                         <a href="#contact" className="btn-primary">اطلب خدمة</a>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Process */}
//             <section id="process" className="py-16">
//                 <div className="container-lg">
//                     <h2 className="text-3xl font-bold mb-10 text-center">آلية العمل</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
//                         {steps.map((step, idx) => (
//                             <div key={idx} className="card">
//                                 <div className="text-4xl font-extrabold text-brand-blue mb-2">{idx + 1}</div>
//                                 <p>{step}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Gallery */}
//             <section id="projects" className="bg-brand-light py-16">
//                 <div className="container-lg">
//                     <h2 className="text-3xl font-bold mb-10 text-center">أعمالنا الأخيرة</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {[1,2,3].map(n => (
//                             <div key={n} className="card h-48 flex items-center justify-center text-gray-400">
//                                 صورة مشروع {n}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Contact */}
//             <section id="contact" className="py-16">
//                 <div className="container-lg">
//                     <h2 className="text-3xl font-bold mb-6 text-center">تواصل معنا</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <div className="space-y-4 text-right">
//                             <p className="flex items-center justify-end gap-2"><Phone className="w-5 h-5 text-brand-blue" /> 0500000000</p>
//                             <p className="flex items-center justify-end gap-2"><Mail className="w-5 h-5 text-brand-blue" /> info@algaudah.com</p>
//                             <p className="flex items-center justify-end gap-2"><MapPin className="w-5 h-5 text-brand-blue" /> الرياض، المملكة العربية السعودية</p>
//                         </div>
//                         <form onSubmit={submit} className="card">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <input name="name" value={form.name} onChange={update} placeholder="الاسم" className="w-full p-3 border rounded" required />
//                                 <input name="phone" value={form.phone} onChange={update} placeholder="الجوال" className="w-full p-3 border rounded" required />
//                                 <input name="city" value={form.city} onChange={update} placeholder="المدينة" className="w-full p-3 border rounded" />
//                                 <select name="service" value={form.service} onChange={update} className="w-full p-3 border rounded">
//                                     <option>تمديد نحاس</option>
//                                     <option>رسم مخطط التكييف</option>
//                                     <option>توريد وتركيب</option>
//                                     <option>صيانة</option>
//                                     <option>غسيل وتنظيف</option>
//                                 </select>
//                             </div>
//                             <textarea name="message" value={form.message} onChange={update} placeholder="الرسالة" rows="4" className="w-full p-3 border rounded mt-4" />
//                             <div className="flex gap-3 mt-4 justify-end">
//                                 <button type="submit" className="btn-primary">إرسال عبر واتساب</button>
//                                 <a href="tel:+966500000000" className="btn-secondary">اتصل الآن</a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Footer */}
//             <footer className="bg-brand-blue text-white py-8">
//                 <div className="container-lg flex flex-col md:flex-row items-center justify-between gap-4">
//                     <div className="flex items-center gap-3">
//                         <img src="/logo.jpg" alt="شعار شركة الجودة" className="w-10 h-10 rounded-full border border-white/30" />
//                         <p>© {new Date().getFullYear()} شركة الجودة للتكييف. جميع الحقوق محفوظة.</p>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <a href="#" aria-label="الموقع" className="flex items-center gap-1 hover:opacity-90"><Globe className="w-5 h-5" /> الموقع</a>
//                         <a href="#" aria-label="Facebook" className="flex items-center gap-1 hover:opacity-90"><Facebook className="w-5 h-5" /> فيسبوك</a>
//                         <a href="#" aria-label="Instagram" className="flex items-center gap-1 hover:opacity-90"><Instagram className="w-5 h-5" /> إنستقرام</a>
//                         <a href="https://wa.me/966500000000" aria-label="WhatsApp" className="flex items-center gap-1 hover:opacity-90"><MessageCircle className="w-5 h-5" /> واتساب</a>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }
import React, { useState } from 'react'
import {
    Phone, Mail, MapPin, Wrench, Droplets, Layers, Cog, Wind,
    CheckCircle2, Facebook, Instagram, MessageCircle, Globe
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function App() {
    const [form, setForm] = useState({
        name: '', phone: '', city: '', service: 'تمديد نحاس', message: ''
    })

    // عدّل رابط خرائط قوقل هنا (ضع رابط المحل الفعلي)
    const mapsUrl = 'https://maps.app.goo.gl/your-place-link'

    // لو عندك صور محلية، ضعها داخل public/ واكتب المسارات مثل "/projects/1.jpg"
    const gallery = [
        '/projects/1.jpg',
        '/projects/2.jpg',
        '/projects/3.jpg',
        
        // تقدر تستخدم صور خارجية الآن وبعدين تبدلها:

    ]

    const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const submit = (e) => {
        e.preventDefault()
        const txt = encodeURIComponent(
            `طلب عرض سعر - شركة الجودة\n\nالاسم: ${form.name}\nالجوال: ${form.phone}\nالمدينة: ${form.city}\nالخدمة: ${form.service}\nالرسالة: ${form.message}`
        )
        window.open(`https://wa.me/966500000000?text=${txt}`, '_blank') // عدّل الرقم
    }

    const services = [
        { icon: <Layers className="w-10 h-10 text-brand-blue" />, title: 'تأسيس النحاس للمكيفات', desc: 'تمديد مواسير نحاس عالية الجودة مع اختبار ضغط.' },
        { icon: <Wind className="w-10 h-10 text-brand-blue" />, title: 'رسم مخطط التكييف', desc: 'تخطيط مواضع الأجهزة ومسارات التهوية لتحقيق أفضل تدفّق هواء.' },
        { icon: <Wrench className="w-10 h-10 text-brand-blue" />, title: 'توريد وتركيب المكيفات', desc: 'توريد أفضل الماركات مع تركيب ومعايرة احترافية.' },
        { icon: <Cog className="w-10 h-10 text-brand-blue" />, title: 'صيانة المكيفات', desc: 'صيانة وقائية وإصلاح لجميع أنواع المكيفات.' },
        { icon: <Droplets className="w-10 h-10 text-brand-blue" />, title: 'غسيل وتنظيف الوحدات', desc: 'تنظيف ملفات التبريد والفلاتر لرفع كفاءة التبريد.' },
    ]

    // أنماط أنيميشن جاهزة
    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    const stagger = {
        show: { transition: { staggerChildren: 0.12 } }
    }

    return (
        <div dir="rtl" className="font-sans text-gray-800">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
                <div className="container-lg flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                        <img src="/logo.jpg" alt="شعار شركة الجودة" className="w-10 h-10 rounded-full border" />
                        <div className="font-extrabold text-brand-blue text-xl">شركة الجودة للتكييف</div>
                    </div>
                    <nav className="hidden md:flex items-center gap-4 md:gap-6 text-sm">
                        <a href="#services" className="hover:text-brand-blue">الخدمات</a>
                        <a href="#process" className="hover:text-brand-blue">آلية العمل</a>
                        <a href="#projects" className="hover:text-brand-blue">أعمالنا</a>
                        <a href={mapsUrl} target="_blank" rel="noreferrer" className="hover:text-brand-blue flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> موقعنا
                        </a>
                        <a href="#contact" className="btn-primary text-sm">اطلب عرض سعر</a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-gradient-to-br from-brand-blue to-blue-900 text-white">
                <div className="container-lg py-16 md:py-20 text-center">
                    <motion.h1
                        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}
                        className="text-3xl md:text-5xl font-extrabold mb-4"
                    >
                        هواء نقي، راحة مثالية
                    </motion.h1>
                    <motion.p
                        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}
                        className="max-w-2xl mx-auto mb-6 md:mb-8 text-white/90"
                    >
                        حلول تكييف متكاملة من التصميم حتى الصيانة.
                    </motion.p>
                    <motion.div
                        variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
                    >
                        <motion.a variants={fadeUp} href="#contact" className="btn-primary bg-white text-brand-blue">اطلب عرض سعر</motion.a>
                        <motion.a variants={fadeUp} href={mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> موقعنا على الخريطة
                        </motion.a>
                        <motion.a variants={fadeUp} href="tel:+966500000000" className="btn-secondary">اتصل الآن</motion.a>
                    </motion.div>
                    <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 text-white/80 text-xs md:text-sm">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> فنيون معتمدون</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> استجابة سريعة</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> ضمان على الأعمال</span>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-14 md:py-16">
                <div className="container-lg">
                    <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                               className="text-2xl md:text-3xl font-bold mb-6 text-center">من نحن</motion.h2>
                    <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}
                              className="text-center max-w-3xl mx-auto">
                        نحن في شركة الجودة نقدّم حلول تكييف شاملة تشمل تأسيس النحاس، رسم مخطط التكييف، توريد وتركيب المكيفات،
                        بالإضافة إلى الصيانة الدورية والتنظيف العميق للوحدات الداخلية والخارجية. نلتزم بالجودة والسلامة والأداء طويل الأمد.
                    </motion.p>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="bg-brand-light py-14 md:py-16">
                <div className="container-lg">
                    <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                               className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">خدماتنا</motion.h2>

                    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((s, i) => (
                            <motion.div key={i} variants={fadeUp} className="card text-center">
                                <div className="mb-4 flex justify-center">{s.icon}</div>
                                <h3 className="text-lg md:text-xl font-semibold mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{s.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-8 md:mt-10">
                        <a href="#contact" className="btn-primary">اطلب خدمة</a>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section id="process" className="py-14 md:py-16">
                <div className="container-lg">
                    <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                               className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">آلية العمل</motion.h2>

                    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        {['التواصل معنا', 'معاينة الموقع', 'تقديم عرض سعر مفصّل', 'تنفيذ احترافي مع ضمان'].map((step, idx) => (
                            <motion.div key={idx} variants={fadeUp} className="card">
                                <div className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-2">{idx + 1}</div>
                                <p className="text-sm md:text-base">{step}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Gallery */}
            <section id="projects" className="bg-brand-light py-14 md:py-16">
                <div className="container-lg">
                    <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                               className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">أعمالنا</motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {gallery.map((src, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                                <img
                                    src={src}
                                    alt={`مشروع ${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-xl shadow-card"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> زورونا في الموقع
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-14 md:py-16">
                <div className="container-lg">
                    <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
                               className="text-2xl md:text-3xl font-bold mb-6 text-center">تواصل معنا</motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
                                    className="space-y-4 text-right">
                            <p className="flex items-center justify-end gap-2"><Phone className="w-5 h-5 text-brand-blue" /> 0500000000</p>
                            <p className="flex items-center justify-end gap-2"><Mail className="w-5 h-5 text-brand-blue" /> info@algaudah.com</p>
                            <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-center justify-end gap-2 hover:underline">
                                <MapPin className="w-5 h-5 text-brand-blue" /> الموقع على الخرائط
                            </a>
                        </motion.div>

                        <motion.form onSubmit={submit} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="card">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="name" value={form.name} onChange={update} placeholder="الاسم" className="w-full p-3 border rounded" required />
                                <input name="phone" value={form.phone} onChange={update} placeholder="الجوال" className="w-full p-3 border rounded" required />
                                <input name="city" value={form.city} onChange={update} placeholder="المدينة" className="w-full p-3 border rounded" />
                                <select name="service" value={form.service} onChange={update} className="w-full p-3 border rounded">
                                    <option>تمديد نحاس</option>
                                    <option>رسم مخطط التكييف</option>
                                    <option>توريد وتركيب</option>
                                    <option>صيانة</option>
                                    <option>غسيل وتنظيف</option>
                                </select>
                            </div>
                            <textarea name="message" value={form.message} onChange={update} placeholder="الرسالة" rows="4" className="w-full p-3 border rounded mt-4" />
                            <div className="flex flex-wrap gap-3 mt-4 justify-end">
                                <button type="submit" className="btn-primary">إرسال عبر واتساب</button>
                                <a href="tel:+966500000000" className="btn-secondary">اتصل الآن</a>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-brand-blue text-white py-8">
                <div className="container-lg flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/logo.jpg" alt="شعار شركة الجودة" className="w-10 h-10 rounded-full border border-white/30" />
                        <p>© {new Date().getFullYear()} شركة الجودة للتكييف. جميع الحقوق محفوظة.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="الموقع" className="flex items-center gap-1 hover:opacity-90"><Globe className="w-5 h-5" /> الموقع</a>
                        <a href="#" aria-label="Facebook" className="flex items-center gap-1 hover:opacity-90"><Facebook className="w-5 h-5" /> فيسبوك</a>
                        <a href="#" aria-label="Instagram" className="flex items-center gap-1 hover:opacity-90"><Instagram className="w-5 h-5" /> إنستقرام</a>
                        <a href="https://wa.me/966500000000" aria-label="WhatsApp" className="flex items-center gap-1 hover:opacity-90"><MessageCircle className="w-5 h-5" /> واتساب</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
