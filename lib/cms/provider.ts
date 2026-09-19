import {
  cmsProjects,
  cmsServices,
} from "./index";

import type {
  CMSProject,
  CMSService,
} from "./types";

export interface CMSProvider {
  getServices(): Promise<CMSService[]>;

  getServiceBySlug(
    slug: string,
  ): Promise<CMSService | null>;

  getProjects(): Promise<CMSProject[]>;

  getProjectBySlug(
    slug: string,
  ): Promise<CMSProject | null>;
}

/**
 * Temporary local provider.
 *
 * Currently data comes from local CMS data files.
 * Later this provider can be replaced with a database
 * or external CMS without changing the frontend.
 */
export const localCMSProvider: CMSProvider = {
  async getServices() {
    return cmsServices.filter(
      (service) => service.status === "published",
    );
  },

  async getServiceBySlug(slug) {
    const service = cmsServices.find(
      (item) =>
        item.slug === slug &&
        item.status === "published",
    );

    return service ?? null;
  },

  async getProjects() {
    return cmsProjects.filter(
      (project) => project.status === "published",
    );
  },

  async getProjectBySlug(slug) {
    const project = cmsProjects.find(
      (item) =>
        item.slug === slug &&
        item.status === "published",
    );

    return project ?? null;
  },
};
