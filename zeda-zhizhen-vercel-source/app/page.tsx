import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "泽大至臻教育 | 青少年 AI 驾驭力课程",
  description:
    "泽大至臻（杭州）教育为小学高年级至高中学生提供线上与线下 AI 一站式学习课程，帮助孩子掌握提问、拆解、判断、表达与项目创作能力。",
};

const coursePlans = [
  {
    name: "青少年 AI 驾驭力线上训练营",
    tag: "一期主推",
    time: "90 天 · 12 周直播带练",
    audience: "10-18 岁，小学高年级至高中",
    teacher: "浙大硕博团队系统带练",
    summary: "从会用工具升级到会拆问题、会做项目、会表达成果。",
    content: [
      "第 1 个月：建立 AI 提问方法、任务拆解和判断逻辑",
      "第 2 个月：从真实需求出发，搭建个人 AI 智能体",
      "第 3 个月：形成个人学习系统，完成项目展示与答辩",
    ],
    action: "预约线上课程",
  },
  {
    name: "AI 项目制线下工作坊",
    tag: "小班制",
    time: "周末半天或寒暑假集训",
    audience: "适合需要面对面指导的学生",
    teacher: "项目导师现场辅导",
    summary: "围绕学生兴趣选题，完成可展示、可讲解、可复盘的作品。",
    content: [
      "选题诊断：把兴趣转成可完成的 AI 项目",
      "现场搭建：导师陪同完成关键步骤与调试",
      "成果表达：训练作品演示、答辩和成长记录",
    ],
    action: "咨询线下名额",
  },
  {
    name: "家庭 AI 学习规划咨询",
    tag: "家长优先",
    time: "30 分钟初步评估",
    audience: "希望了解孩子是否适合学习 AI 的家庭",
    teacher: "课程顾问与 AI 学习规划导师",
    summary: "帮助家长看清孩子当前基础、学习路径和适合的课程组合。",
    content: [
      "评估孩子年级、兴趣、电脑基础和表达能力",
      "说明线上、线下课程差异和学习投入",
      "给出 90 天成长目标与报名建议",
    ],
    action: "加入咨询群",
  },
];

const outcomes = [
  ["一套 AI 驾驭方法", "会提问、会拆解、会调用、会判断、会表达。"],
  ["一个专属 AI 智能体", "围绕学习或兴趣中的真实问题，完成个人 AI 项目。"],
  ["一套个人 AI 学习系统", "用于知识梳理、查漏补缺、任务规划与复盘。"],
  ["一份可展示的项目成果", "完成作品演示、成果答辩和 90 天成长记录。"],
];

const path = [
  ["第 1 个月", "建立方法", "看懂 AI、学会提问，建立正确使用 AI 的基本逻辑。"],
  ["第 2 个月", "完成作品", "从真实需求出发，搭建并迭代一个个人 AI 智能体。"],
  ["第 3 个月", "形成系统", "完成个人学习系统、综合项目与成果答辩。"],
];

