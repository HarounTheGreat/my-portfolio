import React, { useState } from "react";
import { companies } from "../../data/experience";

// CodeIcon: small </> badge rendered left of each role title
function CodeIcon() {
  return (
    <span
      className="exp__role-icon"
      aria-hidden="true"
    >
      {"</>"}
    </span>
  );
}

// ExpandIcon: chevron shown on collapsed roles
function ExpandIcon() {
  return (
    <span
      className="exp__chevron"
      aria-hidden="true"
    >
      &#8964;
    </span>
  );
}

// CollapseIcon: × shown on expanded roles
function CollapseIcon() {
  return (
    <span
      className="exp__chevron exp__chevron--open"
      aria-hidden="true"
    >
      &times;
    </span>
  );
}

// RoleEntry: one accordion row for a single role
function RoleEntry({ role }) {
  const [open, setOpen] = useState(role.defaultOpen);

  return (
    <div className="exp__role">
      {/* Role header row — click to expand/collapse */}
      <button
        className="exp__role-header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`role-body-${role.id}`}
      >
        <CodeIcon />
        <div className="exp__role-meta">
          <span className="exp__role-title">{role.title}</span>
          <span className="exp__role-sub">
            {role.type}
            <span
              className="exp__role-sep"
              aria-hidden="true"
            >
              {" "}
              |{" "}
            </span>
            {role.period}
          </span>
        </div>
        {open ? <CollapseIcon /> : <ExpandIcon />}
      </button>

      {/* Role body — bullets and tags, visible when open */}
      {open && (
        <div
          id={`role-body-${role.id}`}
          className="exp__role-body"
        >
          {role.bullets && role.bullets.length > 0 && (
            <ul className="exp__bullets">
              {role.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="exp__bullet"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {role.tags && role.tags.length > 0 && (
            <div className="exp__tags">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="exp__tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// CompanyRow: avatar + name + active dot + list of role entries
function CompanyRow({ company }) {
  return (
    <div className="exp__company">
      {/* Company header: avatar and name */}
      <div className="exp__company-header">
        <span
          className="exp__avatar"
          style={{ backgroundColor: company.avatarColor }}
          aria-hidden="true"
        >
          {company.initial}
        </span>
        <span className="exp__company-name">{company.name}</span>
        {company.isCurrent && (
          <span
            className="exp__active-dot"
            aria-label="current employer"
          />
        )}
      </div>

      {/* Role entries */}
      <div className="exp__roles">
        {company.roles.map((role) => (
          <RoleEntry
            key={role.id}
            role={role}
          />
        ))}
      </div>
    </div>
  );
}

// Experience: top-level section
function Experience() {
  return (
    <section
      className="exp section"
      id="experience"
    >
      <h2 className="section__title">Experience</h2>
      <div className="exp__list">
        {companies.map((company) => (
          <CompanyRow
            key={company.id}
            company={company}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
