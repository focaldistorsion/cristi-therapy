/**
 * HARRA Organic - Glosar Somatic & Medical Popover Engine
 * Cristian Angel Oglan © 2026
 */

const HARRA_GLOSAR_DATA = {
  "homeostazie": {
    id: "homeostazie",
    term: "Homeostazie Somatică",
    category: "Neuro-Fiziologie & Reset",
    categoryBadge: "RESET VEGETATIV",
    simpleDef: "Starea naturală de echilibru dinamic al corpului în care toate sistemele (circulație, respirație, tensiune musculară) funcționează fără stres sau efort.",
    clinicalDef: "Capacitatea autoreglatorie a organismului de a menține constante constantele biochimice și fiziologice (pH, perfuzie tisulară, tonus simpatic/parasimpatic) în pofida factorilor perturbatori externi.",
    therapies: ["Masaj Terapeutic", "Terapie Bowen", "Osteopatie Viscerală"]
  },
  "fascia": {
    id: "fascia",
    term: "Fasciă (Țesut Conjunctiv)",
    category: "Biomateriale & Fasciă",
    categoryBadge: "STRUCTURĂ FASCIALĂ",
    simpleDef: "O rețea tridimensională continuă ca o pânză fină de păianjen care îmbracă și leagă fiecare mușchi, organ și os din corp, permițând mișcarea liberă.",
    clinicalDef: "Matrice extracelulară continuă alcătuită din fibre de colagen, elastină și substanță fundamentală bogată în hialuronan, responsabilă de transmiterea forțelor biomecanice și propriocepție.",
    therapies: ["Manipulare Miofascială", "Osteopatie Structurală", "Masaj Terapeutic"]
  },
  "tixotropie": {
    id: "tixotropie",
    term: "Tixotropie Fascială",
    category: "Biomateriale & Fasciă",
    categoryBadge: "FLUIDIZARE TISULARĂ",
    simpleDef: "Proprietatea fasției de a se transforma dintr-o stare rigidă/gelatinoasă într-o stare fluidă și hidratată atunci când i se aplică presiune și căldură blândă.",
    clinicalDef: "Fenomenul fizico-chimic reversibil prin care substanța fundamentală din fasciă își reduce vâscozitatea sub acțiunea forțelor de forfecare și a energiei termice endogene (Stecco et al. 2011).",
    therapies: ["Manipulare Miofascială", "Masaj Terapeutic", "Tok Sen"]
  },
  "mecanotransductie": {
    id: "mecanotransductie",
    term: "Mecanotransducție Acustică",
    category: "Biomateriale & Fasciă",
    categoryBadge: "VIBRAȚIE PERIOSTALĂ",
    simpleDef: "Procesul prin care o vibrație mecanică (cum este bătaia blândă de Tok Sen) este transformată de celule în semnale de vindecare și relaxare profundă.",
    clinicalDef: "Conversia stimulilor mecanici de presiune sau undă acustică în semnale chimice intracelulare de către integrinele din membranele celulare, stimulând sinteza de matrice fascială (Ingber 2006).",
    therapies: ["Tok Sen", "Osteopatie Structurală"]
  },
  "ischemie": {
    id: "ischemie",
    term: "Ischemie Tisulară / Trigger Point",
    category: "Neuro-Fiziologie & Reset",
    categoryBadge: "REPERFUZIE SANGUINĂ",
    simpleDef: "Scăderea temporară a alimentării cu sânge și oxigen dintr-un nodul muscular contractat cronic, cauzând durere locală sau iradiată.",
    clinicalDef: "Ocluzia capilară localizată în centrul unei benzi musculare palpabile (focar nociceptiv), ce provoacă criză energetică locală și acumulare de metaboliți acizi (Simons & Travell 1999).",
    therapies: ["Terapie Trigger Point", "Masaj Terapeutic"]
  },
  "proprioceptie": {
    id: "proprioceptie",
    term: "Propriocepție Somatică",
    category: "Neuro-Fiziologie & Reset",
    categoryBadge: "AL 6-LEA SIMȚ",
    simpleDef: "Capacitatea subconștientă a creierului de a ști exact unde se află fiecare parte a corpului în spațiu și câtă tensiune există în mușchi.",
    clinicalDef: "Informarea continuă a sistemului nervos central de către mecano-receptorii fasciali (Ruffini, Pacini, Golgi) privind poziția segmentară, tonul muscular și dinamica articulară.",
    therapies: ["Terapie Bowen", "Osteopatie Structurală"]
  },
  "kinesiofobie": {
    id: "kinesiofobie",
    term: "Kinesiofobie (Frica de Mișcare)",
    category: "Somatopedagogie & Reset",
    categoryBadge: "REPROGRAMARE SOMATICĂ",
    simpleDef: "Frica subconștientă de a face anumite mișcări de teama de a nu declanșa din nou durerea veche din spate sau gât.",
    clinicalDef: "Stare reflexă de hiper-vigilență nociceptivă în care sistemul nervos autonom anticipează micro-traumatisme și blochează mișcarea prin rigidizare musculară defensivă.",
    therapies: ["Terapie Bowen", "Masaj Terapeutic"]
  },
  "tonus-vagal": {
    id: "tonus-vagal",
    term: "Tonus Vagal / Ramura Vagală Ventrală",
    category: "Sistem Autonom Vegetativ",
    categoryBadge: "REGENERARE PARASIMPATICĂ",
    simpleDef: "Comutatorul natural al corpului care oprește starea de stres și activează vindecarea, digestia și starea de calm profund.",
    clinicalDef: "Activitatea funcțională a nervului vag (Cranian X) ce controlează variabilitatea ritmului cardiac (HRV) și induce dominanță parasimpatică de siguranță tisulară (Porges Polyvagal Theory 2011).",
    therapies: ["Terapie Bowen", "Osteopatie Viscerală"]
  },
  "pterigoizi": {
    id: "pterigoizi",
    term: "Mușchi Pterigoizi (ATM)",
    category: "Biomecanică & Articulații",
    categoryBadge: "TRACT ATM & MANDIBULĂ",
    simpleDef: "Mușchii profunzi din spatele obrajilor care controlează mestecatul și mișcările articulare ale mandibulei.",
    clinicalDef: "Mușchi masticatori (Pterigoideus lateralis și medialis) vulnerabili la spasme ischemice în caz de scrâșnit din dinți (bruxism) și disfuncții temporo-mandibulare.",
    therapies: ["Terapie Trigger Point", "Manipulare Miofascială"]
  },
  "suboccipitali": {
    id: "suboccipitali",
    term: "Mușchi Suboccipitali",
    category: "Biomecanică & Articulații",
    categoryBadge: "BAZĂ CRANIU",
    simpleDef: "Grupul de mușchi mici de la ceafă (baza craniului) care susțin capul și pot provoca dureri de cap când sunt foarte tensionați.",
    clinicalDef: "Set de patru perechi de mușchi paravertebrali profunzi (Rectus capitis & Obliquus capitis) bogat inervați cu proprioceptori, cauză primară pentru cefaleea cervicogenă.",
    therapies: ["Terapie Trigger Point", "Tok Sen", "Osteopatie Structurală"]
  },
  "viscerosomatic": {
    id: "viscerosomatic",
    term: "Reflex Viscerosomatic",
    category: "Neuro-Fiziologie & Reset",
    categoryBadge: "CONEXIUNE ABDOMEN-COLOANĂ",
    simpleDef: "Conexiunea prin care o tensiune sau balonare din organele abdominale (colon, stomac) se transmite ca o durere în coloana lombară.",
    clinicalDef: "Arcul reflex prin care aferențele nociceptive de la viscere converg la același nivel medular cu dermatoamele și myotoamele somatice, provocând hipertonie musculară referită (Barral & Mercier 2005).",
    therapies: ["Osteopatie Viscerală", "Terapie Bowen"]
  },
  "bruxism": {
    id: "bruxism",
    term: "Bruxism (Scrâșnit din Dinți)",
    category: "Biomecanică & Articulații",
    categoryBadge: "OROFACIAL",
    simpleDef: "Strânsul nevoluntar din dinți sau încleștarea fetei în timpul nopții sau în stări de stres intens.",
    clinicalDef: "Activitate parafuncțională repetitivă a mușchilor maseteri și pterigoizi manifestată prin încleștarea sau frecarea arcadelor dentare, asociată adesea cu micro-tensiuni cervicale.",
    therapies: ["Terapie Trigger Point", "Osteopatie Craniană & Viscerală"]
  },
  "hialuronan": {
    id: "hialuronan",
    term: "Hialuronan (Lubrifiant Fascial)",
    category: "Biomateriale & Fasciă",
    categoryBadge: "LUBRIFIERE INTERFASCIALĂ",
    simpleDef: "Uleiul natural al corpului care permite straturilor de fasciă să alunece lin unele peste altele fără să se lipească.",
    clinicalDef: "Glicozaminoglican nesulfatat de mare masă moleculară secretat de fasciocite, ce asigură proprietăți viscoelastice și glisare optimă între straturile de aponevroză (Stecco 2011).",
    therapies: ["Manipulare Miofascială", "Masaj Terapeutic"]
  },
  "periost": {
    id: "periost",
    term: "Periost & Vibrație Periostală",
    category: "Biomecanică & Articulații",
    categoryBadge: "STRAT MEMBRANAR OSOS",
    simpleDef: "Membrana ultrasensibilă care îmbracă oasele și care răspunde excepțional la vibrațiile ritmice blânde de lemn dăltuit (Tok Sen).",
    clinicalDef: "Țesut conjunctiv fibros puternic vascularizat și inervat ce acoperă corticala osoasă. Preluarea vibrațiilor de frecvență joasă declanșează reflexe de inhibiție miotatică profundă.",
    therapies: ["Tok Sen", "Osteopatie Structurală"]
  }
};

