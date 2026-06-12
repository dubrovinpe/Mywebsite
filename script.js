/* ============================================
   DUBROVINPE.COM — Script
   Henry Design System — Editorial AI Blog
   DSGVO-compliant · No cookies · No tracking
   ============================================ */

// --- Articles Data ---
const articles = [
  {
    id: 1,
    title: "The Hallucination Problem Isn't a Bug — It's a Feature",
    tag: "Language Models",
    date: "Feb 2025",
    readingTime: "8 min",
    content: `<p>When GPT-4 invents a citation that never existed, we call it a hallucination — as if the model were defective. But what if we've been thinking about this wrong? Large language models don't retrieve facts; they generate plausible continuations of text. The "hallucination" is not an error in the system. It is the system.</p>
<p>Consider what happens when you ask a model about something it has never seen. It doesn't say "I don't know." It constructs the most probable answer given its training distribution. This is not a malfunction — it's the fundamental nature of how these systems work. They are not databases. They are pattern completion engines.</p>
<p>The real question isn't how to eliminate hallucinations, but how to build systems where pattern completion is useful rather than misleading. RAG architectures, grounding techniques, and constitutional AI approaches are all attempts to do exactly this. But they don't eliminate the underlying tendency — they constrain it.</p>
<p>Perhaps the most honest thing we can do is stop pretending these systems "know" things. They don't know. They continue. And sometimes, that continuation is exactly what we need — and sometimes it isn't. The art lies in knowing which is which.</p>`,
  },
  {
    id: 2,
    title: "Why Your Prompt Engineering Is Really Just Programming",
    tag: "Prompt Engineering",
    date: "Jan 2025",
    readingTime: "6 min",
    content: `<p>The term "prompt engineering" suggests a kind of alchemy — a mystical skill that transforms raw language into gold. But strip away the mystique and what you find is something far more mundane: you're writing code. The language is different, the syntax is softer, but the fundamental activity is the same.</p>
<p>When you write a system prompt that constrains a model's output format, you're writing a parser. When you chain prompts together, you're building a pipeline. When you use few-shot examples, you're defining a function's type signature. The vocabulary changes, but the logic doesn't.</p>
<p>This matters because it reframes the skill. Prompt engineering isn't a new discipline — it's programming with natural language as the instruction set. And like any programming language, it has quirks, gotchas, and undocumented behaviors. The model is the compiler, and like all compilers, it sometimes does unexpected things with your code.</p>
<p>The sooner we stop treating prompts as magic spells and start treating them as code — with version control, testing, and documentation — the sooner we'll build reliable AI systems.</p>`,
  },
  {
    id: 3,
    title: "The Uncomfortable Truth About AI Alignment",
    tag: "AI Safety",
    date: "Jan 2025",
    readingTime: "10 min",
    content: `<p>AI alignment — the project of ensuring that artificial intelligence systems pursue goals compatible with human values — sounds reasonable enough. Who wouldn't want that? But the deeper you look, the more uncomfortable the picture becomes.</p>
<p>First, there's the problem of whose values. Human values are not universal. They vary across cultures, generations, and individuals. Any alignment solution implicitly chooses one set of values over another. The question is rarely asked: who gets to decide?</p>
<p>Second, there's the problem of specification. We can't articulate our own values with enough precision to program them. We don't even fully understand how we make moral judgments. The idea that we can specify "human values" to a machine when we can't specify them to ourselves is, at best, optimistic.</p>
<p>Third, there's the problem of stability. Even if we could align a system today, the alignment might not hold as the system learns and adapts. Values drift in humans; why should we expect them to remain fixed in machines?</p>
<p>I'm not saying alignment research is futile. I'm saying we should be honest about the scale of the challenge. This isn't an engineering problem with a clean solution. It's a philosophical problem with deep roots in questions humanity has never satisfactorily answered.</p>`,
  },
  {
    id: 4,
    title: "Small Models, Big Implications",
    tag: "AI Research",
    date: "Dec 2024",
    readingTime: "7 min",
    content: `<p>The AI industry has been obsessed with scale. More parameters, more data, more compute. GPT-4 has over a trillion parameters. Llama has hundreds of billions. The assumption has been: bigger is better. But a quiet revolution is happening in the other direction.</p>
<p>Models like Phi-2, Gemma-2B, and Mistral-7B demonstrate that smaller, carefully trained models can compete with giants on many tasks. The key isn't raw scale — it's data quality, training efficiency, and architectural innovation.</p>
<p>This matters for reasons beyond benchmark scores. Small models run on consumer hardware. They can be deployed locally, without sending data to cloud servers. They enable privacy-preserving AI applications. They democratize access to the technology.</p>
<p>The "bigger is better" narrative was never universally true — it was just the easiest path to impressive demos. As the field matures, the interesting question shifts from "how big can we make it?" to "how small can we make it while still being useful?" The answer to that question will shape the next decade of AI.</p>`,
  },
  {
    id: 5,
    title: "Language Models Don't Understand Language (And That's Okay)",
    tag: "Language Models",
    date: "Dec 2024",
    readingTime: "9 min",
    content: `<p>Every few months, someone publishes a paper claiming that language models "understand" language. Every few months, someone else publishes a rebuttal claiming they don't. This cycle has been going on for years, and it's based on a fundamentally confused question.</p>
<p>The problem is that "understanding" is not a binary property. It's not something you either have or don't have. It's a spectrum, and humans occupy different points on that spectrum depending on the domain, the context, and their experience.</p>
<p>What language models do is learn statistical regularities in text at a scale no human could match. They can predict the next word with remarkable accuracy. They can maintain coherence over long passages. They can even exhibit behaviors that look remarkably like reasoning. But do they understand? That depends entirely on what you mean by "understand."</p>
<p>If understanding requires conscious experience — some inner subjective life — then no, they don't understand. But if understanding means the ability to use language in contextually appropriate ways, to make valid inferences, and to respond coherently to novel inputs, then yes, they understand — at least partially, at least sometimes.</p>
<p>The real mistake is treating this as a debate to be won. The more productive framing is: what can these systems do, what can't they do, and how do we build on their capabilities while being honest about their limitations?</p>`,
  },
  {
    id: 6,
    title: "The Economics of Attention in the Age of AI",
    tag: "AI & Society",
    date: "Nov 2024",
    readingTime: "7 min",
    content: `<p>Herbert Simon predicted it in 1971: "A wealth of information creates a poverty of attention." Five decades later, AI has made this not just a theoretical concern but a lived reality. When a machine can produce a thousand articles in the time it takes you to read one, what happens to attention?</p>
<p>The answer is unfolding in real time. Content farms use AI to flood search results. Social media feeds fill with generated text and images. The volume of information explodes while the human capacity to process it remains fixed. The bottleneck has shifted from production to consumption.</p>
<p>This creates a paradox. AI makes information essentially free to produce but does nothing to make it free to process. In fact, it does the opposite: by increasing the noise-to-signal ratio, it raises the cost of finding valuable information. The scarce resource isn't content — it's curation.</p>
<p>The businesses that will thrive in this environment aren't the ones that produce the most content, but the ones that help people find what matters. Curation, trust, and taste — the most human of skills — become the most valuable commodities in an AI-saturated world.</p>`,
  },
  {
    id: 7,
    title: "RAG Is Not a Silver Bullet",
    tag: "AI Engineering",
    date: "Nov 2024",
    readingTime: "6 min",
    content: `<p>Retrieval-Augmented Generation — RAG — has become the default architecture for building AI applications. Need your model to answer questions about your data? Add a vector database, embed some documents, and voilà: your model now "knows" things it wasn't trained on.</p>
<p>Except it's not that simple. RAG works well when the answer to a question is contained in a single document or passage. But many real-world questions require synthesizing information across multiple sources, making inferences that aren't explicitly stated, or reasoning about contradictions between documents.</p>
<p>The retrieval step itself is fraught with difficulty. Embedding-based search is surprisingly bad at finding information when the query and the document use different vocabulary. Hybrid search helps, but it introduces its own tuning challenges. And chunking — how you split documents into retrievable pieces — turns out to be an art form with enormous impact on results.</p>
<p>RAG is a powerful technique, but it's a technique, not a solution. The hardest problems in building AI applications — evaluation, reliability, and handling edge cases — remain just as hard with RAG as without. The architecture changes; the engineering discipline doesn't.</p>`,
  },
  {
    id: 8,
    title: "On the Aesthetics of Generated Text",
    tag: "AI & Culture",
    date: "Oct 2024",
    readingTime: "8 min",
    content: `<p>There is a particular quality to AI-generated prose that I've come to think of as "semantic smoothness." The sentences flow. The paragraphs are balanced. The transitions are seamless. And yet something is missing — a kind of friction that makes human writing feel alive.</p>
<p>This smoothness is not an accident. Language models are trained to predict the most probable continuation, which means they are explicitly optimized for the path of least resistance. Surprises, digressions, and stylistic idiosyncrasies are, by definition, less probable. The model doesn't generate them because it's not designed to.</p>
<p>Human writing, by contrast, is full of imperfections. We over-explain things we find exciting and under-explain things we assume the reader knows. We have verbal tics, pet phrases, and obsessions that bleed into everything we write. These imperfections are not bugs — they're what makes writing feel like it comes from a person rather than a probability distribution.</p>
<p>As AI-generated text becomes ubiquitous, I suspect these imperfections will become more valuable, not less. The rough edges of human expression — the places where the writer's particular perspective breaks through the surface of the text — will become the markers of authenticity in a sea of smooth generation.</p>`,
  },
  {
    id: 9,
    title: "The Case for AI Skepticism",
    tag: "AI & Society",
    date: "Oct 2024",
    readingTime: "9 min",
    content: `<p>I write about AI, I use AI, I build with AI. And I think we should all be more skeptical of AI. Not because the technology is bad, but because the discourse around it has become untethered from reality.</p>
<p>The hype cycle has created a strange inversion: the people who know the least about AI are often the loudest about its implications. Venture capitalists announce that AGI is months away. CEOs claim AI will replace entire professions. Tech bloggers write about "existential risk" without understanding what a loss function is.</p>
<p>Meanwhile, the people who actually build these systems — the researchers, the engineers, the scientists — tend to be far more measured in their claims. They understand the limitations because they encounter them daily. They know that a model that can write poetry and pass the bar exam can also fail at basic arithmetic and hallucinate nonexistent court cases.</p>
<p>Skepticism doesn't mean dismissal. It means taking the technology seriously enough to evaluate it honestly. It means distinguishing between what AI can do today and what it might do someday. It means resisting the temptation to extrapolate linearly from current capabilities. And it means recognizing that the most important questions about AI are not technical but social: Who benefits? Who is harmed? Who decides?</p>`,
  },
  {
    id: 10,
    title: "What I Learned from Building with LLMs for a Year",
    tag: "AI Engineering",
    date: "Sep 2024",
    readingTime: "11 min",
    content: `<p>After a year of building applications with large language models, here are the things I wish someone had told me when I started.</p>
<p>First, evaluation is the hardest part. Not the model, not the prompt, not the infrastructure — evaluation. How do you know if your system is working? Accuracy metrics don't capture nuance. Human evaluation doesn't scale. And the task keeps changing as you iterate. Most of my time hasn't been spent building; it's been spent figuring out whether what I built is any good.</p>
<p>Second, latency matters more than you think. Users will tolerate a loading spinner for two seconds. At five seconds, they start clicking elsewhere. At ten seconds, they're gone. LLMs are slow, and all the clever prompting in the world won't help if the user has already left.</p>
<p>Third, the model is the least important part of the system. The retrieval pipeline, the user interface, the error handling, the fallback strategies — these are what determine whether an AI application succeeds or fails. The model is a component, not the product.</p>
<p>Fourth, simplicity wins. Every abstraction you add — agent frameworks, tool use, multi-step reasoning — introduces new failure modes. The most reliable systems I've built are the simplest: a clear prompt, a well-curated knowledge base, and a straightforward response format.</p>
<p>Fifth, users are far more forgiving of limitations than of unpredictability. A system that always gives a mediocre answer is more trusted than one that sometimes gives a brilliant answer and sometimes gives nonsense. Consistency beats capability.</p>`,
  },
];

