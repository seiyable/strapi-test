'use strict';

/**
 * Activityitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Activityitem`.
 */

module.exports = {

  /**
   * Retrieve activityitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.activityitem.search(ctx.query);
    } else {
      return strapi.services.activityitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a activityitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.activityitem.fetch(ctx.params);
  },

  /**
   * Count activityitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.activityitem.count(ctx.query);
  },

  /**
   * Create a/an activityitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.activityitem.add(ctx.request.body);
  },

  /**
   * Update a/an activityitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.activityitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an activityitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.activityitem.remove(ctx.params);
  }
};