/**
 * Initialize Popover Engine
 */
function initHarraGlosarPopover() {
  let activePopover = null;

  // Global click listener to close popovers on click outside
  document.addEventListener('click', (e) => {
    if (activePopover && !activePopover.contains(e.target) && !e.target.classList.contains('harra-glosar-term')) {
      closeActivePopover();
    }
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeActivePopover();
  });

  function closeActivePopover() {
    if (activePopover) {
      activePopover.classList.remove('active');
      setTimeout(() => {
        if (activePopover && activePopover.parentNode) {
          activePopover.parentNode.removeChild(activePopover);
        }
        activePopover = null;
      }, 150);
    }
  }

  // Attach popover events to elements with .harra-glosar-term
  const termElements = document.querySelectorAll('.harra-glosar-term');
  termElements.forEach(el => {
    const termKey = el.getAttribute('data-term');
    const data = HARRA_GLOSAR_DATA[termKey];
    if (!data) return;

    // Add visual indicator if not present
    if (!el.querySelector('.glosar-icon-hint')) {
      const hint = document.createElement('i');
      hint.className = 'fa-solid fa-circle-question glosar-icon-hint';
      hint.style.cssText = 'font-size: 0.72em; margin-left: 3px; color: #C4694B; opacity: 0.85;';
      el.appendChild(hint);
    }

    const showPopover = (e) => {
      e.stopPropagation();
      if (activePopover && activePopover.getAttribute('data-for-term') === termKey) return;
      closeActivePopover();

      const popover = document.createElement('div');
      popover.className = 'harra-popover-card';
      popover.setAttribute('data-for-term', termKey);
      popover.innerHTML = `
        <div class="popover-header">
          <span class="popover-badge">${data.categoryBadge}</span>
          <button type="button" class="popover-close-btn" aria-label="Închide">&times;</button>
        </div>
        <h4 class="popover-title">${data.term}</h4>
        <div class="popover-body">
          <p class="popover-simple-def"><strong>💡 Pe înțelesul tău:</strong> ${data.simpleDef}</p>
          <p class="popover-clinical-def"><strong>🔬 Mecanism clinic:</strong> ${data.clinicalDef}</p>
        </div>
        <div class="popover-footer">
          <a href="glosar.html#${data.id}" class="popover-link">
            Află mai multe în Glosarul Medical <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      `;

      document.body.appendChild(popover);
      activePopover = popover;

      // Position logic
      const rect = el.getBoundingClientRect();
      const popoverRect = popover.getBoundingClientRect();

      let top = rect.bottom + window.scrollY + 10;
      let left = rect.left + window.scrollX + (rect.width / 2) - (popoverRect.width / 2);

      // Boundary check desktop
      if (left < 15) left = 15;
      if (left + popoverRect.width > window.innerWidth - 15) {
        left = window.innerWidth - popoverRect.width - 15;
      }

      // If rendering below goes offscreen, place above
      if (rect.bottom + popoverRect.height + 20 > window.innerHeight) {
        top = rect.top + window.scrollY - popoverRect.height - 10;
      }

      popover.style.top = `${top}px`;
      popover.style.left = `${left}px`;

      requestAnimationFrame(() => {
        popover.classList.add('active');
      });

      // Close button inside popover
      const closeBtn = popover.querySelector('.popover-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          closeActivePopover();
        });
      }
    };

    el.addEventListener('mouseenter', showPopover);
    el.addEventListener('click', showPopover);
  });
}

// Auto init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initHarraGlosarPopover();
});
