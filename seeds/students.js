exports.seed = function(knex, Promise) {
  return Promise.join(
    knex("students").del(),
    knex("students").insert({
      first_name: "Johnny",
      last_name: "Appleseed"
    })
  )
}