// --- Quotes Data ---
const quotes = [
  {
    text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
    author: "Edsger Dijkstra",
  },
  {
    text: "We are stuck with technology when what we really want is just stuff that works.",
    author: "Douglas Adams",
  },
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic — until you understand it, then it's just engineering.",
    author: "Adapted from Arthur C. Clarke",
  },
  {
    text: "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.",
    author: "Sydney Harris",
  },
  {
    text: "Machine intelligence is the last invention that humanity will ever need to make.",
    author: "Nick Bostrom",
  },
  {
    text: "The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it.",
    author: "Mark Weiser",
  },
];

// --- Legal Texts (DSGVO-compliant) ---
const legalTexts = {
  impressum: {
    title: "Impressum",
    tag: "Legal",
    meta: "Angaben gemäß § 5 TMG",
    body: `
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Peter Dubrovin<br>
        Winzererstraße 134<br>
        80797 München
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:dubrovinpd@gmail.com">Click here</a>
      </p>

      <hr>

      <h2>Haftungsausschluss (Disclaimer)</h2>

      <h3>Haftung für Inhalte</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
    `,
  },
  privacy: {
    title: "Datenschutzerklärung",
    tag: "Legal",
    meta: "DSGVO-konform",
    body: `
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Es werden keine Cookies verwendet und es gibt kein Newsletter-Tracking.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Peter Dubrovin<br>
        Winzererstraße 134<br>
        80797 München<br>
        E-Mail: <a href="mailto:dubrovinpd@gmail.com">dubrovinpd@gmail.com</a>
      </p>

      <h2>3. Datenerfassung auf dieser Website</h2>

      <h3>Hosting durch GitHub Pages</h3>
      <p>
      The domain is registered through STRATO.
        Unsere Website wird auf den Servern von GitHub Inc. (88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA) gehostet. Beim Besuch der Seite erfasst GitHub automatisch Log-Files (IP-Adresse, Browsertyp, Datum/Uhrzeit). Dies ist technisch notwendig, um die Website anzuzeigen und die Sicherheit zu gewährleisten. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h3>SSL-Verschlüsselung</h3>
      <p>
        Diese Seite nutzt eine SSL-Verschlüsselung (HTTPS), um die Übertragung vertraulicher Inhalte zu schützen.
      </p>

      <h2>4. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.
      </p>

      <h3>Widerspruchsrecht & Beschwerderecht</h3>
      <p>
        Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren, wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt.
      </p>

      <h3>Recht auf Datenübertragbarkeit</h3>
      <p>
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
      </p>
    `,
  },
};

