<div align="left">
<br/>
  <table border="0" cellpadding="0" cellspacing="0" style="border:1px solid transparent;">
    <tr style="border:1px solid transparent;">
      <td style="border:1px solid transparent; vertical-align: middle; padding-right: 16px;">
        <img src="https://github.com/planeasy-webgis.png" width="80" alt="PlanEasy logo">
      </td>
      <td style="border:1px solid transparent; vertical-align: middle;">
        <h1 style="margin: 0; padding: 0;">Privacy and Consent Guidelines – PlanEasy Crowdsourcing System</h1>
      </td>
    </tr>
  </table>
</div>

# 🌍 Privacy and Consent Guidelines
### How the PlanEasy Crowdsourcing System Collects, Uses, and Protects Your Data

The **PlanEasy Crowdsourcing System** is a secure online platform used by researchers and institutions  
to run participatory mapping and citizen science projects.  
It helps people like you share useful observations and experiences about mobility and urban life  
in a safe, transparent, and responsible way.

The **PlanEasy Crowdsourcing System** provides the technical infrastructure — including the web app, database, and mobile tools —  
but **each research project decides which questions to ask, what data to collect, and how to use the results**.  
This means that your answers are always managed by the project team running the specific study,  
following both the **GDPR** and the **ethical research standards** that apply to them.

All projects using the PlanEasy Crowdsourcing System share the same *privacy-by-design* principles:
- Your participation is voluntary and anonymous.  
- Only the minimum information needed for research is collected.  
- Data are securely stored and never used for commercial or marketing purposes.  

This page explains **what type of data may be collected**, **why they are collected**,  
and **how your privacy is protected** when you participate in a PlanEasy-based project.

> For information about how data are structured and securely stored, you can also read  
> [Unified Data Architecture for Crowdsourced Responses](DATA_ARCHITECTURE.md).

---

## 🧭 1. What Data the PlanEasy Crowdsourcing System Collects

The **PlanEasy Crowdsourcing System** only collects information that is genuinely useful for research and analysis —  
never for commercial or marketing purposes.  
Your participation is entirely voluntary, and all responses are stored in anonymous or pseudonymized form.

---

### 📝 Questionnaire Responses

When you take part in a project, you may be invited to answer short questionnaires.  
These are designed for research and planning purposes and may include questions about:

- **Your profile** (age range, education, work situation, household context)  
- **Mobility habits** (how often you walk, cycle, or use public transport)  
- **Perceptions and experiences** (for example, safety, comfort, quality of infrastructure, or past incidents)  
- **Environmental or spatial reports** (e.g., hazards, parking availability, unsafe crossings)

> None of these questions are meant to identify you personally,  
> and you can skip any question you prefer not to answer.

---

### 📍 Spatial and Mobility Data (if you use a mobile app)

If you choose to use a mobile app connected to a PlanEasy project, you can also record  
your movements or add map-based observations, such as:

- **GPS traces of trips** (route, time, and duration)  
- **Trip context** (for example, purpose, weather, or travel mode)  

> GPS data are automatically filtered and anonymized  
> so that locations near your home, workplace, or other sensitive areas are not stored.

---

### ⚙️ Technical Metadata

A small amount of technical information helps the platform run smoothly and avoid errors, such as:

- Device type or browser  
- Operating system and language  
- Submission timestamps  
- Anonymous session or installation identifiers  

> This metadata helps the system work properly and prevents duplicate or invalid submissions.

---

## 💡 2. Why the PlanEasy Crowdsourcing System Collects Data

The information you share through the **PlanEasy Crowdsourcing System** helps researchers and public institutions  
design **better, safer, and more sustainable urban environments**.  
Your contributions make it possible to connect everyday experiences with real urban decision-making.

The data collected through the PlanEasy Crowdsourcing System are used to:

- understand how people move and perceive their city,  
- evaluate the quality, safety, and accessibility of streets and public spaces,  
- identify barriers, opportunities, and areas that need improvement,  
- support participatory design and community dialogue,  
- and share **anonymized and aggregated** findings for education, civic engagement, and scientific research.

> 🧭 In PlanEasy, citizens act as *the eyes of the city* — their collective observations help planners and institutions understand what works and what needs to change.

---

## 🔐 3. How the PlanEasy Crowdsourcing System Protects Your Data

Your privacy and the security of your information are central to how the **PlanEasy Crowdsourcing System** operates.  
All projects using the system follow strict *privacy-by-design* standards —  
the same protection principles apply everywhere the platform is used.

---

### 🔒 Pseudonymization

When you optionally provide your email address at the end of a questionnaire, it is used **only to generate an anonymous participation code**.  
You are identified by a random internal ID or, if you choose to provide an email, by a one-way encrypted version of it.  
Your name or real email address is stored **only for authenticated app users** and is never linked to your survey responses.

#### 🔧 How it works
1. You enter your email (e.g., `alex@example.com`).  
2. The app securely computes:  
   `hash = SHA256(PROJECT_SALT + email.toLowerCase().trim())`
3. Only the resulting hash (e.g., `7d4a8e3f1b2c...`) is stored with your responses.  
4. The plain email is never saved, transmitted, or shared with anyone.

#### 🎯 Why this is done
- To connect your answers across multiple questionnaires (e.g., profile + trip diary)  
- To allow long-term, pseudonymized research on mobility habits  
- To ensure data continuity without revealing your identity  

> Providing an email is **completely optional**.  
> If you skip it, your responses remain fully anonymous.

---

### 🧩 Data Separation

If a project collects any personal contact information (for example, to follow up on your participation),  
it is stored in a separate, protected database and **never connected directly** to your questionnaire or GPS data.  
This separation prevents any link between your identity and the information you provide for research.

---

### 🪶 Transparency

The structure, purpose, and data model of the PlanEasy Crowdsourcing System are fully documented in the  
[PlanEasy Crowdsourcing Framework repository](https://github.com/planeasy-crowdsourcing-framework).  
Researchers and participants can review how data are handled, stored, and anonymized at any time.

---

> The **PlanEasy Crowdsourcing System** applies the same privacy and security standards to all projects,  
> ensuring that your information is always handled safely, responsibly, and in line with research ethics.

---

## 🧾 4. Access Control, Legal and Ethical Context

**Access to pseudonymized data** is limited to the research team responsible for each specific project,  
and only for legitimate scientific and ethical research purposes.  
No external or commercial entities have access to your individual responses.

All data collected through the **PlanEasy Crowdsourcing System** are handled under the  
**EU General Data Protection Regulation (GDPR), Article 89**,  
which governs the processing of personal data for *scientific research purposes*.  

Each project using the platform has its own appointed **data manager**  
responsible for ensuring legal compliance, ethical review, and data protection measures.

After internal review and verification of complete **anonymization**,  
aggregated or fully anonymous datasets may be **shared publicly** for educational, civic, or scientific use,  
in line with the principles of **Open Science** and **FAIR data management** (Findable, Accessible, Interoperable, Reusable).

Your participation is voluntary.  
You can request the deletion of your data or withdraw from a study at any time  
by contacting the research team running the specific project.

---

## 📬 Contact

For feedback, collaborations, or questions:  
📧 **Lory Michelle Bresciani Miristice** — [lorymichellebrescianimiristice@uniroma1.it](mailto:lorymichellebrescianimiristice@uniroma1.it)  

---

[⬆ Back to documentation index](../README.md)
