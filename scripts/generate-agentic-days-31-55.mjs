#!/usr/bin/env node
/**
 * Generates AgenticDay31.jsx … AgenticDay55.jsx from curriculum-aligned content.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../src/pages');

const DAYS = [
  {
    day: 31,
    phase: 'OpenAI & LangChain',
    phaseTag: 'LangChain',
    icon: '🔗',
    theme: 'LANGCHAIN BASIC TO ADVANCED',
    summary:
      'Day 31 goes deep on LangChain. Wire <strong>prompt templates</strong>, <strong>chains</strong>, <strong>agents with tools</strong>, <strong>memory</strong>, and <strong>document loaders</strong> into real flows.',
    learnt: [
      ['Prompt templates', 'parameterize instructions so prompts stay reusable and testable'],
      ['Chains', 'compose LLM calls and transforms into a pipeline (LCEL or classic chains)'],
      ['Agents & tools', 'the model decides which tool to call — search, calculator, custom APIs'],
      ['Memory', 'keep chat history or summaries so multi-turn conversations stay coherent'],
      ['Document loaders', 'pull PDFs, web pages, and files into LangChain Document objects'],
      ['LCEL mindset', 'Runnable sequences pipe inputs through prompts → model → parsers'],
      ['Error surfaces', 'timeouts, empty tool results, and bad parses need clear fallbacks'],
      ['Day arc', 'Days 31–32 finish LangChain; RAG and fine-tuning come next'],
    ],
    core: [
      ['📝', 'Prompt Templates', 'cyan', 'Reusable', 'Use ChatPromptTemplate / PromptTemplate with variables instead of raw f-strings.', 'prompt | model | parser\n# LCEL pipe style'],
      ['⛓️', 'Chains', 'purple', 'Compose', 'Chain retrieval, prompting, and generation. Prefer small composable runnables over one mega-function.', 'load → split → embed\n→ retrieve → generate'],
      ['🛠️', 'Agents + Tools', 'amber', 'Act', 'Bind tools to the model; the agent loop calls tools until it can answer.', 'agent = create_tool_calling_agent(...)\nexecutor.invoke({ input })'],
    ],
    practice: [
      ['💾', 'Memory Types', 'cyan', 'State', 'Buffer for short chats; summary memory when history gets long.', 'ConversationBufferMemory\nConversationSummaryMemory'],
      ['📄', 'Load Docs', 'purple', 'Ingest', 'PyPDFLoader / WebBaseLoader → Documents ready for splitters tomorrow.', 'docs = loader.load()'],
      ['🔜', 'Next: Components', 'amber', 'Day 32', 'Tomorrow — splitters, embeddings, Hugging Face / Ollama hooks.', null, 32],
    ],
    resources: [
      ['📘', 'LangChain Basic→Advanced', 'cyan', 'PY Module 31', '/python/learn/langchain-basic-to-advanced'],
      ['🎬', 'LangChain Agents', 'purple', 'Video', 'https://www.youtube.com/watch?v=aywZrzNaKjs', true],
      ['📖', 'LangChain Docs', 'amber', 'Docs', 'https://python.langchain.com/docs/introduction/', true],
    ],
  },
  {
    day: 32,
    phase: 'OpenAI & LangChain',
    phaseTag: 'LangChain',
    icon: '🧩',
    theme: 'LANGCHAIN COMPONENTS & MODULES',
    summary:
      'Day 32 fills the toolbox. Master <strong>text splitters</strong>, <strong>embeddings</strong>, and <strong>Hugging Face / Ollama</strong> integrations for RAG-ready pipelines.',
    learnt: [
      ['Text splitters', 'chunk documents by tokens/characters with overlap for better retrieval'],
      ['Embeddings module', 'OpenAI or local embed models turn chunks into vectors'],
      ['Vector store hookup', 'push embeddings into Chroma/FAISS/Pinecone via LangChain wrappers'],
      ['Ollama & HuggingFace', 'run open models locally or from the Hub beside API models'],
      ['Document transformers', 'clean, filter, and enrich docs before indexing'],
      ['Interview Q&A project', 'build a small FAQ bot over your notes — classic portfolio piece'],
      ['Module map', 'know loaders → splitters → embeddings → stores → retrievers → chains'],
      ['Ready for RAG', 'tomorrow assembles these parts into a full RAG system'],
    ],
    core: [
      ['✂️', 'Splitters', 'cyan', 'Chunk', 'RecursiveCharacterTextSplitter with size + overlap is the Year-1 default.', 'splitter = RecursiveCharacterTextSplitter(\n  chunk_size=800, chunk_overlap=100)'],
      ['🧭', 'Embeddings', 'purple', 'Vectors', 'OpenAIEmbeddings or HuggingFaceEmbeddings — keep model id versioned.', 'vectors = embeddings.embed_documents(texts)'],
      ['🤗', 'Local Models', 'amber', 'Ollama / HF', 'Point ChatOllama or HuggingFacePipeline at a local/open model when APIs are costly.', 'llm = ChatOllama(model="llama3")'],
    ],
    practice: [
      ['📦', 'Index Pipeline', 'cyan', 'Assemble', 'load → split → embed → add to vectorstore in one script.', 'store.add_documents(chunks)'],
      ['🧪', 'FAQ Bot Lab', 'purple', 'Project', 'Index interview notes; ask 5 questions; log retrieved chunks.', 'retriever | prompt | llm'],
      ['🔜', 'Next: RAG', 'amber', 'Day 33', 'Tomorrow — full Retrieval-Augmented Generation architecture.', null, 33],
    ],
    resources: [
      ['📘', 'LangChain Components', 'cyan', 'PY Module 32', '/python/learn/langchain-components-and-modules'],
      ['🎬', 'LangChain RAG', 'purple', 'Video', 'https://www.youtube.com/watch?v=tcqEUSNCn8I', true],
      ['📖', 'Text Splitters', 'amber', 'Docs', 'https://python.langchain.com/docs/how_to/#text-splitters', true],
    ],
  },
  {
    day: 33,
    phase: 'RAG & Deployment',
    phaseTag: 'RAG',
    icon: '📚',
    theme: 'RETRIEVAL AUGMENTED GENERATION',
    summary:
      'Day 33 ships grounded answers. Build a <strong>RAG pipeline</strong>, compare it to fine-tuning, and aim for production-ready retrieval quality.',
    learnt: [
      ['RAG idea', 'retrieve relevant chunks, put them in the prompt, then generate — model stays frozen'],
      ['Pipeline', 'ingest → chunk → embed → store → retrieve → augment → generate'],
      ['RAG vs fine-tuning', 'RAG for knowledge freshness; fine-tune for style/behavior'],
      ['Top-K & ranking', 'fetch candidates then optionally re-rank before prompting'],
      ['Citations', 'return source metadata so users can verify answers'],
      ['Failure modes', 'bad chunks, wrong K, prompt stuffing, and silent empty retrieval'],
      ['Gemini + LangChain', 'swap providers; the RAG shape stays the same'],
      ['Production bar', 'eval sets, latency budgets, and fallbacks when retrieval misses'],
    ],
    core: [
      ['🪜', 'RAG Pipeline', 'cyan', 'Flow', 'Never ask the LLM alone about private docs — always retrieve first.', 'q → retrieve(k)\n→ prompt(context)\n→ answer'],
      ['⚖️', 'RAG vs FT', 'purple', 'Choose', 'Docs change weekly? RAG. Need a fixed tone/format? Fine-tune (or both).', 'knowledge → RAG\nbehavior → fine-tune'],
      ['🏭', 'Production RAG', 'amber', 'Hardening', 'Log retrieval hits, measure faithfulness, cache embeddings, set timeouts.', 'eval · latency · fallback'],
    ],
    practice: [
      ['🧪', 'Gemini Q&A Lab', 'cyan', 'Demo', 'Index a PDF with LangChain; answer with grounded citations.', 'retriever.invoke(q)\n→ llm with sources'],
      ['📏', 'Eval Set', 'purple', 'Quality', '10 gold Q&A pairs — track hit@K and “answer cites source”.', 'hit@5 · citation%'],
      ['🔜', 'Next: Fine-Tuning', 'amber', 'Day 34', 'Tomorrow — PEFT, LoRA, QLoRA on custom data.', null, 34],
    ],
    resources: [
      ['📘', 'RAG', 'cyan', 'PY Module 33', '/python/learn/retrieval-augmented-generation'],
      ['🎬', 'RAG Explained', 'purple', 'IBM', 'https://www.youtube.com/watch?v=T-D1OfcDW1M', true],
      ['📖', 'LangChain RAG', 'amber', 'Docs', 'https://python.langchain.com/docs/tutorials/rag/', true],
    ],
  },
  {
    day: 34,
    phase: 'RAG & Deployment',
    phaseTag: 'Fine-Tune',
    icon: '🎛️',
    theme: 'FINE-TUNING LLMS',
    summary:
      'Day 34 teaches adaptation. Use <strong>PEFT</strong>, <strong>LoRA</strong>, and <strong>QLoRA</strong> to specialize a model without full retraining.',
    learnt: [
      ['What fine-tuning is', 'continue training on your examples so the model picks up task style or domain language'],
      ['When to fine-tune', 'format adherence, tone, domain jargon — not for injecting daily-changing facts'],
      ['PEFT', 'Parameter-Efficient Fine-Tuning updates small adapter weights, not the whole net'],
      ['LoRA', 'low-rank adapters on attention layers — popular, cheap, mergeable'],
      ['QLoRA', 'quantize the base model + LoRA so fine-tunes fit on smaller GPUs'],
      ['Data quality', 'clean instruction pairs beat huge noisy dumps'],
      ['Eval after FT', 'hold out prompts; compare base vs tuned on your rubric'],
      ['Combine with RAG', 'fine-tune behavior + RAG knowledge is a strong Year-1 stack'],
    ],
    core: [
      ['🎯', 'When FT Wins', 'cyan', 'Fit', 'Stable task format, brand voice, or tool-calling style that prompting alone cannot lock.', 'style / format / domain\n≠ live knowledge'],
      ['🔌', 'LoRA / QLoRA', 'purple', 'PEFT', 'Train adapters; keep base frozen. Merge adapters for serving if needed.', 'base (frozen) + LoRA\n→ tuned behavior'],
      ['📊', 'Data Prep', 'amber', 'Examples', 'JSONL of {instruction, input, output}. Deduplicate and balance skills.', '{"instruction":...,\n "output":...}'],
    ],
    practice: [
      ['🧪', 'Tiny FT Run', 'cyan', 'Lab', 'Fine-tune a small open model on 100 Q&A pairs; compare before/after.', 'train → eval holdout'],
      ['⚠️', 'Avoid FT for Facts', 'purple', 'Trap', 'Company policy that changes weekly belongs in RAG, not weights.', 'facts → retrieve\nstyle → fine-tune'],
      ['🔜', 'Next: LlamaIndex', 'amber', 'Day 35', 'Tomorrow — LlamaIndex connectors, query engines, stock analysis project.', null, 35],
    ],
    resources: [
      ['📘', 'Fine-Tuning LLMs', 'cyan', 'PY Module 34', '/python/learn/fine-tuning-llms'],
      ['🎬', 'LoRA Fine-Tuning', 'purple', 'Video', 'https://www.youtube.com/watch?v=Us5ZFp16PaU', true],
      ['📖', 'PEFT Docs', 'amber', 'Hugging Face', 'https://huggingface.co/docs/peft', true],
    ],
  },
  {
    day: 35,
    phase: 'RAG & Deployment',
    phaseTag: 'LlamaIndex',
    icon: '🦙',
    theme: 'LLAMAINDEX',
    summary:
      'Day 35 adds another RAG toolkit. Use <strong>LlamaIndex</strong> connectors and <strong>query engines</strong> — then try the stock analysis project.',
    learnt: [
      ['LlamaIndex role', 'data framework optimized for indexing and querying private data with LLMs'],
      ['Connectors', 'load from APIs, files, DBs into LlamaIndex documents/nodes'],
      ['Indexes', 'VectorStoreIndex and friends turn nodes into queryable structures'],
      ['Query engines', 'high-level ask → retrieve → synthesize API'],
      ['vs LangChain', 'overlapping goals; LlamaIndex shines at data/index abstractions'],
      ['Stock analysis project', 'ingest market notes/PDFs and ask analytical questions'],
      ['Hybrid stacks', 'you can use LlamaIndex retrieval with LangChain agents'],
      ['Eval still required', 'framework ≠ correctness — measure grounded answers'],
    ],
    core: [
      ['🔌', 'Connectors', 'cyan', 'Ingest', 'Point SimpleDirectoryReader or API loaders at your corpus.', 'docs = SimpleDirectoryReader(\n  "data").load_data()'],
      ['📇', 'Index + Query', 'purple', 'Ask', 'Build VectorStoreIndex; query_engine.query("...") returns a response.', 'index = VectorStoreIndex.from_documents(docs)\nqe = index.as_query_engine()'],
      ['📈', 'Stock Project', 'amber', 'Build', 'Index filings/notes; ask for risks, trends, and comparisons with citations.', 'query → answer + sources'],
    ],
    practice: [
      ['🧪', 'First Query', 'cyan', 'Lab', 'Index 3 markdown notes; ask two questions; print source nodes.', 'response.source_nodes'],
      ['🔀', 'Compare Tooling', 'purple', 'Choice', 'Same corpus in LangChain vs LlamaIndex — note DX differences.', 'same data · two APIs'],
      ['🔜', 'Next: Deploy', 'amber', 'Day 36', 'Tomorrow — Flask + AWS deployment for LLM apps.', null, 36],
    ],
    resources: [
      ['📘', 'LlamaIndex', 'cyan', 'PY Module 35', '/python/learn/llamaindex'],
      ['🎬', 'LlamaIndex Tutorial', 'purple', 'Video', 'https://www.youtube.com/watch?v=cbiiEuXKzo8', true],
      ['📖', 'LlamaIndex Docs', 'amber', 'Docs', 'https://docs.llamaindex.ai/', true],
    ],
  },
  {
    day: 36,
    phase: 'RAG & Deployment',
    phaseTag: 'Deploy',
    icon: '🚀',
    theme: 'LLM APPS DEPLOYMENT',
    summary:
      'Day 36 puts Gen AI online. Wrap models in a <strong>Flask API</strong>, configure envs, and host with a solid <strong>production checklist</strong>.',
    learnt: [
      ['Deployment strategies', 'serverless vs VM vs containers — pick for traffic and cold-start tolerance'],
      ['Flask LLM API', 'thin HTTP layer: validate input, call model/RAG, return JSON'],
      ['Secrets', 'API keys in env vars / secret managers — never commit .env'],
      ['AWS hosting', 'EC2, Elastic Beanstalk, or Lambda+API Gateway for small apps'],
      ['Health & logs', 'healthz, structured logs, request ids for debugging'],
      ['Rate limits', 'protect your wallet and upstream model quotas'],
      ['Warm paths', 'cache embeddings and frequent answers when safe'],
      ['Checklist', 'HTTPS, timeouts, retries, monitoring, rollback plan'],
    ],
    core: [
      ['🌐', 'Flask Wrapper', 'cyan', 'API', 'One POST /ask endpoint; keep business logic out of the route handler.', '@app.post("/ask")\ndef ask(): ...'],
      ['☁️', 'AWS Path', 'purple', 'Host', 'Package app, set env secrets, put a reverse proxy/TLS in front.', 'build → ship → monitor'],
      ['✅', 'Prod Checklist', 'amber', 'Ship', 'Secrets, timeouts, logging, auth if needed, cost alerts.', 'env · TLS · limits\nlogs · alerts'],
    ],
    practice: [
      ['🧪', 'Local Ship', 'cyan', 'Lab', 'Run Flask RAG behind curl; then dockerize the same entrypoint.', 'curl -X POST /ask'],
      ['💵', 'Cost Guard', 'purple', 'Ops', 'Cap max tokens; add per-IP rate limit; alert on spend spikes.', 'max_tokens · rate_limit'],
      ['🔜', 'Next: Django', 'amber', 'Day 37', 'Tomorrow — Django fundamentals for full-stack Gen AI backends.', null, 37],
    ],
    resources: [
      ['📘', 'LLM Apps Deployment', 'cyan', 'PY Module 36', '/python/learn/llm-apps-deployment'],
      ['🎬', 'Deploy ML Models', 'purple', 'Video', 'https://www.youtube.com/watch?v=Z2Qm9itGxQI', true],
      ['📖', 'Flask Docs', 'amber', 'Docs', 'https://flask.palletsprojects.com/', true],
    ],
  },
  {
    day: 37,
    phase: 'Django',
    phaseTag: 'Django',
    icon: '🎸',
    theme: 'DJANGO FUNDAMENTALS',
    summary:
      'Day 37 starts the web framework stretch. Learn Django’s <strong>MVT</strong> pattern, projects/apps, <strong>URLs</strong>, <strong>views</strong>, and the admin.',
    learnt: [
      ['Why Django', 'batteries-included web framework — ORM, auth, admin, for Gen AI product UIs and APIs'],
      ['MVT', 'Model–View–Template: data, request logic, HTML rendering'],
      ['Project vs app', 'project is the config container; apps are reusable feature packages'],
      ['URLs', 'path() routes map URLs to views cleanly'],
      ['Views & templates', 'function/class views pass context into templates'],
      ['Admin', 'instant CRUD UI for models — great for internal tools'],
      ['Settings', 'DEBUG, INSTALLED_APPS, DATABASES — know where knobs live'],
      ['Path ahead', 'models/ORM → forms/auth → DRF for APIs'],
    ],
    core: [
      ['🏗️', 'Project Setup', 'cyan', 'Start', 'django-admin startproject + startapp; wire the app into INSTALLED_APPS.', 'django-admin startproject config\npython manage.py startapp core'],
      ['🗺️', 'URLs → Views', 'purple', 'Routing', 'Include app urls; keep paths readable and named.', 'path("chat/", views.chat)'],
      ['🛠️', 'Admin', 'amber', 'Ops UI', 'Register models; use admin for quick data inspection during RAG prototyping.', 'admin.site.register(Doc)'],
    ],
    practice: [
      ['🧪', 'Hello Django', 'cyan', 'Lab', 'One page that greets and links to a static “about Gen AI” template.', 'render(request, "home.html")'],
      ['📁', 'App Layout', 'purple', 'Structure', 'Separate chat, accounts, and docs apps early — easier later.', 'apps: chat · accounts'],
      ['🔜', 'Next: ORM', 'amber', 'Day 38', 'Tomorrow — models, migrations, QuerySets, relationships.', null, 38],
    ],
    resources: [
      ['📘', 'Django Fundamentals', 'cyan', 'PY Module 37', '/python/learn/django-fundamentals'],
      ['🎬', 'Django Tutorial', 'purple', 'Video', 'https://www.youtube.com/watch?v=F5mRW0jo-4I', true],
      ['📖', 'Django Docs', 'amber', 'Docs', 'https://docs.djangoproject.com/', true],
    ],
  },
  {
    day: 38,
    phase: 'Django',
    phaseTag: 'Django',
    icon: '🗃️',
    theme: 'DJANGO MODELS & ORM',
    summary:
      'Day 38 stores product data. Define <strong>models</strong>, run <strong>migrations</strong>, query with the <strong>ORM</strong>, and relate tables with foreign keys.',
    learnt: [
      ['Models', 'Python classes map to DB tables via Django’s ORM'],
      ['Fields', 'CharField, TextField, ForeignKey, DateTimeField — pick types deliberately'],
      ['Migrations', 'makemigrations + migrate keep schema versioned'],
      ['QuerySet API', 'filter, exclude, get, annotate — chain lazily until evaluated'],
      ['Relationships', 'FK, M2M, OneToOne for real domain models'],
      ['Admin customization', 'list_display, search_fields speed up ops'],
      ['Gen AI use', 'store chats, documents, embeddings metadata in Postgres/SQLite'],
      ['N+1 care', 'select_related / prefetch_related when walking relations'],
    ],
    core: [
      ['📐', 'Define Models', 'cyan', 'Schema', 'Explicit fields + __str__; add created_at for audit trails.', 'class Document(models.Model):\n  title = models.CharField(...)'],
      ['🔄', 'Migrations', 'purple', 'Evolve', 'Never edit production DB by hand — migrate forward.', 'makemigrations\nmigrate'],
      ['🔍', 'QuerySets', 'amber', 'Read', 'Document.objects.filter(owner=user).order_by("-id")[:20]', 'filter · exclude · get'],
    ],
    practice: [
      ['🧪', 'Chat Tables', 'cyan', 'Lab', 'Model Conversation + Message; create via shell; list in admin.', 'Message.objects.create(...)'],
      ['🔗', 'FK Practice', 'purple', 'Relations', 'Document FK to User; query user.document_set.all().', 'user.documents.all()'],
      ['🔜', 'Next: Auth', 'amber', 'Day 39', 'Tomorrow — forms, login/signup, permissions.', null, 39],
    ],
    resources: [
      ['📘', 'Django Models & ORM', 'cyan', 'PY Module 38', '/python/learn/django-models-and-orm'],
      ['🎬', 'Django ORM', 'purple', 'Video', 'https://www.youtube.com/watch?v=aHC3uTkT9r8', true],
      ['📖', 'QuerySet API', 'amber', 'Docs', 'https://docs.djangoproject.com/en/stable/ref/models/querysets/', true],
    ],
  },
  {
    day: 39,
    phase: 'Django',
    phaseTag: 'Django',
    icon: '🔐',
    theme: 'DJANGO FORMS & AUTHENTICATION',
    summary:
      'Day 39 secures the app. Build <strong>forms</strong>, ship <strong>login/signup</strong>, and use <strong>sessions & permissions</strong> correctly.',
    learnt: [
      ['Django forms', 'validate and render HTML forms with clean error handling'],
      ['ModelForms', 'generate forms from models to avoid duplication'],
      ['Auth system', 'User model, login, logout, password hashing built in'],
      ['Signup flow', 'create user → authenticate → login → redirect'],
      ['Permissions', 'is_staff, groups, and object-level checks when needed'],
      ['Sessions', 'server-side session store keeps users logged in'],
      ['CSRF', 'protect POSTs — Django templates include the token'],
      ['Gen AI angle', 'gate expensive LLM endpoints behind authenticated users'],
    ],
    core: [
      ['📝', 'Forms', 'cyan', 'Validate', 'Form.is_valid() → cleaned_data; never trust raw POST.', 'if form.is_valid():\n  ...'],
      ['👤', 'Auth Views', 'purple', 'Users', 'Use django.contrib.auth views or custom login/signup.', 'login(request, user)'],
      ['🛡️', 'Permissions', 'amber', 'Access', '@login_required and permission_required on sensitive views.', '@login_required\ndef ask(request): ...'],
    ],
    practice: [
      ['🧪', 'Signup Lab', 'cyan', 'Build', 'Registration form + login; redirect to a protected /chat page.', 'User.objects.create_user'],
      ['🔒', 'Protect LLM Route', 'purple', 'Safety', 'Only logged-in users can hit the generate endpoint.', 'login_required'],
      ['🔜', 'Next: DRF', 'amber', 'Day 40', 'Tomorrow — Django REST Framework APIs.', null, 40],
    ],
    resources: [
      ['📘', 'Forms & Auth', 'cyan', 'PY Module 39', '/python/learn/django-forms-and-authentication'],
      ['🎬', 'Django Auth', 'purple', 'Video', 'https://www.youtube.com/watch?v=e1IyzVyrFSs', true],
      ['📖', 'Auth Docs', 'amber', 'Docs', 'https://docs.djangoproject.com/en/stable/topics/auth/', true],
    ],
  },
  {
    day: 40,
    phase: 'Django',
    phaseTag: 'DRF',
    icon: '🌐',
    theme: 'DJANGO REST FRAMEWORK',
    summary:
      'Day 40 exposes JSON APIs. Use <strong>DRF serializers</strong>, <strong>viewsets</strong>, and routers so frontends and agents can call your backend.',
    learnt: [
      ['REST basics', 'resources, verbs, status codes — provider vs consumer'],
      ['JSON', 'the lingua franca between Django, React, and LLM tools'],
      ['Serializers', 'validate input and shape output dictionaries'],
      ['ViewSets & routers', 'CRUD endpoints with less boilerplate'],
      ['Auth for APIs', 'Token/JWT/Session — pick for SPA vs server apps'],
      ['Permissions', 'IsAuthenticated, custom object permissions'],
      ['Browsable API', 'DRF’s HTML API is great for manual testing'],
      ['Agent-ready', 'stable REST contracts let tools and agents call your product'],
    ],
    core: [
      ['📦', 'Serializers', 'cyan', 'Shape', 'ModelSerializer maps models ↔ JSON with validation.', 'class DocSerializer(ModelSerializer): ...'],
      ['🚏', 'ViewSets', 'purple', 'CRUD', 'ModelViewSet + DefaultRouter registers /docs/ quickly.', 'router.register("docs", DocViewSet)'],
      ['🔑', 'API Auth', 'amber', 'Secure', 'Require auth on write; rate-limit public read if needed.', 'permission_classes = [IsAuthenticated]'],
    ],
    practice: [
      ['🧪', 'Docs API', 'cyan', 'Lab', 'CRUD for Document model; POST a doc; GET list as JSON.', 'POST /api/docs/'],
      ['🤖', 'Tool Surface', 'purple', 'Agents', 'Design one /search endpoint an agent can call with query + top_k.', 'GET /api/search?q='],
      ['🔜', 'Next: FastAPI', 'amber', 'Day 41', 'Tomorrow — FastAPI fundamentals and auto OpenAPI docs.', null, 41],
    ],
    resources: [
      ['📘', 'Django REST Framework', 'cyan', 'PY Module 40', '/python/learn/django-rest-framework'],
      ['🎬', 'DRF Tutorial', 'purple', 'Video', 'https://www.youtube.com/watch?v=c708Nf0cHrs', true],
      ['📖', 'DRF Docs', 'amber', 'Docs', 'https://www.django-rest-framework.org/', true],
    ],
  },
  {
    day: 41,
    phase: 'FastAPI',
    phaseTag: 'FastAPI',
    icon: '⚡',
    theme: 'FASTAPI FUNDAMENTALS',
    summary:
      'Day 41 switches to modern APIs. Build <strong>FastAPI</strong> routes with <strong>Pydantic</strong> models and free <strong>OpenAPI</strong> docs.',
    learnt: [
      ['Why FastAPI', 'async-friendly, type-hint driven, automatic docs — great for LLM microservices'],
      ['Path operations', 'GET/POST handlers with clear status codes'],
      ['Request bodies', 'Pydantic models validate JSON automatically'],
      ['Response models', 'declare what you return — clients get a contract'],
      ['OpenAPI /docs', 'Swagger UI and ReDoc generated from your types'],
      ['Dependency injection', 'shared logic (db, auth) via Depends()'],
      ['Async routes', 'async def for I/O-bound LLM calls'],
      ['Vs Django', 'leaner API service; Django still stronger for full admin/CMS'],
    ],
    core: [
      ['🚀', 'First App', 'cyan', 'Setup', 'uvicorn main:app --reload; hit /docs immediately.', 'app = FastAPI()\n@app.get("/health")'],
      ['📐', 'Pydantic', 'purple', 'Types', 'class AskIn(BaseModel): question: str; validate before calling the LLM.', 'def ask(body: AskIn): ...'],
      ['📖', 'Auto Docs', 'amber', 'DX', 'OpenAPI stays in sync with code — agents and frontends can discover endpoints.', '/docs · /redoc'],
    ],
    practice: [
      ['🧪', 'Ask Endpoint', 'cyan', 'Lab', 'POST /ask with question; return {answer, model}.', 'POST /ask → JSON'],
      ['🧵', 'Async Call', 'purple', 'Perf', 'async route that awaits an HTTP LLM client.', 'await client.chat(...)'],
      ['🔜', 'Next: DB', 'amber', 'Day 42', 'Tomorrow — FastAPI + SQLAlchemy CRUD.', null, 42],
    ],
    resources: [
      ['📘', 'FastAPI Fundamentals', 'cyan', 'PY Module 41', '/python/learn/fastapi-fundamentals'],
      ['🎬', 'FastAPI Tutorial', 'purple', 'Video', 'https://www.youtube.com/watch?v=0sOvCWHmTfU', true],
      ['📖', 'FastAPI Docs', 'amber', 'Docs', 'https://fastapi.tiangolo.com/', true],
    ],
  },
  {
    day: 42,
    phase: 'FastAPI',
    phaseTag: 'FastAPI',
    icon: '🗄️',
    theme: 'FASTAPI WITH DATABASES',
    summary:
      'Day 42 persists API data. Wire <strong>SQLAlchemy</strong>, async sessions, and clean <strong>CRUD</strong> endpoints with dependency injection.',
    learnt: [
      ['SQLAlchemy + FastAPI', 'models, engine, SessionLocal — same ORM ideas as Django, different wiring'],
      ['Depends(get_db)', 'yield a session per request; close in finally'],
      ['CRUD endpoints', 'create/read/update/delete with status codes'],
      ['Async DB', 'async engines/sessions when you go fully async'],
      ['Error handling', 'HTTPException for 404/400; don’t leak stack traces'],
      ['Migrations', 'Alembic for schema changes in real projects'],
      ['Gen AI tables', 'store conversations, tool traces, document metadata'],
      ['Transactions', 'commit on success; rollback on failure'],
    ],
    core: [
      ['🧱', 'Models + Engine', 'cyan', 'Setup', 'Declarative Base + create_engine; SessionLocal factory.', 'SessionLocal = sessionmaker(...)'],
      ['🔌', 'get_db', 'purple', 'DI', 'def get_db(): db=SessionLocal(); try yield db; finally close.', 'db: Session = Depends(get_db)'],
      ['📋', 'CRUD Routes', 'amber', 'API', 'POST create, GET list/detail, PATCH update, DELETE remove.', '201 · 200 · 404'],
    ],
    practice: [
      ['🧪', 'Messages CRUD', 'cyan', 'Lab', 'Table messages(id, role, content); full CRUD via FastAPI.', 'POST /messages'],
      ['⚠️', '404 Path', 'purple', 'Errors', 'Raise HTTPException(404) when id missing.', 'raise HTTPException(404)'],
      ['🔜', 'Next: Security', 'amber', 'Day 43', 'Tomorrow — FastAPI auth & security.', null, 43],
    ],
    resources: [
      ['📘', 'FastAPI with Databases', 'cyan', 'PY Module 42', '/python/learn/fastapi-with-databases'],
      ['🎬', 'FastAPI + SQLAlchemy', 'purple', 'Video', 'https://www.youtube.com/watch?v=5GorMC2lPpk', true],
      ['📖', 'SQLAlchemy 2.0', 'amber', 'Docs', 'https://docs.sqlalchemy.org/', true],
    ],
  },
  {
    day: 43,
    phase: 'FastAPI',
    phaseTag: 'Security',
    icon: '🔒',
    theme: 'FASTAPI AUTHENTICATION & SECURITY',
    summary:
      'Day 43 locks the API. Add <strong>JWT/OAuth2</strong>, password hashing, and security headers so LLM routes are not public by default.',
    learnt: [
      ['OAuth2 password flow', 'standard way to issue tokens for SPAs and mobile'],
      ['JWT access tokens', 'stateless auth — verify signature and expiry on each request'],
      ['Password hashing', 'passlib/bcrypt — never store plaintext'],
      ['Depends(get_current_user)', 'inject the authenticated user into protected routes'],
      ['Scopes / roles', 'limit who can call admin or expensive generate endpoints'],
      ['CORS', 'allow only trusted frontends'],
      ['Secrets rotation', 'JWT secret and API keys in env; rotate carefully'],
      ['Abuse prevention', 'rate limits + auth together protect model spend'],
    ],
    core: [
      ['🔑', 'JWT Issue', 'cyan', 'Login', 'Verify password → create access_token with sub=user_id.', 'create_access_token({"sub": user.id})'],
      ['👤', 'Current User', 'purple', 'Guard', 'Decode Bearer token; load user; 401 if invalid.', 'user = Depends(get_current_user)'],
      ['🛡️', 'Hardening', 'amber', 'Extras', 'HTTPS only, CORS allowlist, rate limit /ask.', 'CORS · rate limit · HTTPS'],
    ],
    practice: [
      ['🧪', 'Protected /ask', 'cyan', 'Lab', 'Require Bearer token before calling the LLM.', 'Authorization: Bearer …'],
      ['👥', 'Role Gate', 'purple', 'RBAC', 'Only role=admin can hit /admin/reindex.', 'if user.role != "admin"'],
      ['🔜', 'Next: Prod Deploy', 'amber', 'Day 44', 'Tomorrow — FastAPI production deployment.', null, 44],
    ],
    resources: [
      ['📘', 'FastAPI Auth & Security', 'cyan', 'PY Module 43', '/python/learn/fastapi-authentication-and-security'],
      ['📖', 'FastAPI Security', 'purple', 'Docs', 'https://fastapi.tiangolo.com/tutorial/security/', true],
      ['📖', 'OAuth2', 'amber', 'Overview', 'https://oauth.net/2/', true],
    ],
  },
  {
    day: 44,
    phase: 'FastAPI',
    phaseTag: 'Deploy',
    icon: '🏭',
    theme: 'FASTAPI PRODUCTION DEPLOYMENT',
    summary:
      'Day 44 hardens FastAPI for prod. <strong>Uvicorn/Gunicorn</strong>, containers, env config, health checks, and a ship checklist.',
    learnt: [
      ['ASGI servers', 'uvicorn workers behind gunicorn or a process manager'],
      ['Containers', 'Docker image with pinned deps; multi-stage builds keep images small'],
      ['Config', 'pydantic-settings for typed env config'],
      ['Health checks', '/health for orchestrators and load balancers'],
      ['Observability', 'structured logs, metrics, tracing for LLM latency'],
      ['Zero-downtime', 'rolling deploys; keep previous revision for rollback'],
      ['Static & CORS', 'production origins only'],
      ['Bridge to agents', 'stable APIs become tools for LangGraph/n8n next'],
    ],
    core: [
      ['🐳', 'Containerize', 'cyan', 'Ship', 'Dockerfile CMD uvicorn main:app --host 0.0.0.0 --port 8000', 'docker build · run'],
      ['⚙️', 'Settings', 'purple', 'Config', 'BaseSettings reads DATABASE_URL, OPENAI_API_KEY, APP_ENV.', 'settings = Settings()'],
      ['📈', 'Observe', 'amber', 'Ops', 'Log request_id, model, tokens, latency_ms on every /ask.', 'log structured JSON'],
    ],
    practice: [
      ['🧪', 'Docker Run', 'cyan', 'Lab', 'Build image; curl health and ask against localhost mapping.', 'curl /health'],
      ['↩️', 'Rollback Drill', 'purple', 'Ops', 'Document how to revert to previous image tag in 5 minutes.', 'prev_tag → redeploy'],
      ['🔜', 'Next: Agentic AI', 'amber', 'Day 45', 'Tomorrow — what agentic AI is and how agents differ from chatbots.', null, 45],
    ],
    resources: [
      ['📘', 'FastAPI Production', 'cyan', 'PY Module 44', '/python/learn/fastapi-production-deployment'],
      ['📖', 'Uvicorn', 'purple', 'Docs', 'https://www.uvicorn.org/', true],
      ['📖', 'Docker', 'amber', 'Docs', 'https://docs.docker.com/get-started/', true],
    ],
  },
  {
    day: 45,
    phase: 'Agentic AI',
    phaseTag: 'Agents',
    icon: '🤖',
    theme: 'INTRODUCTION TO AGENTIC AI',
    summary:
      'Day 45 opens true agents. Learn how <strong>agentic AI</strong> plans, uses memory, and coordinates <strong>multi-agent</strong> systems beyond single chat replies.',
    learnt: [
      ['Agent vs chatbot', 'chatbots answer; agents pursue goals with tools and multi-step plans'],
      ['Agentic AI', 'systems that plan, act, observe, and iterate toward an objective'],
      ['Memory', 'short-term scratchpad vs long-term vector/DB memory'],
      ['Planning', 'decompose goals into steps; replan when tools fail'],
      ['Architecture', 'brain (LLM) + tools + memory + orchestrator loop'],
      ['Multi-agent', 'specialist agents (researcher, coder, critic) collaborating'],
      ['Human-in-the-loop', 'approve risky actions before execution'],
      ['What’s next', 'LangGraph/MCP and n8n turn this theory into workflows'],
    ],
    core: [
      ['🎯', 'Goal Loop', 'cyan', 'Think→Act', 'observe → plan → tool call → observe → … until done or budget hit.', 'plan → act → observe'],
      ['🧠', 'Memory Layers', 'purple', 'State', 'Conversation buffer + retrieved long-term facts + tool results log.', 'short · long · tool log'],
      ['👥', 'Multi-Agent', 'amber', 'Team', 'Router assigns sub-tasks; critic agent reviews outputs.', 'researcher | writer | critic'],
    ],
    practice: [
      ['🧪', 'Toy Agent', 'cyan', 'Lab', 'LLM + calculator tool that solves multi-step math word problems.', 'tool: calculate'],
      ['📝', 'Write Spec', 'purple', 'Design', 'One-page agent spec: goal, tools, memory, stop conditions.', 'goal · tools · stop'],
      ['🔜', 'Next: LangGraph', 'amber', 'Day 46', 'Tomorrow — LangGraph workflows and MCP servers.', null, 46],
    ],
    resources: [
      ['📘', 'Introduction to Agentic AI', 'cyan', 'PY Module 45', '/python/learn/introduction-to-agentic-ai'],
      ['📖', 'LangGraph Concepts', 'purple', 'Docs', 'https://langchain-ai.github.io/langgraph/', true],
      ['🗺️', 'Mental Model', 'amber', 'Remember', 'Agent = LLM + tools + memory + loop with a clear stop rule.', 'LLM + tools + loop'],
    ],
  },
  {
    day: 46,
    phase: 'Agentic AI',
    phaseTag: 'LangGraph',
    icon: '🕸️',
    theme: 'LANGGRAPH & MCP',
    summary:
      'Day 46 builds graphs. Orchestrate agents with <strong>LangGraph</strong> and connect tools via <strong>MCP</strong> (Model Context Protocol) servers.',
    learnt: [
      ['LangGraph', 'stateful graph workflows — nodes, edges, cycles for agent loops'],
      ['State', 'typed shared state passed between nodes'],
      ['Conditional edges', 'route to different nodes based on tool results or flags'],
      ['MCP idea', 'standard way for models to discover and call external tools/context'],
      ['MCP servers', 'expose filesystem, browser, DB, or custom tools over the protocol'],
      ['LangChain + MCP', 'wire MCP tool servers into agent graphs'],
      ['Debugging graphs', 'visualize paths; log state transitions'],
      ['Reliability', 'timeouts, max steps, and interrupt points for humans'],
    ],
    core: [
      ['🕸️', 'Graph Workflow', 'cyan', 'Nodes', 'Define nodes as functions; add edges; compile and invoke with initial state.', 'graph.add_node("plan", plan)\ngraph.add_edge(...)'],
      ['🔌', 'MCP Tools', 'purple', 'Protocol', 'Run an MCP server; client lists tools; agent calls them safely.', 'list_tools → call_tool'],
      ['🛑', 'Stop Rules', 'amber', 'Safety', 'max_iterations, budget, and human approval nodes for side effects.', 'max_steps · approve'],
    ],
    practice: [
      ['🧪', 'Two-Node Graph', 'cyan', 'Lab', 'research node → write node with shared state.', 'state["notes"] → draft'],
      ['🧰', 'MCP Demo', 'purple', 'Tools', 'Connect one MCP filesystem or fetch server to a tiny agent.', 'MCP + LangGraph'],
      ['🔜', 'Next: n8n', 'amber', 'Day 47', 'Tomorrow — n8n automation and agentic workflows.', null, 47],
    ],
    resources: [
      ['📘', 'LangGraph & MCP', 'cyan', 'PY Module 46', '/python/learn/langgraph-and-mcp'],
      ['📖', 'LangGraph', 'purple', 'Docs', 'https://langchain-ai.github.io/langgraph/', true],
      ['📖', 'MCP', 'amber', 'Spec', 'https://modelcontextprotocol.io/', true],
    ],
  },
  {
    day: 47,
    phase: 'Agentic AI',
    phaseTag: 'n8n',
    icon: '🔁',
    theme: 'N8N & AGENTIC AI WORKFLOWS',
    summary:
      'Day 47 automates agents. Use <strong>n8n</strong> triggers and actions, wire credentials, and ship an end-to-end <strong>agentic workflow</strong>.',
    learnt: [
      ['n8n role', 'visual automation — connect APIs, LLMs, and webhooks without all custom glue'],
      ['Triggers', 'webhook, schedule, or app events start the flow'],
      ['Action nodes', 'HTTP, Slack, Sheets, LLM nodes execute steps'],
      ['AI agent prompts', 'clear system prompts + tool descriptions inside n8n AI nodes'],
      ['Credentials', 'store API keys in n8n credentials vault, not plain nodes'],
      ['Branching', 'IF nodes route success/failure paths'],
      ['Observability', 'execution history is your debugger'],
      ['E2E project', 'ticket comes in → agent researches → drafts reply → human approve → send'],
    ],
    core: [
      ['▶️', 'Trigger → Actions', 'cyan', 'Flow', 'Webhook receives event; chain LLM + HTTP nodes; respond.', 'Webhook → AI → HTTP'],
      ['🔑', 'Credentials', 'purple', 'Secrets', 'Create credential objects; reference them in nodes.', 'never hardcode keys'],
      ['✅', 'Human Gate', 'amber', 'HITL', 'Wait node or approval step before irreversible sends.', 'draft → approve → send'],
    ],
    practice: [
      ['🧪', 'Webhook Agent', 'cyan', 'Lab', 'POST JSON to n8n; return an LLM summary in the response.', 'POST /webhook/...'],
      ['📬', 'Notify Path', 'purple', 'Integrate', 'On success, post to Slack; on failure, alert email.', 'IF → Slack / Email'],
      ['🔜', 'Next: Multi-Agent', 'amber', 'Day 48', 'Tomorrow — multi-agent patterns beyond a single workflow.', null, 48],
    ],
    resources: [
      ['📘', 'n8n & Agentic Workflows', 'cyan', 'PY Module 47', '/python/learn/n8n-and-agentic-ai-workflows'],
      ['📖', 'n8n Docs', 'purple', 'Docs', 'https://docs.n8n.io/', true],
      ['🗺️', 'Pattern', 'amber', 'Remember', 'Trigger → reason → tools → approve → act → log.', 'automate the loop'],
    ],
  },
  {
    day: 48,
    phase: 'Agentic AI',
    phaseTag: 'Multi-Agent',
    icon: '👥',
    theme: 'MULTI-AGENT SYSTEMS PATTERNS',
    summary:
      'Day 48 scales beyond one brain. Learn <strong>router</strong>, <strong>supervisor</strong>, and <strong>crew</strong> patterns for multi-agent collaboration.',
    learnt: [
      ['Why multi-agent', 'specialize roles; parallelize work; add critics for quality'],
      ['Router pattern', 'classify intent → send to the right specialist agent'],
      ['Supervisor', 'one orchestrator assigns and merges worker outputs'],
      ['Crew / swarm', 'peer agents with shared goals and message passing'],
      ['Handoffs', 'explicit state transfer between agents with schemas'],
      ['Conflict', 'two agents disagree — need a judge or priority rules'],
      ['Cost control', 'more agents = more tokens; budget per run'],
      ['When not to', 'simple FAQ does not need five agents'],
    ],
    core: [
      ['🧭', 'Router', 'cyan', 'Dispatch', 'Intent classifier picks researcher vs coder vs support.', 'intent → specialist'],
      ['👔', 'Supervisor', 'purple', 'Orchestrate', 'Plan tasks, call workers, synthesize final answer.', 'plan → workers → merge'],
      ['🧵', 'Shared Scratchpad', 'amber', 'State', 'Common memory object all agents read/write with locks/roles.', 'shared state dict'],
    ],
    practice: [
      ['🧪', 'Two-Agent Debate', 'cyan', 'Lab', 'Proposer + critic; loop until critic approves or max 3 rounds.', 'propose → critique'],
      ['💵', 'Budget Cap', 'purple', 'Ops', 'Stop when total tokens > N; return best-so-far.', 'max_tokens_run'],
      ['🔜', 'Next: Memory', 'amber', 'Day 49', 'Tomorrow — deep dive on agent memory and tools.', null, 49],
    ],
    resources: [
      ['📘', 'Course Hub', 'cyan', 'Python Track', '/python'],
      ['📖', 'LangGraph Multi-Agent', 'purple', 'Docs', 'https://langchain-ai.github.io/langgraph/tutorials/multi_agent/', true],
      ['🗺️', 'Rule', 'amber', 'Remember', 'Add agents only when specialization or review clearly helps.', 'simple first'],
    ],
  },
  {
    day: 49,
    phase: 'Agentic AI',
    phaseTag: 'Memory',
    icon: '🧠',
    theme: 'AGENT MEMORY & TOOLS DEEP DIVE',
    summary:
      'Day 49 sharpens the toolbox. Design <strong>short/long-term memory</strong>, reliable <strong>tool contracts</strong>, and safe side effects.',
    learnt: [
      ['Short-term memory', 'current thread messages and scratchpad'],
      ['Long-term memory', 'vector store or DB facts keyed by user/project'],
      ['Episodic vs semantic', 'what happened vs general knowledge'],
      ['Tool contracts', 'JSON schema, timeouts, idempotency keys'],
      ['Side effects', 'reads are safe; writes need confirmation'],
      ['Tool errors', 'typed errors so the agent can retry or replan'],
      ['Caching', 'cache pure tool results to cut cost/latency'],
      ['Privacy', 'don’t put secrets into long-term memory dumps'],
    ],
    core: [
      ['💾', 'Memory Tiers', 'cyan', 'Design', 'Buffer → summary → vector recall. Evict aggressively.', 'hot · warm · cold'],
      ['🛠️', 'Tool Spec', 'purple', 'Schema', 'name, description, args schema, examples, failure modes.', 'JSON schema + timeout'],
      ['🔐', 'Safe Writes', 'amber', 'HITL', 'destructive tools require explicit confirm=true from user/agent policy.', 'confirm before write'],
    ],
    practice: [
      ['🧪', 'Memory Demo', 'cyan', 'Lab', 'Store user preference; recall it in a later session.', 'save → retrieve'],
      ['🧰', 'Three Tools', 'purple', 'Build', 'search, calculator, ticket_create with schemas + timeouts.', '3 tools · schemas'],
      ['🔜', 'Next: Eval', 'amber', 'Day 50', 'Tomorrow — evaluating and observing agents.', null, 50],
    ],
    resources: [
      ['📘', 'Python Track', 'cyan', 'Hub', '/python'],
      ['📖', 'LangChain Memory', 'purple', 'Docs', 'https://python.langchain.com/docs/concepts/memory/', true],
      ['🗺️', 'Rule', 'amber', 'Remember', 'Tools need contracts; memory needs eviction and privacy rules.', 'contracts + eviction'],
    ],
  },
  {
    day: 50,
    phase: 'Agentic AI',
    phaseTag: 'Eval',
    icon: '📏',
    theme: 'AGENT EVALUATION & OBSERVABILITY',
    summary:
      'Day 50 measures agents. Track <strong>task success</strong>, <strong>tool accuracy</strong>, latency/cost, and add traces you can debug.',
    learnt: [
      ['Offline eval sets', 'golden tasks with expected final answers or rubrics'],
      ['Online metrics', 'success rate, retries, human takeovers'],
      ['Tool metrics', 'wrong tool rate, arg error rate'],
      ['Tracing', 'span every LLM and tool call with inputs/outputs redacted'],
      ['Latency & cost', 'p95 latency and $ per successful task'],
      ['Regression suites', 're-run evals on every prompt/graph change'],
      ['Failure taxonomies', 'hallucination, loop, tool fail, policy block'],
      ['Ship gate', 'don’t promote agents that only “feel” better'],
    ],
    core: [
      ['📋', 'Eval Set', 'cyan', 'Offline', '30–100 tasks covering happy path and nasty edge cases.', 'task → expected'],
      ['🔭', 'Traces', 'purple', 'Debug', 'OpenTelemetry-style spans or LangSmith/equivalent.', 'llm · tool · retrieve'],
      ['📈', 'Dashboards', 'amber', 'Online', 'success%, cost/task, p95, loop rate.', 'SLOs for agents'],
    ],
    practice: [
      ['🧪', 'Scorecard', 'cyan', 'Lab', 'Run 10 tasks; score pass/fail + notes; compare prompt v1 vs v2.', 'v1 vs v2'],
      ['🔍', 'Trace One Fail', 'purple', 'Debug', 'Pick a failed run; identify which node broke.', 'find failing span'],
      ['🔜', 'Next: MCP Hands-On', 'amber', 'Day 51', 'Tomorrow — build and consume MCP servers.', null, 51],
    ],
    resources: [
      ['📘', 'Python Track', 'cyan', 'Hub', '/python'],
      ['📖', 'LangSmith', 'purple', 'Docs', 'https://docs.smith.langchain.com/', true],
      ['🗺️', 'Rule', 'amber', 'Remember', 'If you can’t measure it, you can’t safely improve the agent.', 'measure → improve'],
    ],
  },
  {
    day: 51,
    phase: 'Agentic AI',
    phaseTag: 'MCP',
    icon: '🔌',
    theme: 'MCP SERVERS HANDS-ON',
    summary:
      'Day 51 goes practical on MCP. Stand up a <strong>Model Context Protocol</strong> server, expose tools, and call them from an agent client.',
    learnt: [
      ['MCP roles', 'host, client, server — clear separation of concerns'],
      ['Tools vs resources', 'callable actions vs readable context blobs'],
      ['Server lifecycle', 'start, advertise capabilities, handle calls, shut down'],
      ['Auth boundaries', 'servers should enforce their own permissions'],
      ['Local vs remote', 'stdio for local; HTTP/SSE patterns for remote'],
      ['Composability', 'many small servers beat one mega-server'],
      ['Testing', 'unit-test tool handlers without the LLM in the loop'],
      ['Prod care', 'timeouts, allowlists, audit logs for tool calls'],
    ],
    core: [
      ['🖥️', 'Minimal Server', 'cyan', 'Build', 'Expose 1–2 tools (e.g. get_time, fetch_url) with schemas.', 'list_tools · call_tool'],
      ['🤝', 'Client Wire-Up', 'purple', 'Consume', 'Agent discovers tools at runtime — no hardcoded stubs.', 'discover → bind → call'],
      ['🛡️', 'Allowlist', 'amber', 'Safety', 'Only register safe tools in prod; gate writes.', 'allowlist tools'],
    ],
    practice: [
      ['🧪', 'FS Read Server', 'cyan', 'Lab', 'Tool: read_file(path) limited to ./sandbox.', 'sandbox only'],
      ['🔗', 'Agent Demo', 'purple', 'Integrate', 'LangGraph/LangChain agent solves a task using your MCP tools.', 'MCP + agent'],
      ['🔜', 'Next: Guardrails', 'amber', 'Day 52', 'Tomorrow — safety and guardrails for agents.', null, 52],
    ],
    resources: [
      ['📖', 'MCP Docs', 'cyan', 'Spec', 'https://modelcontextprotocol.io/', true],
      ['📘', 'LangGraph & MCP', 'purple', 'Module 46', '/python/learn/langgraph-and-mcp'],
      ['🗺️', 'Rule', 'amber', 'Remember', 'MCP standardizes tools; you still own security.', 'protocol ≠ safety'],
    ],
  },
  {
    day: 52,
    phase: 'Agentic AI',
    phaseTag: 'Safety',
    icon: '🛡️',
    theme: 'GUARDRAILS & AI SAFETY FOR AGENTS',
    summary:
      'Day 52 keeps agents safe. Add <strong>policy checks</strong>, input/output filters, sandboxing, and escalation paths for risky actions.',
    learnt: [
      ['Threat model', 'prompt injection, data exfil, runaway spend, unsafe tool use'],
      ['Input filters', 'block jailbreaks and obviously malicious instructions'],
      ['Output filters', 'PII redaction, toxicity, secret scanning'],
      ['Tool sandbox', 'least privilege; no raw shell without jail'],
      ['Policy engine', 'allow/deny lists before side effects'],
      ['Escalation', 'route to human when confidence is low or action is irreversible'],
      ['Audit logs', 'who/what/when for every tool call'],
      ['Defense in depth', 'no single filter is enough'],
    ],
    core: [
      ['🚪', 'Policy Gate', 'cyan', 'Before Act', 'Check action type + args against policy; deny by default.', 'deny → allow exceptions'],
      ['🧹', 'I/O Filters', 'purple', 'Sanitize', 'Scan prompts and outputs for secrets and PII.', 'redact · block'],
      ['🙋', 'Human Escalation', 'amber', 'HITL', 'Queue approval for payments, deletes, emails.', 'approve | reject'],
    ],
    practice: [
      ['🧪', 'Injection Test', 'cyan', 'Lab', 'Try prompt-injection against your agent; confirm tool still blocked.', 'attack → blocked'],
      ['📜', 'Audit Trail', 'purple', 'Ops', 'Log tool name, args hash, user, decision.', 'immutable log'],
      ['🔜', 'Next: Prod Pipelines', 'amber', 'Day 53', 'Tomorrow — production agentic pipelines.', null, 53],
    ],
    resources: [
      ['📘', 'Python Track', 'cyan', 'Hub', '/python'],
      ['📖', 'OWASP LLM Top 10', 'purple', 'Security', 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', true],
      ['🗺️', 'Rule', 'amber', 'Remember', 'Least privilege + HITL for irreversible actions.', 'least privilege'],
    ],
  },
  {
    day: 53,
    phase: 'Agentic AI',
    phaseTag: 'Production',
    icon: '🏗️',
    theme: 'PRODUCTION AGENTIC PIPELINES',
    summary:
      'Day 53 runs agents like software. Design <strong>queues</strong>, retries, idempotency, SLOs, and rollout strategies for agentic systems.',
    learnt: [
      ['Async jobs', 'long agent runs belong on a queue, not a single HTTP request'],
      ['Idempotency', 'retries must not double-charge or double-send'],
      ['Backoff', 'retry transient tool/LLM failures with jitter'],
      ['Dead-letter', 'poison messages go to DLQ for humans'],
      ['Feature flags', 'canary new graphs to 5% of traffic'],
      ['SLOs', 'define success rate and latency targets'],
      ['Cost envelopes', 'per-tenant budgets and kill switches'],
      ['Runbooks', 'what on-call does when loop rate spikes'],
    ],
    core: [
      ['📥', 'Queue Pattern', 'cyan', 'Async', 'API enqueues job; worker runs graph; client polls result.', 'enqueue → worker → result'],
      ['🔁', 'Idempotent Tools', 'purple', 'Safe Retry', 'Pass idempotency_key to write tools.', 'key per business action'],
      ['🚦', 'Canary', 'amber', 'Rollout', 'Flag graph_version; compare metrics before 100%.', '5% → 25% → 100%'],
    ],
    practice: [
      ['🧪', 'Job API', 'cyan', 'Lab', 'POST /jobs → {id}; GET /jobs/{id} returns status/result.', 'async agent jobs'],
      ['📕', 'Runbook', 'purple', 'Ops', 'One page: symptoms → checks → rollback steps.', 'on-call ready'],
      ['🔜', 'Next: Capstone', 'amber', 'Day 54', 'Tomorrow — build a full agentic app capstone.', null, 54],
    ],
    resources: [
      ['📘', 'Python Track', 'cyan', 'Hub', '/python'],
      ['📖', '12-Factor', 'purple', 'Apps', 'https://12factor.net/', true],
      ['🗺️', 'Rule', 'amber', 'Remember', 'Agents in prod need queues, budgets, and kill switches.', 'queue · budget · kill'],
    ],
  },
  {
    day: 54,
    phase: 'Agentic AI',
    phaseTag: 'Capstone',
    icon: '🎓',
    theme: 'CAPSTONE: BUILD AN AGENTIC APP',
    summary:
      'Day 54 ships a portfolio piece. Build an end-to-end <strong>agentic app</strong> with tools, memory, eval, and a thin API/UI.',
    learnt: [
      ['Pick a narrow goal', 'support triage, research assistant, or ops bot — not “general AGI”'],
      ['Architecture sketch', 'API + graph + tools + memory + store + UI'],
      ['MVP scope', '2–4 tools, one memory type, one eval set'],
      ['Demo script', 'show success, a tool failure recovery, and a HITL gate'],
      ['Docs', 'README with setup, architecture diagram, and known limits'],
      ['Tests', 'unit-test tools; golden-path eval for the graph'],
      ['Deploy', 'container + env secrets + /health'],
      ['Reflect', 'what you’d add next with more time'],
    ],
    core: [
      ['🗺️', 'Scope Card', 'cyan', 'Plan', 'User → goal → tools → success metric in one paragraph.', 'goal · tools · metric'],
      ['🧩', 'Vertical Slice', 'purple', 'Build', 'One happy path working before polish.', 'API → agent → tool'],
      ['🎬', 'Demo Story', 'amber', 'Show', 'Cold start → agent acts → cites sources → asks approval → done.', 'storyboard 5 beats'],
    ],
    practice: [
      ['🧪', 'Ship MVP', 'cyan', 'Build', 'Complete the vertical slice and record a 2-minute demo.', 'working demo'],
      ['📋', 'Eval Pass', 'purple', 'Quality', '≥70% on your 10-task suite before calling it done.', 'pass rate'],
      ['🔜', 'Next: Milestone', 'amber', 'Day 55', 'Tomorrow — Gen AI & Agentic AI milestone wrap-up.', null, 55],
    ],
    resources: [
      ['📘', 'Python Track', 'cyan', 'Hub', '/python'],
      ['📖', 'LangGraph', 'purple', 'Docs', 'https://langchain-ai.github.io/langgraph/', true],
      ['🗺️', 'Tip', 'amber', 'Remember', 'Narrow goal + reliable tools beats a flashy unstable demo.', 'narrow · reliable'],
    ],
  },
  {
    day: 55,
    phase: 'Agentic AI',
    phaseTag: 'Milestone',
    icon: '🏁',
    theme: 'GEN AI & AGENTIC AI MILESTONE',
    summary:
      'Day 55 closes this stretch. You can explain the stack from <strong>LangChain/RAG</strong> through <strong>Django/FastAPI</strong> to <strong>LangGraph, MCP, and n8n agents</strong> — and ship safely.',
    learnt: [
      ['Arc 31–55', 'LangChain → RAG/FT → LlamaIndex/deploy → Django/DRF → FastAPI → Agentic (LangGraph/MCP/n8n) → prod & capstone'],
      ['RAG first', 'ground answers before chasing fine-tunes'],
      ['APIs matter', 'Django/FastAPI give agents and UIs a stable contract'],
      ['Agents = loops', 'plan → tool → observe with stop rules and budgets'],
      ['MCP & n8n', 'standard tools + visual automation accelerate delivery'],
      ['Eval & safety', 'measure success; least privilege; HITL for irreversible acts'],
      ['Portfolio', 'one agentic capstone with README, eval, and demo beats ten tutorials'],
      ['What’s next', 'deeper MLOps/LLMOps, more multi-agent products, or the next stack in the 1500-day journey'],
    ],
    core: [
      ['✅', 'Checklist', 'cyan', 'Ship It', 'RAG service, authenticated API, agent graph with tools, eval suite, deploy + runbook.', 'RAG · API · agent\neval · deploy'],
      ['🧪', 'Quality Bar', 'purple', 'Prove', 'Offline eval pass rate + online success% without budget blowups.', 'eval · cost · safety'],
      ['🗺️', 'Journey Map', 'amber', '31–55', 'From LangChain building blocks to production agentic systems.', 'build → automate → harden'],
    ],
    practice: [
      ['📦', 'Portfolio Story', 'cyan', 'Demo', 'Walk: data → RAG → agent tools → approval → API → metrics.', '5-minute narrative'],
      ['🔍', 'Health Ritual', 'purple', 'Weekly', 'Re-run eval suite; review traces; check spend; rotate one secret.', 'eval · traces · $'],
      ['🔜', 'What Comes Next', 'amber', 'Continue', 'Keep building — next days can deepen LLMOps or new product agents.', null, null],
    ],
    resources: [
      ['📘', 'Python & Agentic Track', 'cyan', 'Hub', '/python'],
      ['📘', 'GenAI Journal Track', 'purple', 'Hub', '/genai'],
      ['🗺️', 'Mindset', 'amber', 'Remember', 'Ship simple agents, measure hard, add complexity only when metrics demand it.', 'ship · measure · iterate'],
    ],
  },
];

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function learntBlock(learnt) {
  return learnt
    .map(
      ([t, x]) =>
        `  { title: ${JSON.stringify(t)}, text: ${JSON.stringify(x)} },`,
    )
    .join('\n');
}

function card(icon, title, color, subtitle, description, code) {
  const codeLine = code
    ? `\n    code: ${JSON.stringify(code)},`
    : '';
  return `  {
    icon: ${JSON.stringify(icon)}, title: ${JSON.stringify(title)}, titleClass: 'card-title-${color}', subtitle: ${JSON.stringify(subtitle)},
    description:\n      ${JSON.stringify(description)},${codeLine}
  }`;
}

function practiceCards(practice, day) {
  return practice
    .map((p) => {
      const [icon, title, color, subtitle, description, code, nextDay] = p;
      if (nextDay) {
        return `  {
    icon: ${JSON.stringify(icon)}, title: ${JSON.stringify(title)}, titleClass: 'card-title-${color}', subtitle: ${JSON.stringify(subtitle)},
    description: ${JSON.stringify(description)},
    link: { href: '/agentic-day-${nextDay}', label: 'Go to Day ${nextDay} →' },
  }`;
      }
      if (nextDay === null && title.includes('What Comes Next')) {
        return `  {
    icon: ${JSON.stringify(icon)}, title: ${JSON.stringify(title)}, titleClass: 'card-title-${color}', subtitle: ${JSON.stringify(subtitle)},
    description: ${JSON.stringify(description)},
    link: { href: '/', label: 'Back to Home →' },
  }`;
      }
      const codeLine = code ? `\n    code: ${JSON.stringify(code)},` : '';
      return `  {
    icon: ${JSON.stringify(icon)}, title: ${JSON.stringify(title)}, titleClass: 'card-title-${color}', subtitle: ${JSON.stringify(subtitle)},
    description: ${JSON.stringify(description)},${codeLine}
  }`;
    })
    .join(',\n');
}

function resourceCards(resources) {
  return resources
    .map(([icon, title, color, subtitle, href, external]) => {
      if (external) {
        return `  {
    icon: ${JSON.stringify(icon)}, title: ${JSON.stringify(title)}, titleClass: 'card-title-${color}', subtitle: ${JSON.stringify(subtitle)},
    description: ${JSON.stringify(subtitle + ' resource.')},
    link: { href: ${JSON.stringify(href)}, label: 'Open →', external: true },
  }`;
      }
      return `  {
    icon: ${JSON.stringify(icon)}, title: ${JSON.stringify(title)}, titleClass: 'card-title-${color}', subtitle: ${JSON.stringify(subtitle)},
    description: ${JSON.stringify('Full lesson on the site for this module.')},
    link: { href: ${JSON.stringify(href)}, label: 'Open module →' },
  }`;
    })
    .join(',\n');
}

function fileFor(d) {
  const prev = d.day - 1;
  const next = d.day + 1;
  const isLast = d.day === 55;
  const date = `${d.day} Aug 2026`;
  const progress = Math.min(37, Math.round((d.day / 150) * 100));
  const comp = `AgenticDay${String(d.day).padStart(2, '0')}`;
  const role = d.phase.includes('Agentic') || d.phaseTag === 'Milestone'
    ? 'AGENTIC AI · AGENTS'
    : d.phase.includes('Django')
      ? 'AGENTIC AI · DJANGO'
      : d.phase.includes('FastAPI')
        ? 'AGENTIC AI · FASTAPI'
        : d.phase.includes('RAG')
          ? 'AGENTIC AI · RAG'
          : 'AGENTIC AI · LANGCHAIN';

  const core = d.core.map((c) => card(...c)).join(',\n');
  const practice = practiceCards(d.practice, d.day);
  const resources = resourceCards(d.resources);

  const nextNav = isLast
    ? `<Link to="/" className="day001-nav-btn day001-nav-next">Home →</Link>`
    : `<Link to="/agentic-day-${next}" className="day001-nav-btn day001-nav-next">Day ${next} →</Link>`;

  return `import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
${learntBlock(d.learnt)}
];

const CORE = [
${core},
];

const PRACTICE = [
${practice},
];

const RESOURCES = [
${resources},
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={\`day001-card-title \${card.titleClass}\`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={\`day001-card-row day001-card-row--\${columns}\`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function ${comp}() {
  const scaleRef = useRef(null);

  useEffect(() => {
    const wrap = scaleRef.current;
    if (!wrap) return;
    const page = wrap.parentElement;
    const fitToScreen = () => {
      wrap.style.transform = 'none';
      wrap.style.width = '100%';
      if (page) page.style.height = '';
      const pad = 12;
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = \`scale(\${scale})\`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = \`\${wrap.scrollHeight * scale + pad}px\`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/agentic-day-${prev}" className="day001-nav-btn day001-nav-prev">← Day ${prev}</Link>
          <p className="day001-datetime">Agentic AI Day ${d.day} · ${date}</p>
          ${nextNav}
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>${esc(d.phaseTag)}</span><span>Day ${d.day}</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY ${d.day} <span aria-hidden="true">${d.icon}</span></h1>
              <p className="day001-day-theme">${d.theme}</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">${role}</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '${progress}%' }} /></div>

        <p className="day001-summary">
          ${d.summary}
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="${d.icon}" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day${d.day}</span><span>#${esc(d.phaseTag).replace(/\s+/g, '')}</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
`;
}

for (const d of DAYS) {
  const name = `AgenticDay${String(d.day).padStart(2, '0')}.jsx`;
  const out = path.join(OUT, name);
  fs.writeFileSync(out, fileFor(d));
  console.log('wrote', name);
}

console.log('Done:', DAYS.length, 'files');