// --- Unique Tags ---
const tags = [...new Set(articles.map((a) => a.tag))];

// --- State ---
let activeTag = null;
let searchQuery = "";

// --- Initialize ---
document.addEventListener("DOMContentLoaded", () => {
  renderTagFilters();
  renderPosts();
  renderQuotes();
  initModal();
  initLegalModals();
  initBackToTop();
  initReadingProgress();
  initHamburger();
  initRevealAnimations();
});

// --- Render Tag Filters ---
function renderTagFilters() {
  const container = document.getElementById("tagFilters");
  const allBtn = `<button class="tag-btn active" data-tag="all" onclick="filterByTag('all')">All</button>`;
  const tagBtns = tags
    .map(
      (tag) =>
        `<button class="tag-btn" data-tag="${tag}" onclick="filterByTag('${tag}')">${tag}</button>`,
    )
    .join("");
  container.innerHTML = allBtn + tagBtns;
}

// --- Render Posts ---
function renderPosts() {
  const grid = document.getElementById("postsGrid");
  const noResults = document.getElementById("noResults");

  let filtered = articles;

  if (activeTag && activeTag !== "all") {
    filtered = filtered.filter((a) => a.tag === activeTag);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.tag.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q),
    );
  }

  if (filtered.length === 0) {
    grid.style.display = "none";
    noResults.classList.add("visible");
    return;
  }

  grid.style.display = "";
  noResults.classList.remove("visible");

  grid.innerHTML = filtered
    .map(
      (article, i) =>
        `<div class="post-card" onclick="openArticle(${article.id})" style="animation-delay: ${i * 60}ms">
      <span class="post-number">${String(i + 1).padStart(2, "0")}</span>
      <div class="post-info">
        <h3 class="post-card-title">${article.title}</h3>
        <div class="post-meta">
          <span class="post-date">${article.date}</span>
          <span class="post-tag">${article.tag}</span>
        </div>
      </div>
      <span class="post-reading-time">${article.readingTime}</span>
    </div>`,
    )
    .join("");

  grid.classList.remove("visible");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      grid.classList.add("visible");
    });
  });
}

