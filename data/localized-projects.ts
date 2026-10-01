import { projects, type Project } from "./projects";
import type { Locale } from "@/lib/i18n";

const projectById = (id: string): Project => {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error(`Project not found: ${id}`);
  return project;
};

const operationsAgent = projectById("ai-operations-agent");
const meeting = projectById("ai-meeting-assistant");
const jobAssistant = projectById("ai-job-application-assistant");
const knowledgeAssistant = projectById("ai-knowledge-assistant");
const sokoban = projectById("sokoban-solver");

const germanProjects: Project[] = [
  {
    ...operationsAgent,
    type: "Agentische KI · Production Engineering",
    shortDescription: "Eine produktionsorientierte agentische Workflow-Plattform mit strukturierten Entscheidungen, Tool Calling, menschlicher Freigabe, asynchroner Verarbeitung und AWS Infrastructure as Code.",
    description: "Eine Plattform zur agentischen Automatisierung von Geschäftsprozessen mit den technischen Kontrollmechanismen, die nötig werden, wenn KI operative Aktionen vorschlagen und ausführen kann: Schema-Validierung, deterministische Richtlinien, Human-in-the-Loop-Freigaben, erlaubte Tools, Audit-Ereignisse, Hintergrundverarbeitung, Zuverlässigkeit, Observability, Security Gates und cloudfähige Infrastruktur.",
    problem: "Sobald ein KI-Assistent nicht nur Text erzeugt, sondern reale Geschäftsaktionen vorschlägt, steigen die Risiken deutlich. Ein produktionsorientierter Workflow braucht klare Autorisierungsgrenzen, deterministische Kontrollen, menschliche Prüfung für sensible Aktionen, zuverlässige asynchrone Verarbeitung, Nachvollziehbarkeit, Security-Prüfungen und eine Infrastruktur, in der das LLM nicht als Autorisierungsinstanz dient.",
    solution: "Ich habe einen FastAPI- und LangGraph-Workflow entwickelt, in dem Modellausgaben per Schema validiert und durch deterministische Anwendungsregeln geprüft werden, bevor eine Aktion ausgeführt werden darf. Sensible Anfragen gehen in einen persistenten Freigabeprozess, genehmigte Aktionen laufen ausschließlich über eine explizite Tool-Registry, PostgreSQL speichert Workflow- und Audit-Zustände und Celery/Redis übernimmt die asynchrone Verarbeitung mit Idempotenz und begrenzten Retries. Docker, GitHub Actions, strukturierte Logs, Correlation IDs, Security Scanning und validiertes Terraform erweitern das Projekt um produktionsorientiertes Software Engineering.",
    outcome: "Das Projekt zeigt eine End-to-End-Architektur für agentische Operations-Automatisierung statt eines weiteren Chat-Demos: auditierbare Request-Zustände, strukturierte KI-Vorschläge, policy-gesteuerte Tool-Ausführung, Freigabe-/Ablehnungsprozesse, asynchrone Worker, Reliability-Kontrollen, Security Quality Gates und validierte AWS Infrastructure as Code für ECS/Fargate, RDS, ElastiCache, ECR, Secrets Manager, ALB und CloudWatch. Die AWS-Architektur wird bewusst als produktionsorientierte IaC und nicht als bereits live betriebene Produktionsumgebung beschrieben.",
    overview: ["FastAPI nimmt interne Operations-Anfragen entgegen und speichert Zustand und Audit-Trail in PostgreSQL.","Celery und Redis verarbeiten Agent-Aufgaben asynchron und trennen längere Workflows vom API-Request.","LangGraph erzeugt einen schema-validierten Vorschlag; deterministische Anwendungsregeln entscheiden über automatische Ausführung oder menschliche Freigabe.","Genehmigte Aktionen laufen ausschließlich über eine Allow-List-Tool-Registry; Freigaben und Zustandswechsel bleiben auditierbar.","Idempotenz, begrenzte Retries, strukturierte JSON-Logs, Correlation IDs, Health/Readiness, Docker, Security Scanning und Terraform ergänzen die produktionsorientierte Betriebsschicht."],
    highlights: ["Agentische Workflow-Orchestrierung mit LangGraph","Strukturierte Pydantic-Ausgaben und deterministische Policy-Prüfung","Allow-List Tool Calling mit Human-in-the-Loop-Freigabe","PostgreSQL-Persistenz und Alembic-Migrationen","Asynchrone Verarbeitung mit Celery + Redis","Idempotenz und begrenztes exponentielles Retry/Backoff","Strukturierte JSON-Logs und X-Correlation-ID","Docker/Compose und Container-Builds in CI","Blockierende pip-audit- und Bandit-Security-Gates","Terraform-validierte AWS-ECS/Fargate-Architektur"],
    pipeline: [{name:"Anfrage",description:"FastAPI → persistente Operations-Anfrage + Audit-Ereignis"},{name:"Planen",description:"LangGraph → schema-validierter strukturierter Vorschlag"},{name:"Autorisieren",description:"Deterministische Policy → automatische Route oder Human-Approval-Gate"},{name:"Ausführen",description:"Genehmigter Vorschlag → explizite Allow-List-Tool-Registry"},{name:"Betreiben",description:"Celery/Redis + Idempotenz + Retries + strukturierte Observability"}],
    challenges: [{name:"Autorisierung außerhalb des LLM",description:"Modellausgaben gelten als nicht vertrauenswürdig. Pydantic-Schemas und deterministische Anwendungsregeln entscheiden, was ausgeführt werden darf; ausführbare Fähigkeiten sind auf eine explizite Tool-Registry begrenzt."},{name:"Zuverlässige Hintergrundverarbeitung",description:"Celery arbeitet mit At-least-once-Zustellung. Deshalb schützen Idempotenzregeln abgeschlossene und auf Freigabe wartende Requests vor doppelter Verarbeitung; temporäre Fehler nutzen begrenztes exponentielles Backoff."},{name:"Produktionsreife ohne Übertreibung",description:"Das Repository validiert AWS Infrastructure as Code und dokumentiert Deployment und Rollback, unterscheidet diese Nachweise aber ausdrücklich von einer tatsächlich provisionierten Produktionsumgebung."}],
    limitations: ["Die Terraform-AWS-Architektur wird in CI validiert, ist aber noch nicht als dauerhaft laufende Produktionsumgebung provisioniert.","TLS/Domain-Konfiguration, Live-Cloud-Monitoring, Backup-Restore-Tests und Production-Smoke-Tests benötigen eine provisionierte AWS-Umgebung.","Das Projekt ist ein Portfolio-Engineering-System und wurde keinem externen Security- oder Compliance-Audit unterzogen."],
    documentation: operationsAgent.documentation,
  },
  {
    ...meeting,
    type: "Lokale Sprach-KI · Full-Stack-Anwendung",
    shortDescription: "Ein datenschutzorientierter Meeting-Assistent, der Aufnahmen lokal transkribiert, strukturierte Notizen erstellt und belegte Fragen beantwortet.",
    description: "Eine Local-First-Full-Stack-KI-Anwendung, die Meeting- und Vorlesungsaufnahmen in Transkripte, Zusammenfassungen, Kernpunkte, Aufgaben und durchsuchbares Wissen umwandelt, ohne Meeting-Inhalte an einen Cloud-KI-Dienst zu senden.",
    problem: "Meeting-Aufnahmen können sensible Informationen enthalten, während Cloud-Transkription und externe KI-Dienste Datenschutz- und Abhängigkeitsfragen mit sich bringen. Ziel war ein End-to-End-Workflow, bei dem Spracherkennung, Sprachmodell-Verarbeitung und Meeting-Verlauf auf dem Rechner mit dem Backend bleiben.",
    solution: "faster-whisper übernimmt die mehrsprachige lokale Spracherkennung, FastAPI orchestriert die Verarbeitung, Ollama erstellt strukturierte Analysen und transcriptbasierte Antworten, SQLite speichert die Meetings und Next.js stellt die Oberfläche bereit. Das Whisper-Modell wird pro Backend-Prozess wiederverwendet und Verarbeitungszeiten werden in der UI sichtbar gemacht.",
    outcome: "Version 0.5.0 implementiert den vollständigen Workflow von der Aufnahme bis zum nutzbaren Meeting-Wissen: lokale Transkription, strukturierte KI-Analyse, persistenter Meeting-Verlauf, transcriptbasierte Fragen und Antworten, Löschfunktionen, Exporte sowie sichtbare Whisper- und KI-Laufzeiten. GitHub Actions prüft Backend und produktiven Next.js-Build.",
    overview: ["Audio- oder Videoaufnahmen werden an das FastAPI-Backend übertragen und lokal unter einer generierten Meeting-ID gespeichert.","faster-whisper erstellt lokal mehrsprachige Transkripte; das Modell wird innerhalb des Backend-Prozesses wiederverwendet.","Ollama analysiert das Transkript zu Titel, Zusammenfassung, Kernpunkten und Aufgaben; die Ergebnisse werden in SQLite gespeichert.","Nutzer können transcriptbasierte Fragen stellen, frühere Meetings öffnen, Notizen oder Transkripte exportieren und lokale Meeting-Daten löschen."],
    highlights: ["Lokale mehrsprachige Transkription mit faster-whisper","Strukturierte Zusammenfassungen, Kernpunkte und Aufgaben","Transcriptbasierte lokale Fragen und Antworten","Persistenter Meeting-Verlauf mit SQLite","Transkript- und Markdown-Export","Sichtbare Whisper- und KI-Verarbeitungszeiten","GitHub Actions CI"],
    pipeline: [{name:"Hochladen",description:"Meeting- oder Vorlesungsaufnahme → lokale Mediendatei + Meeting-ID"},{name:"Transkribieren",description:"faster-whisper → mehrsprachiges lokales Transkript"},{name:"Analysieren",description:"Transkript → Ollama → Zusammenfassung, Kernpunkte und Aufgaben"},{name:"Fragen",description:"Gespeichertes Transkript + Frage → belegte lokale Antwort"}],
    algorithms: [{name:"Lokale Spracherkennung",description:"Das mehrsprachige faster-whisper-small-Modell läuft lokal mit CPU/int8, VAD und Modell-Wiederverwendung."},{name:"Strukturierte lokale Analyse",description:"Ollama überführt Transkriptinhalte in validierte Meeting-Felder; das Backend normalisiert die Modellausgabe vor der Speicherung."},{name:"Transcriptbasiertes Q&A",description:"Antworten werden auf das ausgewählte Meeting-Transkript gestützt; fehlt eine Information, soll sie nicht erfunden werden."}],
    challenges: [{name:"Lokale Inferenzlatenz",description:"Transkriptions- und Analysezeit werden getrennt gemessen; das Whisper-Modell wird wiederverwendet, sodass Engpässe sichtbar und unabhängig optimierbar sind."},{name:"Unzuverlässige strukturierte LLM-Ausgabe",description:"Parsing und Normalisierung wurden nach fehlerhaften JSON-Ausgaben verbessert, damit Analysefehler Meeting-Daten nicht unbemerkt beschädigen."},{name:"Datenschutzgrenze",description:"Die Anwendung setzt bewusst auf lokale Spracherkennung, lokale LLM-Inferenz, SQLite und lokale Medien-/Transkriptspeicherung statt einer gehosteten KI-API."}],
    limitations: ["Die lokale Inferenzgeschwindigkeit hängt von CPU und gewähltem Ollama-Modell ab.","Speaker-Diarization und Sprecherzuordnung sind noch nicht implementiert.","Semantische Suche für sehr lange Meetings und zeitstempelbasiertes Q&A sind zukünftige Erweiterungen.","Das Projekt ist ein Portfolio-/Lernprojekt und wurde keinem formalen Security- oder Compliance-Audit unterzogen."],
    documentation: meeting.documentation,
  },
  {
    ...jobAssistant,
    type: "Evidenzbasierte KI · Full-Stack-Anwendung",
    shortDescription: "Ein lokaler CV-Stellen-Matcher mit transparentem Scoring, Evidenzstatus und abgesicherter KI-Textgenerierung.",
    description: "Eine Full-Stack-KI-Anwendung, die einen PDF-Lebenslauf mit einer Stellenbeschreibung vergleicht, Anforderungen extrahiert, Nachweise im CV prüft, einen deterministischen Match-Score berechnet und mit einem lokalen Sprachmodell abgesicherte Bewerbungsunterlagen erzeugt.",
    overview: ["PDF-Lebenslauf und Stellenbeschreibung werden in eine strukturierte Anforderungs-Evidenz-Tabelle überführt.","Anforderungen erhalten MATCHED-, PARTIAL- oder MISSING-Status vor der Bewertung.","Eine deterministische Python-Schicht berechnet eine transparente 100-Punkte-Bewertung.","Das lokale LLM bleibt außerhalb der Score-Berechnung und wird für abgesicherte Textgenerierung eingesetzt."],
    highlights: ["Deterministisches, erklärbares 100-Punkte-Scoring","MATCHED / PARTIAL / MISSING als Evidenzmodell","Guardrails gegen unbelegte Erfahrungsbehauptungen","Lokale Ollama-Inferenz","Deutsch und Englisch","Responsives Analyse-Dashboard"],
    pipeline: [{name:"Extrahieren",description:"PDF-Lebenslauf + Stellenbeschreibung → normalisierte Texte"},{name:"Prüfen",description:"Anforderungen → kanonische Evidenzstatus"},{name:"Bewerten",description:"Deterministische Python-Gewichtung → erklärbarer Score"},{name:"Generieren",description:"Strukturierte Evidenz → abgesicherte lokale Bewerbungsunterlagen"}],
    documentation: jobAssistant.documentation,
  },
  {
    ...knowledgeAssistant,
    type: "Lokales RAG · Full-Stack-KI-Anwendung",
    shortDescription: "Ein datenschutzorientierter Dokumentenassistent mit lokaler KI, gestreamten Antworten und nachvollziehbaren Quellen.",
    description: "Eine Full-Stack-Anwendung mit Retrieval-Augmented Generation, die PDF-, TXT- und Markdown-Dokumente in eine dauerhaft gespeicherte, durchsuchbare Wissensbasis verwandelt.",
    overview: ["TypeScript-Frontend und Python-Backend bilden getrennte Anwendungsschichten.","Dokumente werden seitenbezogen extrahiert und in überlappende Abschnitte zerlegt.","Gefundene Abschnitte dienen llama3.2 als Kontext und Quellenmetadaten werden sichtbar gemacht.","Index und Metadaten bleiben nach Backend-Neustarts erhalten."],
    highlights: ["RAG-Pipeline ohne LangChain","Lokale Embeddings und Generierung mit Ollama","Persistenter FAISS-Index","SSE-Streaming mit Quellen","Dokumentenverwaltung","GitHub Actions CI"],
    pipeline: [{name:"Einlesen",description:"PDF / TXT / Markdown → Extraktion und Chunks"},{name:"Indexieren",description:"Lokale Embeddings → persistenter FAISS-Index"},{name:"Abrufen",description:"Frage-Embedding → relevanter Kontext"},{name:"Antworten",description:"llama3.2 → gestreamte Antwort + Quellen"}],
    documentation: knowledgeAssistant.documentation,
  },
  {
    ...sokoban,
    type: "Universitätsprojekt",
    shortDescription: "Ein akademischer Sokoban-Solver auf Basis von Suchalgorithmen, entwickelt mit Python und PDDL.",
    description: "Ein Universitätsprojekt zur Lösung von Sokoban-Leveln mit klassischen Suchalgorithmen, PDDL und Sackgassenerkennung.",
    overview: ["Entwickelt im Kurs Algorithms in Game Environments an der Universität Rostock.","Automatische Lösung von Sokoban-Leveln mit klassischen Suchverfahren.","PDDL-basierte Problembeschreibung und Python-Workflow.","Untersuchung verschiedener Suchstrategien und Sackgassen."],
    highlights: ["Breitensuche (BFS)","Tiefensuche (DFS)","PDDL","Sackgassenerkennung","Zustandsraumsuche","Python"],
  },
];

export function getProjects(locale: Locale): Project[] { return locale === "de" ? germanProjects : projects; }
