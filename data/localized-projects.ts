import { projects, type Project } from "./projects";
import type { Locale } from "@/lib/i18n";

const germanProjects: Project[] = [
  {
    ...projects[0],
    type: "Evidenzbasierte KI · Full-Stack-Anwendung",
    shortDescription: "Ein lokaler CV-Stellen-Matcher mit transparentem Scoring, Evidenzstatus und abgesicherter KI-Textgenerierung.",
    description: "Eine Full-Stack-KI-Anwendung, die einen PDF-Lebenslauf mit einer Stellenbeschreibung vergleicht, Anforderungen extrahiert, Nachweise im CV prüft, einen deterministischen Match-Score berechnet und mit einem lokalen Sprachmodell abgesicherte Bewerbungsunterlagen erzeugt.",
    problem: "Reine LLM-basierte CV-Matcher können schwankende Scores und unbelegte Aussagen erzeugen. Ziel war deshalb ein Bewerbungsassistent, dessen Bewertung nachvollziehbar ist und dessen Textgenerierung Berufserfahrung nicht stillschweigend erfindet.",
    solution: "Analyse und Sprachgenerierung wurden getrennt. Das Backend klassifiziert Anforderungen als MATCHED, PARTIAL oder MISSING und berechnet den Score aus diesen kanonischen Zuständen. Ollama wird nur für die natürliche Textgenerierung eingesetzt und erhält evidenzbasierte Leitplanken.",
    outcome: "Version 1.6.1 bietet eine transparente 100-Punkte-Bewertung, Nachweise auf Anforderungsebene, ATS-Schlüsselwörter, Deutsch-/Englisch-Unterstützung und lokal generierte Anschreiben mit Guardrails. Im getesteten SVO-Beispiel lief die deterministische Analyse in weniger als einer Sekunde; die lokale Generierungszeit hängt von Hardware und Modell ab.",
    overview: ["PDF-Lebenslauf und vollständige Stellenbeschreibung werden in eine strukturierte Anforderungs-Evidenz-Tabelle überführt.","Anforderungen erhalten vor der Bewertung einen kanonischen Status: MATCHED, PARTIAL oder MISSING. Dadurch bleiben angezeigte Evidenz und Score konsistent.","Eine deterministische Python-Schicht berechnet 100 Punkte in den Bereichen technische Fähigkeiten, Erfahrung/Projekte, Ausbildung/Domäne und weitere Anforderungen.","Das lokale LLM ist nicht Teil der Score-Berechnung und erstellt das Anschreiben erst auf Basis der bereits strukturierten Evidenz."],
    highlights: ["Deterministisches, erklärbares 100-Punkte-Scoring","MATCHED / PARTIAL / MISSING als Evidenzmodell","Guardrails gegen unbelegte Erfahrungsbehauptungen","Lokale Ollama-Inferenz ohne kostenpflichtige KI-API","Deutsch und Englisch","Responsives Analyse-Dashboard"],
    pipeline: [{name:"Extrahieren",description:"PDF-Lebenslauf + Stellenbeschreibung → normalisierte Kandidaten- und Rollentexte"},{name:"Prüfen",description:"Anforderungen → MATCHED / PARTIAL / MISSING"},{name:"Bewerten",description:"Deterministische Python-Gewichtung → erklärbarer 100-Punkte-Score"},{name:"Generieren",description:"Strukturierte Evidenz → abgesichertes lokales Anschreiben und Bewerbungsvorbereitung"}],
    algorithms: [{name:"Deterministisches Scoring",description:"Das LLM bestimmt den Match-Score nicht. Gewichtete Logik verarbeitet die kanonischen Evidenzstatus und macht die Bewertung reproduzierbar."},{name:"Evidenzbasierte Generierung",description:"Fehlende Anforderungen bleiben Lücken und werden nicht zu angeblicher Erfahrung. Die Ausgabe wird auf unbelegte Behauptungen und Wiederholungen geprüft."},{name:"Hybride KI-Architektur",description:"Schnelle deterministische Logik übernimmt Aufgaben, die Konsistenz benötigen; das lokale LLM wird gezielt für natürliche Sprache eingesetzt."}],
    challenges: [{name:"Erfundene Erfahrung",description:"Scoring und Generierung wurden getrennt und durch evidenzbasierte Prompts sowie Validierung ergänzt."},{name:"Latenz lokaler Modelle",description:"CV-Vorschläge und Interviewfragen wurden aus dem LLM-Pfad entfernt. In Entwicklungstests sank die Generierung von etwa 101 auf etwa 49 Sekunden; ein späterer Lauf lag bei rund 26 Sekunden."},{name:"Inkonsistente Anforderungen",description:"Score, bestätigte Treffer und fehlende Anforderungen werden aus derselben kanonischen Evidenzdarstellung abgeleitet."}],
    limitations: ["Anforderungsextraktion verwendet derzeit kuratierte Matching-Logik statt semantischer Embeddings.","Qualität und Geschwindigkeit der Textgenerierung hängen vom lokalen Ollama-Modell und der Hardware ab.","Keine OCR für rein gescannte PDFs.","Aktueller Sprachfokus: Deutsch und Englisch."],
    documentation: projects[0].documentation,
  },
  {
    ...projects[1],
    type: "Lokales RAG · Full-Stack-KI-Anwendung",
    shortDescription: "Ein datenschutzorientierter Dokumentenassistent mit lokaler KI, gestreamten Antworten und nachvollziehbaren Quellen.",
    description: "Eine Full-Stack-Anwendung mit Retrieval-Augmented Generation, die PDF-, TXT- und Markdown-Dokumente in eine dauerhaft gespeicherte, durchsuchbare Wissensbasis verwandelt.",
    problem: "Sprachmodelle kennen private oder neu hochgeladene Dokumente nicht automatisch. Ziel war ein Assistent, der relevanten Kontext findet, Quellen zeigt und ohne kostenpflichtige KI-API arbeitet.",
    solution: "Die RAG-Pipeline wurde direkt implementiert: Dokumente einlesen, überlappende Abschnitte erstellen, lokale Embeddings erzeugen, Kontext mit FAISS finden und Antworten über Ollama streamen.",
    outcome: "Version 1.0 unterstützt Dokumentenverarbeitung, persistente semantische Suche, gestreamte Antworten, Quellenangaben und Dokumentenverwaltung.",
    overview: ["TypeScript-Frontend und Python-Backend bilden getrennte Anwendungsschichten.","PDFs werden seitenbezogen extrahiert und mit einem eigenen Chunker verarbeitet; Embeddings werden normalisiert und in FAISS indexiert.","Gefundene Abschnitte dienen llama3.2 als Kontext; Quellenmetadaten werden zusammen mit der Antwort sichtbar gemacht.","Index und Metadaten bleiben nach Backend-Neustarts erhalten."],
    highlights: ["RAG-Pipeline ohne LangChain","Lokale Embeddings und Generierung mit Ollama","Persistenter FAISS-Index","SSE-Streaming mit Quellen","Dokumentenverwaltung","GitHub Actions CI"],
    documentation: projects[1].documentation,
  },
  {
    ...projects[2],
    type: "Universitätsprojekt",
    shortDescription: "Ein akademischer Sokoban-Solver auf Basis von Suchalgorithmen, entwickelt mit Python und PDDL.",
    description: "Ein Universitätsprojekt zur Lösung von Sokoban-Leveln mit klassischen Suchalgorithmen, PDDL und Sackgassenerkennung.",
    overview: ["Entwickelt im Kurs Algorithms in Game Environments an der Universität Rostock.","Automatische Lösung von Sokoban-Leveln mit klassischen Suchverfahren.","PDDL-basierte Problembeschreibung und Python-Workflow.","Untersuchung verschiedener Suchstrategien und Sackgassen."],
    highlights: ["Breitensuche (BFS)","Tiefensuche (DFS)","PDDL","Sackgassenerkennung","Zustandsraumsuche","Python"],
  },
];

export function getProjects(locale: Locale): Project[] { return locale === "de" ? germanProjects : projects; }