// --- Filter by Tag ---
function filterByTag(tag) {
  activeTag = tag;
  document.querySelectorAll(".tag-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tag === tag);
  });
  renderPosts();
}

// --- Search ---
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  let timeout;
  input.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchQuery = input.value.trim();
      renderPosts();
    }, 200);
  });
});

// --- Render Quotes ---
function renderQuotes() {
  const grid = document.getElementById("quotesGrid");
  grid.innerHTML = quotes
    .map(
      (q) =>
        `<div class="quote-card">
      <p class="quote-text">"${q.text}"</p>
      <div class="quote-author">— ${q.author}</div>
    </div>`,
    )
    .join("");
}

// --- Open Article Modal ---
function openArticle(id) {
  const article = articles.find((a) => a.id === id);
  if (!article) return;

  document.getElementById("modalTag").textContent = article.tag;
  document.getElementById("modalTitle").textContent = article.title;
  document.getElementById("modalMeta").innerHTML =
    `<span>${article.date}</span><span>${article.readingTime} read</span>`;
  document.getElementById("modalBody").innerHTML = article.content;

  openModal();
}

// --- Open Legal Modal ---
function openLegalModal(type) {
  const data = legalTexts[type];
  if (!data) return;

  document.getElementById("modalTag").textContent = data.tag;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalMeta").textContent = data.meta;
  document.getElementById("modalBody").innerHTML = data.body;

  openModal();
}

