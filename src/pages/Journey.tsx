import { motion } from "framer-motion";
import { Timeline } from "../components/Timeline";
import { milestones } from "../features/journey/data";
import Layout from "../components/Layout";

const themes = [
  {
    title: "القيادة الهندسية",
    description: "بناء فرق متعددة التخصصات وتسليم أنظمة برمجية إنتاجية عالية الجودة.",
    num: "01",
  },
  {
    title: "معالجة اللغة العربية",
    description: "نماذج لاستخراج العلاقات، اكتشاف التأثير، وبناء المعرفة للغة العربية.",
    num: "02",
  },
  {
    title: "الروبوتات والمحاكاة",
    description: "منصات تخطيط مسارات الروبوتات ومحاكاة CAD وربط البيانات ثلاثية الأبعاد.",
    num: "03",
  },
];

const Journey = () => (
  <Layout>
    {/* ── Hero ── */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="container max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium tracking-wide text-primary"
        >
          مسار مهني · ٢٠١٧ — الآن
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 text-5xl font-bold md:text-6xl"
        >
          الرحلة <span className="text-primary">المهنية</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mb-2 text-base leading-relaxed text-muted-foreground"
        >
          محطات زمنية تلخّص الخبرة في القيادة الهندسية ومعالجة اللغة والأنظمة الذكية.
          هذه ليست سيرة ذاتية — بل قصة بناء.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6"
        >
          <a
            href="https://www.linkedin.com/in/rashed-sabra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </section>

    {/* ── Core Themes ── */}
    <section className="pb-16">
      <div className="container max-w-2xl">
        <h2 className="mb-8 text-sm font-semibold text-foreground">
          الموضوعات المحورية
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-neural p-5"
            >
              <span className="mb-3 block text-3xl font-bold text-primary/15 chapter-num">
                {theme.num}
              </span>
              <h3 className="mb-2 text-base font-bold text-foreground">{theme.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{theme.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Separator ── */}
    <div className="container max-w-2xl">
      <div className="ruled" />
    </div>

    {/* ── Timeline ── */}
    <section className="py-16">
      <div className="container max-w-2xl">
        <h2 className="mb-10 text-sm font-semibold text-foreground">
          المحطات الزمنية
        </h2>
        <Timeline milestones={milestones} />
      </div>
    </section>
  </Layout>
);

export default Journey;
