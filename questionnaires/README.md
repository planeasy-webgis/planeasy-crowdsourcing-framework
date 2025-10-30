#
<div align="left">
<br/>
  <table border="0" cellpadding="0" cellspacing="0" style="border:1px solid transparent;">
    <tr style="border:1px solid transparent;">
      <td style="border:1px solid transparent; vertical-align: middle; padding-right: 16px;">
        <img src="https://github.com/planeasy-webgis.png" width="80" alt="PlanEasy logo">
      </td>
      <td style="border:1px solid transparent; vertical-align: middle;">
        <h1 style="margin: 0; padding: 0;">PlanEasy Crowdsourcing Framework</h1>
        <p><strong>Structured and Versioned Questionnaires</strong></p>
      </td>
    </tr>
  </table>
</div>

---

The **PlanEasy Questionnaires** repository contains structured and versioned research questionnaires  
used within participatory, behavioural, and mobility studies.  

It forms part of the **PlanEasy Crowdsourcing Framework**,  
providing standardized survey instruments designed for **transparency**, **interoperability**,  
and **scientific reproducibility**.

All questionnaires follow a shared JSON structure to ensure compatibility  
across web dashboards, mobile apps, and research data pipelines.

> For information about how collected data are stored and managed, see  
> [Unified Data Architecture – PlanEasy Crowdsourcing System](../docs/DATA_ARCHITECTURE.md).

---

## 📚 Repository Structure

| Folder | Description |
|---------|-------------|
| [`theBIKEnet/`](theBIKEnet/) | Questionnaires from the *theBIKEnet – Cycling and Micromobility Research* project, developed in collaboration with Moving Projects Srl and Sapienza University of Rome (DICEA). |
| [`no_project/`](no_project/) | Generic, reusable questionnaires not linked to a specific project. |

Each folder contains version-controlled JSON files defining survey instruments,  
including metadata, sections, and question schemas.

---

## 🧠 About PlanEasy Questionnaires

The PlanEasy Questionnaires repository provides:

- a **JSON-based open structure** for defining research questionnaires;  
- support for **versioning**, **multilingual content**, and **modular composition**;  
- seamless **interoperability** with the PlanEasy Crowdsourcing System;  
- adherence to **FAIR data principles** (*Findable, Accessible, Interoperable, Reusable*).  

Each questionnaire includes:

| Field | Description |
|--------|-------------|
| `questionnaire_id` | Unique identifier of the survey instrument |
| `version` | Version tag for reproducibility |
| `language` | ISO language code of the questionnaire |
| `meta` | Metadata about project, campaign, or topic |
| `sections` | Array of question groups and definitions |

---

## 🌐 Example of Direct Access

Each questionnaire can be accessed directly as a raw JSON file, for example:  
`https://raw.githubusercontent.com/planeasy-crowdsourcing-framework/main/questionnaires/theBIKEnet/theBIKEnet_profile.json`

These files can be integrated into applications, dashboards, or analytical workflows  
to support reproducible and participatory research.

---

## 🔐 Transparency and Data Protection

All questionnaires are designed according to the **PlanEasy Privacy and Consent Guidelines**,  
available in the [documentation folder](../docs/PRIVACY_GUIDELINES.md).

Data collection based on these questionnaires is:

- **voluntary and anonymous**,  
- fully **GDPR-compliant** (*Article 89 – scientific research*),  
- and managed following **privacy-by-design** principles.

---

## 🧩 Interoperability and FAIR Principles

PlanEasy Questionnaires adhere to the **FAIR Data Principles**:

| Principle | Description |
|------------|-------------|
| **Findable** | Each questionnaire has a unique ID and version for traceability. |
| **Accessible** | Documentation and JSON schemas are publicly available. |
| **Interoperable** | Structured for compatibility with the PlanEasy data architecture. |
| **Reusable** | Metadata ensure reproducibility and long-term accessibility. |

---

## 📄 License and Contact

**License:** [CC BY-NC 4.0](https://creativecommons.org/licenses/by/4.0/) —  
You may share and adapt this material with appropriate credit for non-commercial use.

---
