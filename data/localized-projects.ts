import { projects, type Project } from "./projects";
import type { Locale } from "@/lib/i18n";

const germanProjects: Project[] = [
  {
    ...projects[0],
    type: "Lokales RAG · Full-Stack-KI-Anwendung",
    shortDescription:
      "Ein datenschutzorientierter Dokumentenassistent mit lokaler KI, gestreamten Antworten und nachvollziehbaren Quellen.",
    description:
      "Eine Full-Stack-Anwendung mit Retrieval-Augmented Generation, die PDF-, TXT- und Markdown-Dokumente in eine dauerhaft gespeicherte, durchsuchbare Wissensbasis verwandelt. Entwickelt mit Next.js, FastAPI, Ollama und FAISS.",
    problem:
      "Sprachmodelle kennen private oder neu hochgeladene Dokumente nicht automatisch. Ich wollte einen Dokumentenassistenten entwickeln, der relevanten Kontext findet, seine Quellen zeigt und indexiertes Wissen ohne kostenpflichtige KI-API dauerhaft speichert.",
    solution:
      "Ich habe die RAG-Pipeline direkt implementiert: Dokumente einlesen, überlappende Textabschnitte erstellen, lokale Embeddings erzeugen, relevanten Kontext mit FAISS finden und Antworten eines lokalen Ollama-Modells mit Quellenmetadaten streamen.",
    outcome:
      "Version 1.0 unterstützt die Dokumentenverarbeitung, persistente semantische Suche, gestreamte Antworten, Quellenangaben und Dokumentenverwaltung. Backend-Unit-Tests sowie Lint- und Build-Prüfungen für das Frontend laufen in GitHub Actions. Es handelt sich um eine lokale Portfolio-Anwendung; Suchgenauigkeit und Latenz wurden hier nicht durch Benchmarks bewertet.",
    overview: [
      "Das Projekt entstand, um RAG über die Abstraktionen eines Frameworks hinaus zu verstehen. TypeScript-Frontend und Python-Backend bilden getrennte Anwendungsschichten.",
      "Die Dokumentenverarbeitung erhält bei PDFs die Seiteninformationen und zerlegt Texte mit einem eigenen Chunker in überlappende Abschnitte. Lokale Embeddings von nomic-embed-text werden normalisiert und in FAISS indexiert.",
      "Gefundene Textabschnitte dienen llama3.2 als Kontext. Der SSE-Endpunkt sendet Quellenmetadaten vor den Antwort-Tokens. Dadurch sind Dateinamen, Seiten und Relevanzwerte während der Antwort sichtbar.",
      "Index und Metadaten bleiben nach einem Backend-Neustart erhalten. Über die Oberfläche lassen sich Dokumente der Wissensbasis auflisten und löschen.",
    ],
    highlights: [
      "Direkt implementierte RAG-Pipeline ohne LangChain",
      "Lokale Embeddings und Antwortgenerierung mit Ollama",
      "Persistenter FAISS-Index mit Metadaten",
      "SSE-Streaming mit sichtbaren Quellen",
      "Dokumente auflisten und löschen",
      "Backend-Unit-Tests und CI mit GitHub Actions",
    ],
    pipeline: [
      {
        name: "Einlesen",
        description:
          "PDF / TXT / Markdown → Textextraktion und überlappende Abschnitte",
      },
      {
        name: "Indexieren",
        description:
          "nomic-embed-text → normalisierte Vektoren → persistenter FAISS-Index",
      },
      {
        name: "Suchen",
        description:
          "Frage als Embedding → Kosinusähnlichkeit → relevanter Kontext",
      },
      {
        name: "Antworten",
        description: "llama3.2 → SSE-Tokens + Dateinamen, Seiten und Relevanz",
      },
    ],
    algorithms: [
      {
        name: "Direkte SDKs, transparente RAG-Pipeline",
        description:
          "Chunking, Suche, Kontextaufbau, Persistenz und Streaming sind direkt statt mit LangChain implementiert. Dadurch lassen sich die einzelnen Schritte besser verstehen und Fehler gezielter untersuchen.",
      },
      {
        name: "Ollama für lokale KI",
        description:
          "nomic-embed-text erzeugt Embeddings mit 768 Dimensionen; llama3.2 generiert Antworten. Ollama kommt ohne kostenpflichtige API aus und löste die während der Entwicklung aufgetretenen Windows-/PyTorch-Kompatibilitätsprobleme.",
      },
      {
        name: "Normalisierte Suche mit FAISS",
        description:
          "Durch normalisierte Vektoren entspricht die Suche mit IndexFlatIP der Kosinusähnlichkeit. Damit bleibt die lokale Wissensbasis ohne externe Vektordatenbank überschaubar.",
      },
      {
        name: "Persistenz im Dateisystem",
        description:
          "index.faiss speichert Vektoren, chunks.json die Metadaten. Beide Dateien werden beim Start validiert. Beim Löschen eines Dokuments wird der flache Index aus den verbleibenden Vektoren neu aufgebaut.",
      },
    ],
    challenges: [
      {
        name: "Dateisperren unter Windows",
        description:
          "Benannte temporäre Dateien werden geschlossen, bevor PyPDF sie erneut öffnet, und nach der Verarbeitung explizit entfernt.",
      },
      {
        name: "Wissensverlust nach einem Neustart",
        description:
          "Der anfangs nur im Arbeitsspeicher gehaltene Index wurde durch persistente Vektoren und Metadaten ersetzt, die beim Start wiederhergestellt werden.",
      },
      {
        name: "Verständliche Quelldateinamen",
        description:
          "Die ursprünglichen Dateinamen bleiben während der Verarbeitung über temporäre Dateien erhalten, damit Quellenangaben nachvollziehbar sind.",
      },
      {
        name: "CI ohne laufendes Sprachmodell",
        description:
          "Deterministische Backend-Logik wird ohne Ollama in GitHub Actions getestet. Ergänzend laufen Lint- und Build-Prüfungen für das Frontend.",
      },
    ],
    limitations: [
      "Lokales Ollama für Embeddings und Antwortgenerierung erforderlich; keine gehostete Live-Demo.",
      "Keine OCR für gescannte oder rein bildbasierte PDFs.",
      "Keine Authentifizierung, Benutzerkonten oder Mandantentrennung.",
      "Lokales Dateisystem und flacher FAISS-Index eignen sich für kleine lokale Dokumentensammlungen. Beim Löschen wird der verbleibende Index neu aufgebaut.",
    ],
    documentation: projects[0].documentation?.map((item, index) => ({
      ...item,
      label: [
        "README & Einrichtung (EN)",
        "Portfolio-Text (EN)",
        "Ausführlicher Projektbericht (EN)",
        "Architektur (EN)",
        "Roadmap (EN)",
      ][index],
    })),
  },
  {
    ...projects[1],
    type: "Universitätsprojekt",
    shortDescription:
      "Ein akademischer Sokoban-Solver auf Basis von Suchalgorithmen, entwickelt mit Python und PDDL.",
    description:
      "Ein Universitätsprojekt zur Lösung von Sokoban-Leveln mit klassischen Suchalgorithmen, einer PDDL-basierten Problembeschreibung und der Erkennung von Sackgassen.",
    overview: [
      "Entwickelt im Rahmen des Kurses Algorithms in Game Environments an der Universität Rostock.",
      "Das Projekt untersucht die automatische Lösung von Sokoban-Leveln mit klassischen Suchverfahren.",
      "Die Aufgaben wurden in PDDL beschrieben und mit einem Python-basierten Lösungsablauf verarbeitet.",
      "Verschiedene Suchstrategien wurden unter Berücksichtigung von Sokoban-Zuständen und Sackgassen untersucht.",
    ],
    highlights: [
      "Breitensuche (BFS)",
      "Tiefensuche (DFS)",
      "Problembeschreibung mit PDDL",
      "Erkennung von Sackgassen",
      "Zustandsraumsuche",
      "Implementierung in Python",
    ],
    algorithms: [
      {
        name: "Breitensuche",
        description:
          "Durchsucht den Zustandsraum Ebene für Ebene und kann bei gleichen Schrittkosten eine kürzeste Lösung finden.",
      },
      {
        name: "Tiefensuche",
        description:
          "Verfolgt Lösungspfade in die Tiefe und begrenzt dabei die Suchtiefe.",
      },
      {
        name: "Erkennung von Sackgassen",
        description:
          "Erkennt problematische Zustände wie Sackgassen an Ecken und Wänden, um aussichtslose Suchpfade zu vermeiden.",
      },
    ],
    limitations: [
      "Akademischer Prototyp, kein produktionsreifer Spielsolver.",
      "Die Suchleistung hängt stark von Größe und Komplexität des jeweiligen Sokoban-Levels ab.",
      "Die begrenzte Suchtiefe setzt der Bearbeitung größerer Zustandsräume praktische Grenzen.",
    ],
  },
];

export function getProjects(locale: Locale): Project[] {
  return locale === "de" ? germanProjects : projects;
}