const faculty = [
  {
    name: "周老师",
    role: "浙江大学博士 · AI 及工程项目研究背景",
    detail: "青少年学业规划导师，擅长把前沿 AI 能力转化成孩子能理解、能完成的项目路径。",
  },
  {
    name: "林老师",
    role: "浙江大学硕士 · 前互联网大厂 AI 教育产品负责人",
    detail: "AI 智能体搭建学习导师，长期负责 AI 教育产品、课程设计与项目制学习。",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="泽大至臻教育首页">
            <span className="brand-mark">ZZ</span>
            <span>
              <strong>泽大至臻</strong>
              <small>杭州 · 青少年 AI 教育</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#courses">课程</a>
            <a href="#method">成果</a>
            <a href="#teachers">师资</a>
            <a href="#apply">报名</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">10-18 岁 · 90 天 · 12 周直播带练</p>
            <h1>让孩子成为驾驭 AI 的人，而不是被 AI 替代的人</h1>
            <p className="hero-lede">
              泽大至臻（杭州）教育提供青少年 AI 一站式学习课程，通过线上训练营与线下项目工作坊，培养孩子提问、拆解、判断、表达和完成真实项目的能力。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#apply">立即预约咨询</a>
              <a className="button secondary" href="#courses">查看课程安排</a>
            </div>
            <div className="trust-row" aria-label="课程亮点">
              <span>浙大硕博团队</span>
              <span>项目制学习</span>
              <span>线上线下结合</span>
            </div>
          </div>

          <div className="ai-panel" aria-label="AI 学习驾驶舱视觉展示">
            <div className="panel-top">
              <span>AI Learning Cockpit</span>
              <strong>课程进度 72%</strong>
            </div>
            <div className="student-scene">
              <div className="student-avatar" aria-hidden="true">AI</div>
              <div className="screen">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="skill-stack">
              <span>问题拆解</span>
              <span>任务规划</span>
              <span>智能体搭建</span>
              <span>成果优化</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section split" id="method">
        <div>
          <p className="eyebrow">核心判断</p>
          <h2>未来拉开孩子差距的，不是会不会使用 AI</h2>
        </div>
        <div className="comparison">
          <div>
            <h3>只会使用 AI</h3>
            <p>搜索答案、复制内容、依赖工具，无法判断结果是否可靠。</p>
          </div>
          <div className="vs">VS</div>
          <div className="highlight">
            <h3>真正驾驭 AI</h3>
            <p>提出问题、拆解任务、判断结果、完成项目，把 AI 变成持续迭代的能力。</p>
          </div>
        </div>
      </section>

      <section className="section" id="courses">
        <div className="section-heading">
          <p className="eyebrow">课程安排</p>
          <h2>从线上训练营到线下项目制辅导，按孩子状态选择</h2>
        </div>
        <div className="course-grid">
          {coursePlans.map((course) => (
            <details className="course-card" key={course.name}>
              <summary>
                <span className="course-tag">{course.tag}</span>
                <h3>{course.name}</h3>
                <p>{course.summary}</p>
              </summary>
              <div className="course-detail">
                <dl>
                  <div>
                    <dt>开课时间</dt>
                    <dd>{course.time}</dd>
                  </div>
                  <div>
                    <dt>适合对象</dt>
                    <dd>{course.audience}</dd>
                  </div>
                  <div>
                    <dt>授课老师</dt>
                    <dd>{course.teacher}</dd>
                  </div>
                </dl>
                <ul>
                  {course.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="text-link" href="#apply">{course.action}</a>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading narrow">
          <p className="eyebrow">90 天后，孩子将完成什么</p>
          <h2>不是几款工具，而是一套能够持续迭代的问题解决能力</h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map(([title, detail], index) => (
            <article className="outcome-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline">
        <div className="section-heading">
          <p className="eyebrow">12 周成长路径</p>
          <h2>每月一个成长里程碑，让孩子的进步清晰可见</h2>
        </div>
        <div className="timeline-grid">
          {path.map(([month, title, detail]) => (
            <article key={month}>
              <span>{month}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section teachers" id="teachers">
        <div className="teacher-intro">
          <p className="eyebrow">浙大硕博团队系统带练</p>
          <h2>把名校学术视野、跨学科项目背景和教育产品经验结合起来</h2>
          <p>
            课程不是简单教孩子“点哪里”，而是围绕真实问题训练方法、项目、表达和复盘，让孩子从被动使用工具走向主动创造。
          </p>
        </div>
        <div className="teacher-list">
          {faculty.map((teacher) => (
            <article className="teacher-card" key={teacher.name}>
              <div className="portrait" aria-hidden="true">{teacher.name.slice(0, 1)}</div>
              <div>
                <h3>{teacher.name}</h3>
                <p className="role">{teacher.role}</p>
                <p>{teacher.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section purchase">
        <div>
          <p className="eyebrow">线上与线下课程</p>
          <h2>先了解，再选择适合孩子的学习方式</h2>
        </div>
        <div className="purchase-grid">
          <a href="#apply">
            <span>线上训练营</span>
            <strong>预约试听 / 报名一期课程</strong>
          </a>
          <a href="#apply">
            <span>线下工作坊</span>
            <strong>咨询杭州小班名额</strong>
          </a>
          <a href="#apply">
            <span>家长咨询群</span>
            <strong>领取课程安排与学习规划</strong>
          </a>
        </div>
      </section>

      <section className="section apply" id="apply">
        <div className="apply-copy">
          <p className="eyebrow">报名咨询</p>
          <h2>留下信息，课程顾问将为孩子匹配合适的 AI 学习路径</h2>
          <p>
            你可以选择报名线上课程、咨询线下课程，或先加入家长咨询群了解课程安排。表单提交后，团队会进一步确认孩子年级、基础和学习目标。
          </p>
        </div>
        <form className="form" action="mailto:hello@zedazhizhen.example" method="post" encType="text/plain">
          <label>
            家长称呼
            <input name="parent" placeholder="例如：王女士" required />
          </label>
          <label>
            孩子年级
            <select name="grade" defaultValue="">
              <option value="" disabled>请选择</option>
              <option>小学高年级</option>
              <option>初中</option>
              <option>高中</option>
            </select>
          </label>
          <label>
            联系方式
            <input name="contact" placeholder="手机号或微信号" required />
          </label>
          <label>
            意向课程
            <select name="course" defaultValue="线上训练营">
              <option>线上训练营</option>
              <option>线下工作坊</option>
              <option>家庭 AI 学习规划咨询</option>
            </select>
          </label>
          <label className="wide">
            想了解的问题
            <textarea name="message" placeholder="例如：孩子零基础是否可以参加？线下课什么时候开始？" />
          </label>
          <button className="button primary wide" type="submit">提交报名咨询</button>
        </form>
      </section>

      <footer>
        <strong>泽大至臻（杭州）教育</strong>
        <span>青少年 AI 驾驭力一站式学习课程</span>
      </footer>
    </main>
  );
}
