'use strict';

/**
 * Kiosk.js controller
 *
 * @description: A set of functions called "actions" for managing `Kiosk`.
 */

module.exports = {

  /**
   * Retrieve kiosk records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kiosk.search(ctx.query);
    } else {
      return strapi.services.kiosk.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kiosk record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.kiosk.fetch(ctx.params);
  },

  /**
   * Count kiosk records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kiosk.count(ctx.query);
  },

  /**
   * Create a/an kiosk record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kiosk.add(ctx.request.body);
  },

  /**
   * Update a/an kiosk record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kiosk.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kiosk record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kiosk.remove(ctx.params);
  }
};
