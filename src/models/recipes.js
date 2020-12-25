const db = require("../config/mySQL");

module.exports = {
  addRecipes: (insertBody) => {

    return new Promise((resolve, reject) => {
      const postQueryString = "INSERT INTO recipes SET ?";
      db.query(postQueryString, insertBody, (err, data) => {
        
        console.log(data);
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getAllRecipe: () => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT * FROM recipes`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getSingleRecipe: (params) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT * FROM recipes WHERE id_recipe = ${params}`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteRecipes: (params) => {
    return new Promise((resolve, reject) => {
      const queryString = "DELETE FROM recipes WHERE id_recipe = ?";
      db.query(queryString, [params], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteImages: (id) => {
    return new Promise((resolve, reject) => {
      const queryStr = `SELECT recipe_img FROM recipes WHERE id_recipe = ?`
      db.query(queryStr, id, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject({
            status: 500,
            message: `Encountered error`,
            details: err
          })
        }
      })
    })
  },
  deleteVideos: (id) => {
    return new Promise((resolve, reject) => {
      const queryStr = `SELECT recipe_video FROM recipes WHERE id_recipe = ?`
      db.query(queryStr, id, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject({
            status: 500,
            message: `Encountered error`,
            details: err
          })
        }
      })
    })
  },
  updateRecipes: (req, params) => {
    return new Promise((resolve, reject) => {     
      const queryString = "UPDATE recipes SET ? WHERE id_recipe = " + params;
      
      db.query(queryString, req, (err, data) => {
        if (!err) {
          resolve(
            data
          //   {
          //   status:200,
          //   msg: `Recipe updated`,
          //   data
          // }
          );
        } else {
          reject(
            err
          //   {
          //   status:500,
          //   err
          // }
          );
        }
      });
    });
  },
};
