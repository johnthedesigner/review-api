module.exports = function(Thing) {
  Thing.observe("loaded", function(ctx, next) {
    if (ctx.instance) {
      // TODO: The averageRating property is only showing up for
      //       GET /reviews, not GET /reviews/:id

      let sum = 0; // variable to store sum of all ratings

      Thing.app.models.Review.find(
        {
          where: {
            thingId: ctx.instance.id
          },
          fields: {
            rating: true
          }
        },
        (error, reviews) => {
          if (error) return next(error);
          if (reviews.length) {
            reviews.forEach(function(review) {
              sum += review.rating;
            });
            ctx.instance.averageRating = sum / reviews.length;
          }
          return next();
        }
      );
    } else {
      return next();
    }
  });
};
