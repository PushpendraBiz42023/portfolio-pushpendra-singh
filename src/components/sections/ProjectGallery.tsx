"use client";

import { useState } from "react";
import { projectCategoryLabels, projectFilters } from "@/lib/content";
import Icon from "@/components/ui/Icon";
import type { Project } from "@/types";

type Filter = (typeof projectFilters)[number]["value"];

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="portfolio_filter" role="group" aria-label="Filter projects by category">
        {projectFilters.map((item) => {
          const count = item.value === "all" ? projects.length : projects.filter((p) => p.category === item.value).length;
          return (
            <button key={item.value} type="button" aria-pressed={filter === item.value} className={filter === item.value ? "active" : undefined} onClick={() => setFilter(item.value)}>
              {item.label} <span className="visually-hidden">({count} projects)</span>
            </button>
          );
        })}
      </div>

      <p className="visually-hidden" role="status" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      {visible.length === 0 ? (
        <p className="empty-state">No projects in this category yet.</p>
      ) : (
        <ul className="row project-list-grid">
          {visible.map((project) => (
            <li key={project.title} className="col-lg-4 col-md-6 col-sm-12">
              <article className="project-card">
                <div className="project-card__body">
                  <p className="project-card__category">{projectCategoryLabels[project.category]}</p>
                  <h3>{project.title}</h3>
                  <p className="project-card__meta">
                    {project.context} · {project.period}
                  </p>
                  <p>{project.summary}</p>
                  <ul className="tag-list" aria-label="Technologies used">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  {project.links.length > 0 && (
                    <div className="project-card__links">
                      {project.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label} <Icon name="external" size={14} />
                          <span className="visually-hidden"> (opens in a new tab)</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
