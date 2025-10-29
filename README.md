<div align="left">
<br/>
  <table border="0" cellpadding="0" cellspacing="0" style="border:1px solid transparent;">
    <tr style="border:1px solid transparent;">
      <td style="border:1px solid transparent; vertical-align: middle; padding-right: 16px;">
        <img src="https://github.com/planeasy-webgis.png" width="80" alt="PlanEasy logo">
      </td>
      <td style="border:1px solid transparent; vertical-align: middle;">
        <h1 style="margin: 0; padding: 0;">PlanEasy Crowdsourcing Framework</h1>
        <p><strong>Unified Data Architecture and Privacy Model for Participatory Research</strong></p>
      </td>
    </tr>
  </table>
</div>

---

## 🧭 Overview

The **PlanEasy Crowdsourcing Framework** is part of the **PlanEasy WebGIS ecosystem**,  
a research and development environment for participatory mapping, mobility analysis, and citizen science.

This repository defines the **data architecture**, **privacy model**, and **FAIR-compliant standards**  
used across all PlanEasy-based research projects — providing a transparent and interoperable foundation  
for collecting, managing, and sharing crowdsourced information.

> 🧩 This framework does **not** include source code or operational databases.  
> It provides **open documentation and data schemas** to ensure transparency, GDPR compliance, and reproducibility.

---

## ⚙️ How It Works

The **PlanEasy Crowdsourcing Framework** provides a standardized workflow for research teams, public bodies,  
and organizations wishing to collect participatory data in a compliant and reproducible way.

1. **Prepare your questionnaire**  
   - Use the **PlanEasy Questionnaire Builder** to design your survey.  
   - Follow the structure of existing schemas (see the [PlanEasy Questionnaires Repository](https://github.com/planeasy-questionnaires)).  
   - Export your questionnaire as a JSON file with version and metadata.

2. **Configure your database**  
   - Your team creates and manages its own **Firestore** **or** **MongoDB** instance.  
   - The schema **must** follow [`docs/DATA_ARCHITECTURE.md`](docs/DATA_ARCHITECTURE.md).  
   - PlanEasy provides configuration guidance and validation checks for compatibility.  
   - All responses are stored **in pseudonymized form**, aligned with GDPR and FAIR.

3. **Distribute your survey link**  
   - PlanEasy provides a **dedicated web or mobile URL** for each questionnaire.  
   - The link targets your database index via query parameters — **PlanEasy does not store your project’s data**.  
   - Participants use this interface; responses are written **directly to your database**.

4. **Access and analyze your data**  
   - Data can be queried directly from Firestore or exported to your research database (e.g. MongoDB).  
   - All timestamps, versions, and identifiers are traceable for reproducibility and open data publication.

> The goal is to make participatory research **modular, ethical, and ready-to-use**,  
> without requiring custom backend development.

---

## 🧱 Repository Structure

| Path | Description |
|------|--------------|
| [`docs/PRIVACY_GUIDELINES.md`](docs/PRIVACY_GUIDELINES.md) | Explains how the PlanEasy Crowdsourcing System collects, uses, and protects participant data. |
| [`docs/DATA_ARCHITECTURE.md`](docs/DATA_ARCHITECTURE.md) | Defines the unified data model and interoperability logic across Local, Firestore, and MongoDB environments. |
| [`README.md`](README.md) | This file — overview, workflow, and documentation index. |

---

## 🌍 Purpose

The PlanEasy Crowdsourcing Framework aims to:
- Provide a **common structure** for participatory and survey-based data collection.  
- Ensure **privacy-by-design** and GDPR compliance in all projects.  
- Support **Open Science** through transparent, version-controlled documentation.  
- Facilitate interoperability between web, mobile, and GIS systems.  

---

## 📘 Documentation

| Document | Description |
|-----------|-------------|
| [**Privacy and Consent Guidelines**](docs/PRIVACY_GUIDELINES.md) | Describes ethical and legal principles for participant data collection and management. |
| [**Unified Data Architecture for Crowdsourced Responses**](docs/DATA_ARCHITECTURE.md) | Defines how survey, spatial, and trip data are structured and stored across different environments. |

> For an example implementation, see [*theBIKEnet* project](https://github.com/MovingProjects/thebikenet).

---

## 🔐 Privacy and Ethics

All projects based on the PlanEasy Crowdsourcing Framework must:
- Follow the **GDPR (Article 89)** framework for scientific research.  
- Apply **pseudonymization** and **data separation** to protect personal information.  
- Share only **anonymized and/or aggregated datasets** for scientific and civic purposes.  

For full details, refer to  
👉 [Privacy and Consent Guidelines](docs/PRIVACY_GUIDELINES.md).

---

## 🧩 Interoperability and FAIR Principles

The PlanEasy Crowdsourcing Framework is designed according to the **FAIR Data Principles**:

| Principle | Description |
|------------|-------------|
| **Findable** | Each dataset and questionnaire has a unique ID and version for traceability. |
| **Accessible** | Documentation and schemas are publicly available under open licenses. |
| **Interoperable** | JSON-based structure compatible with NoSQL and document databases. |
| **Reusable** | Standardized metadata enable reproducibility across research contexts. |

---

## 🏛 Governance and Maintenance

The **PlanEasy Crowdsourcing Framework** is maintained by the **PlanEasy contributors**  
+within the **PlanEasy WebGIS** platform.

See also the [PlanEasy Questionnaires Repository](https://github.com/planeasy-questionnaires).

Any reuse or adaptation must:
- Credit **PlanEasy Authors**.  
- Follow the **FAIR** and **GDPR** principles described in this documentation.

---

## 🧠 Citation

> Bresciani Miristice, L. M., & Gentile, G. (2025). *PlanEasy Crowdsourcing Framework.*  
> [https://github.com/planeasy-crowdsourcing-framework](https://github.com/planeasy-crowdsourcing-framework)

---

## 📄 License

[**CC BY 4.0**](https://creativecommons.org/licenses/by/4.0/) —  
You may share and adapt this material with appropriate credit.

---

## 📬 Contact

📧 **Lory Michelle Bresciani Miristice**  
[lorymichellebrescianimiristice@uniroma1.it](mailto:lorymichellebrescianimiristice@uniroma1.it)

---