// --- Open/Close Modal (unified) ---
function openModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  overlay.scrollTop = 0;
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// --- Init Modal Events ---
function initModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// --- Init Legal Modal Links ---
function initLegalModals() {
  const linkImpressum = document.getElementById("link-impressum");
  const linkPrivacy = document.getElementById("link-privacy");

  if (linkImpressum) {
    linkImpressum.addEventListener("click", (e) => {
      e.preventDefault();
      openLegalModal("impressum");
    });
  }

  if (linkPrivacy) {
    linkPrivacy.addEventListener("click", (e) => {
      e.preventDefault();
      openLegalModal("privacy");
    });
  }
}

// --- Back to Top ---
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Reading Progress ---
function initReadingProgress() {
  const bar = document.getElementById("readingProgress");
  window.addEventListener("scroll", () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
    bar.style.width = progress + "%";
  });
}

// --- Hamburger Menu ---
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open");
    document.body.style.overflow = mobileNav.classList.contains("open")
      ? "hidden"
      : "";
  });
}

function closeMobileNav() {
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("mobileNav").classList.remove("open");
  document.body.style.overflow = "";
}

// --- Reveal Animations ---
function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
    observer.observe(el);
  });
}

// --- Stat Counter Animation ---
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.dataset.target);
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      stat.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

document.addEventListener("DOMContentLoaded", () => {
  const statsBand = document.getElementById("statsBand");
  if (statsBand) statsObserver.observe(statsBand);
});
